FROM node:14.16-alpine3.13

COPY . /services

WORKDIR /services

EXPOSE 3000

RUN yarn install

ENTRYPOINT [ "yarn" ]
CMD ["start"]
