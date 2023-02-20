import express from 'express'
import { logIn, putInitialData, putIQTest, putPFTest, putSHTest } from './controller.js'
 
const router = express.Router()

router.route('/log-in')
   .post(logIn)

router.route('/initial-data')
   .put(putInitialData)

router.route('/iq-test')
   .put(putIQTest)

router.route('/sh-test')
   .put(putSHTest)

router.route('/pf-test')
   .put(putPFTest)


export default router
