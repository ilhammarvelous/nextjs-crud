"use client"

import { saveContact } from "@/lib/actions"
import { useFormState } from "react-dom"
import { SubmitButton } from "./buttons"

const CreateForm = () => {
    const [state, formAction] = useFormState(saveContact, null);

    return (
        <form action={formAction}>
            <div className="mb-5">
                <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-900">
                        Full Name
                </label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Full Name..." />
            </div>

            {/* pesan error */}
            <div id="name-error" arial-live="polite" aria-atomict="true">
                <p className="mt-2 text-s text-red-500">{state?.Error?.name}</p>
            </div>

            <div className="mb-5">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900">Phone Number</label>
                <input 
                    type="text" 
                    name="phone" 
                    id="phone" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Phone Number..." />
            </div>

               {/* pesan error */}
            <div id="phone-error" arial-live="polite" aria-atomict="true">
                <p className="mt-2 text-s text-red-500">{state?.Error?.phone}</p>
            </div>

            <div id="message-error" arial-live="polite" aria-atomict="true">
                <p className="mt-2 text-s text-red-500">{state?.message}</p>
            </div>
            <SubmitButton label="save" />
        </form>
    )
}

export default CreateForm