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
        description="A poluição marinha, especialmente com plásticos, vidros e outros detritos, representa uma ameaça significativa para os ecossistemas submarinos. A tecnologia de sensores ultrassônicos oferece uma solução inovadora para detectar e monitorar esses detritos, ajudando na preservação e manutenção dos corais, tanto naturais quanto artificiais. No projeto CoralTurtle, a integração de sensores de temperatura e ultrassônicos desempenha um papel crucial na monitoração e proteção dos corais submersos.

        Funcionamento dos Sensores Ultrassônicos
        
        Sensores ultrassônicos funcionam emitindo ondas sonoras de alta frequência que se propagam pela água e refletem ao encontrar um objeto. O tempo que essas ondas levam para retornar ao sensor é medido e convertido em uma distância. No contexto de detecção de detritos, esses sensores podem identificar a presença de objetos sólidos como plásticos, vidros e outros materiais não biodegradáveis que flutuam ou se depositam no fundo marinho.
        
        Implementação no CoralTurtle
        
        No projeto CoralTurtle, sensores ultrassônicos são estrategicamente posicionados ao redor e dentro das estruturas de corais artificiais. Esses sensores monitoram continuamente o ambiente submarino, identificando detritos que possam se acumular ou passar pelas áreas críticas dos corais. A detecção precisa é possível através das seguintes etapas:
        
        1. Emissão de Pulsos Ultrassônicos: Os sensores enviam pulsos sonoros em intervalos regulares.
        2. Recepção dos Ecos: Os pulsos que encontram obstáculos refletem de volta ao sensor.
        3. Cálculo de Distância: O sensor calcula a distância com base no tempo de retorno das ondas sonoras.
        4. Identificação de Detritos: Com algoritmos de processamento de sinal, é possível diferenciar entre diferentes tipos de detritos, como plásticos e vidros, com base em suas propriedades reflexivas.
        
        Benefícios para a Humanidade
        
        1. Proteção dos Ecossistemas Marinhos: A detecção e remoção de detritos marinhos ajudam a proteger a biodiversidade. Corais artificiais, como os desenvolvidos pela CoralTurtle, servem de habitat para muitas espécies marinhas. Manter esses habitats livres de detritos é essencial para a saúde das populações de peixes e outras formas de vida marinha.
        
        2. Monitoramento Contínuo: A tecnologia de sensores ultrassônicos permite um monitoramento contínuo e em tempo real do ambiente submarino. Isso é crucial para a detecção precoce de problemas ambientais e a implementação rápida de medidas corretivas.
        
        3. Dados para Pesquisa Científica: Os dados coletados pelos sensores ultrassônicos são valiosos para a pesquisa científica. Eles fornecem informações sobre padrões de poluição e a movimentação de detritos no mar, ajudando os cientistas a entender melhor o impacto da poluição marinha e desenvolver estratégias mais eficazes de mitigação.
        
        4. Conscientização e Educação: Através de projetos como o CoralTurtle, é possível aumentar a conscientização sobre a poluição marinha. Ao demonstrar o impacto dos detritos no ecossistema de corais artificiais, o projeto pode educar o público e promover comportamentos mais responsáveis em relação ao descarte de lixo.
        
        5. Sustentabilidade e Preservação Ambiental: Ao proteger os corais e monitorar a qualidade da água, o projeto CoralTurtle contribui para a sustentabilidade dos oceanos. Corais saudáveis desempenham um papel vital na absorção de dióxido de carbono e na proteção das costas contra a erosão.
        
        6. Inovação Tecnológica: O uso de sensores ultrassônicos para a detecção de detritos marinhos representa uma inovação tecnológica significativa. Este avanço pode ser aplicado em outras áreas de preservação ambiental e monitoramento, beneficiando uma ampla gama de iniciativas de conservação marinha.
        
        Futuro do CoralTurtle
        
        O projeto CoralTurtle, com a integração de sensores ultrassônicos, não só protege os corais artificiais, mas também estabelece um modelo para a conservação marinha inteligente. À medida que a tecnologia avança, os sensores se tornarão ainda mais precisos e capazes de diferenciar entre tipos de detritos com maior eficácia. Além disso, a expansão do uso dessa tecnologia para outras áreas do oceano pode amplificar os benefícios, contribuindo para a saúde geral dos ecossistemas marinhos em todo o mundo.
        
        A combinação de monitoramento de temperatura e detecção de detritos coloca o CoralTurtle na vanguarda da conservação marinha, demonstrando como a tecnologia pode ser utilizada para enfrentar os desafios ambientais contemporâneos e proteger os recursos naturais para as futuras gerações."
      />
      <DashboardCard
        image={dashboard2}
        title="Temperatura"
        description="Aqui podemos ver o desempenho das vendas segmentadas por região. Isso nos ajuda a identificar quais áreas estão gerando mais receita e quais precisam de atenção."
      />
    </div>
  );
};

export default DashboardPage;
