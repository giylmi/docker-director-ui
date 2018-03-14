import {combineReducers} from 'redux';
import * as actions from '../const/projects'

const byId = (state = {}, action) => {
  switch (action.type) {
    case actions.REMOVE_PROJECT:
      return {
        ...state,
        [action.payload.id]: undefined
      };
    case actions.ADD_PROJECT:
    case actions.EDIT_PROJECT:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    default:
      return state;
  }
};

const all = (state = [], action) => {
  switch (action.type) {
    case actions.REMOVE_PROJECT:
      return state.filter(project => project !== action.payload.id);
    case actions.ADD_PROJECT:
      return state.concat(action.payload.id);
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  all
});

export const getProjectById = (state, id) => (
    state.byId[id]
);

export const getProjects = (state) => (
    state.all.map(id => state.byId[id])
);

export const getProjectsLength = (state) => (
    state.all.length
);