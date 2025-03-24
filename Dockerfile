# Usar a imagem do Node.js
FROM node:18

# Criar diretório de trabalho
WORKDIR /app

# Copiar os arquivos de dependências para dentro do contêiner
COPY package.json package-lock.json ./

# Instalar o Astro globalmente
RUN npm install -g astro

# Instalar dependências do projeto
RUN npm install

# Copiar os outros arquivos do projeto para dentro do contêiner
COPY . .

# Garantir que o Astro tenha permissão de execução
RUN chmod +x /usr/local/bin/astro

# Verificar se o Astro foi instalado corretamente
RUN astro --version

# Rodar o comando de build
RUN npm run build

# Expor a porta do Astro
EXPOSE 4321

# Comando para rodar o servidor Astro
CMD ["npm", "run", "preview"]
