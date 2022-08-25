import ReactStars from "react-rating-stars-component";
import React from "react";


function Card({list,ele,handletoCart}){
    return <div class="col-lg-4 mb-2">
    <div class="card" style={{width: "17rem" }}>
        <img src={`${list.imageUrl}`} class="card-img-top" alt="https://picsum.photos/200/100" />
        <div class="card-body">
          <h5 class="card-title">{list.title}</h5>
          <p class="card-text">{list.price}</p>
          <small>The rating is: {list.Rating}</small> <br></br>
          <small><ReactStars ratingValue={list.Rating} starDimension={40} /></small>
          
          <button disabled={ele.some((obj)=>obj.id==list.id)} onClick={()=>{handletoCart(list)}} class="btn btn-primary">AddToCart</button>
        </div>
      </div> 
</div>
    
}

export default Card;