export  default function Stats({ items }) {
  if (!items.length)
    return (<p className="stats">
      <em>
        start Adding Some  items to Your PackingList...
      </em>
    </p>);
  const numItems = items.length;
  const packed = items.filter((items) => items.packed).length;
  const percentage = Math.round((packed / numItems) * 100);
  return (
    <footer className="stats">
      <em>

        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼 You have ${numItems} items on your list, and you already packed ${packed} (${percentage}%)`}

      </em>
    </footer>
  );
}
