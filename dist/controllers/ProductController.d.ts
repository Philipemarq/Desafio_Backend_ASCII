import { Request, Response } from 'express';
export declare class ProductController {
    getAllProducts(req: Request, res: Response): Promise<void>;
    getProductById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    createProduct(req: Request, res: Response): Promise<void>;
    updateProduct(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    deleteProduct(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=ProductController.d.ts.map