import React, { useState, Component } from "react";
import DatePicker from "react-date-picker";
import GetImage from "../GetImage/GetImage";


function DateSelector() {
    const [date, setDate] = useState(new Date());
    let getDay = () => {
        return date;
    }
    console.log(date);
    return (
    <div>
    <DatePicker className="date-selector" onChange={setDate} value={date}/>

    <GetImage day={getDay}/>
    </div>
)}

export default DateSelector;