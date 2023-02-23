import React from "react";
import { Button } from "../Button";

// 2, 2 => 4
// 2, 2 => 4

const cache = {
  //'2+2': 4,
  //'2+3': 5
}

const sum = (a, b) => {
  const key = JSON.stringify(`${a}+${b}`) // '2+2', '2+3'
  if (cache[key]) {
    console.log('from cache')
    return cache[key]
  }
  const result = a + b;
  cache[key] = result
  console.log('calculation');
  return result;
};

export const Memo = () => {
  return (
    <>
      <Button onClick={() => sum(2, 2)}>2 + 2</Button>
      <Button onClick={() => sum(2, 3)}>2 + 3</Button>
      <Button onClick={() => sum(2, 4)}>2 + 4</Button>
    </>
  );
};
