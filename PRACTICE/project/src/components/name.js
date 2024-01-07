import React from 'react'

const Name = ({naam, kaam, children}) => { //props use krta to destructuring ni krta, but fr direct element map ni ho paaate
  return (
    <>
    <div>KAKASHI HI BOLDE</div>
    <div>mera naam hai {naam}</div>
    <div>mera kaam hai {kaam}</div>
    <div>{children}</div>
    </>
  );
}

export default Name; 