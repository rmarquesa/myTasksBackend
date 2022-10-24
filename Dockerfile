# build environment
FROM node:16 as appbuild
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# production environment
FROM node:16-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY --from=appbuild /app/build ./build
CMD [ "node", "build/index.js" ]