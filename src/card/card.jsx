import React, { useEffect, useState } from 'react';

import './Card.css'

import '../App.css'

export default function Card({ title, content, imageUrl }) {
  return (
    <div className='card-main'>
      
      <div className="card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>
      </div>
    </div>
  );
}

