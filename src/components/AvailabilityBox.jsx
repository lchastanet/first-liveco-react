function AvailabilityBox({ checkboxValue, setCheckboxValue }) {
  const handleChange = (e) => {
    setCheckboxValue(!checkboxValue);
  };

  return (
    <div>
      <label htmlFor="available">Show only Available</label>
      <input
        type="checkbox"
        className="available-checkbox"
        name="checkbox"
        checked={checkboxValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default AvailabilityBox;
