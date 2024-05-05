import { faEye, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import DataTable from 'react-data-table-component'
import BadgeStatus from '../Components/BadgeStatus';
import { Link } from 'react-router-dom';

function TemplateTable() {


    const columns = [
        {
            name: 'Template Name',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Template Type',
            selector: row => row.type,
            sortable: true,
        },
        {
            name: 'Created By',
            selector: row => {
                return <div className='flex gap-1 items-baseline'>
                    {row.createdBy}
                    <p>{row.createdByName}</p>
                </div>
            },
            sortable: true,
        }, {
            name: 'Status',
            selector: row => {
                return <BadgeStatus status={row.status} statusId={row.statusId} />
            },
            sortable: true,
        }, {
            name: 'Actions',
            selector: row => {
                return <div>
                    <Link>
                        <FontAwesomeIcon icon={faEye} size='lg' />
                    </Link>
                </div>
            },
            sortable: true,
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Installation Template',
            type: 'Installation',
            status: "Active",
            statusId: 1,
            createdBy: <FontAwesomeIcon icon={faUser} />,
            createdByName: "Test User"
        },
        {
            id: 2,
            title: 'Crane Template',
            type: 'Installation',
            status: "Active",
            statusId: 1,
            createdBy: <FontAwesomeIcon icon={faUser} />,
            createdByName: "Test User"
        },
        {
            id: 3,
            title: 'Installation Template',
            type: 'Crane',
            status: "Active",
            statusId: 1,
            createdBy: <FontAwesomeIcon icon={faUser} />,
            createdByName: "Test User2"
        }, {
            id: 4,
            title: 'Crane Template',
            type: 'Crane',
            status: "Inactive",
            statusId: 2,
            createdBy: <FontAwesomeIcon icon={faUser} />,
            createdByName: "Test User"
        }, {
            id: 5,
            title: 'Installation Template',
            type: 'Insallation & Crane',
            status: "Active",
            statusId: 1,
            createdBy: <FontAwesomeIcon icon={faUser} />,
            createdByName: "Test User3"
        }, {
            id: 6,
            title: 'Installation Template',
            type: 'Crane',
            status: "Inactive",
            statusId: 2,
            createdBy: <FontAwesomeIcon icon={faUser} />,
            createdByName: "Test User4"
        }, {
            id: 7,
            title: 'IC Template',
            type: 'Installation',
            status: "Active",
            statusId: 2,
            createdBy: <FontAwesomeIcon icon={faUser} />,
            createdByName: "Test User5"
        },
    ]


    return (
        <div className='border-1 mt-2'>
            <DataTable
                pagination
                columns={columns}
                data={data}
            />
        </div>
    )
}

export default TemplateTable