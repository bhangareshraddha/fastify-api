import { DataTypes } from "sequelize";
import UserModel from "../model/user_model";
import sequelize from "../db/connection";

class UserRepo{

     async findAllUser(){
        let query=`select * from practice.users`
        let result=await sequelize.query(query,{
        })
        return  result
    }

     async getUserById(id:any){
        let query=`select * from practice.users where id=:id`
        let result=await sequelize.query(query,{
            replacements:{id},
        })
        return result
     }

}

export default  new UserRepo();