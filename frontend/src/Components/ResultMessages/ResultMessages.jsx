import React, { Component } from 'react'
// import './styles.scss'
import ResultMessage from '../ResultMessage/ResultMessage'

const ResultMessages = () => {

  const jokes = [
    { 'text': 'Był kiedyś pingwin i zbladł', 'count': 90 },
    { 'text': 'Pan Kracy lubi piasek', 'count': 21 },
    { 'text': 'Pan Hilary kupił zjedzone okulary', 'count': 33 },
    { 'text': 'Ile w domku muszek  tyle przyjdzie duszek', 'count': 0 },
    { 'text': 'Jogurt zjedzony bedzie kupka', 'count': 821 }
  ]
  return (
    <div className={'resultMessagesContainer'}>
      {jokes.map((joke, index) => {
        return <ResultMessage count={joke.count} text={joke.text} />
        
      })}
    </div>
  )
}


export default ResultMessages