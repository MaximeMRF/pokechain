# https://github.com/MaximeMRF/docker-image/blob/main/adonisjs/Dockerfile
MAINTAINER MaximeMRF
# Pull latest NodeJs LTS version with Alpine Linux
# and rename it "base" to re-use it for the next stages
FROM node:16-alpine3.14 AS base
# Make a working directory for your app in the container
WORKDIR /home/app
# Build stage for build
FROM base AS builder
# Copy package and package-lock
COPY package*.json ./
# Install dependencies
RUN npm ci
# Copy all other files to the container
COPY . .
# and build the application
RUN node ace build --production
# Build stage for production
FROM base AS production
# Add a process supervisor and init system
RUN apk add dumb-init
# Copy package and package-lock
COPY package*.json ./
# Install production dependencies
RUN npm ci --production
# Copy files from builder to the new stage
COPY --chown=node:node --from=builder /home/app/build .
# Use a non-root user
USER node
# Expose the port
EXPOSE 3333
# Start the server
CMD [ "dumb-init", "node", "server.js" ]