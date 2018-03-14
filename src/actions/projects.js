import uuid from 'uuid/v4'
import * as actions from '../const/projects'

export const addProject = (title, compose) => ({
  type: actions.ADD_PROJECT,
  payload: {
    id: uuid(),
    title,
    compose
  }
});

export const removeProject = (id) => ({
  type: actions.REMOVE_PROJECT,
  payload: {id}
});

export const editProject = (id, title, compose) => ({
  type: actions.EDIT_PROJECT,
  payload: {
    id, title, compose
  }
});