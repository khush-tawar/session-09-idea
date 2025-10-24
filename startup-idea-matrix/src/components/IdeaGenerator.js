import React, { useState } from 'react';
import { generateIdeas } from '../utils/ideas';
import IdeaGrid from './IdeaGrid';

const IdeaGenerator = () => {
    const [ideas, setIdeas] = useState([]);

    const handleGenerateIdeas = () => {
        const newIdeas = generateIdeas();
        setIdeas(newIdeas);
    };

    return (
        <div>
            <button onClick={handleGenerateIdeas}>Generate Startup Ideas</button>
            {ideas.length > 0 && <IdeaGrid ideas={ideas} />}
        </div>
    );
};

export default IdeaGenerator;