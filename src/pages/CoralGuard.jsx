import React from 'react';
import '../style/main.scss'; // Importa o arquivo main.scss para estilização
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const CoralGuard = () => {
  return (
    <Container className="coral-guard">
      <header>
        <h1>CoralGuard</h1>
        <p>Explore nossas histórias interativas e adquira nossos produtos!</p>
      </header>

      <section className="gallery">
        <h2>Compre CoralGuard</h2>
        <Row>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="CoralGuard ALPHA.jpg" alt="" />
              <Card.Body>
                <Card.Title>ALPHA</Card.Title>
                <Card.Text>
                  Descrição do Produto 1
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="CoralGuardBETA.jpg" alt="Produto 2" />
              <Card.Body>
                <Card.Title>BETA</Card.Title>
                <Card.Text>
                  Descrição do Produto 2
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="CoralGuardDELTA.jpg" alt="Produto 3" />
              <Card.Body>
                <Card.Title>DELTA</Card.Title>
                <Card.Text>
                  Descrição do Produto 3
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="CoralGuarGAMA.jpg" alt="Produto 4" />
              <Card.Body>
                <Card.Title>GAMMA</Card.Title>
                <Card.Text>
                  Descrição do Produto 4
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="stories">
        <h2>Explore CoralGuard</h2>
        <ul>
          <li>
            <h3>Bem-vindo ao Futuro da Conservação Marinha</h3>
            <div className="story-content">
              <p>Bem-vindo ao futuro da conservação marinha, onde a CoralTurtle redefine a relação entre tecnologia e natureza. Apresentamos nossa linha exclusiva de corais artificiais: CoralGuard Beta, Alpha, Delta e Gama. Cada um com uma história única, desenhados não apenas para embelezar o fundo do mar, mas para serem os guardiões da vida aquática.</p>

              <h3>CoralGuard Beta</h3>
              <p>CoralGuard Beta é o pioneiro, o primeiro a se estabelecer nas profundezas azuis. Com sensores de proximidade avançados, ele detecta a presença de plásticos vagando como intrusos em seu território. Sua estrutura robusta e imponente é um símbolo de força e resiliência.</p>

              <h3>CoralGuard Alpha</h3>
              <p>Alpha, o líder, é a inteligência central do nosso ecossistema artificial. Equipado com sensores de temperatura de alta precisão, ele monitora as mudanças climáticas, alertando sobre as variações que podem afetar a vida marinha.</p>

              <h3>CoralGuard Delta</h3>
              <p>Delta é o estrategista, com uma forma que maximiza a área de cobertura dos sensores. Ele é o mestre em identificar variações sutis no ambiente, capturando dados essenciais para a compreensão da saúde oceânica.</p>

              <h3>CoralGuard Gama</h3>
              <p>Gama é o visionário, com um design que reflete a beleza e a complexidade dos recifes naturais. Ele representa a esperança e a inovação, utilizando a tecnologia para criar um futuro mais promissor para os oceanos.</p>

              <p>Nossa solução é detalhada e pensada para atender às necessidades urgentes do nosso planeta:</p>
              <ul>
                <li>Detecção de Poluição: Os sensores integrados identificam a presença de plásticos e poluentes, enviando alertas para ações de limpeza imediatas.</li>
                <li>Monitoramento Ambiental: Acompanhamento contínuo das condições do mar, como temperatura e qualidade da água, essencial para a preservação da vida marinha.</li>
                <li>Design Estético e Funcional: Quatro formatos distintos que não só se integram visualmente ao ambiente marinho, mas também otimizam a funcionalidade dos sensores.</li>
              </ul>

              <p>A proposta de valor da CoralTurtle é clara: oferecer uma solução inovadora que alia beleza e funcionalidade, transformando a maneira como monitoramos e protegemos nossos oceanos. Diferentemente de outras soluções no mercado, nossos dispositivos são projetados para serem parte integrante do ecossistema marinho, atuando como verdadeiros defensores dos mares.</p>

              <p>Com a CoralTurtle, você não está apenas adquirindo um produto; você está investindo em um futuro onde os oceanos são respeitados e cuidados. Junte-se a nós nessa missão vital e faça a diferença para as gerações futuras.</p>
            </div>
          </li>
        </ul>
      </section>


      <section className="video">
        <h2>Vídeo Explicativo</h2>
        <video controls>
          <source src="" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </section>


      <section className="feedback">
      <h2>Formulário de Feedback</h2>
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  </Container>
);
};

export default CoralGuard;
