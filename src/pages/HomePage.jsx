import React from 'react';
import '../style/main.scss'; // Importa o arquivo main.scss para estilização
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap
import { Carousel } from 'react-bootstrap'; // Importa o componente Carousel do Bootstrap
import CardCarousel from '../components/CardCarousel';

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="content">
            
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="CoralGuarGAMA.jpg"
                            alt="Coral 1"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="CoralGuardBETA.jpg"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="CoralGuardDELTA.jpg"
                            alt="Fundo do Mar 1"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="CoralGuard ALPHA.jpg"
                            alt="Fundo do Mar 2"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className="quem">
                    <div className="image-container">
                        <img src="Coralturtle.png" alt="Ocean Image" />
                    </div>
                    <div className="text-container">
                        <h2>QUEM SOMOS</h2>
                        <p>Somos a CoralTurtle, uma empresa dedicada à preservação dos oceanos e à proteção da vida marinha. Nossa missão é utilizar tecnologia de ponta para monitorar e combater a poluição marinha, criando soluções inovadoras que ajudam a manter os oceanos limpos e saudáveis para as gerações futuras. Fundada por um grupo de apaixonados pelo meio ambiente e pela tecnologia, a CoralTurtle combina expertise em ciência marinha e engenharia para desenvolver produtos que fazem a diferença.</p>
                    </div>
                </div>
                <h1>PRODUTO</h1>
                <CardCarousel />
                <div className='parceiros'>
                    <div className='texto'>
                        <h2>Nossos Parceiros</h2>
                        <p>Trabalhamos com diversas empresas renomadas para trazer os melhores serviços para você.</p>
                    </div>
                    <div className='imagem'>
                        <img src='Captura_de_tela_2024-05-28_183339.png' alt='Parceiros' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
