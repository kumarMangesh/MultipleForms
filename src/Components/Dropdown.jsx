import React from "react";

const Dropdown = ({ handleDropdownValue, options, label, autoFocus, currentValue, disabled }) => {

  const onChangeOption = (e) => {
      handleDropdownValue(e.target.value, e.target.id);
  }

  return (
    <>
      <form action="/">
        <label for={label}>{label} :</label>
        <select id={label}
          name={label}
          onChange={e => onChangeOption(e)}
          autoFocus={autoFocus}
          value={currentValue}
          disabled={disabled}
        >
          <option value={null}>Select</option>
          {options.map((option) => <option value={option}>{option}</option>)}
        </select>
      </form>
    </>
  )
}

export default Dropdown;