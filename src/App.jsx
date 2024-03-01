import { useState } from "react"

function App() {
  const [getAdvice, setAdvice] = useState('');

  const GetAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();

      setAdvice(data.slip.advice);
      console.log(setAdvice)
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
      <h2>You need an advice?</h2>
      <h4>Click the button</h4>
      <div className='advice'>
        <button onClick={GetAdvice}>Advice</button>
        <input  type="text" defaultValue={getAdvice} />
      </div>
    </>
  )
}

export default App
