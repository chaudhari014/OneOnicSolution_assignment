import React from 'react'

const Product = ({product,category,getCategory}) => {

  return (
    <div className='maindiv'>
        
        <div className='categoryName '>
            <h1>Category</h1>
            {
              category.map((el,i)=>(
                <p key={i} onClick={(event)=>{
                  
                    getCategory(event.target.textContent)}}> {el.name} </p>
              ))
            }
        </div>
    <div className='mainContainer'>
       {
        product.map((el)=>(
            <div key={el?._id} className='product'>
               <div><img src={el?.img} alt={el?.name} /></div>
               <h2>{el?.name}</h2>
               <h3>{el?.category || el?.category?.name}</h3>

               <p>price:{el?.price || 5000}</p>
            </div>
        ))
       }
    </div>
    </div>
  )
}

export default Product
