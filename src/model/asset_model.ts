import sequelize from "../db/connection";
import { DataTypes, Model } from "sequelize";
import UserModel from "./user_model";

class AssetModel extends Model {}

AssetModel.init(
    {
        id: {
            type: DataTypes.UUID, 
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },

        asset_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        asset_company: {
            type: DataTypes.STRING,
            allowNull: false
        },

        asset_color: {
            type: DataTypes.STRING,
            allowNull: false
        },

        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },

        is_deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

        created_on: {
            type: DataTypes.DATE,
            defaultValue: () => new Date(Date.now())
        },

        updated_on: {
            type: DataTypes.DATE,
            defaultValue: () => new Date(Date.now())
        }
    },
    {
        sequelize,
        timestamps: false,
        tableName: "assets"
    }
);

export default AssetModel;
