FROM oven/bun:1

WORKDIR /usr/src/app

COPY package.json ./
COPY bun.lock ./
RUN bun install --production
COPY . .
RUN bun run build

CMD ["bun", "run", "start"]
