import React, { useState } from 'react';
import { generateStartupIdeas } from './utils/ideas';
import MatrixLegend from './components/MatrixLegend';
import IdeaGrid from './components/IdeaGrid';
import './styles/main.css';

const App = () => {
    const [ideas, setIdeas] = useState([]);

    const handleGenerateIdeas = () => {
        const newIdeas = generateStartupIdeas();
        setIdeas(newIdeas);
    };

    return (
        <div className="app">
            <h1>🚀 Startup Idea Matrix</h1>
            <p className="subtitle">Generate 9 startup ideas and visualize them by desirability vs feasibility</p>
            <button className="generate-btn" onClick={handleGenerateIdeas}>
                {ideas.length === 0 ? 'Generate Ideas' : 'Generate New Ideas'}
            </button>
            {ideas.length > 0 && (
                <>
                    <MatrixLegend />
                    <IdeaGrid ideas={ideas} />
                </>
            )}
        </div>
    );
};

export default App;