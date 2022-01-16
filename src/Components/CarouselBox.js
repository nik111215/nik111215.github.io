import React, {Component} from "react";
import Carousel from "react-bootstrap/Carousel";
import designImg from '../Assets/design_for_size.jpg'
import "./CarouselBox_css.css"
import new_design_Img from '../Assets/new_design.jpg'

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={designImg}
                        alt="Please reload the page to display "
                        />
                    <Carousel.Caption>
                        <h3 className="сaption_сss">
                            Добро пожаловать на сайт Whitte Rabbitt <br></br> <br></br> <br></br> <br></br> <br></br>
                        </h3>

                        <p className="textInPage_css">
                            Вы можете встретить Новый год 2022 в Whitte Rabbitt <br></br> <br></br> <br></br> <br></br> <br></br><br></br>
                            Наш ресторан входит несколько лет подряд в топ-100 лучших ресторанов мира <br></br> <br></br> <br></br> <br></br>
                            Присоеденяйтесь к нашей большой семье
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={new_design_Img}
                        alt="Please reload the page to display "
                        />
      
                    <Carousel.Caption>
                    <h4 className="textInHome_css">
                        <br></br>
                        В нашем ресторане открывается панормный вид на Москву <br></br><br></br>
                        Внутреннее убранство ресторана создаёт тепло и уют для наших гостей <br></br><br></br>
                        Ещё больше фотографий вы можете увидеть во вкладке Галерея<br></br><br></br>
                    </h4>
                    </Carousel.Caption>
                </Carousel.Item>   
            </Carousel>

        )
    }
}