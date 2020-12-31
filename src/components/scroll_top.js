import React, {useState, useEffect} from 'react';

const ScrollTopArrow = () =>{

    const [showScroll, setShowScroll] = useState(false)
  
    useEffect(()=>{
      window.addEventListener('topbtn', checkScrollTop)
      return function cleanup() {
        window.removeEventListener('topbtn', checkScrollTop)
      }
    })
  
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)
      }
    };
  
    const scrollTop = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    };
  
    return (
        <img src={process.env.PUBLIC_URL + "/images/top.png"} onClick={scrollTop} className="topbtn" id="topbtn" alt="scroll to top"/>
    );
  }
  
  export default ScrollTopArrow;
