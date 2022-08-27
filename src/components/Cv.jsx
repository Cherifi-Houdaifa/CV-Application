import React from "react";
import Info from "./Info";

export default function Cv({ data }) {
    return (
        <>
            <Info title="Personal Information">
                <p>First Name: {data[0]}</p>
                <p>Last Name: {data[1]}</p>
                <p>Email: {data[2]}</p>
                <p>Phone Number: {data[3]}</p>
            </Info>
            <Info title="Education Information">
                <p>University Name: {data[4]}</p>
                <p>Title Of Study: {data[5]}</p>
                <p>From: {data[6].from}</p>
                <p>To: &ensp;&nbsp;&ensp;{data[6].to}</p>
            </Info>
            <Info title="Work Experience">
                <p>Company Name: {data[7]}</p>
                <p>Position Title: {data[8]}</p>
                <p>Main Tasks: {data[9]}</p>
                <p>From: {data[10].from}</p>
                <p>To: &ensp;&nbsp;&ensp;{data[10].to}</p>
            </Info>
        </>
    );
}
