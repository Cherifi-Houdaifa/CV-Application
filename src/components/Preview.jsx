import React, { useState } from "react";
import { Button } from "./Input";
import "../styles/Preview.css";

function Preview({ onClick }) {
    const [btnText, setBtnText] = useState("Preview");
    const [previewTitle, setPreviewTitle] = useState("Create The CV");

    return (
        <div className="preview">
            <hr />
            <h1>{previewTitle}</h1>
            <Button
                text={btnText}
                onClick={() => {
                    onClick();
                    btnText === "Preview" ? setBtnText("Edit") : setBtnText("Preview");
                    previewTitle === "Create The CV" ? setPreviewTitle("Edit The CV") : setPreviewTitle("Create The CV");
                }}
            />
        </div>
    );
}
export default Preview;
