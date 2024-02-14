import './App.css';
import './css/common.css';
import Home from './main_page/Home';

const openNewTab = (address) => {
    window.open(address);
};

function App() {
    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;
