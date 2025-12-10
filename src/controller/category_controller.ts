import { FastifyRequest, FastifyReply } from "fastify";
import CategoryService from "../services/category_service";

class CategoryController {

    async createCategory(req: FastifyRequest, rep: FastifyReply) {
        try {
            const data = req.body as any;
            const result = await CategoryService.createCategory(data);

            rep.send({
                status: 200,
                message: "Category created successfully",
                result
            });
        } catch (error) {
            rep.status(500).send({
                status: 500,
                message: "Internal Server Error",
                error
            });
        }
    }

    async getAllCategory(req: FastifyRequest, rep: FastifyReply) {
        try {
            const result = await CategoryService.getAllCategory();
            rep.send({
                status: 200,
                message: "Categories fetched successfully",
                result
            });
        } catch (error) {
            rep.status(500).send({
                status: 500,
                message: "Internal Server Error",
                error
            });
        }
    }

    async getCategoryByAsset(req: FastifyRequest, rep: FastifyReply) {
        try {
            const {id } = req.params as any;
            const result = await CategoryService.getCategoryByAsset(id);

            rep.send({
                status: 200,
                message: "Category fetched successfully",
                result
            });
        } catch (error) {
            rep.status(500).send({
                status: 500,
                message: "Internal Server Error",
                error
            });
        }
    }

    async updateCategory(req: FastifyRequest, rep: FastifyReply) {
        try {
            const { id } = req.params as any;
            const data = req.body as any;
            const result = await CategoryService.updateCategory(id, data);

            rep.send({
                status: 200,
                message: "Category updated successfully",
                result
            });
        } catch (error) {
            rep.status(500).send({
                status: 500,
                message: "Internal Server Error",
                error
            });
        }
    }

    async deleteCategory(req: FastifyRequest, rep: FastifyReply) {
        try {
            const { id } = req.params as any;
            const result = await CategoryService.deleteCategory(id);

            rep.send({
                status: 200,
                message: "Category deleted successfully",
                result
            });
        } catch (error) {
            rep.status(500).send({
                status: 500,
                message: "Internal Server Error",
                error
            });
        }
    }

    async catergoryPagination(req:FastifyRequest,rep:FastifyReply){
        try{
            const {page,limit}=req.params as any
            const result=await CategoryService.categoryPagination(page,limit);
            rep.send({
                stauts:200,
                message:"get data sucessfully",
                data:result
            })
        }
        catch(error:any){
            throw error
        }
    }

}

export default new CategoryController();
