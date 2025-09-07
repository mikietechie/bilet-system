# source ./export.sh
# https://openapi-generator.tech/docs/generators/
curl http://localhost:8000/docs-json > swagger.json
# openapi-generator-cli generate -i swagger.json -g typescript-axios -o ./client
openapi-generator-cli generate -i swagger.json -g typescript-axios -o ./../mobile/src/api-client
# docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
#     -i swagger.json \
#     -g typescript-axios \
#     -o ./../mobile/src/api-client
