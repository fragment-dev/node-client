#!/bin/bash
set -e

# Script to regenerate the test schema GraphQL queries and SDK
# Run this when you update tests/fixtures/test-schema.json

echo "Generating GraphQL queries from test schema..."
fragment gen-graphql \
  --path tests/fixtures/test-schema.json \
  --output tests/fixtures/test-schema-queries.graphql

echo "Adding typeVersion to GraphQL query response fields..."
# Fragment CLI doesn't include typeVersion in response by default, so we add it
sed -i.bak 's/        type$/        type\n        typeVersion/g' tests/fixtures/test-schema-queries.graphql
rm tests/fixtures/test-schema-queries.graphql.bak

echo "Generating SDK from GraphQL queries..."
yarn fragment-node-client-codegen \
  -i tests/fixtures/test-schema-queries.graphql \
  -o tests/fixtures/generated-test-client.ts

echo "Done! Don't forget to commit the updated files."

