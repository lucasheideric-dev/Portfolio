# Etapa 1: Construção
FROM node:18 AS builder

WORKDIR /app

# Copiar apenas os arquivos essenciais primeiro para cache eficiente
COPY package.json package-lock.json ./

# Instalar dependências do projeto
RUN npm install --frozen-lockfile

# Copiar restante dos arquivos
COPY . .

RUN chmod +x node_modules/.bin/astro

# Rodar o build
RUN npm run build

# Etapa 2: Produção (Imagem menor)
FROM node:18

WORKDIR /app

# Copiar arquivos da etapa de build
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 4321

CMD ["npm", "run", "preview"]
