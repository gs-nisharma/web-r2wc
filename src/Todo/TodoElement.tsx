import { FC } from "react";
import { TodoElementType } from "./types";

const TodoElement: FC<TodoElementType> = ({ id, title, done, toggleDone }) => {
  return (
    <div>
      <input type="checkbox" checked={done} onChange={() => toggleDone(id)} />
      <h2 style={{ display: "inline" }}>
        {id}:{title}
      </h2>
    </div>
  );
};
export default TodoElement;
