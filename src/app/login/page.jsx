import Navbar from "@/components/navbar";
import Login from "./login";
import Particles from "@/components/ui/particles";

export default function Home() {
    return (
        <div className="flex flex-col h-full">
            <Navbar />
            <Particles
                className="absolute inset-0"
                quantity={1000}
                ease={10}
                color={"#ffffff"}
                refresh
            />
            <Login />
        </div>
    );
}
