import { FastifyRequest, FastifyReply } from "fastify";
import UserService from '../services/user_service';
import UserInterface from "../interface/user_interface";

class UserController {

  async createUser(req: FastifyRequest, rep: FastifyReply) {
    try {
      const data = req.body as UserInterface
      const result = await UserService.createUser(data);
      rep.send({
        status: 200,
        message: "create datasucessfully",
        result
      })
    } catch (error) {
      rep.status(500).send({
        status: 500,
        message: "Internal Server Error",
        error: error
      })
    }
  }

  async getUser(req:FastifyRequest,rep:FastifyReply){
    try{
           const result=await UserService.getUser();
           rep.send({
            status:200,
            message:"get user sucessfully",
            result
           })
    }catch(error:any){
      rep.status(500).send({
        status:500,
        message:"Internal Server Error",
        erro:error
      })
    }
  }
 async getUserById(req:FastifyRequest,rep:FastifyReply){
  try{
       const {id}=req.params as any
       const result=await UserService.getUserById(id)
       rep.send({
        status:200,
        message:"get user Successfully",
        result
       })
  }catch(error:any){
    rep.status(500).send({
      status:500,
      message:"Internal Server Error",
      error:error
    })
  }
 }

  async updateUser(req:FastifyRequest,rep:FastifyReply){
    try{
      const {id}=req.params as any
      const data=req.body as UserInterface;
      const result=await UserService.updateUser(id,data); 
      rep.send({
        status:200,
        message:"update sucessfully",
        result
      })
    }catch(error:any){
      rep.status(500).send({
        status:500,
        message:"Internal Server Error"
      })
    }
  }

  async deleteUser(req:FastifyRequest,rep:FastifyReply){
    try{
      const {id}=req.params as any
      const result=await UserService.deleteUser(id); 
      rep.send({
        status:200,
        message:"delete sucessfully",
        result
      })
    }catch(error:any){
      rep.status(500).send({
        status:500,
        message:"Internal Server Error"
      })
    }
  }

  async getUserPagination(req: FastifyRequest, rep: FastifyReply) {
  try {

    const { page, limit } = req.query as any;

    // If pagination parameters exist → use paginated response
    if (page && limit) {
      const result = await UserService.getUserPaginated(Number(page), Number(limit));
      return rep.send({
        status: 200,
        message: "get user with pagination successfully",
        result
      });
    }

    // Old behaviour — no pagination
    const result = await UserService.getUser();
    rep.send({
      status: 200,
      message: "get user successfully",
      result
    });

  } catch (error: any) {
    rep.status(500).send({
      status: 500,
      message: "Internal Server Error",
      erro: error
    })
  }
}

  
}

export default new UserController

