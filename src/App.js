import React, { useState } from 'react';
import NewScan from './Components/main';

import './App.css';

function App() {
  const [displayFilterData, setDisplayFilterData] = useState([]);

  const handleFormData = (value, key, id) => {
    const temp = displayFilterData.map((obj, i) => {
      if (i === id) {
        obj[key] = value;
      };
      return obj;
    })
    setDisplayFilterData(temp);
  }

  const handleDuplicateData = (values) => {
    setDisplayFilterData(oldValues => [...oldValues, {...values}])
  }

  const handleDeleteForm = (id) => {
    const tempArr = [...displayFilterData];
    tempArr.splice(id, 1)
    setDisplayFilterData(tempArr)
  }

  return (
    <div className="App">
      <div>
        <button
        style={{
          borderRadius: "10px",
          padding: "5px"
        }}
          onClick={() => setDisplayFilterData((oldValue) => [
            ...oldValue,
            {
            "offsetStart": null,
            "measureRootStart": null,
            "operation": null,
            "offsetEnd": null,
            "measureRootEnd": null,
          }
        ])}
        >
          Add filter +
        </button>
      </div>

      {displayFilterData.map((value,index) => <NewScan
        handleFormData={(val, key, id) => handleFormData(val, key, id)}
        data={value}
        handleDuplicateData={handleDuplicateData}
        handleDeleteForm={handleDeleteForm}
        id={index}
      />)}
      {
       displayFilterData.length > 0
       && <button
       style={{
        width: "100px",
        borderRadius: "10px",
        padding: "5px"
       }}
       onClick={() => console.log(displayFilterData)}
       >Scan</button>
      }
    </div>
  );
}

export default App;
