# Todoo App

Todoo - a simple task manager that will help you sort all the tasks into categories


### Screenshot:
![TodooApp screenshot](https://github.com/VitalyBabenko/Todoo/blob/main/public/img/TodooAppScreenshot.png?raw=true)


## Running:

### To start the project, you need to perform several actions:

1. Сlone the repository
2. Go to project folder
3. Install node_modules
4. Start development server



### Console commands:
```
git clone https://github.com/VitalyBabenko/Todoo.git
cd Todoo
npm install
npm start
```
This will run locally and listening on port 3000 (http://localhost:3000)


## API 

The application uses [Mockapi](https://mockapi.io/) as a database in the file Service.js, <br>
in this file you can replace baseURL and connect your database.

```js
const axiosСlassic = axios.create({
   baseURL: $yourLink
})
```




