import React, { useEffect } from 'react';

const useClickOutside = (ref: React.RefObject<any>, handler: () => void, events = [`mousedown`, `touchstart`]) => {
  const detectClickOutside: EventListenerOrEventListenerObject = event => {
    console.log(event)
    !ref.current || !ref.current.contains(event.target) && handler()
  }
  useEffect(() => {
    for (const event of events)
      document.addEventListener(event, detectClickOutside)
    return () => {
      for (const event of events)
        document.removeEventListener(event, detectClickOutside)
    }
  })
}

export default useClickOutside;