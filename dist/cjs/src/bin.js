#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const yargs_1 = __importDefault(require("yargs"));
const path = __importStar(require("path"));
const cli_1 = require("@graphql-codegen/cli");
const typedBatchEntries_js_1 = require("./typedBatchEntries.js");
const argv = (0, yargs_1.default)(process.argv.slice(2))
    .options({
    outputFilename: {
        type: "string",
        alias: "o",
        description: "Output filename",
        default: "generated.ts",
    },
    input: {
        type: "string",
        alias: "i",
        description: "Input filename",
        demandOption: true,
    },
})
    .help()
    .parseSync();
if (path.extname(argv.outputFilename) !== ".ts") {
    throw new Error(`Output filename must have a .ts extension. You provided ${argv.outputFilename}`);
}
const allowedInputExtensions = [".graphql", ".gql", ".ts"];
if (!allowedInputExtensions.includes(path.extname(argv.input))) {
    throw new Error(`Input filename must have a .graphql, .gql, or .ts extension. You provided ${path.extname(argv.input) || "<none>"}`);
}
/**
 * Runs codegen for one input and writes the client, with the typed batch entry
 * payloads appended.
 *
 * The payloads are derived from the same operations the plugins run over, so a
 * document transform hands them (and the schema) to `sources` instead of loading
 * either a second time. The transform leaves the documents themselves alone.
 */
const generateClient = (_a) => __awaiter(void 0, [_a], void 0, function* ({ input, outputFilename, }) {
    const sources = [];
    const [fileOutput] = yield (0, cli_1.generate)({
        schema: "https://api.us-west-2.fragment.dev/schema.graphql",
        documents: input,
        config: {
            scalars: {
                AlphaNumericString: "string",
                Date: "string",
                DateTime: "string",
                Int64: "string",
                Int96: "string",
                JSON: "Record<string, unknown>",
                JSONObject: "Record<string, unknown>",
                LastMoment: "string",
                ParameterizedString: "string",
                Period: "string",
                SafeString: "string",
                UTCOffset: "string",
            },
            gqlImport: "@fragment-dev/node-client#gql",
        },
        generates: {
            [path.join(process.cwd(), outputFilename)]: {
                documentTransforms: [
                    {
                        transform: ({ documents, schema }) => {
                            sources.push({
                                documents: documents
                                    .map((document) => document.document)
                                    .filter((document) => !!document),
                                schema,
                            });
                            return documents;
                        },
                    },
                ],
                plugins: [
                    "typescript",
                    "typescript-operations",
                    "typescript-graphql-request",
                    {
                        add: {
                            content: "/* This file is auto-generated by @fragment-dev/node-client. Don't edit it directly. */",
                        },
                    },
                ],
            },
        },
    }, false);
    const output = fileOutput.content.replace(/import .* from 'graphql-request'/g, "import { GraphQLClient, RequestOptions } from '@fragment-dev/node-client'");
    const [source] = sources;
    if (!source) {
        console.warn("[@fragment-dev/node-client] Could not read the input operations, so no typed batch Ledger Entry payloads were generated.");
    }
    const typedBatchEntries = source ? (0, typedBatchEntries_js_1.generateTypedEntryPayloads)(source) : "";
    (0, fs_1.writeFileSync)(fileOutput.filename, typedBatchEntries ? `${output}\n${typedBatchEntries}` : output, "utf-8");
});
generateClient({
    input: argv.input,
    outputFilename: argv.outputFilename,
})
    .then(() => {
    process.exit(0);
})
    .catch((error) => {
    (0, cli_1.cliError)(error);
});
