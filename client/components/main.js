import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
import { history } from '../redux'
import { updateUsername } from '../redux/reducers/repos'

const Main = () => {
  const dispatch = useDispatch()
  const username = useSelector((store) => store.repos.username)

  const onChange = (e) => {
    dispatch(updateUsername(e.target.value))
  }

  const onClick = () => {
    history.push(`/${username}`)
  }

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-teal-400 font-bold rounded-lg border shadow-lg p-10">
          <input
            id="input"
            className="border rounded py-2 px-3 text-black mr-2 mt-2"
            type="text"
            value={username}
            onChange={onChange}
          />
          <button
            className="bg-white hover:bg-gray-100 text-black font-semibold py-2 px-3 mt-2 border border-gray-400 rounded shadow"
            onClick={onClick}
            id="search-button"
            type="button"
          >
            {/* <Link to={`/${username}`}>Go to repos list</Link> */}
          </button>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
