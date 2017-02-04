import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div> 
        <h1><a id="An_Express_Server_and_ReactJS_Client_0"></a>An Express Server and ReactJS Client</h1>
        <p>The purpose of this project was to create a simple solution for implementing a front-end client powered by React on a Node.js Express server.</p>
        <h5>
          The following message data is being retrieved from the server to further illustate server-side functionality and authorization working within the app:
        </h5>  
        <p className="server_message">
            {this.props.message}
        </p>
        <hr />
        <p>This project includes:</p>
        <ul>
          <li><strong>JWT</strong> =&gt; used for token creation</li>
          <li><strong>MongoDB</strong> =&gt; used for NOSQL database</li>
          <li><strong>Axios</strong> =&gt; used for Promise based HTTP requests</li>
          <li><strong>Passport</strong> =&gt; used for user authentication</li>
          <li>Various libraries within the <strong>React</strong> &amp; <strong>Redux</strong> ecosystems</li>
        </ul>
        <h2><a id="Run_the_code_13"></a>Run the code</h2>
        <blockquote>
          <p>Install and set up MongoDB, if not already installed on your local computer.</p>
        </blockquote>
        <p>Start your instance of MongoDB:</p>
        <pre>
          {`mongod `}
        </pre>
        <p>OR</p>
        <pre>{`sudo mongod`
        }</pre>
        <p>Within the /client directory run:</p>
        <pre>{
          `
npm install
npm run start`}
        </pre>
        <p>In order to run server you will need to create a config.js file in the root of the /server directory.</p>
        <p><strong>config.js</strong>
        </p>

        <pre>{`module.exports = {
  secret: "YOUR_SECRET_HERE"
}`}
        </pre>
        <p>Within the /server directory run:</p>
        <pre>{`npm install
npm run dev`}
        </pre>
        <h3><a id="Things_to_note_59"></a>Things to note</h3>
        <ul>
          <li>
            <p>Express server built from scratch</p>
          </li>
          <li>
            <p>Minimal use of ReactJS boilerplate for client: Stephen Grider’s <a href="https://github.com/StephenGrider/ReduxSimpleStarter">ReduxSimpleStarter</a>
            </p>
          </li>
          <li>
            <p>Testing will be added (I know, I know, I should’ve been doing TDD 🙈)</p>
          </li>
        </ul>
        <h5><a id="Made_with__from_my_basement_67"></a>Made with 💚 from my basement</h5>
        <p>— C.C.</p>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Feature);