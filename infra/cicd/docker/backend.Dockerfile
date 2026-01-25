# Example production build for a backend Node API
FROM node:20-alpine
WORKDIR /app
COPY backend/package*.json ./
RUN npm ci --only=production
COPY backend ./
EXPOSE 3000
CMD ["node", "server.js"]
