import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Link className=' bg-blue-900 text-2xl rounded-lg flex justify-center font-bold text-white p-4  w-1/2 m-auto ' to={"/template"}>Go to task</Link>
        </div>
    )
}

export default Home