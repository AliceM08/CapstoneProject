FROM node:latest as build

WORKDIR /usr/src/app

COPY ./ /usr/local/app

RUN npm install

RUN npm run build

FROM nginx:latest

COPY --from=build /usr/local/app/distcapstone-project /usr/share/nginx/html

EXPOSE 80

