# Assuming you name the image posthuset-dishes, to run do
# docker run -d -p 80:8080 posthuset-dishes

FROM node:9.8-alpine

RUN mkdir /app

WORKDIR "/app"

COPY ./package-lock.json .
COPY ./package.json .

RUN npm install

COPY index.js .

ENTRYPOINT ["node", "index.js"]
