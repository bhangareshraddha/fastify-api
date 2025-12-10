import { FastifyRequest, FastifyReply } from "fastify";
import AssetServices from '../services/asset_service';
import { STATUS_CODES } from "http";

class AssetController {

  async createAsset(req: FastifyRequest, rep: FastifyReply) {
    try {
      const data = req.body as any;
      const result = await AssetServices.createAsset(data);
      rep.send({
        status: 200,
        message: "Asset created successfully",
        result
      })
    } catch (error) {
      rep.status(500).send({
        status: 500,
        message: "Internal Server Error",
        error
      })
    }
  }

  async getAsset(req: FastifyRequest, rep: FastifyReply) {
    try {
      const result = await AssetServices.getAsset();
      rep.send({
        status: 200,
        message: "Assets fetched successfully",
        result
      })
    } catch (error: any) {
      rep.status(500).send({
        status: 500,
        message: "Internal Server Error",
        error
      })
    }
  }

  async getAssetById(req: FastifyRequest, rep: FastifyReply) {
    try {
      const { id } = req.params as any;
      const result = await AssetServices.getAssetById(id);
      rep.send({
        status: 200,
        message: "Asset fetched successfully",
        result
      })
    } catch (error: any) {
      rep.status(500).send({
        status: 500,
        message: "Internal Server Error",
        error
      })
    }
  }

  async updateAsset(req: FastifyRequest, rep: FastifyReply) {
    try {
      const { id } = req.params as any;
      const data = req.body as any;

      const result = await AssetServices.updateAsset(id, data);
      rep.send({
        status: 200,
        message: "Asset updated successfully",
        result
      })
    } catch (error: any) {
      rep.status(500).send({
        status: 500,
        message: "Internal Server Error"
      })
    }
  }

  async deleteAsset(req: FastifyRequest, rep: FastifyReply) {
    try {
      const { id } = req.params as any;
      const result = await AssetServices.deleteAsset(id);
      rep.send({
        status: 200,
        message: "Asset deleted successfully",
        result
      })
    } catch (error: any) {
      rep.status(500).send({
        status: 500,
        message: "Internal Server Error"
      })
    }
  }

  async getassetPagination(req:FastifyRequest,rep:FastifyReply){
    try{
           const {page=1,limit=10} = req.query as any
           const result=await AssetServices.getAssetPagination(Number(page),Number(limit));
           rep.send({
            status:200,
            message:"Fetch data sucessfully",
            pagination:{
              page:Number(page),
              limit:Number(limit),
              total:result.total,
              totalPages:Math.ceil(result.total/Number(limit))
            },
            data:result.data
           })

    }catch(error:any){
      rep.status(500).send({
        status:500,
        message:"Internal Server Error",
        error:error
      })
    }
  }

  async getAssetName(req:FastifyRequest,rep:FastifyReply){
    try{
          const {asset_name,asset_company}=req.query as any;
          const result=await AssetServices.getassetName(asset_name);
          rep.send({
            status:200,
            message:"get asset sucessfully",
            data:result
          })
    }catch(error:any){
      throw error
    }
  }

   async getAssetColor(req:FastifyRequest,rep:FastifyReply){
    try{
          const filter=req.query as any;
          const {asset_name}=filter
          const result=await AssetServices.getassetName(filter);
          rep.send({
            status:200,
            message:"get asset sucessfully",
            data:result
          })
    }catch(error:any){
      throw error
    }
  }

  async getAssetsWithUser(req: FastifyRequest, rep: FastifyReply) {
  try {
    const result = await AssetServices.getAssetsWithUser();
    rep.send({
      status: 200,
      message: "Assets with user fetched successfully",
      result
    })
  } catch (error) {
    rep.status(500).send({
      status: 500,
      message: "Internal Server Error",
      error
    })
  }
}

async getAssetByIdWithUser(req: FastifyRequest, rep: FastifyReply) {
  try {
    const { id } = req.params as any;
    const result = await AssetServices.getAssetByIdWithUser(id);

    rep.send({
      status: 200,
      message: "Asset fetched successfully",
      result
    })
  } catch (error) {
    rep.status(500).send({
      status: 500,
      message: "Internal Server Error",
      error
    })
  }
}


}

export default new AssetController();
