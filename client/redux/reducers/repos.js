import axios from 'axios'

const UPDATE_USER_NAME = 'UPDATE_USER_NAME'
const SET_REPOSITORIES = 'SET_REPOSITORIES'
const GET_README = 'GET_README'

const initialState = {
  username: 'ovasylenko',
  list: [],
  file: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_NAME:
      return {
        ...state,
        username: action.username
      }
    case SET_REPOSITORIES:
      return {
        ...state,
        list: action.list
      }
    case GET_README:
      return {
        ...state,
        file: action.file
      }
    default:
      return state
  }
}

export function updateUsername(username) {
  return { type: UPDATE_USER_NAME, username }
}

export function setRepositories(username) {
  return function (dispatch) {
    axios(`https://api.github.com/users/${username}/repos`).then(({ data }) => {
      dispatch({ type: SET_REPOSITORIES, list: data })
    })
  }
}

export function getReadme(username, reponame) {
  const headers = { Accept: 'application/vnd.github.VERSION.html' }
  return function (dispatch) {
    axios(`https://api.github.com/repos/${username}/${reponame}/readme`, {
      param: {},
      headers
    }).then(({ data }) => {
      dispatch({ type: GET_README, file: data })
    })
  }
}
