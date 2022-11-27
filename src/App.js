import React,{useState} from "react"
import Item from "./components/Item";

function App() {
  const [selectedItem, setSelectedItem] = useState({});

const onItemSelected = (item)=>{
  setSelectedItem(item)
}
  const items = [
    { id: 1, title: 'mazda', price: 3000, imagePath: "car1.jpeg",imagePath2:"car5.jpeg",description:"Cars have controls for driving, parking, passenger comfort, and a variety of lights. Over the decades, additional features and controls have been added to vehicles, making them progressively more complex." },
    { id: 2, title: 'ford', price: 2000, imagePath: "car2.jpeg",imagePath2:"car6.jpeg",description:"Cars have controls for driving, parking, passenger comfort, and a variety of lights. Over the decades, additional features and controls have been added to vehicles, making them progressively more complex." },
    { id: 3, title: 'nisan', price: 1000, imagePath: "car3.jpeg",imagePath2:"car7.jpeg",description:"Cars have controls for driving, parking, passenger comfort, and a variety of lights. Over the decades, additional features and controls have been added to vehicles, making them progressively more complex." },
    { id: 4, title: 'honda', price: 500, imagePath: "car4.jpeg" ,imagePath2:"car8.jpeg",description:"Cars have controls for driving, parking, passenger comfort, and a variety of lights. Over the decades, additional features and controls have been added to vehicles, making them progressively more complex."},

  ];
  const renderItems = () => {
    return items.map(item => {
      return <Item
        onSelectedItem={onItemSelected}
        key={item.id}
        item={item}
      />
    })
  }
  return (
    <div>
      <h2 style={{ textAlign: "center" }}> car shopping list</h2>
      {renderItems()}
    </div>
  );
}

export default App;
