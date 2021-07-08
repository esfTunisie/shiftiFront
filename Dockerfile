FROM node:14 as build
WORKDIR /app
COPY package.json .
RUN npm install --silent
COPY . .
RUN npm run build
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
