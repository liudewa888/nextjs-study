"use client";
export default function Test() {
  function clickHandler() {
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => console.log(data, 888));
  }
  return <button onClick={clickHandler}>api test</button>;
}
