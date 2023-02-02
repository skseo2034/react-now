function 개인정보(props){
    const { name, phone, github} = props;
    return (
        <section>
        <h2>개인정보</h2>
        <p>이름 : {name}</p>
        <p>전화번호 : {phone}</p>
        <p>github : {github}</p>
    </section>
    )
}
function 자격증과학력(props) {
    const {title, contents} = props;
    return (
        <section>
            <h2>{title}</h2>
            <p>{contents}</p>
        </section>
    )
}

function 경력(){
    return (
        <section>
            <h2>경력</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
            </p>
        </section>
    )
}
function 수상경력(){
 return (
     <section>
         <h2>수상경력</h2>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into electronic typesetting,
         </p>
     </section>
 )
}
function App() {
    return (
        <div className="App">
            <h1>이력서</h1>
            <개인정보
                name="서수교"
                phone='010000000'
                github='skseo2034'
            />
            <자격증과학력
                title='자격증'
                contents='자격증 내용'
            />
            <자격증과학력
                title='학력'
                contents='학력 내용'
            />
            <경력 />
            <수상경력 />
        </div>
    );
}

export default App;