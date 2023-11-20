import React from 'react'
import { ShirtsData } from '../components/Data';
import Card from '../components/Card';

function Shirts() {
  return (
    <ul>
      {ShirtsData.map((item, index) => (
        <li key={index}>
          <div className="item">
            <Card {...item} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Shirts
