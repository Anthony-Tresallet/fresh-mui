import MyButton from "../components/my-button.tsx";
import Demo from "../islands/Demo.tsx";
import SimpleDemo from "../islands/SimpleDemo.tsx";

export default function Home() {
  
  return (
    <div>
      <img
        src="/logo.svg"
        width="128"
        height="128"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <MyButton></MyButton>
    </div>
  );
}
