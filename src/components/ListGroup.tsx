import { useState } from "react";
import { Fragment } from "react";
interface Props{
    items: string[]
    heading: string
}
function ListGroup(props) {
  let items = ["Adi", "YOOOOO", "BADI", "Kadi", "DEEZ NUTS"];
  //This is a hook. Allows us to tap into built in functions. 
  const [selectedIndex, setSelectedIndex] = useState(-1)
  //JSX doesn't have for loops
  return (
    <Fragment>
      <h1> List </h1>
      {items.length == 0 && <p> No item found</p>}
      <ul className="list-group">
        {items.map((items, index) => (
          //often each item should be something like item.id
          <li className={selectedIndex === index ? 'list-group-item active': 'list-group-item'} onClick={() => setSelectedIndex(index)} key={items}>
            {items}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
