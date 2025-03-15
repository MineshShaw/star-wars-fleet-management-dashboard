import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const Index = () => {

  return (
    <div className="app p-4 bg-black flex flex-col gap-[20px] h-screen items-center justify-center">
      <h1 className="text-white text-6xl orbitron">Star Wars Fleet Manager</h1>
      <div className="z-1">
        <SearchBar />
      </div>
    </div>
  );
};

export default Index;
