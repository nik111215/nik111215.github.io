import React, {Component} from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";
import "./About_css.css"
import logo from '../Components/logo.png'
export default class About extends Component {
    render() {
        return (
            <Container className="gp">
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={2}>
                            <Nav variant="pills" className="flex-columm mt-2">
                                <Nav.Item>
                                    <Nav.Link variant="outline-success" eventKey="first" >История</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link variant="success" eventKey="second">Наши новинки</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link variant="success" eventKey="third">Вакансии</Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <Nav.Link variant="success"  eventKey="five">dsglksdjg</Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                        </Col>
                        <Col sm={10} >
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img
                                        src={logo}
                                        height={500}

                                    />
                                    <p className="about_css">
                                        Ресторан был основан в 2010 году, и с этих пор продолжает радовать своих гостей. <br></br><br></br>
                                        В 2016 году была открыта Whitte Rabbitt Lab, для экспериментов наших поваров <br></br> <br></br>
                                        Гастрономической концепцией нашего ресторана является современная русская кухню<br></br> <br></br>
                                        Наш ресторан считается лучшим не только в Россия, но и во всём мире, совсем недавно Whitte Rabbitt 
                                        удостоился получить 3 звезды Мишлена, чего не добивался ни один ресторан в России<br></br><br></br>

                                    </p>                             
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img
                                        src="http://pavlodar.cityshow.me/site/assets/files/118488/lammas.jpg"
                                    />
                                    <p>
                                        Мы всегда думаем о наших гостях и то, чем их удивить, встречайте новое изысканное блюдо от нашего шеф-повара:"Лопатка ягненка томленая в собственом соку с печеным баклажаном и соусом "Тархун")"
                                    </p>                             
                                    <h1>
                                        Всегда рады Вас видеть в нашем ресторане
                                    </h1>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <h2>
                                       Наши вакансии
                                    </h2>           
                                    <p>
                                        &mdash; Кондитер <br></br>
                                        &mdash; Официанты <br></br>
                                        &mdash; Бухгалтер <br></br>
                                        &mdash; Кассир <br></br>
                                        &mdash; Гардеробщик <br></br>
                                        &mdash; Менеджер ресторана <br></br>
                                        &mdash; Уборщицы, посудомойщицы, парковщики <br></br>
                                    </p>    
                                    <p1>
                                        Мы будем рады видеть вас в нашем дружном коллективе <br></br><br></br>
                                    </p1>
                                    <p className="bold_text">
                                        Размер заработной платы определяется во время собеседования <br></br>
                                    </p>
                                    <h5>
                                        По всем интересующим вопросам обращаться на почту:whitte_rabbitt_job@inbox.com или по номеру телефона: 8-800-555-35-35
                                    </h5>              
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>

                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}