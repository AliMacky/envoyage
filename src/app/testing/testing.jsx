"use client";

const Testing = ({r}) => {
    return <div className="flex flex-col">
        <p className="p-6 bg-white text-black whitespace-pre-wrap">{JSON.stringify(r)}</p>
    </div>;
}
export default Testing;