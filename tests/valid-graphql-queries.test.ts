import { expect, test } from "vitest";

import { specifiedRules } from "graphql";
import { validateGraphQlDocuments } from "@graphql-tools/utils";
import { loadDocuments, loadSchema } from "@graphql-tools/load";
import { UrlLoader } from "@graphql-tools/url-loader";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";

test("Valid GraphQL queries", async () => {
  const schema = await loadSchema("https://api.us-west-2.fragment.dev/schema.graphql", {
    loaders: [new UrlLoader()],
  });

  const documents = await loadDocuments("src/queries/*.graphql", {
    loaders: [new GraphQLFileLoader()],
  });

  documents.forEach((d) => {
    if (d.document) {
      const errors = validateGraphQlDocuments(
        schema,
        [d.document],
        [...specifiedRules]
      );
      expect(errors).toHaveLength(0);
    }
  });
});
