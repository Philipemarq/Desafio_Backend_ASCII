/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - category
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único do produto
 *         name:
 *           type: string
 *           description: Nome do produto
 *         price:
 *           type: number
 *           format: float
 *           description: Preço do produto
 *         category:
 *           type: string
 *           description: Categoria do produto
 *       example:
 *         id: 1
 *         name: "Produto Exemplo"
 *         price: 99.99
 *         category: "Eletrônicos"
 */
declare const router: import("express-serve-static-core").Router;
export default router;
//# sourceMappingURL=productRoutes.d.ts.map