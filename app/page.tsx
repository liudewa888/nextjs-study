import LikeButton from "./like-button";

function Header() {
  return <h1>header</h1>;
}

export default function Home() {
  return (
    <div>
      <Header />
      <LikeButton></LikeButton>
    </div>
  );
}
