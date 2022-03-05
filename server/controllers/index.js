const data = require('../data/index.js');
const axios = require('axios');
require('dotenv').config();

module.exports = {
  getAll: async (req, res) => {
    try {
      res.json({
        status: 200,
        message: 'Success',
        body: data,
      });
    } catch (error) {
      res.json({
        status: 500,
        message: error,
        body: [],
      });
    }
  },
  getScore: async (req, res) => {
    try {
      const options = {
        method: 'GET',
        headers: {
          Accepts: 'application/json',
          'X-Cassandra-Token': process.env.ASTRA_TOKEN,
        },
      };
      const response = await axios.get(process.env.URL, options);
      res.json({
        status: 200,
        message: 'Success',
        body: response.data,
      });
    } catch (error) {
      res.json({
        status: 500,
        message: 'Error',
        body: [],
      });
    }
  },
  postScore: async (req, res) => {
    const { username, score, categories } = req.body;
    
    if(!username | !score || !categories) {
        return res.status(500).json({message: 'Error'});
    }
    
    const data = {
      username,
      score,
      categories
    };


    const options = {
      method: 'POST',
      headers: {
        Accepts: 'application/json',
        'X-Cassandra-Token': process.env.ASTRA_TOKEN,
        'Content-Type': 'application/json',
      },
      data: data,
    };
    axios(process.env.URLPOST, options)
      .then((response) => res.status(200).json(response.data))
      .catch((error) => res.status(500).json({ message: error }));
  },
};
