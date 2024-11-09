import React from 'react'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';

export const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  const params = useParams();
  console.log(searchParams.getItem('abc'));
  return (
    <div className='component'>ProductDetail - {params.id}</div>
  )
}
