import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Card from './Card';
import Cart from './Cart';
import { useState } from 'react';


function App() {
  const[products,setproducts]=useState([
     {
        id:1,
        title:"iPhone",
        price: 105000,
        imageUrl:"./imac.jpg",
      },
      {
        id:2,
        title:"iMac",
        price: 115000,
        imageUrl:"./imac.jpg",
      },
      {
        id:3,
        title:"iPad",
        price: 60000,
        imageUrl:"./imac.jpg",
      },
      {
        id:4,
        title:"iWatch",
        price: 30000,
        imageUrl:"./imac.jpg",
      },
      {
        id:5,
        title:"iCover",
        price: 20000,
        imageUrl:"./imac.jpg",
      },
      {
        id:6,
        title:"Marshall",
        price: 50000,
        imageUrl:"./imac.jpg",
      },
  ])
  
  const [cart,setcart] =useState([]);
  const [total,setTotal]=useState(0);
  let addToCart=(list)=>{
   setcart([...cart,list])
   setTotal(total+list.price);
  } 
  
  
  let removeFromCart=(ele)=>{
     let index=cart.findIndex((obj)=> obj.id==ele.id);
     cart.splice(index,1);
     setcart([...cart]);
     setTotal(total-ele.price);
  }
 return (
    <div class="container">
     <div class="row">
        <div class="col-lg-8">
            <div class="row">
               {
                products.map((list)=>{
                  return <Card list={list} ele={cart}  handletoCart={addToCart}></Card>
                })
               }
          </div>
      </div>
    
        <div class="col-lg-4">
            <div class="row col-lg-12">
                {/* <Cart></Cart>
                <Cart></Cart>
                <Cart></Cart> */}
                <ol class="list-group list-group-numbered">
                {
                  cart.map((ele)=>{
                    return <Cart ele={ele} removeFromCart={removeFromCart}></Cart>
                  })
                }
                </ol>
            </div>
            <h1>
              {/* Total-{total} */}
              {
                cart.length==0?"No items in cart":`Total-${total}`
              }
            </h1>
        </div>
    </div> 
</div>

);
}
export default App;