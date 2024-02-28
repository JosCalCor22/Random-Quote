type textProps ={
  text: string;
  numberAdvice: number;
}

const TextTarget = ({text, numberAdvice}:textProps): JSX.Element => {
  return(
    <>
      <div className="flex flex-col items-center gap-[12px] mb-[20px]">
        <h1 className='text-center text-colorTextSecondary font-light tracking-widest text-lg'>Advice #{numberAdvice}</h1>
        <p className="text-center text-colorText text-2xl font-semibold px-[12px]">"{text}"</p>
      </div>
    </>
  )
}

export {TextTarget}