const Profile = ({ name }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Profil sahifasi</h2>
      <div className="p-4 border border-gray-300 rounded">
        {name ? (
          <p className="text-xl">Salom, {name} 👋</p>
        ) : (
          <p className="text-gray-500">Ism kiritilmagan</p>
        )}
      </div>
      <div className="mt-4">
        <a href="/" className="text-blue-500 underline">
          Bosh sahifaga qaytish
        </a>
      </div>
    </div>
  );
};

export default Profile;
