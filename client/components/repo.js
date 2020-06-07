import React, { useEffect } from 'react'
import Markdown from 'markdown-to-jsx'

import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getReadme } from '../redux/reducers/repositories'
import Header from './header'

const Repo = () => {
  const reponame = useSelector((store) => store.repositories.readme)
  const { username: userNameParams, repositoryname: repoNameParams } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getReadme(userNameParams, repoNameParams))
    if (typeof username !== 'undefined' && typeof repository !== 'undefined') {
      dispatch(getReadme(userNameParams, repoNameParams))
    }
  }, [dispatch, userNameParams, repoNameParams])

  return (
    <div>
      <Header />
      <Markdown>{reponame}</Markdown>
    </div>
  )
}

Repo.propTypes = {}

export default Repo
