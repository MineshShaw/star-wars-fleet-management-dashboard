import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';

const Index = () => {
    return ( 
        <div className="app p-4 bg-black flex flex-col h-screen items-center justify-center">
            <div className="z-1">
                <SearchBar />
            </div>
            <Loader />
        </div>
     );
}
 
export default Index;