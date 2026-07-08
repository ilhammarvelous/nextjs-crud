import ContactTable from "@/components/contact-table"
import Search from "@/components/search"
import { CreateButton } from "@/components/buttons"

type Props = {
    searchParams: Promise<{ query?: string; page?: string }>;
};

const Contacts = async ({ searchParams }: Props) => {

    const params = await searchParams;
    const query = params?.query || "";
    const currentPage = Number(params?.page) || 1;

    return (
        <div className="max-w-screen-md mx-auto mt-5">
            <div className="flex items-center justify-between gap-1 mb-5">
                <Search />
                <CreateButton />
            </div>
            <ContactTable query={query} currentPage={currentPage} />
        </div>
    )
}

export default Contacts