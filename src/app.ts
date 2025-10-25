import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes';
import { errorHandler } from './middleware/errorHandler';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();

app.use(cors());
app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product API',
      version: '1.0.0',
      description: 'API para gerenciamento de produtos',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rota raiz
app.get('/', (req, res) => {
  res.json({
    message: 'API de Produtos - Desafio Backend',
    version: '1.0.0',
    endpoints: {
      produtos: '/api/produtos',
      documentacao: '/api-docs'
    }
  });
});

app.use(productRoutes);
app.use(errorHandler);

export default app;