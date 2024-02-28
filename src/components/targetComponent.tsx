import { PacmanLoader } from 'react-spinners'
import { TextTarget } from './textTarget'
import { useEffect, useState } from 'react'
import iconDice from '../assets/svg/icon-dice.svg'
import PatternDesktop from '../assets/svg/pattern-divider-desktop.svg'

const TargetComponet = (): JSX.Element => {
  const [advice, setAdvice] = useState<string>('');
  const [numberAdvice, setNumberAdvice] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setAdvice('Put a piece of kitchen roll in with your bag of leaves to make them last longer.');
    setNumberAdvice(117);
  }, []);

  const getAdviceAPI = async () => {
    setLoading(true);
    await fetch ('https://api.adviceslip.com/advice').then(res => res.json()).then( data => {
      const { slip } = data; 
      setAdvice(slip.advice);
      setNumberAdvice(slip.id);
      setLoading(false);
    });
  }

  return(
    <><section className="relative bg-backgroundTarget h-auto w-[500px] rounded-lg pt-[35px] pb-[50px] px-0" id='targetSection'>
        {
          loading ? 
          <div className='w-full flex flex-col justify-center place-items-center gap-3 mb-4'>
            <span className='text-colorText font-semibold'>Loading, wait a moment</span>
            <PacmanLoader color="#52ffab" size={15} />
          </div>
          :
          <TextTarget text={advice} numberAdvice={numberAdvice}/>
        }
        <figure>
          <img className='m-auto w-[300px]' src={PatternDesktop} alt="Pattern Img" />
        </figure>
        <figure className='absolute bg-backgroundDice p-2 bottom-[-20px] right-[46%] rounded-full cursor-pointer' onClick={getAdviceAPI}>
          <img src={iconDice} alt="Icon Dice"/>
        </figure>
      </section>
    </>
  )
}

export {TargetComponet}