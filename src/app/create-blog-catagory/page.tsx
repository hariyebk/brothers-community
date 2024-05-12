import CreateBlogCatagoryForm from "@/Components/Main/forms/CreateBlogCatagoryForm";
import TopPageHeader from "@/Components/Small Pieces/TopPageHeader";


export default function page() {
    return (
        <main className="max-md:px-10 md:px-7 xl:px-24 mb-28">
            <TopPageHeader pageCode="PG32" pageName="Create Blog Catagory Page" pageDescription="New catagory creation page" />
            <CreateBlogCatagoryForm />
        </main>
    )
}
