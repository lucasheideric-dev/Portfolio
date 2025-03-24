# Etapa 1: Construção
FROM node:18 AS builder

# Criar diretório de trabalho
WORKDIR /app

# Copiar apenas os arquivos essenciais primeiro para aproveitar o cache
COPY package.json package-lock.json ./

# Instalar apenas dependências
RUN npm install --frozen-lockfile

# Copiar o restante do código após instalar dependências
COPY . .

# Rodar o build
RUN npm run build

# Etapa 2: Produção (Imagem final mais leve)
FROM node:18

# Criar diretório de trabalho
WORKDIR /app

# Copiar apenas os arquivos necessários do estágio de build
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Expor a porta
EXPOSE 4321

# Rodar o servidor Astro
CMD ["npm", "run", "preview"]
