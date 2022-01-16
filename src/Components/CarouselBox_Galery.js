import React, {Component} from "react";
import Carousel from "react-bootstrap/Carousel";


export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src="https://top10a.ru/wp-content/uploads/2019/10/4-14.jpg"
                        alt="Please reload the page to display "
                        />
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src="https://static.wixstatic.com/media/ba7030_8a3b636b3b8f4ddfb87892a9db180348~mv2_d_1920_1278_s_2.jpeg"
                        alt="Please reload the page to display "
                        />
                </Carousel.Item>   
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src="https://avatars.mds.yandex.net/get-altay/2816622/2a000001735cc3cc80e3b815b66900f5feb0/XXL"
                        alt="Please reload the page to display "
                        />
                </Carousel.Item>  
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src="https://www.vladtime.ru/uploads/posts/2016-06/1465893394_1.jpg"
                        alt="Please reload the page to display "
                        />
                </Carousel.Item>  
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src="https://lasoifmagazine.ru/wp-content/uploads/2019/02/image23-1024x658.jpeg"
                        alt="Please reload the page to display "
                        />
                </Carousel.Item>  
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src="https://whiterabbitmoscow.ru/media/k2/items/cache/5d231997759398fd54d0c1f438d55347_XL.jpg"
                        alt="Please reload the page to display "
                        />
                </Carousel.Item>  
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src="https://s3.eu-central-1.amazonaws.com/images.hipdir/28242/tav3tievsfbwu9yztu6kjbrrnuunafej.jpg"
                        alt="Please reload the page to display "
                        />
                </Carousel.Item>  
            </Carousel>

        )
    }
}