import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef, useState } from 'react';

export const Add = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-plus">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 5l0 14"></path>
        <path d="M5 12l14 0"></path>
    </svg>
);

export default function ModalAlbum() {
    let [isOpen, setIsOpen] = useState(false);

    const name = useRef();
    const description = useRef();
    const image = useRef();

    function closeModal() {
        setIsOpen(false);
    }

    function createAlbum() {
        console.log('Album created');
        console.log(name.current.value);
        fetch(
            `/api/music/addPlaylist?name=${name.current.value}&description=${description.current.value}`
        );
        setIsOpen(false);
        window.location.reload();
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <div className="flex items-center justify-center z-[999999]">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-full bg-black/20 p-3 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                    <Add />
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-100 bg-opacity-60 backdrop-blur-sm p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900">
                                        Crea tu Album
                                    </Dialog.Title>
                                    <div className="mt-2 text-black flex flex-col gap-4">
                                        <input
                                            type="text"
                                            placeholder="Nombre del Album"
                                            className=" border-2 border-black rounded-md px-1 w-62"
                                            ref={name}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Descripcion Opcional"
                                            className=" border-2 border-black rounded-md px-1 w-62"
                                            ref={description}
                                        />
                                    </div>

                                    <div className="mt-4 flex gap-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-zinc-900 bg-opacity-70 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white hover:bg-opacity-100 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={createAlbum}>
                                            Crear Album
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-red-700 bg-opacity-90 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white hover:bg-opacity-100 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}>
                                            Cerrar
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
