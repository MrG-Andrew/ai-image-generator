import React, { useRef, useState } from 'react'
import './ImageGenetator.css'
import default_image from '../../assets/default_image.jpg'
import { openai } from '../openAi'

export default function ImageGenetator() {
    const [image_url, setImage_url] = useState("/")
    let inputRef = useRef(null)

    const generateImage = async ()=>{
        if(inputRef.current.value ===""){
            return 0;
        }
        const response = await openai.createImage({
            prompt: inputRef.current.value,
            n: 1,
            size: "512x512",
          });
          let data = await response;
          console.log(data)
    }
  return (
    <div className='ai-image-generator'>
        
        <div className="header">Ai image <span>generator</span></div>
        <div className="img-loading">
            <div className="image"><img src={image_url === '/'?default_image:image_url} alt="default_image" width='512'/></div>
        </div>
        <div className="search-box">
            <input ref={inputRef} type="text" className='search-input' placeholder='Describe what you want to see' />
            <div className="generate-btn" onClick={generateImage}>Generate</div>
        </div>
    </div>
  )
}
