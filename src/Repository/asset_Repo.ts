import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

class AssetRepo{
     async findAllAsset(){
        let query=`select * from practice.assets`;
        let result=await sequelize.query(query,{
        })
         return result
     }

     async getAssetById(id:any){
        let query=`select * from practice.assets where id=:id`
        let result=await sequelize.query(query,{
            replacements:{id},           
        })
        return result
     }

     async getAssetUserById(id:any){

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
            WHERE a.id = :id AND a.is_deleted = 0;
        `, {
            replacements: { id }
        });

        return results?.length ? results[0] : null;
    }

     }

export default new AssetRepo();
