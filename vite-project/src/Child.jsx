const Child = ({ count }) => {
  return (
    <div
      style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}
    >
      <h3>Child komponenti</h3>
      <p>Hozirgi qiymat: {count}</p>
      <p>{count % 2 === 0 ? "Juft son" : "Toq son"}</p>
    </div>
  );
};

export default Child;
