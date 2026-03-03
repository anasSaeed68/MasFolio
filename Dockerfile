# Build stage
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build
# EXPOSE 5173

# CMD ["npm", "run", "dev", "--","--host"]
# Production stage
FROM ngnix:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]