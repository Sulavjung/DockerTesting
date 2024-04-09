# Use Ubuntu 22.04 as the base image
FROM ubuntu:22.04

# Install required packages
RUN apt-get update \
    && apt-get install -y curl

# Install Node.js using NVM
ENV NODE_VERSION=20.11.1
ENV NVM_DIR=/root/.nvm
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash \
    && . "$NVM_DIR/nvm.sh" \
    && nvm install ${NODE_VERSION} \
    && nvm use v${NODE_VERSION} \
    && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

# Check Node.js and npm versions
RUN node --version \
    && npm --version

# Create app directory
WORKDIR /app

# Copy only package.json and package-lock.json to install dependencies
COPY package*.json ./

# Use cache mount to speed up installation of existing dependencies
RUN --mount=type=cache,target=/root/.npm \
    npm set cache /root/.npm && \
    npm install

# Copy the rest of the application code
##COPY . . #Not copying other code here as I want to bind the volume. 

# Expose ports (if needed)
EXPOSE 3002 3001

# Specify the command to run the application
#CMD ["npm", "run", "start"]
