import React from 'react';
import '../style/main.scss'; // Importa o arquivo main.scss para estilização
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap
import { Carousel } from 'react-bootstrap'; // Importa o componente Carousel do Bootstrap

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="content">
                <h1>Bem-vindo à CoralTurtle</h1>
                <p>A CoralTurtle é uma empresa dedicada à preservação dos oceanos e à luta contra a poluição marinha.</p>
                <p>Nossos corais artificiais equipados com sensores avançados monitoram a temperatura do mar e detectam sinais de poluição, contribuindo para a proteção dos ecossistemas marinhos.</p>
                <h2>Produto</h2>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.leonardo.ai/users/273a6ec7-7e1c-4146-9ade-116bf66c4f8f/generations/487c6c30-7665-4b42-a4ce-4dfbb0fde16f/Default_make_a_single_synthetic_coral_that_has_a_biosensor_in_1.jpg"
                            alt="Coral 1"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.leonardo.ai/users/273a6ec7-7e1c-4146-9ade-116bf66c4f8f/generations/a63ed1c4-48c4-4cd3-a071-361b36944528/Default_make_a_single_synthetic_coral_that_has_a_biosensor_in_1.jpg"
                            alt="Coral 2"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.leonardo.ai/users/273a6ec7-7e1c-4146-9ade-116bf66c4f8f/generations/fb760cbe-d323-4578-8f45-4707092bb869/Default_make_a_single_synthetic_coral_that_has_a_biosensor_in_0.jpg"
                            alt="Fundo do Mar 1"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.leonardo.ai/users/273a6ec7-7e1c-4146-9ade-116bf66c4f8f/generations/487c6c30-7665-4b42-a4ce-4dfbb0fde16f/Default_make_a_single_synthetic_coral_that_has_a_biosensor_in_3.jpg"
                            alt="Fundo do Mar 2"
                        />
                    </Carousel.Item>
                </Carousel>
                <h2>Quem Somos</h2>
                <p>Somos uma equipe apaixonada por oceanos, comprometida em desenvolver soluções inovadoras para os desafios</p>
                <h2>Nossos Parceiros</h2>
                <p>Agradecemos aos nossos parceiros por seu apoio contínuo na nossa missão de preservar os oceanos:</p>
                <ul>
                    <li>Organização Mundial da Preservação Marinha</li>
                    <li>Fundação para a Conservação dos Recifes de Coral</li>
                    <li>Associação Internacional de Limpeza Costeira</li>
                </ul>
            </div>
        </div>
    );
};

export default HomePage;
