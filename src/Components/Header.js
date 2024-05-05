import { faAngleDown, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dropdown, Menu, MenuButton } from '@mui/base'
import React from 'react'
import DropdownMenuItem from './DropdownMenuItem'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='sticky top-0 m-1 p-2 flex bg-white flex-row-reverse w-full'>
            <div className='flex items-center gap-2  mr-5'>
                <div className='pt-2 pb-2 w-12 text-center bg-slate-200 rounded-xl'>
                    <FontAwesomeIcon icon={faUser} size='2xl' />
                </div>
                <Dropdown className="p-4">
                    <MenuButton>Test User <FontAwesomeIcon icon={faAngleDown} /></MenuButton>
                    <Menu className='bg-slate-400 p-1 rounded-md mt-4'>
                        <DropdownMenuItem label="Profile" />
                        <DropdownMenuItem label="Templates" />
                        <DropdownMenuItem label="Settings" />
                    </Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default Header