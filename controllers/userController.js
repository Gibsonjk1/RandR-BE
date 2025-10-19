const { ObjectId } = require('mongodb');
const mongodb = require('../db/connection');

const getAllUsers = async (req, res) => {
  try {
    const result = await mongodb.getDb().db('RandR').collection('User').find().toArray();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};


const getUserById = async (req, res) => {
    try{
    const id = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('RandR').collection('User').findOne({ _id: id})
    res.status(200).json(result);
    } catch (err) {
      res.status(500).json({message: err.message || 'Cannot Get User'});
    }
}
const createUser = async (req, res) => {
    const newUser = {
      "username": req.body.username,
      "email": req.body.email,
      "firstName": req.body.firstName,
      "lastName": req.body.lastName,
      "password": req.body.password
    }
 const create = await mongodb.getDb().db('RandR').collection('User').insertOne(newUser);
  if(create.acknowledged)
    {
      res.status(201).json({message: "User Created"})
    }else{
  res.status(400).json(err || 'an error occurred while saving the user');
 }
};

const updateUser = async (req, res) => {
    res.status(200).json({message: 'Update user - Not yet implemented'});
};

const deleteUser = async (req, res) => {
    res.status(200).json({message: 'Delete user - Not yet implemented'});
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
