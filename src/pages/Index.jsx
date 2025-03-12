import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const Index = () => {
    return ( 
        <div className="app p-4 bg-black flex flex-col h-screen items-center justify-center">
            <div className="z-1">
                <SearchBar />
            </div>
            <Loader />
            <ErrorMessage />
        </div>
     );
}
 
export default Index;