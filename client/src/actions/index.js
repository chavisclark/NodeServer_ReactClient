import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE  } from './types';

const API_URL = 'http://localhost:3090';

export function signinUser({email, password}) {
  return function (dispatch) {
    //Submit email & password to server
    axios.post(`${API_URL}/signin`, {email, password})
      .then(response => {
        //If request is good...
        // + Update state to indicate user is authenticated
        dispatch({type: AUTH_USER});
        // + Save the JWT token
        localStorage.setItem('token', response.data.token);
        // + redirect to accessible resource
        browserHistory.push('/feature');
      })
      .catch(error => {
        //If request is bad
        // - Show an error to user
        dispatch(authError('Bad Login Info!'))
      })
  }
}

export function signupUser({email, password}) {
  return function(dispatch) {
    axios.post(`${API_URL}/signup`, {email, password}, {
      responseType: 'json',
    })
      .then(response => {
          //If request is good...
          // + Update state to indicate user is authenticated
          dispatch({type: AUTH_USER});
          // + Save the JWT token
          localStorage.setItem('token', response.data.token);
          // + redirect to accessible resource
          browserHistory.push('/feature');  
      })
      .catch((error) => {
          dispatch(authError(error.response.data.error))          
      })
  }
}

export function authError (error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signOutUser() {
  localStorage.removeItem('token');
  //trigger action to switch state to unauthorized
  return {
    type: UNAUTH_USER
  }
}

export function fetchMessage(){
  return function(dispatch) {
    axios.get(API_URL, {
      //send headers with axios request with token from localStorage
      headers: {authorization: localStorage.getItem('token') }
    })
      .then(response => {
        //trigger action to fetch the protected resource
        dispatch({ 
          type: FETCH_MESSAGE, 
          payload: response.data.message
        })
      });
  }
}