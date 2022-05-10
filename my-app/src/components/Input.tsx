import React, { useState } from "react";

export default function Input (props: any) {
  const [state, setState] = useState("")

  return (
    <div>
      <label>{props.label}
      <br/>
        <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        />
        </label>
    </div>
  )
}