export const Filter = ({ handleChange }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input onChange={handleChange} placeholder="Find contact" />
    </>
  );
};
