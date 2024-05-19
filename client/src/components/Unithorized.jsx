const Unithorized = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-red-500 mb-4">
          401 Unauthorized
        </h2>
        <p className="text-gray-800">
          You are not authorized to access this page.
        </p>
      </div>
    </div>
  );
};

export default Unithorized;
