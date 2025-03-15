const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message w-[300px] h-[100px] flex items-center bg-red-700 p-[10px] mx-auto rounded-lg justify-center">
      <p className="text-white orbitron">{message}</p>
    </div>
  );
};

export default ErrorMessage;
