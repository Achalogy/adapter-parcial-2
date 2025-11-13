FROM oven/bun:latest

WORKDIR /app
COPY package.json bun.lockb* ./
RUN bun install --production

COPY . .

RUN apt-get update -y && apt-get install -y openssl
RUN bun x prisma generate

ARG DATABASE_URL

RUN echo "DATABASE_URL=${DATABASE_URL}" >> .env 

CMD ["bun", "run", "start"]