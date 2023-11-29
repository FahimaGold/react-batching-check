import { useRef, useLayoutEffect } from "react";

const useRendersCount = () => {
    const rendersCounter = useRef(0);
     useLayoutEffect(() =>{
       rendersCounter.current++;
     })
     return rendersCounter.current;
  }

 export default useRendersCount;