FROM node:16.15-alpine

WORKDIR /app

# Add node binaries to $PATH for libraries
ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV production

# Thin-install app dependencies
COPY package.json package-lock.json ./

# Permission fix
RUN npm config set unsafe-perm true

RUN npm install --silent
# RUN npm install

# Add app; non-prod files still useful for local dev
COPY . ./

RUN chown -LR node /app/node_modules

USER node

# EXPOSE 80

ENTRYPOINT ["/app/docker-entrypoint.sh"]
CMD ["npm", "run", "serve"]
