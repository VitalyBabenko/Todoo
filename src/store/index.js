import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const defaultState = {
   lists: [],
   tasks: [],
   isLoading: true,
   isError: false,
   isBurgerChecked: false
}

const GET_ALL_LISTS = "GET_ALL_LISTS";
const CREATE_LIST = "CREATE_LIST";
const DELETE_LIST = "DELETE_LIST";


const GET_ALL_TASKS = "GET_ALL_TASKS";
const CREATE_TASK = "CREATE_TASK";
const DELETE_TASK = "DELETE_TASK";
const TOGGLE_DONE = "TOGGLE_DONE";


const LOADING = "LOADING";
const ERROR = "ERROR";


const TOGGLE_BURGER = "TOGGLE_BURGER";


export const reduser = (state = defaultState, action) => {
   switch (action.type) {

      case GET_ALL_LISTS:
         return  {...state, lists: [...action.payload]}
      case CREATE_LIST: 
         return { ...state, lists: [...state.lists, action.payload] }
      case DELETE_LIST:
         return { ...state, lists: state.lists.filter(listItem => +listItem.id !== +action.payload.id) }
      
      
      case GET_ALL_TASKS:
         return {...state, tasks: [...action.payload]}
      case CREATE_TASK: 
         return {...state, tasks: [...state.tasks,action.payload]}
      case DELETE_TASK:
         return {...state, tasks: state.tasks.filter(task => task.id !== action.payload.id)}
      case TOGGLE_DONE:
         return {...state, tasks: state.tasks.map(task => task.id === action.payload.id ? {...task, done: !task.done}  : task )}

      
      case LOADING:
         return { ...state, isLoading: action.payload }
      case ERROR:
         return { ...state, isError: action.payload }

      
      case TOGGLE_BURGER:
         return { ...state, isBurgerChecked: action.payload}
   

      default: return state;
   }
}
export const getAllListsAction = (payload) => ({ type: GET_ALL_LISTS, payload });
export const createListAction = (payload) => ({ type: CREATE_LIST, payload });
export const deleteListAction = (payload) => ({ type: DELETE_LIST, payload });


export const getAllTasksAction = (payload) => ({ type: GET_ALL_TASKS, payload })
export const createTaskAction = (payload) => ({ type: CREATE_TASK, payload })
export const deleteTaskAction = (payload) => ({ type: DELETE_TASK, payload })
export const toggleDoneAction = (payload) => ({ type: TOGGLE_DONE, payload })

export const loadingAction = (payload) => ({ type: LOADING, payload })
export const errorAction = (payload) => ({ type: ERROR, payload })

export const toggleBurgerAction = (payload) => ({type:TOGGLE_BURGER,payload})


export const store = createStore(reduser, composeWithDevTools(applyMiddleware(thunk)))


