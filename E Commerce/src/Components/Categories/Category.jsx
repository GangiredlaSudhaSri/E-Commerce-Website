import React from 'react'
import React, { useState, useEffect } from 'react';


const Category = () => {
  const [Category, setCategory] = useState([]);

  useEffect(() => {
    fetch('/product.json')
      .then(response => response.json())
      .then(data => setCategory(data.productData || []))
      .catch(error => console.error('Error for products:', error));
  }, []);
  return (
    <>
      <h1>All Categories</h1>
      <div className='categories'>
        {Category.map(item => (
          <Link key={item.id} to={`/category/${item.cat_name}`}>
            <div className='sub-categories'>
              <img src={item.image} alt="" />
              <h2>{item.cat_name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Category



// function Category(props) {
// const { data } = props;
// return (
//   <>
//   <div className='container'>
//     <h1>All Categories</h1>
//     {data.productData.map((item)=> {
//       return (
//         <div className='product-title' key={item.id}>
//         <div className='product-discription'>
//           <h2>{item.cat_name}</h2>
//           <h2>{item.brand}</h2>
//         </div> 
//         <div className='product-image'>
//           <img src={item.image} />
//           </div> 
//           </div>
//       );
//     })}
//   </div>
//   </>
// )
// }



// fetch('./product.json')
// .then((response) => response.json())
// .then((findresponse)=> {
//   this.setState({
//     data:findresponse
//   })
// })
// render(){
//   return (
//     <ul>{this.state.data.map(item => <li>{item.id}</li>)} </ul>
//   )
// }

  // const [jsonData, setJsonData] = useState(data);

  // return (
  //   <div>
  //     {/* Display the fetched data */}
  //     {jsonData && (
  //       <div>
  //         <h1>{jsonData.id}</h1>
  //         <p>{jsonData.cat_name}</p>
  //       </div>
  //     )}
  //   </div>
  // );


  //   const [productDataArray, setProductDataArray] = useState([]);
  //   const [productReviews, setProductReviews] = useState([]);
  //   const [cartItems, setCartItems] = useState([]);

  //   useEffect(() => {
  //     fetch('/product.json') 
  //       .then(response => response.json())
  //       .then(data => {
  //         setProductDataArray(data.productData || []); 
  //         setProductReviews(data.productReviews || []);
  //         setCartItems(data.cartItems || []); 
  //       })
  //       .catch(error => console.error('Error fetching products:', error));
  //   }, []);
  //  console.log (data);
  //   return (
  //     <>
  //       <div className='categories'>
  //         <h1>Categories</h1>
  //         <ul>
  //           {productDataArray.map(item => (
  //             <h2 key={item.id}>{item.cat_name}</h2>
  //           ))}
  //         </ul>
  //       </div>
  //       {/* <div>
  //         <h3>Product Reviews</h3>
  //         <ul>
  //           {productReviews.map(review => (
  //             <li key={review.id}>{review.comment}</li>
  //           ))}
  //         </ul>
  //       </div>
  //       <div>
  //         <h3>Cart Items</h3>
  //         <ul>
  //           {cartItems.map(item => (
  //             <li key={item.id}>{item.name}</li>
  //           ))}
  //         </ul>
  //       </div> */}
  //     </>
  // );



