import React, { useEffect, useRef, useState } from 'react'

function CounterItem({ item, text }) {

    const [count, setCount] = useState(0)
    const [counterStatus, setCounterStatus] = useState(false)
    let counterItem = useRef()

    const countFunction = useRef(() => {
        let startValue = 0;
        let endValue = parseInt(item.value);
        let remainder = 0;
        let countSecond = 50;
    
        let counter = setInterval(() => {
          if (endValue < 100) {
            startValue += 1;
          } else if (endValue > 100 && endValue < 1000) {
            startValue += 10;
            remainder = endValue % 10;
            endValue = endValue - remainder;
          } else if (endValue > 1000) {
            startValue += 25;
            remainder = endValue % 25;
            endValue = endValue - remainder;
          }
    
          if (startValue === endValue) {
            clearInterval(counter);
            setCount(item.value);
          } else {
            setCount(startValue);
          }
        }, countSecond);
      });


    window.addEventListener('scroll', function () {
        if (this.scrollY > (counterItem.current?.offsetTop - 500)) {
            setCounterStatus(true)
        }
    })



    useEffect(() => {
        if (counterStatus === true) {
            countFunction.current()
        }
    }, [counterStatus,countFunction])

    return (
        <div ref={counterItem} className="counter-item">
            <img src={item.icon} alt="c-icon" />
            <span className="counter-span">{count}</span>
            <span className="label">{text[`${item.name}`]}</span>
        </div>
    )
}

export default CounterItem
