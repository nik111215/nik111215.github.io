import React, {Component} from "react";
import menu from "../Assets/dishes.pdf"
export default class Menu extends Component {
    render() {
        return (
            <div>
                <iframe src={menu} width="1520" height="900"></iframe>
            </div>
        )
    }
}