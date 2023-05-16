import React,{ useState } from 'react';
import './App.css';
import Question from './components/Question'
import question from "./data/questions"

function App() {
  const [questions, setQuestions] = useState(question)
  return (
   <>
   <main className='flex justify-center items-start min-vh-100'>
    <div className='w-full my-20 mx-auto py-10 px-8 grid gap-x-4 gap-y-8 max-w-4xl rounded bg-white sm:grid-cols-[180px_minmax(100px,_1fr)] '>
      <h3 className='leading-7 font-medium'>question and answer about login</h3>
      <section className='my-0 mx-auto max-w-6xl'>
      {questions.map((question)=>{
        return <Question key={question.id} {...question}/>
      })}

      </section>
    </div>
   </main>

   </>
  );
}

export default App;
