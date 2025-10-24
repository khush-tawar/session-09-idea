import React from 'react';
import IdeaCard from './IdeaCard';

const IdeaGrid = ({ ideas }) => {
    return (
        <div className="matrix-container">
            <div className="y-axis-label">
                <span>Desirability</span>
                <div className="arrow">↑</div>
            </div>
            <div className="matrix-content">
                <div className="idea-matrix">
                    {ideas.map((idea) => (
                        <IdeaCard key={idea.id} idea={idea} />
                    ))}
                </div>
                <div className="x-axis-label">
                    <div className="arrow">→</div>
                    <span>Feasibility</span>
                </div>
            </div>
        </div>
    );
};

export default IdeaGrid;