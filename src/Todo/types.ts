export type TodoElementType = {
    title: string;
    done: boolean;
    id: number;
    toggleDone: (idx: number) => void;
}
