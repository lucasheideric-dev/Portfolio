# Usar a imagem oficial do Node.js
FROM node:18

# Criar diretório de trabalho
WORKDIR /app

# Copiar os arquivos de dependências para dentro do contêiner
COPY package.json package-lock.json ./

# Instalar dependências do projeto
RUN npm install

# Copiar os arquivos do projeto para dentro do contêiner
COPY . .

# Rodar o build do Astro
RUN npm run build

# Expor a porta padrão do Astro Preview
EXPOSE 4321

# Comando para rodar o servidor Astro
CMD ["npm", "run", "preview"]
