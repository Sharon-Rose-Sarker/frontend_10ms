# 1. Use a lightweight Node image
FROM node:18-alpine AS deps

# 2. Set working directory
WORKDIR /app

# 3. Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# 4. Copy all files
COPY . .

# 5. Build your Next.js app
RUN npm run build

# 6. Use a second lightweight image to run it
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy only what's needed
COPY --from=deps /app ./

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
