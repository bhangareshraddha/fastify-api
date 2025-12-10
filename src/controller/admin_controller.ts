import { FastifyRequest,FastifyReply } from "fastify";
import AdminService from '../services/admin_service';
import AdminInterface from "../interface/admin_interface";
class AdminController{

async createadmin(req:FastifyRequest,rep:FastifyReply){
    try{
          console.log("REQ BODY ===>", req.body); 
        const data=req.body as AdminInterface [];
        const result=await AdminService.createAdmin(data)
        rep.send({
            status:201,
            message:"create admin sucessfully",
            result
        })
    }catch(error:any){
        console.error("ERROR ===>", error); 
       throw error
    }
}

async getadmin(req:FastifyRequest,rep:FastifyReply){
    try{
         const result=await AdminService.getadmin()
         rep.send({
            status:200,
            message:"get data sucessfully",
            result
         })
    }
    catch(error:any){
    throw error
    }
}


async updateadmin(req:FastifyRequest,rep:FastifyReply){
try{
    const { id } = req.params as any ;
    const data=req.body as any;
    const result=await AdminService.updateAdmin(id,data);
    rep.send({
        status:200,
        message:"update data sucessfully",
        result
    })
}catch(error:any){
    throw error
 }
 }

 async deleteadmin(req:FastifyRequest,rep:FastifyReply){
    try{
        const {id}=req.params as any;
        const result=await AdminService.deleteAdmin(id)
        rep.send({
            status:200,
            message:'delete successfully',
            result
        })
    }catch(error:any){
        throw error
    }
 }

 async getadminbyid(req:FastifyRequest,rep:FastifyReply){
    try{
        const {id}=req.params as any;
        const result=await AdminService.getadminbyid(id)
        rep.send({
            status:200,
            message:"get admin sucessfully",
            result
        })
    }catch(error:any){
throw error
    }
 }

}

export default new AdminController
