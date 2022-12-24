import React from 'react'
import {AiFillDelete} from "react-icons/ai"


const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

const Cart = () => {

    const cartItems = [
      {
        name: "Mac Book",
        price: 12000,
        imgSrc: img1,
        id: "asdhajsdbhjabhsjdfdfv",
      },
      {
        name: "Black Shoes",
        price: 490,
        imgSrc: img2,
        id: "sdjfdlaajsdbhjabhsjdfdfv",
      },
    ];

  return (
    <div className='cart'>
          <main>
              {cartItems.length > 0 ? (
                  cartItems.map((i) => (
                      <CartItem
                      imgSrc={i.imgSrc}
                      name={i.name}
                      price={i.price}
                      qty={1}
                      key={i.id}
                      />

                  ))
              ) : (
                      <h1>No Items Yet</h1>
             )} 
          </main>
          
          <aside>
              <h2>Subtotal:</h2>
              <h2>Shipping:</h2>
              <h2>Total:</h2>
          </aside>
    </div>
  )
}

const CartItem = ({name,imgSrc, price, qty }) => (
    <div className='cartItem'>
        <img src={imgSrc}alt= {name} />
            <article>
                <h3>a{name} </h3>
                <p>${price}</p>
        </article>
        <div>
            <button>+</button>
            <p>{qty}</p>
            <button>-</button>
        </div>

        <AiFillDelete/>
    </div>
)

export default Cart
