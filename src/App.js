import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
    const [techs, setTech] = useState([]);
    const [newTech, setNewTech] = useState('');

    const handleAddTech = useCallback(() => {
        setTech([...techs, newTech]);
        setNewTech('');
    }, [techs, newTech]);

    useEffect(() => {
        const storedTech = localStorage.getItem('techs');

        if (storedTech) {
            setTech(JSON.parse(storedTech));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('techs', JSON.stringify(techs));
    }, [techs]);

    const techSize = useMemo(() => techs.length, [techs]);

    return (
        <>
            <ul>
                {techs.map(tech => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>
            <strong>Você possui {techSize} tecnologias.</strong>
            <br />
            <input value={newTech} onChange={e => setNewTech(e.target.value)} />
            <button type="button" onClick={handleAddTech}>
                Adicionar
            </button>
        </>
    );
}

export default App;
