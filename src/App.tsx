import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Adi", "YOOOOO", "BADI", "Kadi", "DEEZ NUTS"];
  const handleSelectItem = (item: string) => {console.log(item)} 
  return (
    <div>
      <ListGroup items = {items} heading = "Names" onSelectItem={handleSelectItem}/>
      <ListGroup items = {items} heading = "Names" onSelectItem={handleSelectItem}/>

    </div>
  );
}
export default App;
