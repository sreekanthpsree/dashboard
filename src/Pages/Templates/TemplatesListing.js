import { faAdd, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import TemplateTable from '../../Tables/TemplateTable'
import { Link } from 'react-router-dom'

function TemplatesListing() {
    return (
        <div className='m-2 p-4 bg-white rounded-md'>
            <div className='md:flex md:justify-between '>
                <h3 className='text-2xl'>Templates</h3>
                <Link to={"/template/add"} className='flex mt-2 md:mt-0 md:mb-0 mb-2 gap-2 items-center border-2 font-bold p-2 px-3  border-violet-900 rounded-full hover:text-white hover:bg-violet-700'>
                    <FontAwesomeIcon icon={faAdd} />
                    Add New
                </Link>

            </div>
            <div className=' flex flex-col'>
                <div className='flex items-center relative mb-3 w-full -ml-6 md:-ml-0'>
                    <input className='rounded-s-full border-2 p-2 relative' placeholder='Search...' />
                    <div className='bg-slate-300 p-2 rounded-full z-30 -ml-5'>
                        <FontAwesomeIcon icon={faSearch} size='xl' />
                    </div>
                </div>
                <TemplateTable />
            </div>
        </div>
    )
}

export default TemplatesListing