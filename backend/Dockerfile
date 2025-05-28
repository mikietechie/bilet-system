FROM node:20.19-alpine
WORKDIR /backend
COPY . /backend
RUN npm i
EXPOSE 8000

ENTRYPOINT [ "npm", "start" ]