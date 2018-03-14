import {combineReducers} from 'redux'
// import {routerReducer} from 'react-router-redux'
import projects from './projects'
import navigation from "./navigation";

export default combineReducers({
  // router: routerReducer,
  navigation,
  projects
})