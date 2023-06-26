import { type ReactElement, type MouseEvent } from "react";

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: JSX.Element | JSX.Element[] | string;
}

export function Button(props: ButtonProps): ReactElement {
  console.log("hello I'm a button");
  return <div>{props.children}</div>;
}

// some changes....
