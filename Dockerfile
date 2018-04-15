FROM mhart/alpine-node

WORKDIR /src
COPY package.json .
RUN npm i
EXPOSE 8000

CMD ["npm", "start"]
