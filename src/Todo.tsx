import { VFC } from "react";
import { TodoType } from "./types/todo";

export const Todo: VFC<Omit<TodoType, "id">> = (
  // props: Pick<TodoType, "userId" | "title" | "completed">
  props
) => {
  const { title, userId, completed = false } = props;

  const completMark = completed ? "[完]" : "[未]";
  return <p>{`${completMark} ${title}(ユーザー:${userId})`}</p>;
};
