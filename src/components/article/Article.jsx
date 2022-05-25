import React from 'react'

const Article = ({imgUrl}) => {
  return (
    <div className='gpt3__blog-container__article'>
      <div className='gpt3__blog-container__article-img'>
        <img src={imgUrl} alt = 'blog image'/>
      </div>
    </div>
  )
}

export default Article


