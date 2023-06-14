# API Escola de Inglês

A API Escola de Inglês é uma aplicação desenvolvida para fornecer ferramentas de
gestão para uma instituição de ensino, especificamente uma escola de idiomas. A
API permite a criação, atualização, consulta e exclusão de informações
relacionadas aos alunos, docentes, turmas, matrículas e níveis.

## **1 - Configuração da API**

### **Dependências:**

Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em sua
máquina.

### **Faça o clone do repositório da API:**

```bash
git clone https://github.com/vclemente2/api-english-school
```

### **Navegue até o diretório da API:**

```bash
cd api-english-school
```

### **Instale as dependências do projeto:**

```bash
npm install
```

### **Configuração do Banco de Dados:**

Certifique-se de ter um banco de dados configurado e acessível para a aplicação.
Por exemplo, você pode usar o MySQL ou PostgreSQL.

Execute as migrações do banco de dados para criar a estrutura necessária:

```bash
npx sequelize-cli db:migrate
```

Execute os seeders para popular o banco de dados com dados iniciais:

```bash
npx sequelize-cli db:seed:all
```

### **Configuração das Variáveis de Ambiente:**

Crie um arquivo **.env** na raiz do projeto.

Abra o arquivo .env e adicione as seguintes variáveis de ambiente. Certifique-se
de substituir as credenciais pelas configurações adequadas:

```Javascript
# Porta em que a aplicação irá ouvir
PORT=3000

# Credenciais do banco de dados de desenvolvimento
DB_HOST='database_host'
DB_NAME='database_name'
DB_USER='database_user'
DB_PASS='database_password'
DB_PORT='database_port'
DB_CLIENT='database_dialect'
```

**Nota:** Certifique-se de substituir as credenciais pelas suas configurações.

Salve o arquivo .env.

### **Executando a API**

Após a instalação das dependências, configuração do banco de dados e das
variáveis de ambiente, você pode executar a API com o seguinte comando:

```bash
npm run dev
```

A API estará disponível em http://localhost:3000.

Isso conclui a configuração da API. Certifique-se de ter configurado
corretamente todas as variáveis de ambiente e seguido as etapas corretamente
para garantir um ambiente funcional.

## **2 - Recursos**

A API oferece os seguintes recursos:

### Pessoa e Matrícula

- `GET /pessoa`: Retorna a lista de todos as pessoas(alunos e docentes)
  registradas na escola.
- `GET /pessoa/{id}`: Retorna os detalhes de uma pessoa específica com base no
  ID.
- `POST /pessoa`: Cria um novo aluno ou docente com base nos dados fornecidos.
- `POST /pessoa/{id}/restore`: Restaura um aluno ou docente que foi excluído.
- `PUT /pessoa/{id}`: Atualiza as informações de um aluno ou docente específico
  com base no ID.
- `DELETE /pessoa/{id}`: Exclui uma pessoa específica com base no ID.

- `GET /pessoa/matricula`: Retorna a lista de todos as matriculas e seus
  respectivos alunos;
- `GET /pessoa/{pessoaId}/matricula/{matriculaId}`: Retorna os detalhes de uma
  matricula específica com base no ID.
- `POST /pessoa/{pessoaId}/matricula`: Cria uma nova matrícula para um aluno com
  base nos dados fornecidos.
- `POST /pessoa/{pessoaId}/matricula/{matriculaId}/restore`: Restaura uma
  matrícula excluída de um aluno.
- `PUT /pessoa/{pessoaId}/matricula/{matriculaId}`: Atualiza as informações de
  uma matrícula específica com base no ID.
- `DELETE /pessoa/{pessoaId}/matricula/{matriculaId}`: Exclui uma matrícula
  específica com base no ID.

### Turma

- `GET /turma`: Retorna a lista de todas as turmas disponíveis na escola.
- `GET /turma/{id}`: Retorna os detalhes de uma turma específica com base no ID.
- `POST /turma`: Cria uma nova turma com base nos dados fornecidos.
- `POST /turma/{id}/restore`: Restaura uma turma que foi excluída.
- `PUT /turma/{id}`: Atualiza as informações de uma turma específica com base no
  ID.
- `DELETE /turma/{id}`: Exclui uma turma específica com base no ID.

### Nível

- `GET /nivel`: Retorna a lista de todas os níveis de curso disponíveis na
  escola.
- `POST /nivel`: Cria um novo nível com base nos dados fornecidos.
- `POST /nivel/{id}/restore`: Restaura um nível que foi excluída.
- `PUT /nivel/{id}`: Atualiza as informações de um nível específico com base no
  ID.
- `DELETE /nivel/{id}`: Exclui um nível específico com base no ID.

### Tecnologias Utilizadas

A API Escola de Inglês foi desenvolvida utilizando as seguintes tecnologias:

- Node.js: Plataforma de execução de JavaScript utilizada para construir a API.
- Express.js: Framework web utilizado para criar os endpoints e gerenciar as
  rotas da API. Ele fornece uma maneira simples e eficiente de lidar com as
  requisições HTTP e as respostas.
- Sequelize: ORM (Object-Relational Mapping) baseado em Promises para Node.js. O
  Sequelize facilita a interação com o banco de dados, permitindo definir
  modelos, consultas e relacionamentos de forma intuitiva.
- Banco de Dados: A API Escola de Inglês suporta diversos bancos de dados
  relacionais, como MySQL, PostgreSQL, SQLite, entre outros. Você pode
  configurar o banco de dados de acordo com as necessidades do seu projeto.
