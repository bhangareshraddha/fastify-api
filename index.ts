
import Fastify from 'fastify';
import sequelize from './src/db/connection'; // ✅ Sequelize instance
import dotenv from 'dotenv';
import userRoute from './src/route/user_route';
import adminRoute from './src/route/admin_route';
import assetRoute from './src/route/asset_route';
import categoryRoute from './src/route/category_route';

dotenv.config();

const app = async () => {
  
  const app=Fastify({logger:true}) 

  await sequelize.authenticate();

  console.log("DB CONNECT SUCESSFULLY");
  
  await sequelize.sync({alter:true});

  const PORT:any=process.env.Port || 3000

  app.register(userRoute);
  app.register(adminRoute);
  app.register(assetRoute);
  app.register(categoryRoute);

  app.listen({port:PORT},async()=>{
    console.log(`server is running on port ${PORT}`)
  })

  console.log("Connected DB =", process.env.DB_NAME);


};

app();