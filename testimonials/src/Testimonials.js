import React, { useState } from 'react'

const Testimonials = () => {

    const [quotes, setquotes] = useState(0);
    const quotesdesc = [
    {
        text: "efforts never die",
        author: "sk"
    },
    {
        text: "be with yourself",
        author: "bk"
    },
    {
        text: "honesty lies no more",
        author: "sm"
    }
    ]

    const next = () => {
        setquotes( (quotes + quotesdesc.length + 1) % quotesdesc.length)
        
    }
    const prev = () => {
        setquotes( (quotes + quotesdesc.length - 1) % quotesdesc.length)
    }
  return (
    <div>
        <p>{quotesdesc[quotes].text}</p>
        <span>{quotesdesc[quotes].author}</span>
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
    </div>
  )
}

export default Testimonials;