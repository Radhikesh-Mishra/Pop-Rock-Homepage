import React from "react";

const Card = () => {
    return (
        <div className="w3-card w3-hover-shadow w3-center w3-round-xlarge" style={{ margin:'0 15px', padding:'18px 10px'}}>
            <img src="Image.png" alt="" />
            <p>CRYSTAL AGATE PHONE GRIP</p>
            <p className="w3-text-blue">18.99$</p>
            <button className=" w3-border-blue w3-hover-blue w3-round-xlarge w3-white" style={{padding:'5px 20px'}}>Buy Now</button>
        </div>
    );
}

export default Card;