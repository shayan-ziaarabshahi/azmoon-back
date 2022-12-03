import asyncHandler from 'express-async-handler'
import db from './../../mongodb/db.js'
import Assessment from './../../mongodb/models/Assessment.js'


export const addAssessment = asyncHandler(async (req, res) => {
    //console.log(req.body)
    await db.connect()
    const newAssessment = new Assessment(req.body)
    const assessment = await newAssessment.save()
    //console.log(assessment)
    await db.disconnect()
    res.status(200).json(assessment)
})

