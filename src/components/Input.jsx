import React from "react";
import "../styles/Input.css";

export function TextInput({ placeholder, onChange, data }) {
    return <input type="text" placeholder={placeholder} autoComplete="off" onChange={onChange} value={data} />;
}
export function Button({ text, onClick }) {
    return <input type="button" value={text} onClick={onClick} />;
}
export function DateInput({ dataIndex, onChange, data }) {
    return (
        <div className="dates" data-index={dataIndex}>
            <div className="date">
                <label htmlFor="">From</label>
                <input type="date" onChange={onChange} value={data.from} data-type="from" />
            </div>
            <div className="date">
                <label htmlFor="">To</label>
                <input type="date" onChange={onChange} value={data.to} data-type="to" />
            </div>
        </div>
    );
}
