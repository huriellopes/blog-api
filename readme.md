# 🔖 Api Blog

> Api desenvolvida para blog, com controler de acesso de usuários, cadastro de usuários, posts, categorias!

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

````
# Container do PostgreSQL, altere **POSTGRES_PASSWORD=senha** para a senha desejada
docker run --name blog -e POSTGRES_PASSWORD=senha -p 5432:5432 -d postgres
````

> Depois dos containers criados e startados, abra o postgreSQL em um SGBD e crie um banco chamado **blog** ou escolha o nome que quiser.

Em seguida rode o seguinte comando para as migrations:

````
yarn typeorm migration:run ou npm typeorm migration:run
````

Caso precise desfazer as migrações, execute o seguinte comando:

````
yarn typeorm migration:revert ou npm typeorm migration:revert
````

## 🚀 Rodando o servidor

### Para rodar o servidor, execute o comando:

````
yarn dev:server
````

> Para ter certeza que o projeto está rodando, abra o navegador e execute o seguinte link: http://localhost:3333/test (após o `:` com a porta que configurou no .env)

## 📑 Licença

Este repositório está sob a licença MIT. Veja aqui [LICENSE](LICENSE) para mais detalhes
