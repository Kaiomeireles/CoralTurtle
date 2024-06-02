# Projeto CoralTurtle: Vigilantes da Vida Submarina

### Identificação do Problema
A poluição dos oceanos é uma das maiores ameaças ao meio ambiente. Plásticos, vidros e outros detritos, além de substâncias como óleo, podem afetar significativamente a vida marinha e a qualidade da água. Monitorar essas condições é essencial para a preservação dos ecossistemas marinhos.

### Solução Proposta
A solução proposta pelo projeto CoralTurtle envolve o uso de uma plataforma ESP32 equipada com sensores para monitorar a qualidade da água do mar. O projeto foca em dois parâmetros principais:

1. **Detecção de detritos (plásticos, vidros, etc.)** usando um sensor ultrassônico.
2. **Medição da temperatura da água**, que pode ser afetada por contaminantes como óleo, usando um sensor DS18B20.

Os dados coletados são exibidos em um LCD e enviados via MQTT para análise em tempo real. Todo o sistema é colocado dentro de um coral fictício submerso, que coleta dados continuamente.

### Implementação da Solução

#### Componentes Utilizados

- **ESP32**: Microcontrolador principal com suporte a WiFi.
- **Sensor de Temperatura DS18B20**: Para medir a temperatura da água.
- **Sensor Ultrassônico HC-SR04**: Para detectar a presença de detritos no mar.
- **LCD 16x2**: Para exibir os dados coletados.
- **WiFi**: Para transmitir os dados via MQTT.
- **Broker MQTT**: Para receber e armazenar os dados coletados.

#### Configuração do Sistema

1. **Configuração da Rede WiFi e MQTT**:
    - Conectar o ESP32 à rede WiFi.
    - Configurar a conexão com o broker MQTT para transmitir os dados.

2. **Configuração do LCD**:
    - Inicializar o LCD 16x2 para exibir a temperatura da água e a distância dos detritos.

3. **Configuração dos Sensores**:
    - **DS18B20**: Configurado para medir a temperatura da água.
    - **HC-SR04**: Configurado para detectar a distância dos detritos.

#### Código Fonte
Contém o código-fonte do projeto. [aqui](https://github.com/Kaiomeireles/Kaiomeireles/blob/main/sketch.ino)


### Resultados Esperados e Impacto

**Resultados Esperados**:
- Medição precisa da temperatura da água, ajudando a identificar possíveis contaminações.
- Detecção eficaz de detritos na água, auxiliando no monitoramento da poluição.

**Impacto**:
- Contribuição significativa para a preservação dos ecossistemas marinhos.
- Fornecimento de dados importantes para organizações ambientais e governamentais.
- Sensibilização sobre a importância da conservação dos oceanos.

### Edge Computing

A utilização do ESP32 com sensores integrados exemplifica a aplicação de Edge Computing, onde a coleta e processamento de dados ocorrem diretamente no dispositivo, permitindo uma resposta mais rápida e eficiente.

## Repositório GIT

### Estrutura do Repositório

1. **README**: Este documento, detalhando o projeto, instruções de uso, requisitos e dependências.
2. **Código Fonte C++**: O código detalhado acima.
3. **Simulação Wokwi**: Link para o modelo criado no simulador.

### Link para Simulação Wokwi
[Simulação Wokwi do Projeto CoralTurtle](https://wokwi.com/projects/399334869149912065)

---

## Video Explicativo

- Para entender melhor como funciona clicando [aqui]()

## Licença
Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).

## Contribuidores
- Kaio Vinicius Meireles Alves RM553282
- Lucas Alves de Souza RM553956
- Lucas de Freitas Pagung RM553242
