import React, { useEffect } from 'react'
import Markdown from 'markdown-to-jsx'

import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getReadme } from '../redux/reducers/repositories'
import Header from './header'

const Repo = () => {
  const reponame = useSelector((store) => store.repositories.readme)
  const { usename: userNameParams, repositoryname: repoNameParams } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getReadme(userNameParams, repoNameParams))
  }, [reponame])

  return (
    <div>
      <Header />
      <Markdown>{reponame}</Markdown>
    </div>
  )
}

Repo.propTypes = {}

export default Repo
