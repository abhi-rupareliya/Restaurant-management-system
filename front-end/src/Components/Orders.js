import React from 'react';
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Navbar from "./Navbar";
import FGetMenu from '../Function/F_GetMenu'
import FAddMenu from '../Function/F_AddMenu';
import { FDeleteMenu, FEditMenu } from '../Function/F_EditMenu'
import { useEffect } from 'react';
import SideBar from './SidebarCSR';
// import SideBar from "./SideBar";
const Orders = () => {
    const [open, setOpen] = useState(false)
    const [addEdit, setAddEdit] = useState('')
    const cancelButtonRef = useRef(null)
    return (
        <>
            <Navbar title="Manage Orders" />
            <SideBar />
            <div className="bg-[url('/public/images/dashbackground.jpg')]">
                <div className="bg-black/75 col-span-5 p-4 sm:ml-64 backdrop-blur-sm  min-h-screen">
                    <div className="p-4 border rounded-lg md:space-x-8 md:mt-0  md:font-medium md:border-0 text-[#f06826] text-2xl">
                        Take order from the tables
                    </div>
                    <div className='grid grid-cols-3 gap-8 justify-items-center gap-y-20'>
                        <div class="mx-auto max-w-7xl" onClick={() => {
                            setOpen(true)
                        }}>
                            <div class="group relative">
                                <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-600 to-pink-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                                <div class="flex  rounded-xl w-80 h-48 items-top relative justify-center items-center space-x-6 bg-[rgb(255,233,201)] px-7 py-6 leading-none ring-1 ring-gray-900/5">
                                    <h1 class="text-4xl font-bold text-[#393b3a] z-10 space-y-2">
                                        Table-1
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div class="mx-auto max-w-7xl" onClick={() => {
                            setOpen(true)
                        }}>
                            <div class="group relative">
                                <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-600 to-pink-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                                <div class="flex  rounded-xl w-80 h-48 items-top relative justify-center items-center space-x-6 bg-[rgb(255,233,201)] px-7 py-6 leading-none ring-1 ring-gray-900/5">
                                    <h1 class="text-4xl font-bold text-[#393b3a] z-10 space-y-2">
                                        Table-2
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div class="mx-auto max-w-7xl" onClick={() => {
                            setOpen(true)
                        }}>
                            <div class="group relative">
                                <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-600 to-pink-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                                <div class="flex  rounded-xl w-80 h-48 items-top relative justify-center items-center space-x-6 bg-[rgb(255,233,201)] px-7 py-6 leading-none ring-1 ring-gray-900/5">
                                    <h1 class="text-4xl font-bold text-[#393b3a] z-10 space-y-2">
                                        Table-3
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div class="mx-auto max-w-7xl" onClick={() => {
                            setOpen(true)
                        }}>
                            <div class="group relative">
                                <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-600 to-pink-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                                <div class="flex  rounded-xl w-80 h-48 items-top relative justify-center items-center space-x-6 bg-[rgb(255,233,201)] px-7 py-6 leading-none ring-1 ring-gray-900/5">
                                    <h1 class="text-4xl font-bold text-[#393b3a] z-10 space-y-2">
                                        Table-4
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div class="mx-auto max-w-7xl" onClick={() => {
                            setOpen(true)
                        }}>
                            <div class="group relative">
                                <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-600 to-pink-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                                <div class="flex  rounded-xl w-80 h-48 items-top relative justify-center items-center space-x-6 bg-[rgb(255,233,201)] px-7 py-6 leading-none ring-1 ring-gray-900/5">
                                    <h1 class="text-4xl font-bold text-[#393b3a] z-10 space-y-2">
                                        Table-5
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div class="mx-auto max-w-7xl" onClick={() => {
                            setOpen(true)
                        }}>
                            <div class="group relative">
                                <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-600 to-pink-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                                <div class="flex  rounded-xl w-80 h-48 items-top relative justify-center items-center space-x-6 bg-[rgb(255,233,201)] px-7 py-6 leading-none ring-1 ring-gray-900/5">
                                    <div class="px-10 py-3 flex justify-content-center items-center text-4xl font-bold text-[#393b3a] z-10 space-y-2 border-4 border-dashed border-orange-500 rounded-lg">
                                        +
                                    </div>
                                </div>
                            </div>
                        </div>


                        <Transition.Root show={open} as={Fragment}>
                            <Dialog
                                as="div"
                                className="relative z-50"
                                initialFocus={cancelButtonRef}
                                onClose={setOpen}
                            >
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                </Transition.Child>

                                <div className="fixed inset-0 z-10 overflow-y-auto">
                                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                        >
                                            <Dialog.Panel className="relative rounded-lg overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full m-40">
                                                <div className="bg-white flex justify-center px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                                    <div className="sm:flex sm:items-start">
                                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                            <Dialog.Title
                                                                as="h3"
                                                                className="text-lg font-bold text-center leading-6 text-gray-900"
                                                            ></Dialog.Title>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                    <button
                                                        type="button"
                                                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        Done
                                                    </button>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition.Root>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Orders;
