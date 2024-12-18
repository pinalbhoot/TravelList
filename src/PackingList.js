import { useState } from "react";
import Item from "./Item";


export default function PackingList({
   items, 
   onDeleteItem,
    onToggleitem, 
    onclearlist }) {
  const [Sortby, setsortby] = useState("input");
  let sorteditem;


  if (Sortby === "input") sorteditem = items;

  if (Sortby === "description")
    sorteditem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (Sortby === "packed")
    sorteditem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>

        {sorteditem.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem}
            onToggleitem={onToggleitem} key={item.id} />
        ))}
      </ul>
      <div className="actions">
        <select value={Sortby} onChange={(e) => setsortby(e.target.value)}>
          <option value="input"> Sort by input</option>
          <option value="description"> Sort by description</option>
          <option value="packed"> Sort by packed status</option>
        </select>
        <button onClick={onclearlist}>Clear list</button>
      </div>
    </div>
  );
}
