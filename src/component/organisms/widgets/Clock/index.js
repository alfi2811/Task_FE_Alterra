import React, { useEffect, useState } from 'react'
import './style.scss'
const Clock = () => {
  const [clockRealTime, setClockRealTime] = useState()

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setClockRealTime(date.toLocaleTimeString('en-IE'));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [])

  return (
    <div className="o-widget-clock">
      {clockRealTime}
    </div>
  )
}

export default Clock
