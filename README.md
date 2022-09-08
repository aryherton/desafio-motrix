# Motrix-desfio(Processo seletivo)

## Front End

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![ReactJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)


## Back End

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)


## Banco de Dados

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
<!-- ![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white) -->

## Objetivo:

O desafio proposto é o desenvolvimento de uma ferramenta simples para gestão de conteúdos utilizando Node.js e React.


Através dessa ferramenta, a pessoa usuária precisa ser capaz de:

    Criar, editar, listar, visualizar e apagar conteúdos;
    Visualizar o histórico de modificações de cada conteúdo;

### Requisitos funcionais:

Cada conteúdo deverá conter os seguintes dados:

    Título: texto curto, obrigatório, sem formatação;
    Corpo: texto longo, opcional, com formatação (wysiwyg);
    Data de criação: oculto, timestamp, preenchido automaticamente no momento da criação;
    Data de atualização: oculto, timestamp, preenchido automaticamente na última modificação;

Cada modificação salva no conteúdo deve ser registrada como uma nova revisão, nunca sobrescrevendo ou apagando as versões anteriores anterior;
O histórico de modificações deve exibir, em ordem cronológica pela data de atualização, todas as versões de um conteúdo específico, viabilizando a navegação entre as diferentes versões;
Na visualização ou listagem dos conteúdos, o usuário deve ter acesso à versão mais atualizada de cada conteúdo.

### Requisitos técnicos:

A comunicação entre a aplicação e a camada de dados deverá ser através de uma API REST;
Todos os campos de formulário devem estar com validações adequadas.

    Ordenação de conteúdos na lista por título, data de criação e data de atualização;
    Operação em lote para apagar múltiplos conteúdos de uma vez a partir da lista;
    Paginação de conteúdos na listagem;

  <details>
  <summary><b>MongoDb(docker)</b></summary><br>
   Instale o MongoDB, ou use uma imagem do Docker

  ```
  Para usar o MongoDB com Docker, digite no teminal:
  ```
  Abra o terminal e digite:

  <code>docker pull mongo</code>

  Depois digite:

<code>docker run --name motrixMongo -p 27017:27017 -d  mongo</code>


</details>

<br>

<details>
  <summary><b>Backend</b></summary><br>

## 🚀 Instalação Back-end

### Para rodar o projeto local(na sua máquina), siga estas etapas:
```
Clonar utilizando HTTPS ou SSH

```

Clonar projeto utilizando HTTPS, digite:

<code>git clone https://github.com/aryherton/desafio-motrix.git</code>

Clonar projeto utilizando SSH, digite:

<code>git clone git@github.com:aryherton/desafio-motrix.git</code>


<br>

Entre na pasta do projeto:

<code>cd desafio-motrix</code>

Acesse a pasta backend:

<code>cd backend</code>

Instale as dependências do projeto:

<code>npm install</code>

Execute o projeto:

```
npm run start
```
</details>

<br>

<details>
  <summary><b>Frontend</b></summary><br>

Retorne para pasta do projeto(desafio-motrix), digitando:

<code>cd ..</code>

Acesse a paste "front", digitando:

<code>cd front</code>

Instale as dependencias:

<code>yarn install</code>

Inicie o projeto:

<code>yarn run dev</code>

</details>

<br>

## Como usar a API

<details>
  <summary><b>Endpoints API</b></summary><br>

## Criar tarefas

Para criar uma nova tarefa deve ser feita uma requisição do tipo POST, passando o token do usuário no "Header-Athorization". Exemplo:

URL
<code>localhost:3005/message</code>

```
Deve ser passado a seguinte estrutura de BODY:
```
<code>
{
	"title": "Texto do Titulo",
	"description": "Texto(corpo da mensagem)",
	"status": "Texto(status da mensagem)",
	"priority": "Texto(prioridade da mensagem)"
}
</code>

Resposta esperada(Status 200ok):

<code>{
	"message": "Message registered successfully"
}</code>


## Listar tarefas

Para listar as tarefas a requisição será do tipo GET, passando o token do usuário no "Header-Athorization". Exemplo de requisição:

URL
<code>localhost:3005/user/message</code>

O retorno será um JSON, com nome e e-mail do usuário e um campo "arrMessage" que é um array de mensagens(tipo objeto). Se não houver mensagens cadastradas, o campo "arrMessage" retorna um array vazio([]).

## Excluir tarefas

Para excluir um tarefa a api espera uma requisição DELETE, conforme o exemplo abaixo:

URL
<code>localhost:3005/message</code>

A requisição deve conter um body com uma array de string(id da mensagem), Exemplo:

Body:

<code>["63135dbe27fdd57229eb7120"]</code>

Resposta:

<code>{
	"message": "Message successfully deleted"
}</code>

## Editar tarefas

Para editar uma tarefa a requisição é do tipo PUT, conforme no exemplo abaixo:

URL
<code>localhost:3005/message</code>

Body:

<code>{
	"title": "Texto do Titulo",
	"description": "Texto(corpo da mensagem)",
	"status": "Texto(status da mensagem)",
	"priority": "Texto(prioridade da mensagem)"
  "_id": "6316619165e08ca77e8cd1cc"
}</code>

Retorno experado:

<code>{
	"message": "Match updated successfully"
}</code>

## Historico da mensagem

Para pegar o histórico de atualização da mensagem, de forma ordenada(crescente decrescente), a requisição é do tipo POST, passando na URL o "id" da mensagem e um body com o tipo de ordenação, conforme exemplo:

URL
<code>localhost:3005/message/6316619165e08ca77e8cd1cc</code>

Body:

<code>{
	"data": {
	"typeSort": "asc"
}
}</code>

O retorno esperado será:

<code>
{
	"message": [
		{
			"_id": "6316619165e08ca77e8cd1cc",
			"historyUpdate": [
				{
        	"title": "Texto do Titulo",
        	"description": "Texto(corpo da mensagem)",
        	"status": "Texto(status da mensagem)",
        	"priority": "Texto(prioridade da mensagem)"
          "_id": "6316619165e08ca77e8cd1cc"
        },
			]
		}
	]
}</code>

</details>

<br><br>

## ✒️ Autores

Ary Barbosa<br>
![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)aryhertonbarbosa@gmail.com

<a href="https://github.com/aryherton">![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
<a href="https://www.linkedin.com/in/aryherton/">![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)</a><br /><br />


Gratidão

 😊


<!--
## Interface do Projeto

![Project](readmeFiles/TODOLIST.gif)

<br>

[⬆ Voltar ao topo](#ebytr-lista-de-tarefas)<br> -->

