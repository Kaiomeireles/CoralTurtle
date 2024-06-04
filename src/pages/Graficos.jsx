import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o Bootstrap
import '../style/main.scss'; // Importa o arquivo main.scss para estilização

const Graficos = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Gráficos</h1>
      <div className="d-flex flex-wrap justify-content-center">
        
        <div className="card m-2" style={{ width: '18rem' }}>
          <img src="Captura de tela 2024-06-04 185234.png" className="card-img-top" alt="Temperatura da Água" />
          <div className="card-body">
            <h2 className="card-title">Temperatura da Água</h2>
            <p className="card-text">
              A medição da temperatura da água é crucial para entender as mudanças ambientais nos oceanos. O sensor DS18B20 é utilizado para monitorar a temperatura da água, que pode ser afetada por contaminantes como óleo. Através deste gráfico, podemos observar as variações de temperatura ao longo do tempo e identificar possíveis impactos de poluentes na estabilidade térmica do ambiente marinho.
            </p>
          </div>
        </div>

        <div className="card m-2" style={{ width: '18rem' }}>
          <img src="Captura de tela 2024-06-04 185250.png" className="card-img-top" alt="Concentração de Poluentes" />
          <div className="card-body">
            <h2 className="card-title">Concentração de Poluentes</h2>
            <p className="card-text">
              A concentração de poluentes na água do mar é um indicador importante da qualidade do ambiente marinho. Usando sensores ultrassônicos, o projeto CoralTurtle detecta detritos como plásticos e vidros. Este gráfico ilustra os níveis de poluentes detectados em diferentes períodos, ajudando a identificar áreas com maior acúmulo de resíduos e avaliar a eficácia de medidas de limpeza.
            </p>
          </div>
        </div>

        <div className="card m-2" style={{ width: '18rem' }}>
          <img src="Captura de tela 2024-06-04 185319.png" className="card-img-top" alt="Taxa de Variação da Temperatura" />
          <div className="card-body">
            <h2 className="card-title">Taxa de Variação da Temperatura</h2>
            <p className="card-text">
              A taxa de variação da temperatura da água fornece insights sobre as flutuações térmicas no ambiente marinho. Este gráfico mostra a velocidade e a frequência das mudanças de temperatura, permitindo a identificação de padrões anômalos que podem estar associados a fontes de poluição ou alterações climáticas. Com isso, é possível tomar decisões mais informadas para a proteção do ecossistema marinho.
            </p>
          </div>
        </div>

        <div className="card m-2" style={{ width: '18rem' }}>
          <img src="Captura de tela 2024-06-04 185347.png" className="card-img-top" alt="Taxa de Variação dos Poluentes" />
          <div className="card-body">
            <h2 className="card-title">Taxa de Variação dos Poluentes</h2>
            <p className="card-text">
              Monitorar a taxa de variação dos poluentes ajuda a entender como a poluição está se comportando ao longo do tempo. Este gráfico apresenta a velocidade com que a concentração de detritos como plásticos e vidros está mudando, permitindo a detecção de aumentos súbitos na poluição e a avaliação da eficácia das ações de mitigação implementadas.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Graficos;
