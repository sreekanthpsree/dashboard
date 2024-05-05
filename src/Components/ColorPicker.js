import React from 'react'
import Label from './Label'

function ColorPicker({ options, color }) {
    return (
        <div>
            <Label inputId={"templateTypes"} label={"Template Types"} />
            <div className='flex p-2 border-1 rounded-md mt-2'>
                <select className=' w-full border-0 p-2'>
                    {options.map((option) => {
                        return <option key={option}>{option}</option>
                    })}
                </select>
                <div className='rounded-lg h-10 border-gray-100 p-1'>
                    <input value={color} type='color' className='h-full rounded-lg w-10 border-2' style={{ borderRadius: '0.375rem' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default ColorPicker