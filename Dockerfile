FROM node:12.19.0-alpine

ARG MONGO_CON_STRING

ENV MONGO_CON_STRING=$MONGO_CON_STRING

# update and install dependency
RUN apk add yarn

WORKDIR /app
ADD ./ /app

# Add ci dep
#RUN yarn add codecov

# install package
#RUN yarn install --frozen-lockfile
#RUN yarn build

# expose 8000 on container
EXPOSE 8000

# start command
CMD [ "yarn", "start:prod" ]
