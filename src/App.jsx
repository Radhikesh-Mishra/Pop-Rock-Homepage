import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Card from './components/Card';
import "./App.css";

function App() {
  return (
    <>
      <div id="svg1">
        <div className="wave1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <defs>
    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: '#0099ff', stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: '#00ff99', stopOpacity: 1 }} />
    </linearGradient>
  </defs>
  <path
    fill="url(#waveGradient)"  // Use the gradient fill
    fillOpacity="1"
    d="M0,320L40,320C80,320,160,320,240,293.3C320,267,400,213,480,197.3C560,181,640,203,720,181.3C800,160,880,96,960,112C1040,128,1120,224,1200,229.3C1280,235,1360,149,1400,106.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
  ></path>
</svg>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <ul>
                <h3>
                  <span style={{ fontSize: "30px" }}>
                    <i className="fa-brands fa-react"></i>
                  </span>
                  Pop Rock Crystal
                </h3>
              </ul>
            </div>
            <div>
              <ul style={{ listStyle: "none", display: "flex", marginLeft: "550px" }}>
                <li><a href="" style={{ textDecoration: "none", padding: "0 10px" }}>Home</a></li>
                <li><a href="" style={{ textDecoration: "none", padding: "0 10px" }}>Shop</a></li>
                <li><a href="" style={{ textDecoration: "none", padding: "0 10px" }}>About Us</a></li>
                <li><a href="" style={{ textDecoration: "none", padding: "0 10px" }}>Help</a></li>
              </ul>
            </div>
            <div style={{ marginRight: "80px" }}>
              <ul>
                <span className="w3-text-red"><i className="fa-solid fa-circle-plus"></i></span>
                <i className="fa-solid fa-basket-shopping"></i>
              </ul>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-around", marginTop: "80px" }}>
            <div>
              <h3>Welcome to</h3>
              <h2 style={{ fontWeight: "bolder" }}>Pop Rock Crystal Shop!</h2>
              <p style={{ fontSize: "small", color: "black" }}>Here you will find unique phone accessories, crystal,</p>
              <p style={{ fontSize: "small", color: "black" }}>jewels and more. Free shipping inside U.S. and our</p>
              <p style={{ fontSize: "small", color: "black" }}>phone grips come with a limited warranty. Enjoy!</p>
              <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
                <button className="w3-white w3-text-blue w3-border-blue" style={{ borderRadius: "20px", padding: "0 20px" }}>Shop Now</button>
                <ul><a href="" style={{ textDecoration: "none", color: "black" }}>About Us</a></ul>
              </div>
            </div>
            <div>
              <div className="w3-card w3-center w3-round-xlarge w3-white" style={{ marginTop: "15px", padding: "50px 0", width: "40vw" }}>
                <div className="w3-left w3-blue" style={{ padding: "0 20px" }}>New lot</div><br />
                <img src="Image.png" alt="" />
                <br /><hr />
                <p>CRYSTAL AGATE PHONE GRIP <span className="w3-text-blue">- 18.99 $</span></p>
              </div>
              <div className="container" style={{ margin: "20px" }}>
                <div className="nav-container">
                  <i className="fa-solid fa-circle-arrow-left" style={{ fontSize: "large" }}></i>
                  <div className="dots-container">
                    <div className="dot filled"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                  <i className="fa-solid fa-circle-arrow-right" style={{ fontSize: "large" }}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br /><br />

      <div className='w3-center'>
        <i className="fas fa-mouse"></i>
        <span style={{ fontSize: 'small' }}>scroll down</span>
      </div>

      <div style={{ marginTop: '160px' }}>
        <h2 className='w3-center'>All Products</h2>
        <div className='w3-panel'>
          <p>
            <span className='w3-text-grey'>Filter:</span> <span> All Products<i className="fas fa-caret-down"></i>
            </span> <span className='w3-text-grey' style={{ marginLeft: '80px' }}>Sort:</span> <span> Best Selling</span>
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <br />

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div className='w3-center' style={{ marginTop: '40px' }}>
        <button className="w3-white w3-text-blue w3-border-blue w3-hover-blue" style={{ borderRadius: '20px', padding: '5px 20px' }}>View All</button>
      </div>

      <div id='svg2' style={{ position: 'relative', display: 'flex', justifyContent: 'space-around', marginTop: '150px', padding: '80px 0' }}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', zIndex: -1 }} // Positioning the SVG
  >
    <defs>
      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#0099ff', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#00ff99', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path fill="url(#gradient2)" d="M0,320L40,320C80,320,160,320,240,293.3C320,267,400,213,480,197.3C560,181,640,203,720,181.3C800,160,880,96,960,112C1040,128,1120,224,1200,229.3C1280,235,1360,149,1400,106.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
  </svg>
  
  <div className='w3-right-align' style={{ marginLeft: '280px', position: 'relative', zIndex: 1 }}>
    <h3>BEST PRICE</h3>
    <h2 style={{fontWeight:'bold'}}>Agate Phone Grip</h2>
    <p><span style={{ fontSize: 'small', textDecoration: 'line-through' }} className='w3-text-blue'>4.50$</span> <span style={{ fontSize: '30px', fontWeight:'bold' }} className='w3-text-red'>19.50$</span></p>
    <p>These Pop Rock Crystal grip tops can be swapped with</p>
    <p>other tops depending on your mood, outfit, nails</p>
    <p>phone case, holiday, etc.! Just gently squeeze the sides</p>
    <p>to remove and swap out with another color or design!</p><br />
    <button className="w3-round-xlarge w3-blue w3-border" style={{ padding: '5px 20px' }}>Buy Now</button>
  </div>
  
  <div style={{ position: 'relative', zIndex: 1 }}>
    <div className="w3-card outer-card">
      <div className="w3-card inner-card w3-center">
        <img src="Image.png" alt="" style={{ marginTop: '52px' }} />
      </div>
    </div>
  </div>
</div>


      <div style={{ height: '100px', backgroundColor: '#2b4670' }}></div>
    </>
  );
}

export default App;
