# Use the latest LTS version of Node.js (22)
FROM node:22 AS build

WORKDIR /app

# Copy only package files for faster caching of dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files and build the project
COPY . .
RUN npm run build

# Use NGINX for serving the built files
FROM nginx:alpine

# Copy custom NGINX configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build files to NGINX's html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 8080
EXPOSE 8080

# Run NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
