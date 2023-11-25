import express  from 'express'
import { resLike } from '../Controllers/restaurantController.js ';

const restaurantRoutes=express.Router();

restaurantRoutes.post("/like",resLike)
export default restaurantRoutes;