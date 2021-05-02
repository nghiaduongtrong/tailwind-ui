import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Button } from "../button/Button";

type ModalConfirmProps = {
    open?: boolean;
    onClose?: () => void;
};

export function ModalConfirm({ open = false, onClose = () => {} }: ModalConfirmProps) {
    return (
        <>
            <Transition show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    static
                    open={open}
                    onClose={onClose}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 backdrop-blur backdrop-filter bg-black bg-opacity-30" />
                        </Transition.Child>

                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded">
                                <div className="border-b p-2 pr-4">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 flex items-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-12 w-12 text-red-600"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <div className="ml-2">
                                            Delete user
                                            <p className="text-sm text-gray-500">
                                                This action cannot be undone.
                                            </p>
                                        </div>
                                    </Dialog.Title>
                                </div>
                                <div className="flex justify-between p-4 gap-3">
                                    <Button
                                        className="w-full shadow-sm"
                                        color="transparent"
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        className="w-full shadow-sm bg-red-600 hover:bg-red-500 text-white"
                                        loading
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
