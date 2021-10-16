import React, { useState } from "react";

const Checkboxes = () => {
  const [checked, setChecked] = useState(false);
 
  const handleChange = () => {
    setChecked(!checked);
  };

 
  
  return (
    <div>
      <Checkbox
        label="Select as Favorite"
        value={checked}
        onChange={handleChange}
      />
 
     {/* <p> {checked.toString()}</p> */}
    </div>
  );
};
 
const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
     {label}
    </label>
  );
};

export default Checkboxes;