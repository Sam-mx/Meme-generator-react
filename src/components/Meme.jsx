import React from 'react'
import memesData from '../memesData'
import { useEffect } from 'react'

function Meme() {

  const [meme, setMeme] = React.useState({
    topText : "",
    bottomText : "",
    randomImage : "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages,setAllMemeImages] = React.useState(memesData)

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemeImages(data.data.memes)
  }
      getMemes()
  }, [])


  function getMemeImage(){
    const randomNumber = Math.floor(Math.random() * allMemeImages.length)
    const url = allMemeImages[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage:url
    }))
  
  }

  function handleChange(event) {
    const {name,value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
       <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name = "topText"
                    value = {meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name = "bottomText"
                    value = {meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
              <img src={meme.randomImage} className='meme--image' />
              <h2 className="meme--text top">{meme.topText}</h2>
              <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
    </main>
  )
}

export default Meme
