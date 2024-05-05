import React from 'react'

function BadgeStatus({ status, statusId }) {
    return (
        <div>
            {statusId === 1 ? <div className='bg-green-100 text-green-400 font-bold p-1 px-2 rounded-md'>
                {status}
            </div> : <div className='bg-red-100 text-red-400 font-bold p-1 rounded-md px-2'>
                {status}
            </div>}
        </div>
    )
}

export default BadgeStatus