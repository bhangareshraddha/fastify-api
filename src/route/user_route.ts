import { FastifyInstance } from "fastify";
import UserController from '../controller/user_controller';

async function userRoute(app:FastifyInstance){
    app.post('/create-user',UserController.createUser);
    app.get('/get-user',UserController.getUser);
    app.get('/get-user-byid/:id',UserController.getUserById);
    app.put('/update-user/:id',UserController.updateUser);
    app.delete('/delete-user/:id',UserController.deleteUser);
    app.get('/get-user-by-pagination',UserController.getUserPagination)
}

export  default userRoute