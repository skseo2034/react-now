
const App = () => {
    return (
        <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />
    );
};

/*const HelloLicat = (props) => {*/
const HelloLicat = ({value:{name, id}}) => {

    return (
        <div>
            <h2>{id}</h2>
            <strong>{name}</strong>
            <HelloLicatTwo value={{name, id}}/>
        </div>
    );
};

const HelloLicatTwo = ({value:{name, id}}) => {
    return (
        <div>
            <h2>Two : {id}</h2>
            <strong>Two : {name}</strong>
        </div>
    );
};

export default App;