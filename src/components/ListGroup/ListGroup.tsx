import { useState } from "react";
import { Fragment } from "react";
//By doing module we're attatched to it.
import styles from "./ListGroup.module.css";
interface Props {
  items: string[];
  heading: string;
  // function takes (item: string) =>
  onSelectItem: (item: string) => void; // kinda like onclick
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  //This is a hook. Allows us to tap into built in functions.
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //JSX doesn't have for loops
  return (
    <Fragment>
      <h1> {heading} </h1>
      {items.length == 0 && <p> No item found</p>}
      <ul className={styles["list-group"]}>
        {items.map((item, index) => (
          //often each item should be something like item.id
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index), onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
