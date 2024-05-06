export interface TodoItemProps {
  id: number;
  name: string;
  isCompleted: boolean;
  onToggle: (id: number) => void;
}
