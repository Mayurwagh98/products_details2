// import './App.css';
// import { ProductDetail } from "./components/products"
// import { useState, useEffect } from "react"
import "./components/products.css"
import { Product3 } from "./components/products3"
// import axios from "axios";
// import { Prod } from "./components/products"
function App() {
  // const [title, setTitle] = useState("")
  // const [image, setImage] = useState("")
  // const [products, setProducts] = useState([])

  // const fetchProducts = async () => {
  // 	const  data  = await axios.get('http://localhost:8080/products');
  // 	setProducts(data);
  // };

  // const fetchProducts = async () => {
  // 	const data = await axios.get('http://localhost:8080/products').then((d) => d.json()).then((data) =>{});
  // 	setProducts(data);
  // };
  // useEffect(() => {
  // 	fetchProducts();
  // }, []);
  // useEffect(() => {
  //   fetch("http://localhost:8080/products").then(d => d.json()).then((data) => {
  //     console.log(data)
  //     setProducts(data)
  //   }, [])
  // })

  return (
    <div className="App">
      {/* <ProductDetail>{products.map(product => <div>{product.image}</div>)}</ProductDetail> */}
      {/* <ProductDetail /> */}
      <Product3></Product3>
      {/* <Electronics/> */}
      {/* <Prod image=  "https://images.unsplash.com/photo-1554478299-725a76d9badc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpY3klMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></Prod> */}
    </div>
  );
}

export default App;
