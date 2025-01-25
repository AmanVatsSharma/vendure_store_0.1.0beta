ARG NODE_VER=20
FROM node:$NODE_VER-alpine AS base

WORKDIR /app

# Install dependencies only
COPY package.json package-lock.json* ./
RUN npm ci --production

# Copy pre-built files
COPY .next ./.next
COPY public ./public
COPY node_modules ./node_modules

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]
