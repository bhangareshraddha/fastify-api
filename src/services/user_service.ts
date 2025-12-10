import UserModel from '../model/user_model';
import UserRepo from '../Repository/user_Repo';

class UserServices {

    async createUser(data: any) {
        // const hashedPassword = await bcrypt.hash(data.password, 10);
        let result = await UserModel.create({
            ...data,
            // password:hashedpassword
        })
        return result
    }

 
    async getUser() {
        let result = await UserRepo.findAllUser();
        return result
    }

    async getUserPaginated(page: number, limit: number) {

        const offset = (page - 1) * limit;

        const { rows, count } = await UserModel.findAndCountAll({
            offset: offset,
            limit: limit
        });

        return {
            total: count,
            page,
            limit,
            totalPages: Math.ceil(count / limit),
            data: rows
        }
    }

    async getUserById(id: any) {
       let result=await UserRepo.getUserById(id)
       return result
    }

    async updateUser(id: any, data: any) {
        let result = await UserModel.update(
            data,
            {
                where: { id }
            }
        )
        return result
    }

    async deleteUser(id: any) {
        let result = await UserModel.destroy(
            {
                where: { id }
            }
        )
        return result
    }
}

export default new UserServices

