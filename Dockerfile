   FROM node
   WORKDIR /app
   COPY . /app
   RUN yarn
   EXPOSE 4000
   CMD ["yarn","start:dev"]

