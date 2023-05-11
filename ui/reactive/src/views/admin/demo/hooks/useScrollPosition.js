import { RefObject, useCallback, useLayoutEffect, useRef, useState } from 'react'

export function useScrollPosition(element,wait) {
  const [position, setPosition] = useState(0);
  let throttleTimeout = null

  const callBack = useCallback(() => {
    setPosition(element.current.scrollTop);
    throttleTimeout = null
  }, [element]);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }
    element.current.addEventListener('scroll', handleScroll)
    return () => element.current.removeEventListener('scroll', handleScroll)
  }, [callBack, element])
  // console.log("position returned");
  return position;
}
