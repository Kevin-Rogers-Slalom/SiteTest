// Ocean Shores Places Data
const places = [
    {
        name: "Ocean Shores Beach",
        category: "beach",
        icon: "🏖️",
        description: "Miles of pristine sandy beaches perfect for beachcombing, kite flying, and watching spectacular sunsets over the Pacific Ocean.",
        highlights: [
            "6 miles of drivable beach",
            "Perfect for beachcombing",
            "Stunning sunsets"
        ]
    },
    {
        name: "Damon Point State Park",
        category: "nature",
        icon: "🦅",
        description: "A natural sanctuary at the southern tip of Ocean Shores, featuring dunes, wildlife viewing, and beautiful coastal trails.",
        highlights: [
            "Bird watching paradise",
            "Coastal dune trails",
            "Harbor seal spotting"
        ]
    },
    {
        name: "Ocean City State Park",
        category: "nature",
        icon: "🏕️",
        description: "A popular camping destination with beach access, featuring over 170 campsites and direct access to the ocean.",
        highlights: [
            "Camping facilities",
            "Beach access",
            "Picnic areas"
        ]
    },
    {
        name: "Coastal Interpretive Center",
        category: "activities",
        icon: "🏛️",
        description: "Learn about the natural and cultural history of the area through exhibits, educational programs, and observation decks.",
        highlights: [
            "Educational exhibits",
            "Observation tower",
            "Free admission"
        ]
    },
    {
        name: "Chance A La Mer",
        category: "dining",
        icon: "🍴",
        description: "Fine dining experience featuring fresh seafood and Northwest cuisine with ocean views.",
        highlights: [
            "Fresh local seafood",
            "Ocean views",
            "Wine selection"
        ]
    },
    {
        name: "Galway Bay Irish Pub & Restaurant",
        category: "dining",
        icon: "🍺",
        description: "Authentic Irish pub atmosphere with hearty food, local beers, and live entertainment.",
        highlights: [
            "Irish cuisine",
            "Live music",
            "Local craft beers"
        ]
    },
    {
        name: "Mike's Seafood",
        category: "dining",
        icon: "🦞",
        description: "Fresh seafood market and restaurant serving the best local catch, including Dungeness crab and razor clams.",
        highlights: [
            "Fresh daily catch",
            "Dungeness crab",
            "Clam chowder"
        ]
    },
    {
        name: "Quinault Beach Resort & Casino",
        category: "activities",
        icon: "🎰",
        description: "Full-service resort featuring gaming, entertainment, spa services, and oceanfront accommodations.",
        highlights: [
            "Casino gaming",
            "Spa services",
            "Ocean view rooms"
        ]
    },
    {
        name: "Ocean Shores Golf Course",
        category: "activities",
        icon: "⛳",
        description: "18-hole links-style golf course with challenging play and beautiful coastal scenery.",
        highlights: [
            "18 holes",
            "Links-style course",
            "Coastal views"
        ]
    },
    {
        name: "Jetty Fishing",
        category: "activities",
        icon: "🎣",
        description: "Popular spot for fishing, crabbing, and watching boats navigate the Grays Harbor entrance.",
        highlights: [
            "Salmon fishing",
            "Crabbing spots",
            "Boat watching"
        ]
    },
    {
        name: "North Bay Park",
        category: "nature",
        icon: "🌳",
        description: "Beautiful park along North Bay featuring walking trails, picnic areas, and wildlife viewing opportunities.",
        highlights: [
            "Walking trails",
            "Wildlife viewing",
            "Peaceful setting"
        ]
    },
    {
        name: "Shilo Restaurant",
        category: "dining",
        icon: "🥞",
        description: "Family-friendly restaurant offering breakfast, lunch, and dinner with oceanfront dining.",
        highlights: [
            "Oceanfront dining",
            "All-day breakfast",
            "Family-friendly"
        ]
    },
    {
        name: "Ocean Shores Convention Center",
        category: "activities",
        icon: "🎪",
        description: "Hosts various events throughout the year including craft shows, festivals, and community gatherings.",
        highlights: [
            "Year-round events",
            "Craft fairs",
            "Community events"
        ]
    },
    {
        name: "Murphy's Candy & Ice Cream",
        category: "shopping",
        icon: "🍦",
        description: "Classic candy shop and ice cream parlor featuring homemade treats and nostalgic confections.",
        highlights: [
            "Homemade ice cream",
            "Salt water taffy",
            "Nostalgic candies"
        ]
    },
    {
        name: "Ocean Shores Kite Festival Grounds",
        category: "activities",
        icon: "🪁",
        description: "Annual location for the International Kite Festival, one of the largest kite festivals in the world.",
        highlights: [
            "World-class kite festival",
            "Beach activities",
            "Family fun"
        ]
    },
    {
        name: "Oyhut Bay Trail",
        category: "nature",
        icon: "🚶",
        description: "Scenic 1.2-mile walking trail through coastal forest and wetlands, perfect for bird watching and nature photography.",
        highlights: [
            "1.2-mile trail",
            "Bird watching",
            "Photography spots"
        ]
    },
    {
        name: "Pacific Paradise Family Fun Center",
        category: "activities",
        icon: "🎮",
        description: "Indoor entertainment complex featuring go-karts, mini golf, arcade games, and laser tag.",
        highlights: [
            "Go-kart racing",
            "Mini golf",
            "Arcade games"
        ]
    },
    {
        name: "The Home Port Restaurant",
        category: "dining",
        icon: "🍤",
        description: "Long-standing local favorite known for generous portions and classic American seafood dishes.",
        highlights: [
            "Generous portions",
            "Classic seafood",
            "Local favorite"
        ]
    },
    {
        name: "Fusions Gallery",
        category: "shopping",
        icon: "🎨",
        description: "Local art gallery showcasing works by Pacific Northwest artists, including paintings, sculptures, and jewelry.",
        highlights: [
            "Local artwork",
            "Unique gifts",
            "Pacific Northwest artists"
        ]
    },
    {
        name: "Shores Bowl",
        category: "activities",
        icon: "🎳",
        description: "Family bowling center with modern lanes, arcade games, and snack bar for rainy day fun.",
        highlights: [
            "Bowling lanes",
            "Family-friendly",
            "Rainy day activity"
        ]
    }
];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    displayPlaces('all');
    setupFilters();
});

// Display places based on category
function displayPlaces(category) {
    const placesGrid = document.getElementById('placesGrid');
    placesGrid.innerHTML = '';

    const filteredPlaces = category === 'all' 
        ? places 
        : places.filter(place => place.category === category);

    filteredPlaces.forEach(place => {
        const placeCard = createPlaceCard(place);
        placesGrid.appendChild(placeCard);
    });

    // Add animation
    const cards = placesGrid.querySelectorAll('.place-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        }, index * 50);
    });
}

// Create a place card element
function createPlaceCard(place) {
    const card = document.createElement('div');
    card.className = 'place-card';
    
    const highlightsList = place.highlights
        .map(highlight => `<li>${highlight}</li>`)
        .join('');

    card.innerHTML = `
        <div class="place-image">${place.icon}</div>
        <div class="place-content">
            <span class="place-category">${getCategoryName(place.category)}</span>
            <h3 class="place-name">${place.name}</h3>
            <p class="place-description">${place.description}</p>
            <ul class="place-highlights">
                ${highlightsList}
            </ul>
        </div>
    `;

    return card;
}

// Get category display name
function getCategoryName(category) {
    const categories = {
        'beach': '🏖️ Beach',
        'nature': '🌲 Nature',
        'dining': '🍽️ Dining',
        'activities': '🎯 Activities',
        'shopping': '🛍️ Shopping'
    };
    return categories[category] || category;
}

// Setup filter buttons
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category and display places
            const category = this.getAttribute('data-category');
            displayPlaces(category);
        });
    });
}
