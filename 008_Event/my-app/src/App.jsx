import {useRef, useState} from "react";

const initUser = {
  login: false,
  id: '',
  pw: '',
  nickname: ''
}

const HomePage = (props) => {
  const logoutBtnClick = () => {
      props.changeLoginValue(false);
  }
  return (
      <div>
        <h1>홈페이지에 오신것을 환영합니다.</h1>
        <button onClick={logoutBtnClick}>로그아웃</button>
      </div>
  );
}

const Login = (props) => {
  const idRef = useRef(null);
  const pwRef = useRef(null);

  const loginSubmit = (e) => {
    e.preventDefault();
    if (!idRef.current.value) {
      alert('id를 입력하세요.');
      idRef.current.focus();
      return null;
    }
    if (!pwRef.current.value) {
      alert('pw를 입력 하세요');
      pwRef.current.focus();
      return null;
    }

    alert('로그인 되었습니다');
    props.changeLoginValue(true);
  }

  return (
      <form onSubmit={loginSubmit}>
        id : <input ref={idRef} name="id" type="text" onChange={props.handleUser} value={props.id} />
        pw : <input ref={pwRef} name="pw" type="text" onChange={props.handleUser} value={props.pw} />
        <button type="submit">로그인</button>
      </form>
  )
 }

function App() {
    const [user, setUser] = useState(initUser);
    const changeValue = (e) => {
        console.log('aa', e);
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const changeLoginValue = (seo) => {
        setUser({
            ...user,
            login: seo
        });
    }
  return (
      <div>
        {user.login ? <HomePage changeLoginValue={changeLoginValue}/> : <Login id={user.id} pw={user.pw}  handleUser={changeValue} changeLoginValue={changeLoginValue}/>}
      </div>


  );
}

export default App;