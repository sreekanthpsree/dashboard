import { faPenToSquare, faTrash, faUpDownLeftRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

function DragabbleComponent({ taskId, index, taskName }) {
    return (
        <Draggable key={taskId} draggableId={taskId} index={index} >
            {(provided) => (
                <div  {...provided.draggableProps} ref={provided.innerRef} className='flex bg-white justify-between md:p-2 mt-3 rounded-md items-center sm:p-2  md:w-2/3'>
                    <div className='flex gap-2 sm:items-center sm:text-center items-baseline'>
                        <p className='p-3 bg-violet-700 rounded-xl px-4 text-white font-bold'>{index + 1}</p>
                        <p className='font-bold'>{taskName}</p>
                    </div>
                    <div>
                        <div className='flex gap-2'>
                            <button>
                                <FontAwesomeIcon icon={faTrash} className='text-red-600' />
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faPenToSquare} className='text-violet-600' />
                            </button>
                            <button {...provided.dragHandleProps}>
                                <FontAwesomeIcon icon={faUpDownLeftRight} className='text-violet-600' />
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </Draggable>
    )
}

export default DragabbleComponent