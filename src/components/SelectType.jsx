function SelectType({ setSelectValue }) {
  const handleChange = (e) => setSelectValue(e.target.value);

  return (
    <select onChange={handleChange} className="select" name="home">
      <option default value="All">
        All
      </option>
      <option value="Flat">Flat</option>
      <option value="House">House</option>
    </select>
  );
}

export default SelectType;
