import React from "react";
import "./css_styled/App.css";
import { Checkbox } from "antd";


function Preference() {
    const timeOption = ["8:00~16:00","12:00~20:00","16:00~24:00","20:00~4:00","00:00~8:00","4:00~12:00"];
    const dataOption = ["weekdays","weekends"];
    const placeOption = ["Taipei","Taichung","Tainan","Kaohsiung"];

    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    }
    return (
        <div className="perfer-form">
            {/* <h1>Preference</h1> */}
            <div className="prefer-option">
                <p>time</p>
                <Checkbox.Group 
                    options={timeOption}
                    defaultValue={['8:00~16:00']}
                    onChange={onChange}
                />
            </div>
            <div className="prefer-option">
                <p>data</p>
                <Checkbox.Group 
                    options={dataOption}
                    defaultValue={['weekdays']}
                    onChange={onChange}
                />
            </div>
            <div className="prefer-option">
                <p>place</p>
                <Checkbox.Group
                    options={placeOption}
                    defaultValue={['Taipei']}
                    onChange={onChange}
                />
            </div>
            <button>save</button>
        </div>
    );
}

export default Preference;