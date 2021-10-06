import { Publish } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

import Chart from '../components/Chart';
import { productData } from '../data';


const Product = () => {
    return (
        <div className="product-container">
            <div className="product-title-container flex align-center space-between">
                <h1 className="product-title">Product</h1>
                <Link to="/newProduct">
                    <button className="product-add-btn">Create</button>
                </Link>
            </div>

            <div className="product-top flex">
                <div className="product-top-left">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="product-top-right">
                    <div className="product-info-top flex align-center">
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="product-info-img" />
                        <span className="product-name">Apple Airpods</span>
                    </div>
                    <div className="product-info-bottom">
                        <div className="product-info-item">
                            <span className="product-info-key">Id:</span>
                            <span className="product-info-value">123</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">Sales:</span>
                            <span className="product-info-value">4123</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">Active:</span>
                            <span className="product-info-value">Yes</span>
                        </div>
                        <div className="product-info-item">
                            <span className="product-info-key">In stock:</span>
                            <span className="product-info-value">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-bottom">
                <form className="product-form flex space-between">
                    <div className="product-form-left flex column">
                        <label >Product Name</label>
                        <input type="text" placeholder="Apple Airpods" />
                        <label >in Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label >Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="product-form-right flex space-around column">
                        <div className="product-upload flex align-center">
                            <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="product-upload-img" />
                            <label for="file"><Publish /></label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="product-btn">Update</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Product
