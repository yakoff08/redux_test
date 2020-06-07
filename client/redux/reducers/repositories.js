import axios from 'axios'

const UPDATE_USER_NAME = 'UPDATE_USER_NAME'
const SET_REPOSITORIES = 'SET_REPOSITORIES'
const GET_README = 'GET_README'

const initialState = {
  username: 'yakoff08',
  list: [],
  readme: ''
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
        readme: action.readme
      }
    default:
      return state
  }
}

export function updateUsername(username) {
  return { type: UPDATE_USER_NAME, username }
}

export function setRepositories(username) {
  return function set(dispatch) {
    axios(`https://api.github.com/users/${username}/repos`).then(({ data }) => {
      dispatch({
        type: SET_REPOSITORIES,
        list: data
      })
    })
  }
}

export function getReadme(username, repositoryname) {
  const headers = { Accept: 'application/vnd.github.VERSION.raw' }
  return function set(dispatch) {
    axios
      .get(`https://api.github.com/repos/${username}/${repositoryname}/readme`, {
        param: {},
        headers
      })
      .then(({ data }) => {
        dispatch({ type: GET_README, readme: data })
      })
  }
}
