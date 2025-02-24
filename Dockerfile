FROM node:lts-alpine AS deps

WORKDIR /app

COPY package*.json ./

RUN npm ci

FROM node:lts-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

# Build the Next.js app
RUN npm run build

FROM node:lts-alpine AS prod
WORKDIR /app

# Set NODE_ENV to production
ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]