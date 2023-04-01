// import React, { useState,useEffect } from 'react'
// import "./ImageScript"
// import axios from "axios"
// import "./ProductImage.css"
//   function ProductImage(props)  {  
//        const [images,setimages]=useState([])
//        const [bigimage,setbigimage]=useState('')
       
//        const getimages=async()=>{
       
        
//           const res=await fetch(`https://seller.seventhsq.com/inventory/api/picture/${props.image}`);
//           const data= await res.json();
//           console.log("data")
//           console.log(data)
//           setimages(data)
//           setbigimage(data[0].picture)
          
//           console.log(bigimage);
//       }

//       useEffect(()=>{
       
//         getimages()
//         },[])
      
//     // constructor(props) {
//     //   super(props);
     
//     //   this.state = {
//     //     posts: [],
//     //   };
//     // }
//     // componentDidMount() {
//     //   axios
//     //     .get("https://seller.seventhsq.com/inventory/api/picture/" + this.props.image)
//     //     .then((response) => {
//     //       this.setState({ posts: response.data });
//     //       console.log(response);
//     //       console.log(this.state.posts[1]["picture"])
//     //     })
//     //     .catch((error) => {
//     //       console.log(error);
//     //     });  
//     // }
//     // clickme(smallImg){
//     //   const fullImg = document.getElementById("imagebox");
//     //   fullImg.src = smallImg.src;
//     // }
    
        
//         return(
//           <div className="app">
//             <div class="slider">
//                     <div class="product" style={{overflow:"auto !important"}}>
//                     { images.map((curr,index) =>(
//               <div className="details">
//               <div className="big-img">
//               <img value={index} src= { "https://seller.seventhsq.com" + curr["picture"]} onClick={()=>setbigimage(curr["picture"])} alt=""  />
                   
//                   </div>
                  
//                   </div>
//             )
//                     )
//             }
                      

//                     </div>
//                     <div class="preview">
                    
//               <img src= { `https://seller.seventhsq.com${bigimage}`} /*onClick={()=>this.clickme()} */alt=""  />    
           
//                 </div>

            
//         </div>
//           </div>
//         );
//       }

// export default ProductImage


import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ProductImage(props) {
  const [images, setImages] = useState([]);
  const [bigImage, setBigImage] = useState('');
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  
  const getImages = async () => {
    const res = await fetch(`https://seller.seventhsq.com/inventory/api/picture/${props.image}`);
    const data = await res.json();
    console.log('data:', data);
    setImages(data[0]); // set the first element of the data array as the images object
    setBigImage(data[0].picture1); // set the first image in the images object as the bigImage
    console.log('bigImage:', bigImage);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
    <img src={"https://seller.seventhsq.com" + images.picture1} alt="product image 1" />
    <Slider {...settings}>
    {images.picture2 ? (
      <img src={"https://seller.seventhsq.com" + images.picture2} alt="product image 2" />
    ) : (
      <img src="https://www.linkpicture.com/q/download-1_187.png" alt="default image" />
    )}
    {images.picture3 ? (
      <img src={"https://seller.seventhsq.com" + images.picture3} alt="product image 3" />
    ) : (
      <img src="https://www.linkpicture.com/q/download-1_187.png" alt="default image" />
    )}
    {images.picture4 ? (
      <img src={"https://seller.seventhsq.com" + images.picture4} alt="product image 4" />
    ) : (
      <img src="https://www.linkpicture.com/q/download-1_187.png" alt="default image" />
    )}
    {images.picture5 ? (
      <img src={"https://seller.seventhsq.com" + images.picture5} alt="product image 5" />
    ) : (
      <img src="https://www.linkpicture.com/q/download-1_187.png" alt="default image" />
    )}
    {images.picture6 ? (
      <img src={"https://seller.seventhsq.com" + images.picture6} alt="product image 6" />
    ) : (
      <img src="https://www.linkpicture.com/q/download-1_187.png" alt="default image" />
    )}
    {images.picture7 ? (
      <img src={"https://seller.seventhsq.com" + images.picture7} alt="product image 7" />
    ) : (
      <img src="https://www.linkpicture.com/q/download-1_187.png" alt="default image" />
    )}
    {images.picture8 ? (
      <img src={"https://seller.seventhsq.com" + images.picture8} alt="product image 8" />
    ) : (
      <img src="https://www.linkpicture.com/q/download-1_187.png" alt="default image" />
    )}
    {images.picture9 ? (
      <img src={"https://seller.seventhsq.com" + images.picture9} alt="product image 9" />
    ) : (
      <img src="https://www.linkpicture.com/q/download-1_187.png" alt="default image" />
    )}
    {images.picture10 ? (
      <img src={"https://seller.seventhsq.com" + images.picture10} alt="product image 10" />
    ) : (
      <img src="https://www.linkpicture.com/q/download-1_187.png" alt="default image" />
    )}
  </Slider>
  
    </div>
  );
}

export default ProductImage;
