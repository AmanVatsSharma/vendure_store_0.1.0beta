FROM node:20-alpine

WORKDIR /app

# Install only production dependencies
COPY package.json ./
RUN npm install --production

# Copy pre-built files and necessary assets
COPY dist ./dist
COPY static ./static

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Start the Vendure server
CMD ["npm", "run", "start:prod"]
