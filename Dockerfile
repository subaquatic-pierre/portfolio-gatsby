FROM node:20-slim as builder

WORKDIR /app
RUN chown node:node /app
RUN npm install gatsby-cli -g

USER node

ADD package.json /tmp/package.json
RUN cd /tmp && npm install --force
RUN mkdir -p /app && cp -a /tmp/node_modules /app/
ENV GATSBY_TELEMETRY_DISABLED=1

RUN cd /app

COPY --chown=node:node . .
RUN npm run build

FROM node:20-alpine
USER node
ENV GATSBY_TELEMETRY_DISABLED=1
COPY --from=builder --chown=node:node /app/ /app/
RUN rm -rf ./src
WORKDIR /app

EXPOSE 9000
CMD [ "node_modules/.bin/gatsby","serve","-H","0.0.0.0","-p","9000" ]