<h1 align="center">
  <img alt="AugenEngenharia" title="AugenEngenharia" src=".github/logo.png" width="163px" height="43px"/>  
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  
</p>

<br>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/)
- [Swagger](https://swagger.io/)

## 💻 Projeto

Equipamentos espalhados por cidades do Brasil fazem análises da água de poços, nessas leituras são feitas análises do PH, Cloro, Fluor e Vazão. Este sistema deve permitir o armazenamento externo dessas análises linkado para cada equipamento que fizer o envio dessas análises. Caso uma análise possua vazão 0 (zero) não deverá ser feito o armazenamento desta análise, valores de cloro e fluor maiores que 100 devem ser desconsiderados. O sistema deve permitir cadastro de equipamentos e cidades. O cadastro de funcionários é opcional para caso o(a) candidato(a) queira utilizar autenticação (opcional).

## 🚀 Como executar

- Clone o repositório
- Instale as dependências com `npm install`
- Inicie o container do banco de dados MySQL com `docker-compose up`
- Rodar as migrations do prisma no banco de dados com `npx prisma migrate dev`
- Inicie o servidor com `npm run dev`
- Para rodar os testes unitários, use `npm test`
- Se preferir, para visualização do banco de dados (registros e relacionamentos) de maneira bem fácil, você pode
rodar no terminal `npx prisma studio`

Agora você pode acessar [`localhost:5050/api-docs`](http://localhost:5050/api-docs) do seu navegador para ter acesso a documentação da API.

---

Feito com ♥ por [Júlio Souza](https://www.linkedin.com/in/j%C3%BAlio-souza-079351213/) 👋🏻 