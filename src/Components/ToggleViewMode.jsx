export const ToggleViewMode = ({ handleChange, isChecked }) => {
  return (
    <div className="viewToggleContainer">
      <input
        type="checkbox"
        id="check"
        className="viewToggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label className="viewLabel" htmlFor="check"></label>
    </div>
  );
};
