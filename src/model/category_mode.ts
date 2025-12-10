import sequelize from "../db/connection";
import { DataTypes, Model } from "sequelize";

class CategoryModel extends Model {}

CategoryModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        asset_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        created_on: {
            type: DataTypes.DATE,
              defaultValue: () => new Date(Date.now())
        },
        updated_on: {
            type: DataTypes.DATE,
            defaultValue: () => new Date(Date.now())
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        sequelize,
        tableName: "category",
        timestamps: false
    }
);

export default CategoryModel;
