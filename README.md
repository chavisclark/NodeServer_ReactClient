# An Express Server and ReactJS Client

The purpose of this project was to create a simple solution for implementing a front-end client powered by React on a Node.js Express server. 


This project includes:
* **JWT** => used for token creation
* **MongoDB** => used for NOSQL database
* **Axios** => used for Promise based HTTP requests
* **Passport** => used for user authentication

* Various libraries within the **React** & **Redux** ecosystems


## Run the code

Install and set up MongoDB, if not already installed on your local computer.

```
mongod
```

OR

```
sudo mongod
```


Within the /client directory run:

```
npm install
npm run start
```


In order to run server you will need to create a config.js file in the root of the /server directory. 

**config.js**

```
module.exports = {
  secret: "YOUR_SECRET_HERE"
}

```


Within the /server directory run:

```
npm install
npm run dev
```



### Things to note
* Express server built from scratch

* Minimal use of ReactJS boilerplate for client: https://github.com/Stephen Grider's [ReduxSimpleStarter](https://github.com/StephenGrider/ReduxSimpleStarter)

* Testing will be added (I know, I know, I should've been doing TDD 🙈)


Made with 💚 from my basement
