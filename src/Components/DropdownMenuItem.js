import { MenuItem } from '@mui/base'
import React from 'react'

function DropdownMenuItem({ label, link }) {
    return (
        <MenuItem className='border-b-2 hover:bg-slate-500 hover:rounded-md p-2 pr-2 pl-2'>
            <button>{label}</button>
        </MenuItem>
    )
}

export default DropdownMenuItem