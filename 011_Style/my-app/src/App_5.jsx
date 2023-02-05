import appCss from './app.module.css';
import Test from "./Componets/Test";

function App() {
    return (
        <div>
            <div className={appCss.test}>Test1</div>
            <Test />
        </div>
    );
}

export default App;