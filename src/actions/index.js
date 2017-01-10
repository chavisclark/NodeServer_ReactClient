import axios from 'axios';
import { browserHistory } from 'react-router';

const API_URL = 'http://localhost:3090';

export function signinUser({email, password}) {
  return function (dispatch) {
    //Submit email & password to server
    axios.post(`${API_URL}/siginin`, {email, password})
      .then(response => {
        //If request is good...
        // + Update state to indicate user is authenticated
        // + Save the JWT token
        
        // + redirect to accessible resource
        browserHistory.push('/feature');
      })
      .catch(response => {
        //If request is bad
        // - Shoe an error to user
      })
  }
}