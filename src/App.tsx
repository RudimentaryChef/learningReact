import { BsFillCalendarFill } from "react-icons/bs";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import Like from "./components/Like/Like";
//By default complier will look at the index file
import ListGroup from "./components/ListGroup";

function App() {
  if (true)
    return (
      <div>
        <Like onClick={() => console.log("clicked")} />
      </div>
    );
  const [state, setState] = useState(false);
  let text = "I am a happy little button!";
  let alertText = "I AM AN ALERT";
  // Sample data to pass as props
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const heading = "List of Items";

  // Function to handle item selection
  const handleSelectItem = (item: string) => {
    console.log("Selected item:", item);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "20vh",
        }}
      >
        <BsFillCalendarFill size={50} />
      </div>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
export default App;
