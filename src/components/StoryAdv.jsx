import React from 'react'
import { useSelector } from 'react-redux';
import StoryData from './StoryData';

function StoryAdv() {
  const { selectedProduct } = useSelector(state => state.products)
  const data = selectedProduct.Storyadvenure;
  console.log(data);

  if (data.content.length === 0) {
    return (
      <h1 className='text-center'>
        No Content Found...
      </h1>
    )
  }

  return (
    <div>
      <h1 className='text-center'>{data.Storytitle}</h1>
      {
        data.content.map((item) => <StoryData key={item._id} item={item} />)
      }
    </div>
  )
}

export default StoryAdv
