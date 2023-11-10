FROM node:lts-alpine3.17
COPY . api
WORKDIR /api
EXPOSE 3001:3001
ENV POSTGRES_HOST=progress-postgres
ENV POSTGRES_PORT=5432
ENTRYPOINT [ "node","index.js" ]