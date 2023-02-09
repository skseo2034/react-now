import React, { createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
    return (
        <UserInfo.Provider value={{ name: "Licat", id: "ImLion" }}> {/*값을 변경하고 싶을때 provider 사용하면 된다.*/}
            <HelloLicat />
        </UserInfo.Provider>
    );
};

/*const HelloLicat = (props) => {*/
const HelloLicat = () => {
    return (
        <UserInfo.Consumer>
            {(value) =>
                <>
                    <h2>{value.id}</h2>
                    <strong>{value.name}</strong>
                    <HelloLicatTwo />
                </>
            }

        </UserInfo.Consumer>
    );
};

const HelloLicatTwo = () => {
    return (
        <UserInfo.Consumer>
            {(value) =>
                <>
                    <h2>Two : {value.id}</h2>
                    <strong>Two : {value.name}</strong>
                </>
            }
        </UserInfo.Consumer>
    );
};

export default App;