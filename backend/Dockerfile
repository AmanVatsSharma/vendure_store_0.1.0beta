FROM node:20-alpine

WORKDIR /app

# Install PostgreSQL client and other dependencies
RUN apk add --no-cache postgresql-client

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies)
RUN npm install

# Copy source code
COPY . .

ENV NODE_ENV=development
ENV PORT=3000
EXPOSE 3000

# Start in development mode
CMD ["npm", "run", "dev"]
