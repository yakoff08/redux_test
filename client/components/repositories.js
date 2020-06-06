import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { updateUsername, setRepositories } from '../redux/reducers/repositories'
import Header from './header'

const Repositories = () => {
  const username = useSelector((store) => store.repositories.username)
  const repos = useSelector((store) => store.repositories.list)

  const { username: userNameParams } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateUsername(userNameParams))
    dispatch(setRepositories(userNameParams))
  }, [userNameParams])

  return (
    <div>
      <Header />
      {repos.map((it) => {
        return (
          <div key={it}>
            <Link to={`/${username}/${it.name}`}>{it.name}</Link>
          </div>
        )
      })}
    </div>
  )
}

Repositories.propTypes = {}

export default Repositories
