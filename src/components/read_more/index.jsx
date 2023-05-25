import { useState } from "react";
const ReadMoreComponent = ({ moreText, lessText }) => {
  const [read, setRead] = useState(false);
  return (
    <p>
      {read ? moreText : lessText.slice(0, 90)}

      <span id="dot">{read ? " " : "..."} </span>
      <span id="read" onClick={() => setRead(!read)}>
        {read ? "Ler Menos" : "Ler Mais"}
      </span>
    </p>
  );
};

export default ReadMoreComponent;
