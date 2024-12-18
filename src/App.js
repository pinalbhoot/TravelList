import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList  from "./PackingList";
import States  from "./Stats";

 /*const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Charger", quantity: 1, packed: false },
  { id: 3, description: "Shirt", quantity: 12, packed: false },
  
];*/

export default function App()
{
  const[items,setItems]=useState([]);
 

  function HandalAdditems(additems)
  {
    setItems((item)=> [...items,additems])
  }
  function handaldeleteitems(id)
  {  
    setItems((items)=> items.filter((item)=> item.id !== id ))
  }
   function HandalToggleitem(id)
   {
     setItems((items)=> items.map((item)=> item.id === id  ? {...item,packed:!item.packed}:item))
   } 
   function Clearlist()
   {
    const confirm = window.confirm("are You Sure You Want To clear The List....?");
     if(confirm) setItems([])
   }

  return(
       <div className="app">

       <Logo/>
       <Form onAdditems={HandalAdditems}/>
       <PackingList items={items}
                   onDeleteItem={handaldeleteitems} 
                  onToggleitem={HandalToggleitem} 
                  onclearlist={Clearlist}/>
       <States items={items}/>
     </div>
  );
}


