import { FastifyInstance } from "fastify";
import CategoryController from "../controller/category_controller";

async function categoryRoute(app: FastifyInstance) {

    app.post("/create-category", CategoryController.createCategory);

    app.get("/get-category", CategoryController.getAllCategory);

    app.get("/get-category-by-asset/:id", CategoryController.getCategoryByAsset);

    app.put("/update-category/:id", CategoryController.updateCategory);

    app.delete("/delete-category/:id", CategoryController.deleteCategory);

    app.get("/catergory-pagination",CategoryController.catergoryPagination);

}

export default categoryRoute;
