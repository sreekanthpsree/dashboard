import React from 'react'

function Label({ label, isMandatory, inputId }) {
    return (
        <div>
            <label htmlFor={inputId} >{label}{isMandatory && <span className='text-red-600'> *</span>}</label>
        </div>
    )
}

export default Label