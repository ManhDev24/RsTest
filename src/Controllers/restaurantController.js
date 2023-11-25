
import initModels from "../Models/init-models.js";
import {Sequelize} from 'sequelize';
import sequelize from "../Models/connect.js";
import responseData from '../config/response.js'

let model = initModels(sequelize);
let op =Sequelize.op;


export const resLike = async(req,res)=>{
    try {
        let {userId,resId} = req.body;

        let check = await model.like_res.findOne({
            where:{
                user_id:userId,
                res_id:resId
            }
        })
        if(!check){
            let newData = {
                user_id:userId,
                res_id:resId,
                date_like: new Date()
            }
            await model.like_res.create(newData);

        }
        responseData(res, "Like thanh cong", "token", 200);
    } catch  {
        responseData(res, "Lỗi ...", "", 500);
    }
    
}