function App() {
    const name = '라이켓!';
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const time = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();

    return (
        <div className="App">
            <h1 style={{backgroundColor: 'black', color: 'white'}}>안녕, {name} 1호</h1>
            <h1>안녕, {name} 2호</h1>
            <h1 style={{backgroundColor: 'black', height:'30px'}}>&nbsp;</h1>
            <div style={{backgroundColor: 'black', color: 'white'}}>
                <h1 style={{color: "red"}}>년 : {year}</h1>
                <h1>월/일 : {month}/{day}</h1>
                <h1>시간 : {time}시 {minute}분 {seconds}초</h1>
            </div>
        </div>
    );
}

export default App;