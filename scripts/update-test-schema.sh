#!/bin/bash
set -e

# Script to regenerate the test schema GraphQL queries and SDK
# Run this when you update tests/fixtures/test-schema.json

echo "Generating GraphQL queries from test schema..."
fragment gen-graphql \
  --path tests/fixtures/test-schema.json \
  --output tests/fixtures/test-schema-queries.graphql

echo "Generating SDK from GraphQL queries..."
yarn fragment-node-client-codegen \
  -i tests/fixtures/test-schema-queries.graphql \
  -o tests/fixtures/generated-test-client.ts

# tests/template-schema/ is vendored from fragment-dev/graphql-queries. Its
# .graphql files are generated there by the Fragment CLI and copied in as-is, so
# they are never regenerated here — only the clients built from them are.
echo "Generating SDK from the template schema queries..."
yarn fragment-node-client-codegen \
  -i tests/template-schema/queries.graphql \
  -o tests/fixtures/generated-template-client.ts

yarn fragment-node-client-codegen \
  -i tests/template-schema/queries.runtime-args.graphql \
  -o tests/fixtures/generated-template-runtime-args-client.ts

# Hand-written operations covering shapes the CLI does not generate.
echo "Generating SDK from the edge case queries..."
yarn fragment-node-client-codegen \
  -i tests/fixtures/edge-case-queries.graphql \
  -o tests/fixtures/generated-edge-case-client.ts

echo "Done! Don't forget to commit the updated files."
