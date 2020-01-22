import React from 'react'
import classes from './ConnectionCard.module.scss'

const ConnectionCard = ({connection}) => { 
  return (
    <article className={classes.connectionCard}>
      {connection.name}
    </article>
  )
}

export default ConnectionCard
