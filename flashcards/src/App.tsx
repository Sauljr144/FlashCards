import { useState } from "react";
import "./App.css";
import CardGrid from "./components/CardGrid";
import Form from "./components/Form";
import useData from "./hooks/useData";
import { Category } from "./services/Category-Service";

export interface ITest {
  category: Category;
}

function App() {
  const {category} = useData()
  const [cats, setCats] = useState<ITest>({} as ITest);

  

  return (
    <>
      <Form/>
      <CardGrid/>
      {/* <ul>
      {data.map(x => <li key={x.question} >{x.question}</li>)}
      {data.map(x => <li key={x.correct_answer} >{x.correct_answer}</li>)}
    </ul> */}
    </>
  );
}

export default App;
