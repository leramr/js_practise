import React from 'react'
 export default function Paintings ({title, author, price}) {
  return <div>
    <h2>title {title}</h2>
    <p>author {author}</p>
    <p> price {price}</p>
  </div>
}