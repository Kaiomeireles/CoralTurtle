import React, { useState } from 'react';
import '../style/main.scss';

const CardCarousel = () => {
   
    const [index, setIndex] = useState(0);
    const cards = [
        { id: 1, title: 'Produto 1', description: 'Descrição do produto 1.', image: 'Coralturtle.png' },
        { id: 2, title: 'Produto 2', description: 'Descrição do produto 2.', image: 'Coralturtle.png' },
        { id: 3, title: 'Produto 3', description: 'Descrição do produto 3.', image: 'Coralturtle.png' },
        { id: 4, title: 'Produto 4', description: 'Descrição do produto 4.', image: 'Coralturtle.png' },
        // Adicione mais produtos conforme necessário
    ];

    const showCard = (newIndex) => {
        if (newIndex >= 0 && newIndex < cards.length) {
            setIndex(newIndex);
        }
    };

    return (
        <div className='cardcarousel'>
            <button className='prev' onClick={() => showCard(index - 1)}>&#10094;</button>
            <div className='carousel'>
                {cards.map((card, i) => (
                    <div key={card.id} className='card' style={{ transform: `translateX(${-index * 100}%)` }}>
                        <img src={card.image} alt={card.title} />
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
            <button className='next' onClick={() => showCard(index + 1)}>&#10095;</button>
        </div>
    );
};

export default CardCarousel;
