import React from "react";
import "./css_styled/App.css";
import styled from "styled-components";
import { Button, Input, Select } from "antd";

const Div3 = styled.div`
    display: flex;
    align-items: center;
    p{
        padding: 0 20px 0 10px;
        color: #87A1F5;
        font-size: 20px;
    }
    input{
        margin: 0 5px;
        width: 30%;
    }
    button{
        margin: 0 5px;
    }
`;

function Notebook() {
    const [items, setItems] = React.useState([]);
    const [inputVal, setInputVal] = React.useState("");
    const options = [];
    const onChange = (e) => {
        setInputVal(e.target.value);
    };
    
    const addOptions = () => {
        if (inputVal) {
            setItems([...items, inputVal]);
            setInputVal('');
        }
    };
    
    const removeOptions = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    const handleChange = (value) => {
        console.log(`${value}`);
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            addOptions();
        }
    };
    return (
        <div>
            <h1>Todo List</h1>
            <Div3 style={{borderBottom:"1px solid white"}}>
                <p>condition</p>
                <Input
                    placeholder="Conditions" 
                    value={inputVal}
                    onChange={onChange}
                    onKeyDown={handleEnter}
                />
                <Button type="primary" onClick={addOptions} >+</Button>
            </Div3>
           {items.map((item, index) => (
                <Div3>
                    <p>{item}</p>
                    <Select
                        mode="tags"
                        placeholder="Enter Options"
                        onChange={handleChange}
                        style={{
                            margin: '0 5px',
                            width: '30%',
                        }}
                        options={options}
                    />
                    <Button type="primary" danger onClick={() => removeOptions(index)}>-</Button>
                </Div3>
            ))}
        </div>
    );
}

export default Notebook;
