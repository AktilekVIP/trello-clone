import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Task from "./Task";

const TaskList = () => {
  const todos = useSelector((state) => state.lists.todos);
  return (
    <div>
      <TaskGrid>
        {todos.map((list) => (
          <Task key={list.id} {...list} />
        ))}
      </TaskGrid>
    </div>
  );
};
const TaskGrid = styled.div`
  margin-top: 100px;
  display: grid;
  margin-left: 15px;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 50px;
`;
export default TaskList;
