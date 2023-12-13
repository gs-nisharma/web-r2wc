import { FC, useState } from "react";
import TodoElement from "./TodoElement";
import TodoInput from "./TodoInput";

type TodoElementsType = {
  id: number;
  title: string;
  done: boolean;
};
type Props = {
  items?: TodoElementsType[];
  addAction: () => void;
};

const App: FC<Props> = (props) => {
  const [items, setItems] = useState<Array<TodoElementsType>>(
    props.items || []
  );
  console.log("addAction: ", props.addAction);
  const addItem = (value: string) => {
    setItems([
      ...items,
      { title: value, done: false, id: Math.round(Math.random() * 100) },
    ]);

    props.addAction();
  };
  const toggleDone = (key: number) => {
    console.log(key);
    setItems(items.map((v, i) => (v.id !== key ? v : { ...v, done: !v.done })));
  };
  return (
    <div className="App">
      <TodoInput addItem={addItem} />
      {items.map((v, i) => {
        return (
          <TodoElement
            title={v.title}
            done={v.done}
            key={i}
            id={v.id}
            toggleDone={toggleDone}
          />
        );
      })}
    </div>
  );
};

export default App;
