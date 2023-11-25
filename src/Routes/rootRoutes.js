import express from 'express'
import restaurantRoutes from './restaurantRoutes.js';

const rootRoutes=express.Router();

rootRoutes.use("/rst",restaurantRoutes)
export default rootRoutes;