# Use a lightweight Node.js image as the base
FROM node:alpine

# Install Python3
RUN apk add --no-cache python3 py-pip

# Create a working directory for the application
WORKDIR /app

# Copy your package.json file
COPY package.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port used by your Node.js application (adjust if needed)
EXPOSE 3000

# Set the default command to run your Node.js application (replace with your actual start script)
CMD [ "node", "app.js" ]
