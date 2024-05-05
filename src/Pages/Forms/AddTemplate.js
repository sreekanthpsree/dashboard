import Label from '../../Components/Label'
import ColorPicker from '../../Components/ColorPicker';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faFileEdit, faPenToSquare, faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useRef, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import DragabbleComponent from '../../Components/DragabbleComponent';
import { Link } from 'react-router-dom';


function AddTemplate() {

    const selectRef = useRef();
    const [showModal, setShowModal] = useState(false);


    const [tempTasks, setTempTasks] = useState([
        {
            taskName: "task1",
            mileStoneId: 2,
            id: "112"
        },
        {
            taskName: "task2",
            mileStoneId: 2,
            id: "113"
        }, {
            taskName: "task3",
            mileStoneId: 3,
            id: "114"
        }, {
            taskName: "task4",
            mileStoneId: 4,
            id: "115"
        },

    ])

    const mileStones = [
        {
            name: "Milestone 1",
            tasks: ["Task1", "Task2"]
        },
        {
            name: "Milestone 2",
            tasks: ["Task3", "Task4", "Task5"]
        }
    ]




    const options = [
        { value: '0', label: 'Mile Stone 1' },
        { value: '1', label: 'Mile Stone 2' },
        { value: '2', label: 'Mile Stone 3' },
        {
            value: '3', label: <div className='flex items-baseline gap-2' onClick={(e) => {
                e.stopPropagation();
                setShowModal(true)
            }}>
                <div className='bg-gray-300 p-2 px-3 rounded-md'>
                    <FontAwesomeIcon icon={faAdd} />
                </div>
                <p className='text-violet-700'>New Milestone</p>
            </div>
        }
    ]

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const reorder = (list, startIndex, endIndex) => {

        const result = list;
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;
        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }
        const items = reorder(
            tempTasks,
            source.index,
            destination.index
        );
        setTempTasks(items);
    }
    return (
        <div className='m-2 md:p-4 bg-white rounded-md'>
            <div className='flex justify-between'>
                <h3 className='text-2xl'>Add templates</h3>
            </div>
            <div className='p-4'>
                <div className='grid  grid-cols-1 md:grid-cols-2 mt-10 w-full md:gap-2'>
                    <div>
                        <Label inputId={"templateTypes"} isMandatory={true} label={"Template Types"} />
                        <select id="templateTypes" className='rounded-md w-full h-10 mt-2 border-gray-300 border-1'></select>
                    </div>
                    <div >
                        <Label inputId={"templateName"} isMandatory={true} label={"Template Types"} />
                        <select id="templateName" className='rounded-md w-full h-10 mt-2 border-gray-300 border-1'></select>
                    </div>
                </div>
                <div>
                    <p className='text-lg font-bold mt-5'>Colours</p>
                    <div className='grid  grid-cols-1 md:grid-cols-3 mt-2 w-full md:gap-2'>
                        <ColorPicker options={["Progressing Colour", "Completed Colour", "Delayed Colour"]} color={"#449C4C"} />
                        <ColorPicker options={["Completed Colour", "Delayed Colour", "Progressing Colour"]} color={"#F3A200"} />
                        <ColorPicker options={["Delayed Colour", "Completed Colour", "Progressing Colour"]} color={"#F31400"} />
                    </div>
                </div>
                <div className='bg-slate-100   md:p-5 mt-4 rounded-lg'>
                    <div className='grid grid-cols-1 p-3 rounded-md md:grid-cols-3 mt-10 w-full md:gap-2'>
                        <div>
                            <Label inputId={"templateTypes"} isMandatory={true} label={"Milestone Name"} />
                            <Select ref={selectRef}
                                style={{ "borderRadius": "10px", "height": "10px" }}
                                closeMenuOnSelect={true}
                                id="templateTypes" className='rounded-lg w-full h-11 mt-2' options={options}
                                noOptionsMessage={(e) => {
                                    return <div >
                                        <div className='bg-red-200 text-red-500 p-4 rounded-lg'>
                                            We didn't find any mileStone with the name: {e.inputValue}</div>
                                        <div className='mt-2 flex items-baseline gap-2' onClick={(e) => {
                                            e.stopPropagation();
                                            setShowModal(true)
                                        }}>
                                            <div className='bg-gray-300 p-2 px-3 rounded-md'>
                                                <FontAwesomeIcon icon={faAdd} />
                                            </div>
                                            <p className='text-violet-700'>New Milestone</p>
                                        </div>
                                    </div>
                                }}
                            />
                        </div>
                        <div className='ml-3' >
                            <Label inputId={"templateName"} isMandatory={true} label={"Task Name"} />
                            <input id="templateName" className='rounded-md w-full h-10 mt-2' />
                        </div>
                        <div className='md:content-end mt-2 sm:w-full md:text-end justify-self-center '>
                            <button className='bg-blue-600  hover:bg-blue-700 p-2 rounded-md px-4 text-white'>Add Task</button>
                        </div>
                    </div>
                    <div>
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="1">
                                {provided => (
                                    <div ref={provided.innerRef} {...provided.droppableProps}>{
                                        tempTasks.map((tempTask, index) => {
                                            return <DragabbleComponent key={tempTask.id} taskId={tempTask.id} index={index} taskName={tempTask.taskName} />
                                        })}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </div>
                </div>
                <div className='mt-4  flex md:justify-end justify-around  '>
                    <button className='border-1 border-violet-600 rounded-lg p-3  hover:bg-blue-600 hover:text-white'>Save/Add new milestone</button>
                </div>
                <div className='mt-3'>
                    {mileStones.map((mileStone) => {
                        return <div className='bg-white shadow-lg mb-2 md:p-5 sm:w-full font-semibold rounded-md'>
                            <div className='md:flex md:justify-between p-2 md:p-0 '>
                                <p className='mt-2 md:mt-0 '>Milestone name:<span className='mx-1  md:p-3 p-1 mt-2 md:mt-0 text-blue-900 border-blue-900 border-3 rounded-lg  md:mx-3'> <FontAwesomeIcon icon={faStar} /> {mileStone.name}</span></p>
                                <div className='flex gap-2'>
                                    <button className='text-red-600'><FontAwesomeIcon icon={faTrash} /></button>
                                    <button className='text-violet-950'><FontAwesomeIcon icon={faPenToSquare} /></button>
                                </div>
                            </div>
                            <div className='flex flex-col mt-4'>
                                <p>Tasks:</p>
                                <div className='md:flex md:flex-row gap-2 grid grid-cols-2 w-full p-2 md:p-0'>
                                    {mileStone.tasks.map((task, index) => {
                                        return <div className='bg-slate-200 md:flex items-center gap-2 rounded-lg px-4 md:w-fit p-2'>
                                            <p className='bg-blue-950 text-white rounded-full text-xl flex  justify-center items-center w-10 h-10' >{index + 1}</p>
                                            <p className='text-xl'>task</p>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    })}
                </div>

                <div className='flex justify-between mt-4'>
                    <Link to={"/template"} className='border-1 border-violet-700 px-3 hover:bg-blue-700  hover:text-white rounded-md p-2'>Cancel</Link>
                    <button className='rounded-md bg-blue-600 p-2 text-white px-3'>Submit</button>
                </div>

            </div>
            <Modal isOpen={showModal} toggle={toggleModal} centered={true}>
                <ModalHeader toggle={toggleModal}>
                    <p className='text-xl'>
                        Add new milestone</p></ModalHeader>
                <ModalBody>
                    <Label label={"Milestone Name"} isMandatory={true} inputId={"mileStoneAdd"} />
                    <input className='w-full rounded-r-md border-gray-400 border-1 rounded-md h-10 focus:border-1 focus:border-gray-400 px-3 mt-2' placeholder='Please Type' />
                </ModalBody>
                <div className='flex justify-between p-4'>
                    <button className='border-1 border-violet-500 px-4 hover:bg-blue-500 hover:text-white p-2 rounded-md' onClick={toggleModal}>
                        Cancel
                    </button>
                    <button className='bg-blue-500 text-white rounded-md p-2 px-4' color="secondary" onClick={toggleModal}>
                        Save
                    </button>
                </div>
            </Modal>

        </div>
    )
}

export default AddTemplate;
