function InputText({ textValue, setTextValue }) {
  const handleChange = (e) => setTextValue(e.target.value);

  return (
    <input
      value={textValue}
      onChange={handleChange}
      type="text"
      className="search-input"
      placeholder="🔎 Type to search"
    />
  );
}

export default InputText;
