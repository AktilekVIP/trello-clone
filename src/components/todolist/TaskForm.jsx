import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { listActions } from "../../store/todoSlice";
import TaskList from "./TaskList";
import img from "../../assets/1.jpg";
import { BiX } from "react-icons/bi";
import { BsJournalPlus } from "react-icons/bs";
const TaskForm = () => {
  const [value, setValue] = useState("");
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newList = {
      title: value,
      id: Date.now(),
      subtask: [],
    };
    if (value.trim().length) {
      dispatch(listActions.addTodo(newList));
      setValue("");
    }
  };
  return (
    <FormWrapper img={img}>
      <figure></figure>

      {isShow ? (
        <>
          <Form onSubmit={onSubmitHandler}>
            <input
              type='text'
              placeholder='+ Add new List'
              value={value}
              onChange={(e) => setValue(e.target.value)}
              maxLength='25'
            />
            <button type='submit'>Add new List</button>
            <div>
              <BadButton
                onClick={() => {
                  setIsShow(!isShow);
                }}
              >
                <BiX />
              </BadButton>
            </div>
          </Form>
        </>
      ) : (
        <ShowButton onClick={() => setIsShow(!isShow)}>
          <BsJournalPlus /> 
          Add new card 
        </ShowButton>
      )}

      <TaskList />
    </FormWrapper>
  );
};
const ShowButton = styled.button`
  width: 190px;
  height: 55px;
  position: relative;
  border-radius: 5px;
  border: none;
  font-size: 17.3px;
  left: 44%;
  top: 6%;
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  background-color: #ffffffb3;
`;
const BadButton = styled.button`
  margin-left: 15px;
  font-weight: 500;
  width: 85px;
  height: 44px;
  background: #f67977;
  border-radius: 5px;
  border: none;
`;
const FormWrapper = styled.div`
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vw;
`;
const Form = styled.form`
  & {
    width: 485px;
    height: 180px;
    background-color: #fff;
    box-shadow: 5px 5px gray;
    border-radius: 15px;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 10px;
  }
  & > input {
    cursor: pointer;
    width: 220px;
    height: 43px;
    border: none;
    border-radius: 5px;
    padding-left: 15px;
    font-size: 16.8px;
    background-color: #0000001c;
    outline-color: #a2a2da;
  }
  & > input::placeholder {
    color: #413e3e;
    padding-left: 15px;
    font-size: 16.8px;
  }
  & > button {
    margin-left: 15px;
    font-weight: 500;
    width: 105px;
    height: 44px;
    background: lightgreen;
    border-radius: 5px;
    border: none;
  }
`;
export default TaskForm;
