import {getUser} from "@/lib/actions/getUser";
import Journal from "@/app/journal/journal";
import Sidebar from "@/components/sidebar";

const Home = async () => {
    // if (journalEntry.trim() === "") return;

    const user = await getUser();
    // if (user) {
    //     await createJournalEntry(journalEntry, user.id);
    //     setJournalEntry("");
    // } else {
    //     console.error("User not found");
    // }

    return <div>
        <div className="h-screen w-screen flex flex-row">
            <div className="flex flex-col h-full">
                <Sidebar/>
            </div>
            <Journal user={user}/>
        </div>
    </div>;
};

export default Home;