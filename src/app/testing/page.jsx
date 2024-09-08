import getAstronautHealth from "@/lib/actions/astronautHealthAI";
import Testing from "@/app/testing/testing";

const Home = async () => {
    const r = await getAstronautHealth();
    return <div className="flex flex-col">
        <Testing r={r}/>
    </div>;
}

export default Home;