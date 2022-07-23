import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faUndo, faEdit, faTrash, faCancel } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Task({ task, onDone, onDelete, onEdit, onEditDone, onEditCancel }) {
  const [name, setName] = useState(task.name || "");

  return (
    <div className="field is-grouped px-2 py-2 has-background-info-light">
      <div className="control is-expanded">
        {task.edited ? (
          <input className="input" value={name} onChange={(e) => setName(e.target.value)}/>
        ) : (
          <h3 className={`title is-3 ${task.done ? "has-text-success" : "has-text-black"}`}>
            {task.name}
          </h3>
        )}
      </div>
      <div className="control">
        {task.edited ? (
          <div className="buttons">
            <button className="button is-primary" onClick={() => onEditDone({ ...task, name })}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button className="button is-danger" onClick={() => onEditCancel(task.id)}>
              <FontAwesomeIcon icon={faCancel} />
            </button>
          </div>
        ) : (
          <div className="buttons">
            <button className={`button ${task.done ? "is-dark" : "is-success"}`} onClick={onDone}>
              <FontAwesomeIcon icon={task.done ? faUndo : faCheck} />
            </button>
            <button className="button is-warning" onClick={onEdit}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
              <button className="button is-danger" onClick={onDelete}>
                  <FontAwesomeIcon icon={faTrash} />
              </button>
          </div>
        )}
      </div>
    </div>
  );
}
