function App() {
    const name = '라이켓!';
    const 함수 = () => { return 100; }
    const 변수 = 10;
    const 값 = true;
    const 값2 = null;
    const 값3 = undefined;
    const 값4 = 1;
    return (
        <div className="App">
            <h1>안녕, {name} 1호</h1>
            <p>{100 + 1}</p>
            <p>{'hello' + 'world'}</p>
            <p>{[1, 2, 3].map(x => x**2)}</p>
            <p>{함수()}</p>
            <p>{변수}</p>
            <p>{값?'one':'two'}</p>
            <p>{값2??'one'}</p> {/*nullish 병합 연산자* one */}
            <p>{값3??'one'}</p> {/* one */}
            <p>{값4??'one'}</p> {/* 1 */}
        </div>
    );
}

export default App;