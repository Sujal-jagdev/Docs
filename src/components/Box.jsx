import React from 'react'
import { FaRegFileCode } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdDownloading } from "react-icons/md";
import { motion } from "framer-motion"

const Box = ({ data,reference }) => {
    return (
        <>
            <motion.div drag dragConstraints={reference} whileTap={{ scale: 1.3 }} animate={{ x: 200,y:150,rotate:360}} className="box1 col-2 pt-3 pb-3 ps-3 pe-1 text-light position-relative overflow-hidden">
                <FaRegFileCode />
                <p className='mt-2'>{data.content}.</p>
                <div className="size d-flex justify-content-between pe-4 mt-4">
                    <p>{data.size}</p>
                    <span className=' bg-gradient rounded-circle pt-1 p-2 align-items-center'>
                        {
                            data.close ? <MdDownloading className='fs-5' /> : <IoClose className='fs-5' />
                        }

                    </span>
                </div>
                <footer>
                    {
                        data.btn ? (
                            <div className="tag bg-success position-absolute col-12 start-0 p-3 bottom-0">
                                <h6 className=' text-center'>Download!</h6>
                            </div>
                        ) : (
                            <div className="progress  position-absolute col-12 start-0  bottom-0 bg-primary  d-flex flex-column-reverse pt-5 pb-4 ps-4 pe-3">
                                <h6>Progress..</h6>
                                <div className="border p-1 bg-warning col-10 start-0 position-absolute rounded-pill border-0 ms-4"></div>
                            </div>
                        )
                    }


                </footer>
            </motion.div>
        </>
    )
}

export default Box