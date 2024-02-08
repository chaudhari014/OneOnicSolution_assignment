import React,{useState,useEffect} from 'react'
import Product from '../components/Product'
import UpperSide from '../components/UpperSide'
import API from '../API'
const Home = () => {
   const [product,setProduct]=useState([])
   const [maindata,setMaindata]=useState([])
   const [category,setCategory]=useState([])
  
   const getCategory=(val)=>{
        
        let arr=maindata.filter((el)=>{
          console.log(el.category.trim())
          console.log(val.trim())
          return val.trim()===el.category.trim()
        })
        console.log(arr,val)
        setProduct(arr)
   }

   const sortHandler=(val)=>{
    let data=maindata.slice()
    console.log(data,"before")
    console.log(val)
       if(val==="asc"){
        data.sort((a,b)=> a.name.localeCompare(b.name))
        
       }
       else if(val==="LtoH"){
        data.sort((a,b)=>a.price-b.price)
       }
       else if(val==="HtoL"){
        data.sort((a,b)=>b.price-a.price)
       }
       console.log(data,"after")
       setProduct(data)
   }

    useEffect(()=>{
      const getdata=async()=>{
         try {
         const fetchdata= await fetch(`${API}/api/product`)
        const data=await fetchdata.json()
        console.log(data)
        if(data.data.length>0){
            setProduct(data.data)
            setMaindata(data.data)
        }
       } catch (error) {
        console.log(error)
       }
      }
      getdata()
      const getCategory=async()=>{
         try {
         const fetchdata= await fetch(`${API}/api/category`)
        const data=await fetchdata.json()
        console.log(data)
        if(data.data.length>0){
            setCategory(data.data)
        }
       } catch (error) {
        console.log(error)
       }
      }
       getCategory() 
    },[])
    console.log(category)
  return (
    <div>
      <UpperSide category={category}/>
      <div className='selecttag'>
        <select name="" id="" onChange={(e)=>sortHandler(e.target.value)}>
          <option value="">sort by price</option>
          <option value="LtoH">price low to High</option>
          <option value="HtoL">price High to Low</option>
          <option value="asc">sort by a-z</option>
        </select>
      </div>
      <Product product={product} category={category} getCategory={getCategory}/>
    </div>
  )
}

export default Home
