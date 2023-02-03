import {useState} from "react";

function Resume(props) {
   // const [like, setLike] = useState('');
    // const [likeBtnClickYn, setLikeBtnClickYn] = useState('N')
    const [like, setLike] = useState(false);
    let heart = like ? '❤' : '';

    function clickLike() {
        if (like) {
            setLike(false);
        } else {
            setLike(true);
        }
        /*if (likeBtnClickYn === 'N') {
            setLike('Like !!!');
            setLikeBtnClickYn('Y');
        } else {
            setLike('');
            setLikeBtnClickYn('N');
        }*/

        console.log(like);
    }

    return(
        <div>
            <h1>{props.name} 자기소개서</h1>
            <button onClick={clickLike}>like</button>
            <span>{heart ? heart : ''}</span>
        </div>
    )
}

function App() {
  return (
      <div className="App">
        <Resume name='수고' />
      </div>
  );
}

export default App;