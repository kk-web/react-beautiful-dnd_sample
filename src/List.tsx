import React from "react";
import Item from "./Item";

const List = ({ items }) => (
  <>
    {items.map(item => (
      <Item item={item} key={item.id} />
    ))}
  </>
);

export default List;
