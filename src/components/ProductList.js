import React from 'react'
import { useSearchParams } from 'react-router-dom';

export const ProductList = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('xyz'));
  console.log(searchParams.get('abc'));
  return (
    <div>ProductList </div>
  )
}
