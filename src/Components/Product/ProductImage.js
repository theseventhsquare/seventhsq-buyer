import React, { useState, useEffect } from 'react';

function ProductImage(props) {
  const [images, setImages] = useState([]);
  const [bigImage, setBigImage] = useState('');

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
      {Object.keys(images).map((key) => (
        <img key={key} src={images[key]} alt="product image" />
      ))}
    </div>
  );
}

export default ProductImage;
