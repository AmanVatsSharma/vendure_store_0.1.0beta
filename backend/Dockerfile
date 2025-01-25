FROM node:20

WORKDIR /usr/src/app

# Install Python and build dependencies
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    unzip \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

COPY package.json ./
COPY bun.lock ./
RUN npm install
COPY . .
RUN npm run build

CMD ["npm", "run", "start"]
