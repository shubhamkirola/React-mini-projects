import React from 'react'
import { useState } from 'react';

const Dropdown = ({title, content}) => {

    const [dropit, setdropit] = useState(false);

    const handle = () => {
        setdropit(!dropit);
    }

  return (
    <div key={Math.random()}>
        <div>
            <div>
                <h3>{title}</h3>
                <button onClick={handle}>{dropit ? "+" : "-"}</button>
            </div>
            {dropit && <p>{content}</p>}
        </div>
    </div>
  )
}

export default Dropdown;