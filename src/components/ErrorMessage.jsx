const ErrorMessage = ({error}) => {
    return ( 
        <div className="error-message w-[300px] h-[100px] flex items-center bg-red-700 p-[10px] mx-auto text-white">
            <p className="text-center">{error}</p>
        </div>
     );
}
 
export default ErrorMessage;