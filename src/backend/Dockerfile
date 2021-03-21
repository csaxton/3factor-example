FROM node:12.21-alpine3.12

COPY . /services

WORKDIR /services

EXPOSE 8081

RUN yarn install

ENTRYPOINT [ "node" ]
CMD ["localDevelopment.js"]
