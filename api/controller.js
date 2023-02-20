import asyncHandler from "express-async-handler";
import Assessment from "../mongodb/models/Assessment.js";

export const logIn = asyncHandler(async (req, res) => {
  try {
    let assessment;
    assessment = await Assessment.findOne({ email: req.body.email });
    if (assessment) {
      res.status(200).json(assessment._doc);
    } else {
      const newAssessment = new Assessment({
        step: "1",
        email: req.body.email,
      });
      await newAssessment.save();
      res.status(200).json(newAssessment._doc);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

export const putInitialData = asyncHandler(async (req, res) => {
  try {
    let assessment = await Assessment.findById(req.body._id);
    if (assessment) {
      assessment.schoolType = req.body.schoolType;
      assessment.schoolGrade = req.body.schoolGrade;
      assessment.birthday = req.body.birthday;
      assessment.gender = req.body.gender;
      assessment.step = "2";
      await assessment.save();
      res.status(200).json(assessment._doc);
    } else {
      res.status(404).json({message:'کاربر یافت نشد. لطفا دوباره وارد شوید.'});
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

export const putIQTest = asyncHandler(async (req, res) => {
  try {
    let assessment = await Assessment.findById(req.body._id);
    if (assessment) {
      assessment.IQ = req.body.IQ;
      assessment.step = "3";
      await assessment.save();
      res.status(200).json(assessment._doc);
    } else {
      res.status(404).json({message:'کاربر یافت نشد. لطفا دوباره وارد شوید.'});
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

export const putSHTest = asyncHandler(async (req, res) => {
  try {
    let assessment = await Assessment.findById(req.body._id);
    if (assessment) {
      assessment.SH = req.body.SH;
      assessment.step = "4";
      await assessment.save();
      res.status(200).json(assessment._doc);
    } else {
      res.status(404).json({message:'کاربر یافت نشد. لطفا دوباره وارد شوید.'});
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

export const putPFTest = asyncHandler(async (req, res) => {
  try {
    let assessment = await Assessment.findById(req.body._id);
    if (assessment) {
      assessment.PF = req.body.PF;
      assessment.step = "5";
      await assessment.save();
      res.status(200).json(assessment._doc);
    } else {
      res.status(404).json({message:'کاربر یافت نشد. لطفا دوباره وارد شوید.'});
    }
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

