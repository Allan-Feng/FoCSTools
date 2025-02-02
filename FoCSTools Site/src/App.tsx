import "./App.css";
import Navbar from "./components/Navbar";
import Test from "./pages/Test";
import DFA from "./pages/DFA";
import Landing from "./pages/Landing";
import TuringMachine from "./pages/TuringMachine";
import { useState, useEffect } from "react";

export type GraphType = "DFA" | "CFG" | "TU";

export default function App() {
  const paths: { [id: string]: JSX.Element } = {
    "/Test": <Test />,
    "/DFA": <DFA />,
    "/TuringMachine": <TuringMachine />,
    "/Landing": <Landing />,
  };

  const [component, setComponent] = useState<JSX.Element>(<Landing />);
  const [graphType, setGraphType] = useState<GraphType>("DFA");

  useEffect(() => {
    const path: string = window.location.pathname;
    if (path in paths) {
      setComponent(paths[path]);
    } else {
      setComponent(<Landing />);
    }
  }, []);
  return (
    <>
      <Navbar graphType={graphType} setGraphType={setGraphType} />
      {component}
    </>
  );
}
