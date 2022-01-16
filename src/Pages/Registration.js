import React, {Component} from "react";
import "./Autorization_css.css"

export default class Registration extends Component {
    render() {
        return (
            <body className="all_css">
                <p className="text_css">
                   Введите ваше имя <br></br>
                    <input type="text" id="nickname" placeholder="Имя Пользователя"></input> <br></br>
                    Введите пароль: <br></br>
                    <input type="text" id="fio" placeholder="Пароль"></input> <br></br>
                    <button id="clicker" onClick="Register()">Войти</button>
                </p>
            </body>
        )
    }
}