import React from 'react'
import { abilities } from '../constants'

const FeatureCards = () => {
  return (
    <div className='w-full padding-g-lg'>
    <div className='mx-auto grid-3-col'>
      {abilities}
    </div> 
    </div>
  )
}

export default FeatureCards
