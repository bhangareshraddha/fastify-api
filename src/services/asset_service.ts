import AssetModel from '../model/asset_model';
import sequelize from '../db/connection';
import AssetRepo from '../Repository/asset_Repo'
class AssetServices {

    async createAsset(data: any) {
        let result = await AssetModel.create({
            ...data,
            created_on: new Date(Date.now()),
            updated_on: new Date(Date.now())
        });
        return result;
    }

    async getAsset() {
        let result = await AssetRepo.findAllAsset()
        return result;
    }

    async getAssetById(id: any) {
        let result = await AssetRepo.getAssetById(id)
        return result;
    }

    async updateAsset(id: any, data: any) {
        let result = await AssetModel.update(
            {
                ...data,
                updated_on: new Date(Date.now())
            },
            { where: { id } }
        );
        return result;
    }

    async deleteAsset(id: any) {
        let result = await AssetModel.update(
            {
                is_deleted: true,
                updated_on: new Date(Date.now())
            },
            { where: { id } }
        );
        return result;
    }
     async getAssetPagination(page:number,limit:number){
        const offset=(page-1)*limit;
        const total=await AssetModel.count({
            where:{is_deleted:false}
        });

        const data=await AssetModel.findAll({
            where:{is_deleted:false},
            limit,
            offset
        });
        return {total,data}
     }

 async getassetName(asset_name:any){
    
    const result=await AssetModel.findAll({
        where:{asset_name}
    })
    return result
 }

 async getassetColor(filter:any){
    let where:any={}
    if(filter.asset_name){
        where.asset_name=filter.asset
    }
    const result=await AssetModel.findAll({
        where
    })
    return result
 }

   async getAssetsWithUser() {
        const [results] = await sequelize.query(`
            SELECT 
                a.id AS asset_id,
                a.asset_name,
                a.asset_company,
                a.asset_color,
                a.price,
                a.user_id,
                JSON_OBJECT(
                    'id', u.id,
                    'name', u.name,
                    'email', u.email
                ) AS user
            FROM assets a
            LEFT JOIN users u ON a.user_id = u.id
            WHERE a.is_deleted = 0;
        `);

        return results;
    }

    
    async getAssetByIdWithUser(id: string) {
       
        let result=await AssetRepo.getAssetUserById(id);
        return result

}}

export default new AssetServices();
