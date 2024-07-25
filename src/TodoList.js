import React from "react";
import "./css_styled/App.css";
import styled, {css} from "styled-components";
import { Button, Input } from "antd";


const Container = styled.div`
    width: 95%;
    padding: 20px;
    margin: 20px auto;
    color: #87A1F5;
`;
const Div3 = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
    h2{
        padding: 0 20px 0 10px;
        color: #87A1F5;
    }
    input{
        width: 30%;
    }
    button{
        margin: 0 10px;
    }
`;

const ItemDiv = styled.div`
    padding: 0 20px 0 10px;
    color: #87A1F5;
    font-size: 20px;

    ${(props) => props.checked && 
        css`
            background-color: #87A1F5;
            color: #161636;
            text-decoration: line-through;
        `}
`;


function TodoList() {
    const [items, setItems] = React.useState(["OOAD", "DataBase", "NLP"]);
    const [checked, setChecked] = React.useState(Array(items.length).fill(false));
    const [inputVal, setInputVal] = React.useState("");

    const onChange = (e) => {
        setInputVal(e.target.value);
    };
    
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            addOptions();
        }
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

    const checkedDone = (index) =>{
        const currentChecked = [...checked];
        currentChecked[index] = !currentChecked[index];
        setChecked(currentChecked);
    }

    return (
        <Container>
            <Div3 style={{borderBottom:"1px solid white"}}>
                <h2>TodoList</h2>
                <Input
                    placeholder="enter todo item" 
                    value={inputVal}
                    onChange={onChange}
                    onKeyDown={handleEnter}
                />
                <Button type="primary" onClick={addOptions} >+</Button>
            </Div3>
           {items.map((item, index) => (
                <Div3>
                    <ItemDiv key={index} checked={checked[index]} onClick={()=>checkedDone(index)}> {item} </ItemDiv>
                    <Button type="primary" danger onClick={() => removeOptions(index)}>x</Button>
                </Div3>
            ))}
        </Container>
    );
}

export default TodoList;
