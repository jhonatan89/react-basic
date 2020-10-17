import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import './Gallery.css';

export default function Gallery() {
  const [images, setGifts] = useState([]);
  useEffect(() => {
    fetchGifts();
  }, []);

  let dataGif = [];
  const fetchGifts = async () => {
    const url =
      'https://api.giphy.com/v1/gifs/search?q=goku&limit=10&api_key={HERE_YOUR_API_KEY}';
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifSimple = data.map((gif) => {
      return {
        id: gif.id,
        url: gif.images.downsized_medium.url,
        title: gif.title,
      };
    });
    console.log(gifSimple);
    setGifts(gifSimple);
  };

  //fetchGifts();

  return (
    <div className='gallery-container'>
      {images.map((d) => (
        <Card key={d.id} name={d.title} img={d.url}></Card>
      ))}
    </div>
  );
}
