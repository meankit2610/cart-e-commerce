import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import {useDispatch, useSelector} from "react-redux"

const Cart = () => {
  const { cartItems, subTotal, tax, shipping, total} = useSelector(
    (state) => state.cart
  )

  const dispatch = useDispatch();
  
  const increment = (options) => {
    console.log(options.id, "hii");
    dispatch({
      type: "addToCart",
      payload: options,
    });
  };
  const decrement = (options) => {
    dispatch({
      type: "decrement",
      payload: options,
    });
  }
      const deleteHandler = (id) => {
        dispatch({
          type: "deleteFromCart",
          payload: id,
        });
    }   
  
  
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>No Items Yet</h1>
        )}
      </main>

      <aside>
        <h2>Subtotal:${subTotal}</h2>
        <h2>Shipping:${shipping}</h2>
        <h2>Tax:${tax}</h2>
        <h2>Total:${total}</h2>
      </aside>
    </div>
  );
}

const CartItem = ({
  name,
  imgSrc,
  price,
  qty,
  increment,
  decrement,
  deleteHandler,
  id,
}) => (
  <div className="cartItem">
    <img src={imgSrc} alt={name} />
    <article>
      <h3>{name} </h3>
      <p>${price}</p>
    </article>
    <div>
      <button
        onClick={() => increment({ name, price, id, quantity: 1, imgSrc })}
      >
        +
      </button>
      <p>{qty}</p>
      <button onClick={() => decrement({ id })}>-</button>
    </div>

    <AiFillDelete onClick={() => deleteHandler({ id })} />
  </div>
);

export default Cart
