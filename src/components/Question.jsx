import React, {useState} from 'react';
import{AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"


const Question = ({title, info}) => {
    const[showinfo, setShowinfo] = useState(false);
    
    return (
        <article className='question py-4 px-6 mb-4 border-s-stone-700 shadow-lg'>
    
            <header className='flex justify-between items-center' >
                <h4 className='mb-0 transform-none leading-6'>{title}</h4>
      
                <button 
                className='border-transparent w-8 h-8 flex items-center justify-center rounded-full cursor-pointer align-self-center ml-4 min-w-[32px] bg-slate-200 text-rose-500'
                onClick={()=>{setShowinfo(!showinfo)}} >
                {showinfo? <AiOutlineMinus/> :<AiOutlinePlus/>}
                </button>
            </header>                                                                                                                                                                                                                  
                                                                                                                
            {showinfo && <p className='mb-0 mt-2 text-gray-400'>{info}</p>}
        </article>
    );
}

export default Question;
