import { useState, useEffect } from "react";
// import axios from "axios";
import { ProductDesc } from "./ProductDesc";

export const Product3 = () => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [item, setItem] = useState({});
    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        let data = await fetch("http://localhost:8080/products");
        data = await data.json();
        setData(data);
    }

    function showDetails(el) {
        setItem(el);
        setShow(true);
    }
    return (
        <div>
            <div >
                {!show ? (
                    data.map((el) => {
                        return <>
                            <div className="main_div">
                                <div key={el.id} onClick={() => showDetails(el)} className="img_div" >
                                    <img src={el.image} alt="" />
                                    {/* <p>{el.title}</p> */}
                                    {/* <p>{el.price}</p> */}
                                </div>
                                <div className="heading_div">
                                    <div className="product_title">
                                        <h1>{el.title}</h1>
                                    </div>
                                    <div className="price_div">
                                        <p>You Save: $28.38 - $49.31 (21.0% - 36.5%)</p>
                                        <h2>{el.price}</h2>
                                        <div className="interest_sezzle">
                                            <div className="interest">or 4 interest-free payments of $26.66 with</div> 
                                            <div>
                                                <img src="https://media.sezzle.com/branding/2.0/Sezzle_Logo_FullColor.svg" alt="" id="sezzle" /></div> </div>
                                    </div>
                                    <div className="size_div">
                                        <h2>Code:BH4656586</h2>
                                        <h3>size</h3>
                                        <select name="size" id="">
                                            <option value="please select">please select</option>
                                            <option value="">10 D US Mens - $25.99</option>
                                            <option value="">10.5 D US Mens - $25.99</option>
                                            <option value="">11 D US Mens - Out Of Stock</option>
                                            <option value="">7.5 D US Mens - Out Of Stock</option>
                                        </select>
                                    </div>
                                    <div className="quantity_div">
                                        <label htmlFor="quty">qty</label>
                                        <select name="" id="">
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                            <option value="">4</option>
                                            <option value="">5</option>
                                            <option value="">6</option>
                                            <option value="">7</option>
                                            <option value="">8</option>
                                            <option value="">9</option>
                                            <option value="">10</option>
                                        </select>
                                        <button>Add to Cart</button>
                                    </div>
                                    <div className="zip_calculate">
                                        <input type="number" placeholder="zip code" />
                                        <div className="calculate"><h4>Calculate Shipping</h4></div>
                                    </div>
                                    <div className="paragraph"></div>
                                </div>

                            </div>
                            <div className="thougt"><h3>We thought you may like:</h3></div>
                            <div className="extra_products">
                                <div> <img src={el.image} style={{ width: "300px" }} alt="" /></div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                                <div>5</div>
                            </div>

                            <div className="product_info">
                                <h1>Product Information</h1>
                                <hr />
                                <p>SKU: P2587561</p>
                                <h5>Palladium Mens Pampa Lite Leather Waterproof Hiking Boots</h5>
                                <ul>
                                    <li><b>Manufacturer: </b>{el.title}</li>
                                    <li><b>Size:</b></li>
                                    <li><b>Manufacturer Color:</b></li>
                                    <li><b>Suggested Price: </b>{el.price}</li>
                                    <li><b>Condition:</b></li>
                                    <li><b>Style Type: </b>Hiking Boots</li>
                                    <li><b>Collection: </b>Palladium</li>
                                    <li><b>Shoe Width:</b></li>
                                    <li><b>Heel Height (Inches): </b>Inches</li>
                                    <li><b>Platform Height (Inches):</b> Inches</li>
                                    <li><b>Shaft Height (Inches): </b>Inches</li>
                                    <li><b>Shaft Width (Inches):</b> Inches</li>
                                    <li><b>Closure:</b></li>
                                    <li><b>Material: </b>Leather/Eva/Rubber</li>
                                    <li><b>Fabric Type: </b>Leather</li>
                                    <li><b>Specialty: </b>Waterproof</li>
                                </ul>
                            </div>

                        </>
                    })

                ) : (
                    <ProductDesc el={item} />
                )}
            </div>
        </div>
    );
};