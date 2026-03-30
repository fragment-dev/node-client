#!/bin/bash
set -e

# Script to regenerate the test schema GraphQL queries and SDK
# Run this when you update tests/fixtures/test-schema.json

echo "Generating GraphQL queries from test schema..."
yarn exec fragment gen-graphql \
  --path tests/fixtures/test-schema.json \
  --output tests/fixtures/test-schema-queries.graphql

echo "Generating SDK from GraphQL queries..."
yarn fragment-node-client-codegen \
  -i tests/fixtures/test-schema-queries.graphql \
  -o tests/fixtures/generated-test-client.ts

echo "Done! Don't forget to commit the updated files."

