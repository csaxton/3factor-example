FROM node:14.16-alpine3.13

COPY . /services

WORKDIR /services

EXPOSE 8081

RUN yarn install

ENTRYPOINT [ "node" ]
CMD ["localDevelopment.js"]
