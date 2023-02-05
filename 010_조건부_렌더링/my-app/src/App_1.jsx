
const Hello = (props) => {
    const { name } = props;
    if (name) {
        return (
            <div>
                <h1>Hello {name}</h1>
            </div>
        )
    }

    return <NoName />
}

const NoName = () => {
    return (
        <div>
            <h1>이름을 입력하지 않았습니다.</h1>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <Hello name='licat' />
        </div>
    );
}


export default App;