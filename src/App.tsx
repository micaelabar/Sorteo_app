import React, { useState, useEffect } from 'react';
import Lottery from './components/Lottery';

const numberSets = [
    [5, 12, 23, 34, 45, 56],
    [3, 15, 27, 36, 42, 50],
    [2, 10, 24, 33, 44, 55],
    [1, 13, 26, 39, 48, 52],
    [8, 18, 29, 35, 41, 49],
    [4, 11, 25, 31, 43, 57],
    [6, 14, 22, 32, 46, 58],
];

const App: React.FC = () => {
    const [selectedSetIndex, setSelectedSetIndex] = useState<number | null>(null);
    const [isWinner, setIsWinner] = useState<boolean | null>(null);
    const [winningSet, setWinningSet] = useState<number[]>([]);

    // Generar un conjunto ganador aleatorio cuando se selecciona un conjunto
    const generateWinningSet = () => {
        const randomIndex = Math.floor(Math.random() * numberSets.length);
        setWinningSet(numberSets[randomIndex]);
    };

    // Reiniciar y generar un nuevo conjunto ganador cada vez que se selecciona un conjunto
    const handleSelectSet = (index: number) => {
        setSelectedSetIndex(index);
        setIsWinner(null); // Reiniciar el mensaje de ganador/perdedor
        generateWinningSet(); // Generar un nuevo conjunto ganador
    };

    // Verificar si el conjunto seleccionado es el ganador
    const handleCheckWinner = () => {
        if (selectedSetIndex !== null) {
            const selectedSet = numberSets[selectedSetIndex];
            const winner = JSON.stringify(selectedSet) === JSON.stringify(winningSet);
            setIsWinner(winner); // Establecer si es ganador o no
        }
    };

    return (
        <Lottery
            numberSets={numberSets}
            selectedSetIndex={selectedSetIndex}
            handleSelectSet={handleSelectSet}
            handleCheckWinner={handleCheckWinner}
            isWinner={isWinner}
            winningSet={winningSet}
        />
    );
};

export default App;

