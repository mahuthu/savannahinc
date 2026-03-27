# Savannah Frontend Dockerfile
FROM node:20-alpine AS builder

WORKDIR /app

# Enable legacy OpenSSL provider for older react-scripts
ENV NODE_OPTIONS=--openssl-legacy-provider

# Install dependencies
COPY package*.json ./
RUN npm install

# Build the app
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy build files
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
