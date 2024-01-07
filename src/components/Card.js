// import React, { useEffect, useRef, useState } from "react";
// import {useDispatchCart, useCart} from './ContextReducer'


// const Card = (props) => {
 
//   let priceOptions = Object.keys(options);
//   let foodItem = props.item;
//   let dispatch = useDispatchCart()
//   let data = useCart()
//   const priceRef = useRef()
//  let options = props.options;
//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState("")
//   // let foodItem =props.foodItems;
//   const handleAddToCart =async() =>{

//     let food = []
//     for (const item of data) {
//       if (item.id === foodItem._id) {
//         food = item;

//         break;
//       }
//     }
//     console.log(food)
//     console.log(new Date())
//     if (food !== []) {
//       if (food.size === size) {
//         await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
//         return
//       }
//       else if (food.size !== size) {
//         await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
//         console.log("Size different so simply ADD one more to the list")
//         return
//       }
//       return
//     }
//     await dispatch({type:"ADD",id:props.foodItem._id, name:props.foodItem.name, price:finalPrice, qty:qty, size:size})
//     // console.log(data)
//   }
//   let finalPrice = qty * parseInt(options[size])
//   useEffect(() =>{
//     setSize(priceRef.current.value)
//   },[])

//   return (
//     <div>
//       <div>
//         <div className="card mt-3" style={{ width: "18rem", maxHeight: "360" }}>
//           <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"150px", objectFit:"fill"}}/>
//           <div className="card-body">
//             <h5 className="card-title">{props.foodItem.name}</h5>
            
//             <div className="container w-100">
//               <select className="m-2 h-100 bg-success rounded" onChange={(e)=>setQty(e.target.value)}>
//                 {Array.from(Array(6), (e, i) => {
//                   return (
//                     <option key={i + 1} value={i + 1}>
//                       {i + 1}
//                     </option>
//                   );
//                 })}
//               </select>

//               <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
//                 {
//                   priceOptions.map((data) =>{
//                     return <option key={data} value={data}>{data}</option>
//                   })
//                 }
//               </select>

//               <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
//             </div>
//             <hr/>
//             <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add to Cart</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;




// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatchCart, useCart } from './ContextReducer';

// export default function Card(props) {
//   const data = useCart();
//   const navigate = useNavigate();
//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState('');
//   const priceRef = useRef();
//   const dispatch = useDispatchCart();

//   let options =props.options;
//   let priceOptions =Object.keys(options)
//   let foodItem =props.item;


//   const handleClick = () => {
//     if (!localStorage.getItem('token')) {
//       // navigate('/login');
//     }
//   };

//   const handleQty = (e) => {
//     setQty(e.target.value);
//   };

//   const handleOptions = (e) => {
//     setSize(e.target.value);
//   };

//   const handleAddToCart = async () => {
//     let food = [];

//     // Check if props.item is defined and has _id property
//     // const itemId = props.item && props.item._id;

//     for (const item of data) {
//       if (item.id === foodItem._id) {
//         food = item;
//         break;
//       }
//     }

//     console.log(food);
//     console.log(new Date());

//     if (food.length !== 0) {
//       if (food.size === size) {
//         await dispatch({ type: 'UPDATE', id: foodItem._id, price: finalPrice, qty: qty });
//         return;
//       } else if (food.size !== size) {
//         await dispatch({
//           type: 'ADD',
//           id: foodItem._id,
//           name: props.foodName,
//           price: finalPrice,
//           qty: qty,
//           size: size,
//           img: props.ImgSrc,
//         });
//         console.log('Size different so simply ADD one more to the list');
//         return;
//       }
//       return;
//     }

//     await dispatch({ type: 'ADD', id: foodItem._id, name: props.foodName, price: finalPrice, qty: qty, size: size, img: props.ImgSrc });
//   };

//   useEffect(() => {
//     setSize(priceRef.current.value);
//   }, []);

//   const finalPrice = qty * parseInt(props.options[size]);
//   console.log('Card props:', props);
//   console.log('Image source:', props.ImgSrc);


//   return (
//     <div>
//       <div className="card mt-3" style={{ width: '16rem', maxHeight: '360px' }}>
//         {/* <img src={props.ImgSrc} className="card-img-top" alt="..." style={{ height: '120px', objectFit: 'fill' }} /> */}
//         {<img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"150px", objectFit:"fill"}}/>}
//         <div className="card-body">
//           <h5 className="card-title">{props.foodName}</h5>
//           <div className="container w-100 p-0" style={{ height: '38px' }}>
//             <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: '#FF0000' }} onClick={handleClick} onChange={handleQty}>
//               {Array.from(Array(6), (e, i) => (
//                 <option key={i + 1} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>
//             <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: '#FF0000' }} ref={priceRef} onClick={handleClick} onChange={handleOptions}>
//               {priceOptions.map((i) => (
//                 <option key={i} value={i}>
//                   {i}
//                 </option>
//               ))}
//             </select>
//             <div className="d-inline ms-2 h-100 w-20 fs-5">₹{finalPrice}/-</div>
//           </div>
//           <hr />
//           <button className={`btn btn-success justify-center ms-2 `} onClick={handleAddToCart}>
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect , useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const data = useCart();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState('');
  const priceRef = useRef();
  const dispatch = useDispatchCart();

  let options =props.options;
  let priceOptions =Object.keys(options)
  let foodItem =props.item;

  const handleClick = () => {
    if (!localStorage.getItem('token')) {
      // navigate('/login');
    }
  };

  const handleQty = (e) => {
    setQty(e.target.value);
  };

  const handleOptions = (e) => {
    setSize(e.target.value);
  };

  const handleAddToCart = async () => {
    let food = [];

    for (const item of data) {
      if (item.id === foodItem._id && item.size === size) {
        food = item;
        break;
      }
    }

    if (food.length !== 0) {
      setSnackbarVisible(true);
      setTimeout(() => {
        setSnackbarVisible(false);
      }, 3000);
      return;
    }

    await dispatch({ type: 'ADD', id: foodItem._id, name: props.foodName, price: finalPrice, qty: qty, size: size, img: props.ImgSrc });
  };

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  const finalPrice = qty * parseInt(props.options[size]);

  const snackbarStyle = {
    visibility: snackbarVisible ? 'visible' : 'hidden',
    minWidth: '250px',
    marginLeft: '-125px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '2px',
    padding: '16px',
    position: 'fixed',
    zIndex: '1',
    left: '50%',
    bottom: '30px',
    fontSize: '16px',
    animation: snackbarVisible ? 'fadein 0.5s, fadeout 0.5s 2.5s' : '',
  };

  return (
    <div>
      <div className="card mt-3" style={{ width: '16rem', maxHeight: '360px' }}>
        {<img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"150px", objectFit:"fill"}}/>}
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <div className="container w-100 p-0" style={{ height: '38px' }}>
            <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: '#FF0000' }} onClick={handleClick} onChange={handleQty}>
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: '#FF0000' }} ref={priceRef} onClick={handleClick} onChange={handleOptions}>
              {priceOptions.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            <div className="d-inline ms-2 h-100 w-20 fs-5">₹{finalPrice}/-</div>
          </div>
          <hr />
          <button className={`btn btn-success justify-center ms-2 `} onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Snackbar */}
      <div style={snackbarStyle}>
        Item already added to the cart!
      </div>
    </div>
  );
}
