const { ObjectId } = require('mongodb');
const mongodb = require('../db/connection');

const isLoggedIn = async (req, res) => {
  try{
        const username = req.params.username;
      const password = req.params.password;
      const result = await mongodb.getDb().db('RandR').collection('User').findOne({ username: username, password: password})
      if(result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({message: 'User Not Found'});
      }
      } catch (err) {
        res.status(500).json({message: err.message || 'Cannot Get User'});
      }
  };

  