FROM node:12.21-alpine3.12

COPY . /services

WORKDIR /services

EXPOSE 3000

RUN yarn install

ENTRYPOINT [ "yarn" ]
CMD ["start"]