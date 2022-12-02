import React from "react";
import styled from "styled-components";

const SubTask = ({ text }) => {
  return <SubTaskItem>{text}</SubTaskItem>;
};
const SubTaskItem = styled.li`
  margin-top: 8px ;
  list-style: none;
  font-weight: 600;
`;
export default SubTask;
