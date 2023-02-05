import {useState} from "react";
import One from "./Components/One";
import Two from "./Components/Two";
import Three from "./Components/Three";

const ContentsContainer = (props) => {
    const { listName } = props;
    console.log(listName);
    if (listName === 'one') {
        return <One />
    }
    if (listName === 'two') {
        return <Two />
    }
    if (listName === 'three') {
        return <Three />
    }

    return null;
}

function App() {
    const [listName, setListName] = useState('one');

    const onLickList = (e) => {
        setListName(e.target.id);
    }

    return (
        <>
            <nav>
                <ul>
                    <li id='one' style={listName === 'one' ? {color:'red'} : {color: 'black'}} onClick={onLickList}>One</li>
                    <li id='two' style={listName === 'two' ? {color:'red'} : {color: 'black'}} onClick={onLickList}>Two</li>
                    <li id='three' style={listName === 'three' ? {color:'red'} : {color: 'black'}} onClick={onLickList}>Three</li>
                </ul>
            </nav>
            <ContentsContainer listName={listName} />
        </>
    )
}


export default App;