import React from 'react'
import "./MovingBtn.css"

const MovingBtn = ({list ,index ,setindex}) => {
    const rightarrow=()=>{
        if (index <list.length -1){
            setindex(index+1)
        }
      
    }
    const leftarrow=()=>{
        if (index >0){
            setindex(index-1)
        }
       

    }
  return (
    <>
    <div className='paracontainer'>
    <div className='movingDiv'>
     
      <div  onClick={leftarrow}><img src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png" className='styles'/></div>
      <div className='kk'>{list[index].username}</div>
      <div onClick={rightarrow}><img src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png" className='styles'/></div>

    </div>
    <div className='lll'>
    <div className='kkk'>{list[index].companyName}</div>
     <div className='kkkk'>{list[index].description}</div>
     </div>
     </div>
   
    </>
  )
}

export default MovingBtn
