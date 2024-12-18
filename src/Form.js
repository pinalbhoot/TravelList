import { useState } from "react";

export default function Form({onAdditems})
{
  const [description,setDescription] = useState("");
  const[quantity,setQuantity]=useState(1);
 
    function Handalsubmit(e)
        {
          e.preventDefault();
          
             if(!description) return;

             const newItem ={description,quantity,packed:false,id:Date.now()};
            
             onAdditems(newItem);
             setDescription("");
             setQuantity(1);  
         }
      return(        
        <form className="add-form" onSubmit={Handalsubmit}>
       <h3>What Do you Need to your Trip.?😍  </h3>
       <select value={quantity} 
                onChange={(e)=> setQuantity(Number(e.target.value))}>
            {Array.from({length:20},(_,i)=> i + 1).map
              ((Num)=>
              (<option value={Num} key={Num}>
                {Num}  
                </option>
                ))}
       </select>
    <input type="text" placeholder="Items..." value={description}
    onChange={(e)=>setDescription((e.target.value))} />
    <button onClick={Handalsubmit}>ADD</button>
  </form>
  );
}