import React from 'react'
import { abilities } from '../constants'
import { div } from 'three/tsl'

const FeatureCards = () => {
  return (
    <div className="w-full padding-g-lg">
      <div className="mx-auto grid-3-col">
        {abilities.map(({ imgPath, title, desc }) => (
          <div key={title} className="card-border rounded-xl p-8 flex flex-col gap-4">
            <div>
              
            </div>
            <h3>{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureCards
