import UpdateForm from "@/components/edit-form";
import { getContactById } from "@/lib/data";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ id: string }>;
};

const UpdateContactPage = async ( {params}: Props) => {
    const {id} = await params;
    const contact = await getContactById(id);

    if(!contact){
        notFound();
    }

    return (
        <div className="w-4xl mx-auto mt-5">
            <h1 className="text-2xl text-center mb-2">Update Contact</h1>
            <UpdateForm contact={contact} />
        </div>
    )
}

export default UpdateContactPage;