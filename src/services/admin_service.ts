import AdminModel from '../model/admin_model'
import AdminInterface from '../interface/admin_interface';
import sequelize from '../db/connection';
import { error } from 'console';


class AdminService {

  async createAdmin(data:any[]) {
    for (const admin of data) {
        const exist = await AdminModel.findOne({
            where: { admin_name: admin.admin_name }
        });

        if (exist) {
            throw new Error(`Admin '${admin.admin_name}' already exists`);
        }
    }
    const result = await AdminModel.bulkCreate(data, {
        validate: true
    });

    return result;
}

       

    // async createAdmin(data: any[]) {
    //     const exist=await AdminModel.findOne({
    //         where:{admin_name:data.admin_name}
    //     });
    //     if(exist){
    //         throw new Error ('already exists') 
    //     }
    //     const result = await AdminModel.bulkCreate(data,
    //         {
    //             validate:true
    //         }
    //     );
    //     return result
    // }

    async getadmin() {
        const result = await AdminModel.findAll();
        return result
    }

    async updateAdmin(id: any, data: any) {
        const result = await AdminModel.update(
            data,
            { 
                where: { id } 
            }
        )
        return result
    }

    async deleteAdmin(id: any) {
      let result=await AdminModel.destroy({
        where:{id}
      })
        return result
    }
    async getadminbyid(id: any) {
        let result = await AdminModel.findOne({
            where: { id }
        });
        return result
    }
}

export default new AdminService();
