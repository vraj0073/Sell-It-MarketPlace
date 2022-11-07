FROM node:16-alpine 
WORKDIR /app
RUN ls -a
COPY . .
RUN npm install
EXPOSE 8080
RUN npm run build

FROM node:16-alpine
COPY --from=0 /app/build /app/build
RUN npm install -g serve
CMD [ "serve", "-s", "build" ]