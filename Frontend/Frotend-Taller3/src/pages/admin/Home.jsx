import React from 'react'
import Datatable from '../../components/Datatable'
import Form from '../../components/Form'
// import viteLogo from '/vite.svg'

const Home = () => {
  return (
    <div className="bg-secundary-100 w-full p-4 min-h-screen">
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold text-secundary-300 text-4xl'>
          GESTIONAR HOME
        </h1>
        <div className='p-2 w-full'>
          {/* <Datatable /> */}
          {/* <Form /> */}
        </div>
      </div>
    </div>
  )
}

export default Home