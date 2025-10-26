const { ObjectId } = require('mongodb');
const mongodb = require('../db/connection');

const getAllExercises = async (req, res) => {
  try {
    const result = await mongodb.getDb().db('RandR').collection('Exercise').find().toArray();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

const getExerciseById = async (req, res) => {
  res.status(200).json({message: 'Get exercise by ID - Not yet implemented'});
};

const createExercise = async (req, res) => {
  const newExercise = {
      "name": req.body.name,
      "description": req.body.description,
      "dificulty": req.body.dificulty, 
      "isVariation": req.body.isVariation, 
      "progressionOrder": req.body.progressionOrder,
      "muscleGroups": req.body.muscleGroups,
      "equipment": req.body.equipment,
      "videoUrl": req.body.videoUrl
    }
 const create = await mongodb.getDb().db('RandR').collection('Exercise').insertOne(newExercise);
  if(create.acknowledged)
    {
      res.status(201).json({message: "Exercise Created"})
    }else{
  res.status(400).json(err || 'an error occurred while saving the exercise');
 }
};

const updateExercise = async (req, res) => {
  const updateExercise = {
      "name": req.body.name,
      "description": req.body.description,
      "dificulty": req.body.dificulty, 
      "isVariation": req.body.isVariation, 
      "progressionOrder": req.body.progressionOrder,
      "muscleGroups": req.body.muscleGroups,
      "equipment": req.body.equipment,
      "videoUrl": req.body.videoUrl
    }
  const id = new ObjectId(req.params.id);
  const update = await mongodb.getDb().db('RandR').collection('Exercise').replaceOne({_id: id}, updateExercise);
  if(update.modifiedCount > 0)
    {
      res.status(204).send();
    }else{
  res.status(400).json(err || 'an error occurred while updating the exercise');
 }
};

const deleteExercise = async (req, res) => {
  const id = new ObjectId(req.params.id);
  const del = await mongodb.getDb().db('RandR').collection('Exercise').deleteOne({_id: id});
  if(del.deletedCount > 0)
    {
      res.status(204).send();
    }else{
  res.status(400).json(err || 'an error occurred while deleting the exercise');
 }
};

module.exports = {
  getAllExercises,
  getExerciseById,
  createExercise,
  updateExercise,
  deleteExercise
};