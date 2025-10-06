# Use official Node.js runtime as the build stage base image
# NOTE: 'AS' must match the casing of 'FROM' to satisfy linters (FromAsCasing warning in Coolify)
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (include dev deps needed for Vite/Tailwind build)
# Dev dependencies are only needed in this stage; final image is static assets served by nginx.
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Use nginx to serve the built app
FROM nginx:alpine

# Set runtime environment (not strictly required for static hosting, but explicit is better)
ENV NODE_ENV=production

# Copy the built app from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# (Optional) Basic healthcheck for container orchestrators (Coolify can also define its own)
HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -q -O /dev/null http://localhost || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]