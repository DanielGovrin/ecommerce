import React from 'react'
import { HatsData } from '../components/Data'
import Card from '../components/Card';
import { CardItem } from '../components/datatypes';

function Hats() {
  return (
    <ul>
      {HatsData.map((item, index) => (
        <li key={index}>
          <div className="item">
            <Card {...item} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Hats
