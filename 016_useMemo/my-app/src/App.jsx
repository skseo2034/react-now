import {useState, useMemo, useRef} from 'react'



function App() {
    const inputName = useRef(null);
    const inputId = useRef(null);
    const [userInfo, setUserInfo] = useState([]);
    const [name, setName] = useState('');
    const [id, setId] = useState('');

    function handleInputName(e) {
        setName(e.target.value);
        console.log('렌더링 - 1');
    }

    function handleInputId(e) {
        setId(e.target.value);
        console.log('렌더링 - 2');
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newUserInfo = [...userInfo, {name: name, id: id}];
        inputName.current.value = '';
        inputId.current.value = '';
        inputId.current.focus();
        setUserInfo(newUserInfo);
        console.log('렌더링 - 3');
    }

    function getNum(userInfo) {
        console.log('getNum렌더링');
        return userInfo.length;
    }

    const n = useMemo(() => getNum(userInfo), [userInfo]);

    return (
        <div>
           <form>
               <input
                   type="text"
                   placeholder="이름을 입력하세요"
                   onChange={handleInputName}
                   ref={inputName}
               />

               <input
                   type="text"
                   placeholder="아이디를 입력하세요"
                   onChange={handleInputId}
                   ref={inputId}
               />

               <button
                   type="submit"
                   onClick={handleSubmit}
               >
                   버튼
               </button>
           </form>
            <ul>
                {/*괄호 는 이것 하나를 요소롤 반환하겠다. 중괄호({}) 로 묶으면 return 이 있어야 한다.*/}
                {userInfo.map((value, index) => (
                    <li key={index}>
                        <h3>{value.name}</h3>
                        <strong>@{value.id}</strong>
                    </li>
                ))}
            </ul>
            <span>{n}</span>
        </div>
    );
}
export default App;