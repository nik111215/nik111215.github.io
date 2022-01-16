import React, {Component} from "react";
import { Nav } from "react-bootstrap";
import "./Contacts_css.css"
export default class Contacts extends Component {
    render() {
        return (
            <body className="color_css">
                <div>            
                    <iframe 
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa9947c51ab8be20c2fb409b0617665ec4e1777ff079e4b077ebea1dcb8da796f&amp;source=constructor" 
                        width="1520" 
                        height="443" 
                        frameborder="0"></iframe> <br></br>
                    <p className="contacts_css">
                        Наши контакты:  2-й Смоленский переулок, 1/4, Москва, Россия, 121099 <br></br><br></br>
                        Телефон для заказа и бронирования столика: 8-499-999-54-54 <br></br><br></br>
                        Банкеты/свадьбы: banquetwrf@inbox.com <br></br><br></br>
                        Выездное обслуживание: onsiteservicewrf@inbox.com <br></br><br></br>
                        Поставщики: supplierswrf@inbox.com<br></br><br></br>
                        Время работы: <br></br><br></br>
                        понедельник-воскресенье 10:00-00:00 <br></br><br></br>
                    </p>                
                </div>
            </body>
        )
    }
}