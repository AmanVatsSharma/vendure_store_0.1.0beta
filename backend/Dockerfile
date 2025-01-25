FROM node:20-alpine

WORKDIR /app

# Install PostgreSQL client and other dependencies
RUN apk add --no-cache postgresql-client

# Install production dependencies and concurrently
COPY package.json ./
RUN npm install --production pg
RUN npm install concurrently

# Copy pre-built files and necessary assets
COPY dist ./dist
COPY static ./static

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Start both server and worker processes using concurrently
CMD ["npm", "run", "start"]
