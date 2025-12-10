import sequelize from "../db/connection";
import CategoryModel from '../model/category_mode';
import CategoryRepo from "../Repository/category_Repo";

class CategoryService {

    async createCategory(data: any) {
        return await CategoryModel.create({
            ...data,
            created_on: new Date(),
            updated_on: new Date()
        });
    }

    async getAllCategory() {
        return await CategoryModel.findAll({
            where: { is_deleted: false }
        });
    }

    async getCategoryByAsset(id: string) {
       let result=await CategoryRepo.getCategoryByAsset(id);
       return result
    }

    async updateCategory(id: string, data: any) {
        return await CategoryModel.update(
            {
                ...data,
                updated_on: new Date()
            },
            { where: { id } }
        );
    }

    async deleteCategory(id: string) {
        return await CategoryModel.update(
            {
                is_deleted: true,
                updated_on: new Date()
            },
            { where: { id } }
        );
    }

    async categoryPagination(page:number,limit:number){
        const offset=(page-1)*limit
    }

}

export default new CategoryService();
