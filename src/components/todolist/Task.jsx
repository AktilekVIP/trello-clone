import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { listActions } from "../../store/todoSlice";
import SubTask from "../subtask/SubTask";
import { TiInputChecked } from "react-icons/ti";
const TodoItem = ({ title, id, subtask }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length) {
      dispatch(
        listActions.addSubtask({
          text: text,
          id: Math.random().toString(),
          mainId: id,
        })
      );
      setText("");
    }
  };

  return (
    <div>
      <SubTaskItem>
        <Form onSubmit={onSubmit}>
          <h3>{title}</h3>
          <WrapperForInputAndBtn>
            <input
              type='text'
              placeholder='Add new Task'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type='submit'>
              <TiInputChecked />
            </button>
          </WrapperForInputAndBtn>
        </Form>
        <div>
          {subtask.map((item) => (
            <SubTask key={item.id} {...item} />
          ))}
        </div>
      </SubTaskItem>
    </div>
  );
};
const WrapperForInputAndBtn = styled.div`
  & {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  & > input {
    cursor: pointer;
    width: 150px;
    height: 35px;
    border-radius: 5px;
    border: none;
    text-align: center;
  }
  & > button {
    background: lightgreen;
    border: none;
    width: 45px;
    border-radius: 7px;
  }
`;
const Form = styled.form``;
const SubTaskItem = styled.div`
  & {
    padding-top: 7px;
    width: 280px;
    border-radius: 15px;
    min-height: 75px;
    text-align: center;
    background-color: #86a2d4;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default TodoItem;
