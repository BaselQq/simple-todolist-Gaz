import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Input({ onInput }) {
  const [name, setName] = useState("");

  const handleOnInput = () => {
    onInput({id: Math.floor(Math.random() * 100), name, done: false, edited: false});
    setName("");
  };

  return (
    <div className="field has-addons">
      <div className="control is-expanded">
        <input className="input" placeholder="Create a todo" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="control">
        <button className="button is-info" onClick={handleOnInput}>
          <FontAwesomeIcon icon={faAdd} />
        </button>
      </div>
    </div>
  );
}
