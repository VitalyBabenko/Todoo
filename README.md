# Todoo App

Todoo - a simple task manager that will help you sort all the tasks into categories

![TodooApp screenshot](https://raw.githubusercontent.com/VitalyBabenko/Todoo/511371daa99282954b9245d3d14d687a9084af1e/public/img/logo.svg)
<br>

## Running:
---
<br>

### To start the project, you need to perform several actions:

1. Сlone the repository
2. Go to project folder
3. Install node_modules
4. Start development server

<br>

### Console commands:
```
git clone https://github.com/VitalyBabenko/Todoo.git
cd Todoo
npm install
npm start
```
This will run locally and listening on port 3000 (http://localhost:3000)
<br>
<br>
## API 
---
The application uses [Mockapi](https://mockapi.io/) as a database in the file Service.js, <br>
in this file you can replace baseURL and connect your database.

```js
const axiosСlassic = axios.create({
   baseURL: $yourLink
})
```




