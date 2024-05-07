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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLClient = exports.gql = exports.createFragmentClient = void 0;
__exportStar(require("./errors.js"), exports);
var client_js_1 = require("./client.js");
Object.defineProperty(exports, "createFragmentClient", { enumerable: true, get: function () { return client_js_1.createFragmentClient; } });
var graphql_tag_1 = require("graphql-tag");
Object.defineProperty(exports, "gql", { enumerable: true, get: function () { return graphql_tag_1.gql; } });
var graphql_request_1 = require("graphql-request");
Object.defineProperty(exports, "GraphQLClient", { enumerable: true, get: function () { return graphql_request_1.GraphQLClient; } });
