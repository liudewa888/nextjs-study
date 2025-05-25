import Chat from "./chat";
import "../public/assets/css/base.css";
import "../public/assets/css/style.css";
import "../public/assets/css/web.css";
import '../public/assets/css/font-awesome.css'

export default function Home() {
  return (
    // <div className="flex justify-center w-[100vw]">
    <div className="px-32">
      <Chat />
    </div>
  );
}
