import express from 'express'
import { addAssessment } from './../controllers/controller.js'
 
const router = express.Router()

router.route('/')
   .post(addAssessment)


export default router
