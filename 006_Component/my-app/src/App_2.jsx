function 개인정보(){
    return (
        <section>
        <h2>개인정보</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
        </p>
    </section>
    )
}
function 자격증(){
    return (
        <section>
            <h2>자격증</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
            </p>
        </section>
    )
}
function 학력(){
    return (
        <section>
            <h2>학력</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
            </p>
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
            <개인정보 />
            <자격증 />
            <학력 />
            <경력 />
            <수상경력 />
        </div>
    );
}

export default App;