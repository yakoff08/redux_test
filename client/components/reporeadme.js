import React, { useEffect } from 'react'
import Markdown from 'markdown-to-jsx'

import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getReadme } from '../redux/reducers/repos'

const Reporeadme = () => {
  const file = useSelector((store) => store.repos.file)
  const dispatch = useDispatch()
  const { usename: usernameParams, repository: repoParams } = useParams()

  useEffect(() => {
    dispatch(getReadme(usernameParams, repoParams))
  }, [file])

  return <Markdown>{file}</Markdown>
}

Reporeadme.propTypes = {}

export default Reporeadme
