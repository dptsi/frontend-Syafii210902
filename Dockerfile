FROM node:alpine

# Setup workdir
WORKDIR /var/www/html/

# Copy source code
COPY src /var/www/html/  
RUN cp .env.local.example .env

RUN npm install

# Expose the port is reachable on
EXPOSE 3000

# Set up a default command
CMD [ "yarn","dev" ]