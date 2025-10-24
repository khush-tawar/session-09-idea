import React from 'react';

const IdeaCard = ({ idea }) => {
    // Position the card based on feasibility (x-axis) and desirability (y-axis)
    // Scale: 1-10 for both axes
    const left = ((idea.feasibility - 1) / 9) * 100; // 0% to 100%
    const bottom = ((idea.desirability - 1) / 9) * 100; // 0% to 100%
    
    // Determine color based on position (high desirability + high feasibility = green)
    const getColor = () => {
        const total = idea.desirability + idea.feasibility;
        if (total >= 16) return '#4caf50'; // Green - high on both
        if (total >= 12) return '#ffc107'; // Yellow - medium
        return '#f44336'; // Red - low on either
    };

    return (
        <div 
            className="idea-card" 
            style={{
                left: `${left}%`,
                bottom: `${bottom}%`,
                borderColor: getColor(),
                backgroundColor: `${getColor()}15`
            }}
            title={`Desirability: ${idea.desirability}/10, Feasibility: ${idea.feasibility}/10`}
        >
            <h3>{idea.title}</h3>
            <p className="idea-description">{idea.description}</p>
            <div className="scores">
                <span className="score">D: {idea.desirability}</span>
                <span className="score">F: {idea.feasibility}</span>
            </div>
        </div>
    );
};

export default IdeaCard;