const Hello = (props) => {
    const name = props.name;
    const num = [1, 2, 3, 4, 5];

   /* const numComponentList = num.map(
        (i) => {
            return (
                <p key={i}>안녕, {name} {i}호</p>
            )
        }
    );*/

     return (
        <div>
            {num.map(i => <p key={i}>안녕, {name} {i}호</p>)}
        </div>
    )

}

function App() {
    return (
        <div className="App">
            <Hello name='Licat' />
        </div>
    );
}

export default App;