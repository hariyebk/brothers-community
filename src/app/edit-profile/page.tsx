import EditProfile from "@/Components/Main/forms/Edit Profile/EditProfile";


export default function page() {
    //TODO: Fetch All the User's Data -> getAllUserData
    const userData = {
        firstName: "Abebe",
        lastName: "Balcha",
        city: "Addis Ababa",
        country: "Ethiopia"
    }
    return (
        <main className="max-md:px-5 md:px-7 xl:px-20 mt-20 mb-28">
            <EditProfile userData={userData} />
        </main>
    )
}
