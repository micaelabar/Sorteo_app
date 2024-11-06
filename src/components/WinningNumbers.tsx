import React from 'react';

interface WinningNumbersProps {
    isWinner: boolean | null;
}

const WinningNumbers: React.FC<WinningNumbersProps> = ({ isWinner }) => {
    if (isWinner === null) return <div>Por favor, selecciona un conjunto y comprueba si ganaste.</div>;

    return (
        <div>
            {isWinner ? (
                <h2>¡Felicidades! Has seleccionado el conjunto ganador.</h2>
            ) : (
                <h2>Lo siento, no ganaste. ¡Inténtalo de nuevo!</h2>
            )}
            <div style={{ color: 'black', fontWeight: 'bold' }}>Números ganadores: 1, 13, 26, 39, 48, 52</div>
        </div>
    );
};

export default WinningNumbers;