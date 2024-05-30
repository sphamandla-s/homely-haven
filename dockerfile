# Stage 1: Build the Angular app
FROM node:20.11.1-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Angular app in production mode
RUN npm run build --configuration=production

# Stage 2: Serve the Angular app with Nginx
FROM nginx:stable

# Copy custom Nginx configuration file
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built Angular app from the previous stage to the Nginx html directory
COPY --from=build /app/dist/homely-haven/browser /usr/share/nginx/html


# Check the files copied to the Nginx html directory
RUN ls -la /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 8083

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
