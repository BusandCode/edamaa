import { useState, useEffect } from 'react'
import Logo from './components/Logo'
import OpenScreen from './components/OpenScreen'

const App = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='fixed inset-0 w-full h-full overflow-hidden'>
      {!show ? (
        <Logo 
          logoWidth={213} 
          logoHeight={230} 
          textSize="text-[28px] sm:text-[38px]" 
          gap="gap-[5px] sm:gap-[7px]" 
        />
      ) : (
        <OpenScreen />
      )}
    </div>
  )
}

export default App