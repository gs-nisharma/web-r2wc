import { FC, useState } from "react";
type Props = {
  addItem: (value: string) => void;
};
const TodoInput: FC<Props> = ({ addItem }) => {
  const [value, setValue] = useState<string>("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addItem(value);
        setValue("");
      }}
    >
      <input
        type="text"
        value={value}
        placeholder="enter tasks"
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};
export default TodoInput;
