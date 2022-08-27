import React from "react";
import Info from "./Info";
import { TextInput, DateInput } from "./Input";

export default function Infos({ changeHandler, data }) {
    return (
        <>
            <Info title="Personal Info">
                <TextInput placeholder="First Name" data={data[0]} onChange={(e) => {changeHandler(e, 0)}}/>
                <TextInput placeholder="Last Name" data={data[1]} onChange={(e) => {changeHandler(e, 1)}}/>
                <TextInput placeholder="Email" data={data[2]} onChange={(e) => {changeHandler(e, 2)}}/>
                <TextInput placeholder="Phone Number" data={data[3]} onChange={(e) => {changeHandler(e, 3)}}/>
            </Info>
            <Info title="Education Info">
                <TextInput placeholder="University Name" data={data[4]} onChange={(e) => {changeHandler(e, 4)}}/>
                <TextInput placeholder="Title Of Study" data={data[5]} onChange={(e) => {changeHandler(e, 5)}}/>
                <DateInput data={data[6]} onChange={(e) => {changeHandler(e, 6)}}/>
            </Info>
            <Info title="Work Experience">
                <TextInput placeholder="Company Name" data={data[7]} onChange={(e) => {changeHandler(e, 7)}}/>
                <TextInput placeholder="Position Title" data={data[8]} onChange={(e) => {changeHandler(e, 8)}}/>
                <TextInput placeholder="Main Tasks" data={data[9]} onChange={(e) => {changeHandler(e, 9)}}/>
                <DateInput data={data[10]} onChange={(e) => {changeHandler(e, 10)}}/>
            </Info>
        </>
    );
}
