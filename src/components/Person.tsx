import { PersonProps } from "./PersonTypes"

export const Person = (props: PersonProps) => {
  return <div>{props.name.first} {props.name.last}</div>
}
