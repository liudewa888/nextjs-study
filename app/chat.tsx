"use client";

import { useState, createContext, useContext, useRef } from "react";
// const msgData = [
//   { type: 1, msg: "my msg", uname: "xxx" },
//   { type: 2, msg: "other msg", uname: "xxx" },
// ];

interface Msg {
  uname: string;
  type: number;
  msg: string;
}

const MsgContext = createContext({ msgData: [] as Msg[] });

function Header() {
  return (
    <>
      <div className="h-[40px] bg-[#007bff] flex items-center justify-between px-3">
        <div className="text-[#fff]">
          <span className="text-sm">房间:</span>
          <span className="text-sm">8888</span>
        </div>
        <div className="text-[#fff]">
          <span className="text-sm">昵称:</span>
          <span className="text-sm">xingzi</span>
        </div>
      </div>
    </>
  );
}

function Send() {
  const [inputVal, setInputVal] = useState("");
  const { msgData, setMsgData } = useContext(MsgContext);

  function sendMsg() {
    if (!inputVal) return;
    const type = msgData.length % 2;
    const message = {
      type,
      msg: inputVal,
      uname: "zs",
    };
    const data = msgData.concat([message]);
    setMsgData(data);
    setInputVal("");
  }

  function inputChange(event) {
    setInputVal(event.target.value);
  }

  function inputKeyDown(event) {
    if (!event.shiftKey && event.keyCode == 13) {
      sendMsg();
      event.preventDefault();
    }
  }
  return (
    <div className="w-full h-12 flex items-center px-3">
      <input
        type="text"
        name="input"
        className="border border-[#ccc] h-10 w-[30%]"
        value={inputVal}
        onChange={inputChange}
        onKeyDown={inputKeyDown}
      />
      <button className="ml-3" onClick={sendMsg}>
        发送
      </button>
    </div>
  );
}

function Msg() {
  const { msgData } = useContext(MsgContext);
  const parentRefs = useRef([]);
  function copyText(index) {
    const el = parentRefs.current[index]?.previousSibling;
    if (el) {
      navigator.clipboard.writeText(el.innerText);
    }
  }
  return (
    <div className="flex-1">
      <ul className="flex flex-col overflow-auto h-[68vh] px-3">
        {msgData.map((item, index) => {
          return (
            <li
              className={`flex flex-col mt-1 ${
                item.type !== 1 ? "items-start" : "items-end"
              }`}
              key={index}
            >
              {item.type !== 1 && (
                <span className="text-xs text-[#202020bb]">{item.uname}:</span>
              )}
              <div className="text-[#202020dd] flex items-center">
                <span>{item.msg}</span>
                {item.type !== 1 && (
                  <div
                    className="ml-2 text-xs text-[#007bff99] relative left-1 top-0"
                    ref={(el) => (parentRefs.current[index] = el)}
                  >
                    <button onClick={() => copyText(index)}>复制</button>
                    <button className="ml-2">打开</button>
                    <button className="ml-2">下载</button>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Content() {
  const initData = [
    { type: 1, msg: "my msg", uname: "xxx" },
    { type: 2, msg: "other msg", uname: "xxx" },
  ];
  const [msgData, setMsgData] = useState(initData);

  return (
    <MsgContext.Provider value={{ msgData, setMsgData }}>
      <div className="flex-1 flex flex-col  border border-[#ccc]">
        <Msg></Msg>
        <Send></Send>
      </div>
    </MsgContext.Provider>
  );
}

export default function Chat() {
  return (
    <div className="flex flex-col w-[80vw] h-[80vh] p-3">
      <Header></Header>
      <Content></Content>
    </div>
  );
}
