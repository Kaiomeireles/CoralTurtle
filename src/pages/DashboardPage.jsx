import React from 'react';
import '../style/main.scss';
import DashboardCard from '../components/DashboardCard';
import dashboard1 from '../images/dist.png';
import dashboard2 from '../images/temp.png';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <DashboardCard
        image={dashboard1}
        title=""
        description="Detecção de Detritos com Sensor Ultrassônico
        No projeto CoralTurtle, o sensor ultrassônico HC-SR04 é utilizado para detectar a presença de detritos no mar, como plásticos e vidros. Este sensor opera emitindo pulsos sonoros de alta frequência que se propagam pela água e refletem ao encontrar objetos sólidos. O tempo que esses ecos levam para retornar ao sensor é medido e convertido em uma distância, permitindo a identificação e localização dos detritos.
        
        Funcionamento do Sensor Ultrassônico:
        
        Emissão de Pulsos: Pulsos sonoros são enviados pelo sensor em intervalos regulares.
        Recepção de Ecos: Os pulsos refletem ao encontrar detritos e retornam ao sensor.
        Cálculo de Distância: O tempo de retorno é usado para calcular a proximidade dos detritos.
        Identificação de Detritos: Algoritmos processam os sinais para distinguir entre diferentes tipos de detritos, como plásticos e vidros.
        Os dados coletados pelo sensor ultrassônico são exibidos em um LCD e enviados via MQTT para análise em tempo real, permitindo o monitoramento contínuo e eficaz da poluição marinha."
      />
      <DashboardCard
        image={dashboard2}
        title=""
        description="Monitoramento de Temperatura com Sensor DS18B20
        O sensor de temperatura DS18B20 é utilizado no projeto CoralTurtle para medir a temperatura da água do mar, um parâmetro crucial que pode ser afetado por contaminantes como óleo. Este sensor é conhecido por sua precisão e facilidade de integração com microcontroladores como o ESP32.
        
        Funcionamento do Sensor DS18B20:
        
        Medição da Temperatura: O sensor DS18B20 mede a temperatura da água com alta precisão.
        Calibração e Leitura: O sensor calibra automaticamente as leituras e envia os dados para o microcontrolador.
        Transmissão dos Dados: Os dados de temperatura são exibidos em um LCD e enviados via MQTT para análise em tempo real.
        A monitorização da temperatura da água permite detectar variações anômalas que podem indicar a presença de contaminantes, ajudando a preservar a qualidade da água e proteger os ecossistemas marinhos. O uso combinado de sensores ultrassônicos e de temperatura no CoralTurtle proporciona uma solução abrangente para o monitoramento da poluição marinha.
        
        
        
        
        
        "
      />
    </div>
  );
};

export default DashboardPage;
