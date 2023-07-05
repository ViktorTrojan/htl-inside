# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the application files to the container
COPY . .

# Expose the port your application listens on
EXPOSE 6234

# Start the application when the container starts
CMD ["node", "Main.js"]
