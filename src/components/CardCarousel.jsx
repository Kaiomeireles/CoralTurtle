import React, { useState } from 'react';
import '../style/main.scss';

const CardCarousel = () => {
   
    const [index, setIndex] = useState(0);
    const cards = [
        { id: 1, title: 'CoralGuard Alpha', description: 'O CoralGuard Alpha ', image: 'CoralGuard ALPHA.jpg' },
        { id: 2, title: 'CoralGuard Beta', description: 'O CoralGuard Beta', image: 'CoralGuardBETA.jpg' },
        { id: 3, title: 'CoralGuard Gamma', description: 'O CoralGuard Gamma .', image: 'CoralGuarGAMA.jpg' },
        { id: 4, title: 'CoralGuard Delta', description: 'O CoralGuard Delta ', image: 'CoralGuardDELTA.jpg' },
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
