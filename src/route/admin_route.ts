import { FastifyInstance } from "fastify";
import  AdminController from '../controller/admin_controller'

async function adminRoute(app: FastifyInstance) {

    app.post('/create-admin', AdminController.createadmin)
    app.get('/getadmin',AdminController.getadmin)
    app.put('/update-admin/:id',AdminController.updateadmin)
    app.delete('/delete-admin/:id',AdminController.deleteadmin)
    app.get('/get-admin-byId/:id',AdminController.getadminbyid)

}

export default adminRoute;