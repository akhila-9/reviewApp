import React, { useState } from 'react'
import "./reviewApp.css"
import MovingBtn from '../MovingBtn/MovingBtn'

const ReviewApp = ({reviewlist}) => {
  const[index,setindex]=useState(0)
  console.log(reviewlist)
  return (<>
    <div className='entirecontainer'>
  <div className='heading'>Reviews</div>
  <div className='imagesStyles'>
    
      

    <img src={reviewlist[index].imgUrl} className='imgstyle'/>
   
   
  </div>
  
    </div>
    <MovingBtn  list={reviewlist } index={index} setindex={setindex}/>
    </>)
}

export default ReviewApp
