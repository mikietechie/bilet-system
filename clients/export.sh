# source ./export.sh
# https://openapi-generator.tech/docs/generators/
curl http://127.0.0.1:8000/docs-json > swagger.json
# openapi-generator-cli generate -i swagger.json -g typescript-axios -o ./client
openapi-generator-cli generate -i swagger.json -g typescript-axios -o ./../mobile/src/api-client
