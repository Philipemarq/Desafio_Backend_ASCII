# Desafio Backend - API de Produtos

Esta é uma API REST desenvolvida em Node.js com TypeScript para gerenciamento de produtos, utilizando SQLite como banco de dados e Sequelize como ORM.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express.js
- Sequelize (ORM)
- SQLite (banco de dados local)
- Swagger (Documentação da API)
- CORS

## Estrutura do Projeto

```
src/
├── controllers/     # Controladores da API
├── services/        # Lógica de negócio
├── models/          # Modelos do banco de dados
├── dtos/            # Data Transfer Objects
├── routes/          # Definição das rotas
├── middleware/      # Middlewares personalizados
├── database.ts      # Configuração do banco de dados
├── app.ts           # Configuração da aplicação Express
└── server.ts        # Ponto de entrada da aplicação
```

## Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## Instalação e Configuração

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd desafio-backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   - O arquivo `.env.example` já está configurado para SQLite local
   - Copie o arquivo `.env.example` para `.env` (opcional, pois já funciona sem ele)

4. Execute a aplicação:
   ```bash
   npm run dev
   ```

A aplicação estará rodando em `http://localhost:3000`

## Documentação da API

A documentação completa da API está disponível via Swagger em:
`http://localhost:3000/api-docs`

## Endpoints Disponíveis

- `GET /` - Página inicial da API
- `GET /api/produtos` - Lista todos os produtos
- `GET /api/produtos/{id}` - Busca produto por ID
- `POST /api/produtos` - Cria um novo produto
- `PUT /api/produtos/{id}` - Atualiza um produto existente
- `DELETE /api/produtos/{id}` - Remove um produto

## Estrutura do Produto

```json
{
  "id": 1,
  "name": "Nome do Produto",
  "price": 99.99,
  "category": "Categoria do Produto"
}
```

## Exemplos de Uso

### Criar um produto
```bash
curl -X POST http://localhost:3000/api/produtos \
  -H "Content-Type: application/json" \
  -d '{"name":"Produto Exemplo","price":99.99,"category":"Eletrônicos"}'
```

### Listar produtos
```bash
curl -X GET http://localhost:3000/api/produtos
```

### Buscar produto por ID
```bash
curl -X GET http://localhost:3000/api/produtos/1
```

## Scripts Disponíveis

- `npm run dev` - Executa a aplicação em modo de desenvolvimento
- `npm run build` - Compila o TypeScript para JavaScript
- `npm start` - Executa a aplicação compilada

## Configuração do Banco de Dados

O projeto utiliza SQLite como banco de dados por ser mais simples de configurar e não requer instalação adicional de servidor de banco de dados. O SQLite é um banco de dados relacional que armazena os dados em um arquivo local (`database.sqlite`), criado automaticamente na primeira execução.

**Vantagens do SQLite para desenvolvimento:**
- Não precisa instalar MySQL/PostgreSQL
- Arquivo único e portátil
- Configuração zero
- Ideal para desenvolvimento e testes

**Nota:** Se preferir usar MySQL/PostgreSQL em produção, edite o arquivo `src/database.ts` e ajuste as configurações no `.env`.

## Solução de Problemas

### Erro "Cannot GET /"
- Certifique-se de que o servidor está rodando (`npm run dev`)
- Verifique se a porta 3000 não está sendo usada por outro processo
- Se necessário, mate processos na porta 3000: `netstat -ano | findstr :3000` e `taskkill /PID <PID> /F`

### Erro de conexão com banco
- O SQLite é criado automaticamente, não precisa de configuração adicional
- Se usar MySQL/PostgreSQL, certifique-se de que o banco está rodando

### Erro de compilação TypeScript
- Execute `npm run build` para verificar erros
- Instale dependências: `npm install`

## Arquivos Importantes

- `src/server.ts` - Ponto de entrada da aplicação
- `src/app.ts` - Configuração do Express e middlewares
- `src/database.ts` - Configuração do banco de dados SQLite
- `src/models/Product.ts` - Modelo do produto
- `src/routes/productRoutes.ts` - Definição das rotas com Swagger
- `package.json` - Dependências e scripts

## Desenvolvimento

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença ISC.