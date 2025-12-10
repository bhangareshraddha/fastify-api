import { FastifyInstance } from "fastify";
import AssetController from "../controller/asset_controller";

async function assetRoute(app: FastifyInstance) {

    app.post('/create-asset', AssetController.createAsset);

    app.get('/get-asset', AssetController.getAsset);

    app.get('/get-asset-byid/:id', AssetController.getAssetById);

    app.put('/update-asset/:id', AssetController.updateAsset);

    app.delete('/delete-asset/:id', AssetController.deleteAsset);

    app.get('/asset-pagination',AssetController.getassetPagination);

    app.get('/get-asset-by-Name',AssetController.getAssetName);

    app.get('/get-asset-by-Color',AssetController.getAssetColor);

    app.get("/asset-user", AssetController.getAssetsWithUser);

    app.get("/asset-user/:id", AssetController.getAssetByIdWithUser);



}

export default assetRoute;
