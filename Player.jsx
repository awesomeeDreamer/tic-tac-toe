import { useState } from "react";

export default function Player({intialName, Symbol,isActive, onChangeName }) {
   const [playerName, setPlayerName]= useState(intialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing)=>!editing);
    if (isEditing){

    
    onChangeName(Symbol,playerName);}
  }
   
  function handleChange(event){
 
   setPlayerName(event.target.value);
  }


  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = "Edit";

  if (isEditing) {
   editablePlayerName = <input type="text" required  value={playerName} onChange={handleChange}/>;
    // btnCaption="Save";
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}

        <span className="player-symbol">{Symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
