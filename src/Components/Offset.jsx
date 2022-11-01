import React from "react";

const Offset = ({handleSetOffset}) => {

  const onChangeOption = (e) => {
    if (e.detail === 0) {
      handleSetOffset(e.target.value);
    }
  }

  return (
    <>
    <form action="/action_page.php">
        <label for="offset">Offset:</label>
        <select id="offset" name="offset" onClick={(e) =>onChangeOption(e)} >
          <option value="latest">Latest</option>
          <option value="1 day ago">1 Day ago</option>
          <option value="2 day ago">2 Day ago</option>
        </select>
      </form>
    </>
  )
}

export default Offset;