// Startup idea templates and categories
const ideaCategories = {
    problems: [
        "busy professionals struggling with meal planning",
        "remote workers feeling isolated",
        "small businesses managing inventory inefficiently",
        "students struggling to focus while studying",
        "elderly people needing medication reminders",
        "pet owners tracking their pet's health",
        "freelancers managing multiple clients",
        "parents coordinating family schedules",
        "travelers finding authentic local experiences",
        "fitness enthusiasts tracking workout progress",
        "people learning new languages",
        "homeowners managing home maintenance",
        "gardeners optimizing plant care",
        "musicians collaborating remotely",
        "job seekers preparing for interviews",
        "readers discovering new books",
        "shoppers comparing prices across stores",
        "environmentally conscious consumers reducing waste",
        "artists selling their work online",
        "couples planning their weddings"
    ],
    solutions: [
        "an AI-powered mobile app",
        "a subscription-based service",
        "a peer-to-peer marketplace",
        "a browser extension with smart features",
        "a community-driven platform",
        "an automated scheduling tool",
        "a gamified learning experience",
        "a smart device integration",
        "a personalized recommendation engine",
        "a collaborative workspace",
        "a data analytics dashboard",
        "a virtual assistant",
        "a social networking feature",
        "a rewards program",
        "an augmented reality experience",
        "a matching algorithm",
        "a notification system",
        "a tracking and reporting tool",
        "a video-based tutorial platform",
        "an API connecting multiple services"
    ],
    features: [
        "with real-time collaboration",
        "using machine learning predictions",
        "that integrates with existing calendars",
        "offering personalized insights",
        "with built-in gamification",
        "supporting multiple languages",
        "with offline functionality",
        "featuring voice commands",
        "that syncs across all devices",
        "with customizable workflows",
        "including expert consultations",
        "with automated reminders",
        "featuring community reviews",
        "with advanced analytics",
        "offering tiered pricing plans",
        "with social sharing capabilities",
        "including video tutorials",
        "with priority customer support",
        "featuring integration with popular tools",
        "with white-label options"
    ]
};

// Generate a random startup idea
function generateRandomIdea() {
    const problem = ideaCategories.problems[Math.floor(Math.random() * ideaCategories.problems.length)];
    const solution = ideaCategories.solutions[Math.floor(Math.random() * ideaCategories.solutions.length)];
    const feature = ideaCategories.features[Math.floor(Math.random() * ideaCategories.features.length)];
    
    return `A platform for ${problem} using ${solution} ${feature}`;
}

// Generate desirability and feasibility scores
function generateScores() {
    // Use discrete levels: Low (1-3), Medium (4-6), High (7-9)
    const levels = ['low', 'medium', 'high'];
    
    // Randomly select a level for each dimension
    const desirabilityLevel = levels[Math.floor(Math.random() * 3)];
    const feasibilityLevel = levels[Math.floor(Math.random() * 3)];
    
    // Generate a score within the level range
    const desirability = getLevelScore(desirabilityLevel);
    const feasibility = getLevelScore(feasibilityLevel);
    
    return { desirability, feasibility, desirabilityLevel, feasibilityLevel };
}

function getLevelScore(level) {
    switch(level) {
        case 'low':
            return Math.floor(Math.random() * 3) + 1; // 1-3
        case 'medium':
            return Math.floor(Math.random() * 3) + 4; // 4-6
        case 'high':
            return Math.floor(Math.random() * 3) + 7; // 7-9
        default:
            return 5;
    }
}

// Get level name from score
function getLevelFromScore(score) {
    if (score <= 3) return 'low';
    if (score <= 6) return 'medium';
    return 'high';
}

// Generate 9 unique ideas
function generate9Ideas() {
    const ideas = [];
    const usedCombinations = new Set();
    
    // Ensure we have exactly one idea in each quadrant
    const quadrants = [
        { d: 'high', f: 'high' },
        { d: 'high', f: 'medium' },
        { d: 'high', f: 'low' },
        { d: 'medium', f: 'high' },
        { d: 'medium', f: 'medium' },
        { d: 'medium', f: 'low' },
        { d: 'low', f: 'high' },
        { d: 'low', f: 'medium' },
        { d: 'low', f: 'low' }
    ];
    
    for (let i = 0; i < 9; i++) {
        let idea, ideaText;
        
        // Generate unique idea text
        do {
            ideaText = generateRandomIdea();
        } while (usedCombinations.has(ideaText));
        
        usedCombinations.add(ideaText);
        
        // Assign to specific quadrant
        const quadrant = quadrants[i];
        const desirability = getLevelScore(quadrant.d);
        const feasibility = getLevelScore(quadrant.f);
        
        idea = {
            id: i + 1,
            text: ideaText,
            desirability: desirability,
            feasibility: feasibility,
            desirabilityLevel: quadrant.d,
            feasibilityLevel: quadrant.f
        };
        
        ideas.push(idea);
    }
    
    return ideas;
}

// Calculate position within quadrant for visual distribution
function calculatePosition(score, level) {
    // Get the base position for the level (0-33%, 33-66%, 66-100%)
    let basePos;
    if (level === 'low') basePos = 16.67; // center of first third
    else if (level === 'medium') basePos = 50; // center of second third
    else basePos = 83.33; // center of last third
    
    // Add some random offset within the third for visual variety
    const offset = (Math.random() - 0.5) * 20; // ±10% offset
    return Math.max(5, Math.min(95, basePos + offset));
}

// Display ideas on the matrix
function displayIdeasOnMatrix(ideas) {
    const matrix = document.getElementById('matrix');
    
    // Remove existing idea dots
    const existingDots = matrix.querySelectorAll('.idea-dot');
    existingDots.forEach(dot => dot.remove());
    
    // Add new dots
    ideas.forEach(idea => {
        const dot = document.createElement('div');
        dot.className = 'idea-dot';
        dot.setAttribute('data-number', idea.id);
        dot.title = `Idea #${idea.id}: ${idea.text}`;
        
        // Position based on scores (0-9 scale mapped to percentage)
        // Feasibility: left to right (X-axis)
        // Desirability: bottom to top (Y-axis)
        const x = calculatePosition(idea.feasibility, idea.feasibilityLevel);
        const y = 100 - calculatePosition(idea.desirability, idea.desirabilityLevel);
        
        dot.style.left = `calc(${x}% - 15px)`;
        dot.style.top = `calc(${y}% - 15px)`;
        
        matrix.appendChild(dot);
    });
}

// Display ideas in list format
function displayIdeasList(ideas) {
    const ideasList = document.getElementById('ideasList');
    ideasList.innerHTML = '';
    
    // Sort ideas by desirability (descending) for better presentation
    const sortedIdeas = [...ideas].sort((a, b) => b.desirability - a.desirability);
    
    sortedIdeas.forEach(idea => {
        const card = document.createElement('div');
        card.className = 'idea-card';
        
        // Color code based on desirability + feasibility sum
        const totalScore = idea.desirability + idea.feasibility;
        let borderColor;
        if (totalScore >= 14) borderColor = '#28a745'; // Green for high total
        else if (totalScore >= 10) borderColor = '#ffc107'; // Yellow for medium
        else borderColor = '#dc3545'; // Red for low
        
        card.style.borderLeftColor = borderColor;
        
        card.innerHTML = `
            <div class="idea-number">${idea.id}</div>
            <div class="idea-title">${idea.text}</div>
            <div class="idea-scores">
                <div class="score">
                    <span class="score-label">Desirability:</span>
                    <span class="score-value">${idea.desirability}/9 (${idea.desirabilityLevel})</span>
                </div>
                <div class="score">
                    <span class="score-label">Feasibility:</span>
                    <span class="score-value">${idea.feasibility}/9 (${idea.feasibilityLevel})</span>
                </div>
            </div>
        `;
        
        ideasList.appendChild(card);
    });
}

// Main function to generate and display ideas
function generateAndDisplayIdeas() {
    const ideas = generate9Ideas();
    
    // Show the matrix container
    const matrixContainer = document.getElementById('matrixContainer');
    matrixContainer.classList.remove('hidden');
    
    // Display ideas
    displayIdeasOnMatrix(ideas);
    displayIdeasList(ideas);
    
    // Smooth scroll to matrix
    setTimeout(() => {
        matrixContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    generateBtn.addEventListener('click', generateAndDisplayIdeas);
});
