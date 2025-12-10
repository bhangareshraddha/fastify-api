import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
class CategoryRepo{

    async getCategoryByAsset(id:any){
         const [results] = await sequelize.query(`
          SELECT 
                c.id AS category_id,
                c.category_name,                                                                                            
                c.asset_id,

                JSON_OBJECT(
                    'id', a.id,
                    'asset_name', a.asset_name,
                    'asset_company', a.asset_company,
                    'asset_color', a.asset_color,
                    'price', a.price
                ) AS asset,

                JSON_OBJECT(
                    'id', u.id,
                    'name', u.name,
                    'email', u.email
                ) AS user

            FROM category c
            LEFT JOIN assets a ON c.asset_id = a.id
            LEFT JOIN users u ON a.user_id = u.id
            WHERE c.id=:id AND c.is_deleted = 0;
        `, {
            replacements: { id }
        });

        return results;
    }

}
export default  new CategoryRepo()