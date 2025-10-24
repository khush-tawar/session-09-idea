const ideaTemplates = [
    { title: "Eco-Friendly Subscription Box", description: "Monthly delivery of sustainable household products" },
    { title: "Farm-to-Table Marketplace", description: "Connect local farmers directly with consumers" },
    { title: "VR Travel Experiences", description: "Virtual reality tours of global destinations" },
    { title: "Outdoor Gear Rental Platform", description: "Rent camping and hiking equipment locally" },
    { title: "AI Finance Advisor", description: "Personalized financial planning powered by AI" },
    { title: "Custom Meal Planner", description: "Dietary restriction-based meal planning service" },
    { title: "Local Fitness Class Finder", description: "Discover and book nearby fitness classes" },
    { title: "Pet Owner Social Network", description: "Connect pet owners for playdates and tips" },
    { title: "Remote Team Building Hub", description: "Virtual activities for distributed teams" },
    { title: "Skill Exchange Platform", description: "Trade skills with others in your community" },
    { title: "Senior Care Coordinator", description: "Tech platform for elder care management" },
    { title: "Sustainable Fashion Swap", description: "Clothing exchange marketplace for eco-conscious shoppers" },
    { title: "Home Chef Marketplace", description: "Book local chefs for home-cooked meals" },
    { title: "Language Learning Buddy", description: "AI-powered conversation partner for language practice" },
    { title: "Freelance Project Insurance", description: "Income protection for gig workers" },
    { title: "Smart Garden Assistant", description: "IoT-based urban gardening guidance" },
    { title: "Mental Health Check-in App", description: "Daily mood tracking with AI insights" },
    { title: "Local Event Discovery", description: "Personalized community event recommendations" },
    { title: "Subscription Book Club", description: "Curated book selections with virtual discussions" },
    { title: "Carbon Footprint Tracker", description: "Monitor and reduce your environmental impact" },
    { title: "Neighborhood Tool Library", description: "Share tools and equipment with neighbors" },
    { title: "Virtual Interior Designer", description: "AR-powered room design and furniture placement" },
    { title: "Freelance Talent Matcher", description: "AI matching for project-based work" },
    { title: "Plant-Based Recipe App", description: "Personalized vegan meal suggestions" },
    { title: "Study Group Coordinator", description: "Match students for collaborative learning" },
    { title: "Elderly Companion Service", description: "Virtual companionship for seniors" },
    { title: "DIY Home Repair Guide", description: "Step-by-step tutorials for home maintenance" },
    { title: "Micro-Investing Platform", description: "Invest spare change automatically" },
    { title: "Podcast Discovery Engine", description: "AI-curated podcast recommendations" },
    { title: "Zero-Waste Shopping Guide", description: "Find package-free products near you" }
];

export const generateStartupIdeas = () => {
    // Shuffle and select 9 unique ideas
    const shuffled = [...ideaTemplates].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 9);
    
    // Assign random desirability and feasibility scores (0-10)
    return selected.map((idea, index) => ({
        id: index,
        title: idea.title,
        description: idea.description,
        desirability: Math.floor(Math.random() * 10) + 1,
        feasibility: Math.floor(Math.random() * 10) + 1
    }));
};