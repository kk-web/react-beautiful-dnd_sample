import React from "react";
import { ItemType } from "./types";
import List from "./List";

const App = () => {
  const initial: ItemType[] = Array.from({ length: 10 }, (v, k) => k).map(k => {
    return {
      id: `id-${k}`,
      content: `Item ${k}`
    };
  });
  return <List items={initial} />;
};

export default App;
