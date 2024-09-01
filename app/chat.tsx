function Header() {
  return (
    <>
      <div className="h-[40px] bg-[#007bff] flex items-center justify-between px-3">
        <div>
          <span>房间:</span>
          <span>8888</span>
        </div>
        <div>
          <span>昵称:</span>
          <span>xingzi</span>
        </div>
      </div>
    </>
  );
}

function Send() {
  return (
    <div>
      <input type="text" />
    </div>
  );
}

function Message() {
  return <div></div>;
}

function Content() {
  return (
    <div className="flex-1 flex flex-col  border border-[#ccc]">
      <Message></Message>
      <Send></Send>
    </div>
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
