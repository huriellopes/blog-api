# 🔖 Api Blog

> Api desenvolvida para blog, com controler de acesso de usuários, cadastro de usuários, posts, categorias!

## ⚠ Requisitos:

- Node.Js >= 12.13.1
- NPM >= 6.13.4
- Yarn >= 1.22
- Docker >= 19.03
- Docker Compose >= 1.25

## ⚒ O que foi utilizado:

- Node.Js
- Express
- Typescript
- Ts node dev
- DotEnv
- Cors
- Eslint
- Prettier
- JsonWebToken (JWT)
- Pg
- Typeorm
- Bcryptjs
- Celebrate
- Class Transformer

## 🚩 Funcionalidades:

- Controle de acesso
- Authenticação via JWT
- Middleware por regra de acesso
- Criação de Posts - TODO
- Aprovação de Posts - TODO
- Aprovação de Comentários - TODO

## 🙌 Mãos a obra

> Você pode realizar o clone deste repositório ou baixar o arquivo .zip

### 💻 Clone este repositório:

````
git remote add origin https://github.com/huriellopes/blog-api.git
````
Para baixar o zip: [https://github.com/huriellopes/blog-api/archive/master.zip](https://github.com/huriellopes/blog-api/archive/master.zip)

## ⚡ Executando o projeto

### Na raiz do projeto, execute o comando:

````
yarn ou npm install
````

### Configure o .env, para isso execute o comando:

````
copy .env.example .env ou cp .env.example .env
````

> Em seguida configure o .env!

### Para usar banco de dados, temos duas opções, docker ou local:

Caso for utilizar docker, rode os sequintes comandos:

> Antes modifique o docker-compose, colocando a senha escolhida e o nome do banco de dados escolhida em **environment**, em seguida rode o seguinte comando:

Obs.: Caso queira mudar as portas, mude apenas a primeira opção: 3000:3000 para 3333:3000 ou 5432:5432 para 5430:5432

````
# Irá montar e startar dois containers
docker-compose up -d

# Em seguida acesse o container server
docker exec -it server sh

# Dentro do container, execute o seguinte comando:
yarn typeorm migration:run

# Caso queira desfazer as migrações, o execute o seguinte comando:
yarn typeorm migration:revert
````

## 🚀 Rodando o servidor

### Para rodar o servidor, execute o comando:

````
yarn dev:server
````

> Para ter certeza que o projeto está rodando, abra o navegador e execute o seguinte link: http://localhost:3000/test (após o `:` com a porta que configurou no .env)

## 📑 Licença

Este repositório está sob a licença MIT. Veja aqui [LICENSE](LICENSE) para mais detalhes
