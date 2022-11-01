import React, { useEffect, useState } from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";

const NewScan = ({ handleFormData, data, handleDuplicateData, handleDeleteForm, id }) => {
  const [measureRootStart, setMeasureRootStart] = useState( data.measureRootStart || null);
  const [measureRootEnd, setMeasureRootEnd] = useState(data.measureRootEnd || null);
  const [offsetStart, setOffsetStart] = useState(data.offsetStart || null);
  const [offsetEnd, setOffsetEnd] = useState(data.offsetEnd || null);
  const [operation, setOperation] = useState(data.operation || null);
  const [disabled, setDisabled] = useState(false)

  const handleDuplicate = () => {
    const duplicateValues = {
      measureRootStart,
      measureRootEnd,
      offsetStart,
      offsetEnd,
      operation,
      disabled
    }

    handleDuplicateData(duplicateValues, id)
  };

  const handleDisable = () => {
    setDisabled((value) => !value);
  }

  const handleDelete = () => {
    handleDeleteForm(id)
  }

  const handleFormValue = (state, value, key) => {
    state(value);
    handleFormData(value, key, id);
  }

  const handleCopy = () => {
    window.alert("Copied for pasting!")
    const copyValue = `${offsetStart} ${measureRootStart} ${operation} ${offsetEnd} ${measureRootEnd}`
    navigator.clipboard.writeText(copyValue)
  }

  useEffect(() => {
    handleFormData(disabled, "disabled", id)
  }, [disabled])


  return (
    <div style={{
      display: "flex",
      margin: "10px",
      background: disabled ? "grey" : "rgb(239 235 235)",
      borderRadius: "5px",
      width: "90%",
      justifyContent: "space-between",
      padding: "10px"
    }}>
      <div
      style={{
        display: "flex"
      }}>
        {data.measureRootStart
          && <Dropdown
            handleDropdownValue={(value, key) => handleFormValue(setOffsetStart, value, key)}
            options={["Latest", "1 Day ago", "2 Day ago"]}
            label="offsetStart"
            currentValue={data.offsetStart}
            disabled={disabled}
          />
        }

        <Dropdown
          handleDropdownValue={(value, key) => handleFormValue(setMeasureRootStart, value, key)}
          options={["open", "high", "low", "close"]}
          label="measureRootStart"
          autoFocus
          currentValue={data.measureRootStart}
          disabled={disabled}
        />

        {
          (data.offsetStart || data.measureRootStart)
          && <Dropdown
            handleDropdownValue={(value, key) => handleFormValue(setOperation, value, key)}
            options={["equals", "less than", "greater than"]}
            label="operation"
            autoFocus
            currentValue={data.operation}
            disabled={disabled}
          />
        }

        {
          (data.operation || data.measureRootEnd)
          && <Dropdown
            handleDropdownValue={(value, key) => handleFormValue(setOffsetEnd, value, key)}
            options={["Latest", "1 Day ago", "2 Day ago"]}
            label="offsetEnd"
            currentValue={data.offsetEnd}
            disabled={disabled}
          />
        }

        {
          data.operation
          && <Dropdown
            handleDropdownValue={(value, key) => handleFormValue(setMeasureRootEnd, value, key)}
            options={["open", "high", "low", "close"]}
            label="measureRootEnd"
            autoFocus
            currentValue={data.measureRootEnd}
            disabled={disabled}
          />
        }
      </div>
      <div>
        <Button callback={() => handleCopy()} title="Copy"/>
        <Button callback={() => handleDuplicate()} title="Duplicate" />
        <Button callback={() => handleDisable()} disabled={disabled} title={disabled ? "Enable" : "Disable"} />
        <Button callback={() => handleDelete()} title="Close" />
      </div>
    </div>
  )
}

export default NewScan;