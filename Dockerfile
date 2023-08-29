FROM oven/bun as builder

WORKDIR /src

COPY package.json .
COPY bun.lockb .

RUN bun install

COPY . .

RUN bun build --minify --outdir=dist src/index.ts

FROM oven/bun as runner

RUN apt-get update
RUN apt-get install -y curl

WORKDIR /app

COPY --from=builder /src/dist/index.js .

CMD bun run index.js
