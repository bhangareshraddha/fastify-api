import sequelize from "../db/connection";
import { DataTypes,Model } from "sequelize";

class UserModel extends Model{}

UserModel.init(
    {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps:false,
        tableName:"users"
    }
);

export default UserModel;