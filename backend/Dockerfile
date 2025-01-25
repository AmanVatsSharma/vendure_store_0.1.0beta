FROM node:20

WORKDIR /usr/src/app

# Install build dependencies
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    unzip \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Optional: Install Bun if necessary
# If not using Bun, you can comment out or remove these lines
 RUN curl -fsSL https://bun.sh/install | bash

# Copy package files and install dependencies
COPY package.json ./
COPY bun.lock ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript sources
RUN npm run build

# Set the PORT environment variable based on Railway's requirements
ENV PORT=3000

# Expose the port Vendure will run on
EXPOSE 3000

# Start the Vendure server
CMD ["npm", "run", "start"]
