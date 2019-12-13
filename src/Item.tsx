import React from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  width: 200px;
  border: 1px solid grey;
  margin-bottom: 8px;
  background-color: lightblue;
  padding: 8px;
`;

const Item = ({ item }) => {
  return <StyledItem>{item.content}</StyledItem>;
};

export default Item;
