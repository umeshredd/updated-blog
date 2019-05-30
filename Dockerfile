# ---- Base Node ----
FROM alpine:3.5 AS base
ARG URL
ENV an_env_var=$URL
# install node
RUN apk add --no-cache nodejs-current tini
# set working directory
WORKDIR /home/niveus/blog
# Set tini as entrypoint
ENTRYPOINT ["/sbin/tini", "--"]
# copy project file
COPY package.json .
 
# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN npm set progress=false && npm config set depth 0
# install ALL node_modules, including 'devDependencies'
RUN npm install && npm install express && npm install path
 
#
# ---- Release ----
FROM base AS release
# copy production node_modules
COPY --from=dependencies home/niveus/blog/node_modules ./node_modules
# copy app sources
COPY . .
# expose port and define CMD
EXPOSE 8080
CMD node index.js
