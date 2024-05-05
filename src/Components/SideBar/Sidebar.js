import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SideBarIcons from '../SideBarIcons'
import { faBolt, faFile, faFileLines, faGear, faUser, faUserGroup, fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { Link, useLocation } from 'react-router-dom'



function SideBar() {

    const location = useLocation();
    return (
        <div className='bg-white flex'>

            <div>
                <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
                <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-24 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                    <div className="h-full px-1 py-4 overflow-y-auto bg-white dark:bg-gray-800">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <Link to={"/"}>
                                    <img height="70px" width={"70px"} src='/logo.png'></img>
                                </Link>
                            </li>
                            <li>
                                <SideBarIcons icon={fas.faLayerGroup} />
                            </li>
                            <li>
                                <SideBarIcons icon={faBolt} />
                            </li>
                            <li>
                                <SideBarIcons icon={faFileLines} />
                            </li>
                            <li>
                                <SideBarIcons icon={faUserGroup} />
                            </li>
                            <li>
                                <SideBarIcons path={"/template"} icon={faFile} isSelected={location.pathname.includes("template")} />
                            </li>
                            <li>
                                <SideBarIcons icon={faUser} />
                            </li>
                            <li>
                                <SideBarIcons icon={faGear} />
                            </li>
                        </ul>
                    </div>
                </aside >

            </div>

        </div >
    )
}

export default SideBar