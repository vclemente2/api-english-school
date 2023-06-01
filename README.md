# API Escola de Inglês

A API Escola de Inglês é uma aplicação desenvolvida para fornecer ferramentas de
gestão para uma instituição de ensino, especificamente uma escola de idiomas. A
API permite a criação, atualização, consulta e exclusão de informações
relacionadas aos alunos e turmas.

## Recursos

A API oferece os seguintes recursos:

### Alunos

- `GET /alunos`: Retorna a lista de todos os alunos matriculados na escola.
- `GET /alunos/{id}`: Retorna os detalhes de um aluno específico com base no ID.
- `POST /alunos`: Cria um novo aluno com base nos dados fornecidos.
- `PUT /alunos/{id}`: Atualiza as informações de um aluno específico com base no
  ID.
- `DELETE /alunos/{id}`: Exclui um aluno específico com base no ID.

### Turmas

- `GET /turmas`: Retorna a lista de todas as turmas disponíveis na escola.
- `GET /turmas/{id}`: Retorna os detalhes de uma turma específica com base no
  ID.
- `POST /turmas`: Cria uma nova turma com base nos dados fornecidos.
- `PUT /turmas/{id}`: Atualiza as informações de uma turma específica com base
  no ID.
- `DELETE /turmas/{id}`: Exclui uma turma específica com base no ID.

## Autenticação e Autorização

A API Escola de Inglês utiliza autenticação e autorização para garantir que
apenas usuários autorizados possam acessar e manipular os dados. A autenticação
é feita por meio de tokens JWT (JSON Web Tokens), que devem ser enviados no
cabeçalho `Authorization` de cada solicitação.

Alguns recursos da API são restritos a determinadas funções de usuário, como
administradores ou professores. A autorização é baseada nas permissões
atribuídas a cada função de usuário. Os endpoints verificam as permissões do
usuário autenticado antes de permitir o acesso aos recursos.

## Tecnologias Utilizadas

A API Escola de Inglês foi desenvolvida utilizando as seguintes tecnologias:

- Node.js: Plataforma de execução de JavaScript utilizada para construir a API.
- Express.js: Framework web utilizado para criar os endpoints e
