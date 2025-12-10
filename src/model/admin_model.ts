import { DataTypes,Model } from "sequelize";
import sequelize from "../db/connection";

class Admin extends Model{}

Admin.init(
    {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true
        },
        admin_name:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    },{
        sequelize,
        timestamps:false,
        tableName:'admins'
    }
)

export default Admin