import React, {Component} from "react";
import "./Autorization_css.css"

export default class Autorization extends Component {
    render() {
        return (
            <body className="all_css">
                <p className="text_css">
                    Придумайте, пожалуйста, себе имя пользователя(оно будет видно всем) <br></br>
                    <input type="text" id="nickname" placeholder="Имя Пользователя"></input> <br></br>
                    Введите ваше ФИО: <br></br>
                    <input type="text" id="fio" placeholder="ФИО"></input> <br></br>
                    Укажите вашу электронную почту: <br></br>
                    <input type="text" id="fio" placeholder="Электронная  почта"></input> <br></br>
                    Придумайте пароль: <br></br>
                    <input type="text" id="fio" placeholder="Пароль"></input> <br></br>
                    Повторите пароль: <br></br>
                    <input type="text" id="fio" placeholder="Повторите пароль"></input> <br></br><br></br>

                    <button id="clicker" onClick="Register()">Зарегестрироваться</button>
                </p>
            </body>
        )
    }
}