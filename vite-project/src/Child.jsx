const Child = ({ name }) => {
  return (
    <div className="mt-4 p-4 border border-gray-300 rounded">
      <h3 className="text-lg font-semibold mb-2">Natija</h3>
      {name ? (
        <p className="text-xl">Salom, {name} 👋</p>
      ) : (
        <p className="text-gray-500">Ism kiritilmagan</p>
      )}
    </div>
  );
};

export default Child;
