import React from 'react'
import { RegisterForm } from '../_components/RegisterForm';

const RegisterPage = () => {
  return (
    <>
         <div className="flex min-h-screen items-center justify-center">
           <div className=" w-full max-w-md spacy-y-6 rounded-lg border p-8 shadow-lg">
             <div className="space-y-2 text-center">
               <h1 className="text-3xl font-bold">Ragister!</h1>
               <p className="text-gray-500">
                 Create a new account
               </p>
             </div>
   
             <RegisterForm />
           </div>
         </div>
       </>
  )
}

export default RegisterPage