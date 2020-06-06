import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { username, repositoryname } = useParams()
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 bg-blue-900 bg-auto bg-center">
      <div className="flex items-center flex-shrink-0 text-teal-100 mr-6 ">
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-512.png"
          alt="Git logo"
          width="50"
          height="50"
        />
        <div className="ml-4" id="repository-name">
          {repositoryname || username || 'GIT REPO FINDER'}
        </div>
      </div>
      {username && (
        <div className="text-teal-100" id="go-back">
          <Link to="/">Search</Link>
        </div>
      )}
      {repositoryname && (
        <div className="text-teal-100" id="go-repository-list">
          <Link to={`/${username}`}>List of Repositories</Link>
        </div>
      )}
    </nav>
  )
}

export default React.memo(Header)
