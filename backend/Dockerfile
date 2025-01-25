FROM oven/bun:1

WORKDIR /usr/src/app

# Install Python and build dependencies
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

COPY package.json ./
COPY bun.lock ./
RUN bun install --production
COPY . .
RUN bun run build

CMD ["bun", "run", "start"]
