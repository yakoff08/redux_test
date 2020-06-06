import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { updateUsername, setRepositories } from '../redux/reducers/repos'
// import Header from './header'
// import Head from './head'

const Repos = () => {
  const username = useSelector((store) => store.repos.username)
  const repos = useSelector((store) => store.repos.list)

  const { username: userNameParams } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateUsername(userNameParams))
    dispatch(setRepositories(userNameParams))
  }, [userNameParams])

  return (
    <div>
      {/* <Head title="Hello" /> */}
      {/* <Header /> */}
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

Repos.propTypes = {}

export default Repos
