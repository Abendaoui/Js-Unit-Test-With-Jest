import { useState } from 'react'

function Counter({ initialeCount }) {
  const [count, setCount] = useState(initialeCount)

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  const decrement = () => {
    setCount((prev) => prev - 1)
  }

  const restart = () => {
    setCount(0)
  }

  const switchSigns = () => {
    setCount((prev) => prev * -1)
  }

  return (
    <div className='div'>
      <h1>React Counter Testing</h1>
      <h2>
        Count: <p data-testid='count'>{count}</p>
      </h2>
      <div className='card'>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={restart}>Restart</button>
        <button onClick={switchSigns}>Switch Signs</button>
      </div>
    </div>
  )
}

export default Counter
