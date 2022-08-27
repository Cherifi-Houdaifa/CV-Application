import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Preview from "./components/Preview";
import Infos from "./components/Infos";
import Cv from "./components/Cv";



function App() {
    const [preview, setPreview] = useState(false);
    const [data, setData] = useState([
        "",
        "",
        "",
        "",
        "",
        "",
        { from: "", to: "" },
        "",
        "",
        "",
        { from: "", to: "" },
    ]);
    

    // input change Handler Function
    const handleChange = (e, index) => {
        if (e.target.getAttribute("type") === "date") {
            if (e.target.getAttribute("data-type") === "from")
                setData([
                    ...data.slice(0, index),
                    { ...data[index], from: e.target.value },
                    ...data.slice(index + 1),
                ]);
            else
                setData([
                    ...data.slice(0, index),
                    { ...data[index], to: e.target.value },
                    ...data.slice(index + 1),
                ]);
            return;
        }
        setData([
            ...data.slice(0, index),
            e.target.value,
            ...data.slice(index + 1),
        ]);
        console.log(data[index]);
    };

    return (
        <>
            <NavBar title="CV Application" />
            {preview ? (
                <Cv data={data}/>
            ) : (
                <Infos changeHandler={handleChange} data={data} />
            )}
            <Preview
                onClick={() => {setPreview(!preview)}}
            />
        </>
    );
}
export default App;
