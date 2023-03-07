import React from 'react'
import Button from './Button'
const list = ["ALL","GAMING","MUSIC","MOVIES","LIVE","CRICKET","MOVIES","LIVE","CRICKET","LIVE","CRICKET"]
const ButtonList = () => {
  const items = list.map((item,index)=>{
    return <Button name={item} key={index}/>;

  })
  return (
    <div  style={{
      display: 'flex',
      overflowX: 'auto',
      flexWrap:'wrap',
    }} className='flex'>

   {items}
  

    </div>
  )
}

export default ButtonList