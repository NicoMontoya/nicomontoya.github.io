# Use Node.js LTS (Long Term Support) version
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the app
RUN npm run build

# Install serve to run the built app
RUN npm install -g serve

# Build app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "dist", "-l", "3000"]
