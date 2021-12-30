import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    const [login, setLogin] = useState({ username: "", password: "" });

    const login_submit = async (e) => {
        const login_data = {
            username: login.username,
            password: login.password,
        };
        const fetch_option = {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(login_data),
        };
        const formData = new FormData();
        formData.append("username", login.username);
        formData.append("password", login.password);
        const res = await fetch("/users/login", fetch_option);
        const result = await res.json();
        console.table(result);
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setLogin({ ...login, [name]: value });
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <form id="login_form">
                <div>
                    <input name="username" placeholder="USER NAME" value={login.username} onChange={onChange} />
                </div>
                <div>
                    <input name="password" placeholder="PASSWORD" value={login.password} onChange={onChange} />
                </div>
                <div>
                    <button type="button" onClick={login_submit}>
                        로그인
                    </button>
                </div>
            </form>
        </div>
    );
}

export default App;
