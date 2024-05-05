import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function SideBarIcons({ icon, path, isSelected }) {
    return (
        <div className={`${isSelected ? `bg-slate-400  rounded-e-md w-4/5 m-0 pl-3 me-4  pt-1 pb-1` : ""}`}>
            <Link to={path} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FontAwesomeIcon icon={icon} size='xl' />
            </Link>
        </div>
    )
}

export default SideBarIcons