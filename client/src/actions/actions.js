import axios from 'axios';
const URL = 'http://localhost:4000/api';
const URL_SCORE = 'http://localhost:4000/scores';

export const getData = () => async (dispatch) => {
  try {
    const result = await axios.get(URL);
    dispatch({
      type: 'GET_DATA',
      payload: result.data.body,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setCategories = (data) => async (dispatch) => {
  try {
    dispatch({
      type: 'SELECT_CATEGORIES',
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const dataCategories = () => (dispatch) => {
  try {
    dispatch({
      type: 'DATA_CATEGORIES'
    });
  } catch (error) {
      console.log(error)
  }
};


export const getScore = () => async (dispatch) => {
  try{
    const result = await axios.get(URL_SCORE);
    const data = Object.keys(result.data.body.data).map(item => result.data.body.data[item]);
    dispatch({
      type: 'GET_SCORE',
      payload: data
    })
  } catch (error) {
    console.log(error)
  }
}

export const saveName = (name) => async (dispatch) => {
  try{
    dispatch({
      type: 'SAVE_NAME',
      payload: name
    })
  } catch (error) {
    console.log()
  }
}