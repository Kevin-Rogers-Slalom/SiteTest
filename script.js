// Places data for Ocean Shores, WA and surrounding areas
const placesData = [
    {
        name: "Ocean Shores Beach",
        category: "beach",
        description: "Miles of wide, sandy beaches perfect for walking, beachcombing, kite flying, and watching stunning sunsets over the Pacific Ocean.",
        location: "Ocean Shores, WA",
        activities: "Beachcombing, Kite Flying, Sunset Viewing",
        season: "Year-round"
    },
    {
        name: "Damon Point State Park",
        category: "nature",
        description: "A natural wildlife refuge with trails through coastal dunes and wetlands. Great for bird watching and nature photography.",
        location: "Ocean Shores, WA",
        activities: "Bird Watching, Hiking, Photography",
        season: "Year-round"
    },
    {
        name: "Ocean Shores North Jetty",
        category: "attractions",
        description: "Popular spot for fishing, crabbing, and watching boats enter Grays Harbor. Often see seals and sea lions.",
        location: "Ocean Shores, WA",
        activities: "Fishing, Wildlife Viewing, Photography",
        season: "Year-round"
    },
    {
        name: "Coastal Interpretive Center",
        category: "attractions",
        description: "Educational center featuring exhibits on local marine life, coastal ecosystems, and the area's natural history.",
        location: "Ocean Shores, WA",
        activities: "Education, Indoor Activities",
        season: "Year-round"
    },
    {
        name: "Galway Bay Irish Restaurant & Pub",
        category: "dining",
        description: "Authentic Irish pub serving traditional Irish dishes, fresh seafood, and a great selection of beers in a cozy atmosphere.",
        location: "Ocean Shores, WA",
        activities: "Dining, Live Music",
        season: "Year-round"
    },
    {
        name: "Emily's Restaurant",
        category: "dining",
        description: "Local favorite known for fresh seafood, steaks, and pasta. Features ocean views and a warm, welcoming atmosphere.",
        location: "Ocean Shores, WA",
        activities: "Fine Dining, Ocean Views",
        season: "Year-round"
    },
    {
        name: "Pacific Paradise Family Fun Center",
        category: "activities",
        description: "Indoor entertainment center with go-karts, mini golf, arcade games, and bumper boats. Perfect for families and rainy days.",
        location: "Ocean Shores, WA",
        activities: "Mini Golf, Go-Karts, Arcade",
        season: "Year-round"
    },
    {
        name: "Cranberry Museum",
        category: "attractions",
        description: "Learn about the history of cranberry farming in the Pacific Northwest with exhibits and seasonal farm tours.",
        location: "Long Beach, WA (nearby)",
        activities: "Museum Tours, Seasonal Harvest",
        season: "Best in Fall"
    },
    {
        name: "Ocean Shores Convention Center Farmers Market",
        category: "shopping",
        description: "Seasonal farmers market featuring local produce, crafts, baked goods, and artisan products from the region.",
        location: "Ocean Shores, WA",
        activities: "Shopping, Local Crafts",
        season: "Summer weekends"
    },
    {
        name: "Quinault Rain Forest",
        category: "nature",
        description: "Stunning temperate rainforest with ancient trees, waterfalls, and hiking trails. About an hour drive from Ocean Shores.",
        location: "Quinault, WA (1 hour north)",
        activities: "Hiking, Nature Photography, Camping",
        season: "Spring through Fall"
    },
    {
        name: "Grays Harbor Lighthouse",
        category: "attractions",
        description: "Tallest lighthouse in Washington State, offering tours and panoramic views of the coast from the top.",
        location: "Westport, WA (nearby)",
        activities: "Tours, Photography, History",
        season: "Year-round"
    },
    {
        name: "Bottle Beach State Park",
        category: "nature",
        description: "Pristine tidelands perfect for clamming, bird watching, and exploring tide pools during low tide.",
        location: "Near Ocean Shores, WA",
        activities: "Clamming, Tide Pooling, Bird Watching",
        season: "Year-round (best at low tide)"
    },
    {
        name: "Ocean Shores Golf Course",
        category: "activities",
        description: "18-hole championship golf course with coastal views, challenging holes, and wildlife sightings.",
        location: "Ocean Shores, WA",
        activities: "Golf, Wildlife Viewing",
        season: "Year-round"
    },
    {
        name: "Smoke Shop BBQ",
        category: "dining",
        description: "Award-winning barbecue restaurant serving slow-smoked meats, homemade sides, and delicious comfort food.",
        location: "Ocean Shores, WA",
        activities: "Casual Dining, BBQ",
        season: "Year-round"
    },
    {
        name: "Ocean Shores Kite Festival",
        category: "activities",
        description: "Annual summer festival featuring kite flying competitions, demonstrations, and colorful displays on the beach.",
        location: "Ocean Shores, WA",
        activities: "Kite Flying, Festivals, Family Fun",
        season: "Summer (June)"
    },
    {
        name: "Oyhut Wildlife Recreation Area",
        category: "nature",
        description: "Coastal wildlife area with trails through forest and dunes, offering solitude and nature observation opportunities.",
        location: "Ocean Shores, WA",
        activities: "Hiking, Bird Watching, Solitude",
        season: "Year-round"
    },
    {
        name: "Murphy's Candy & Ice Cream",
        category: "shopping",
        description: "Classic candy shop and ice cream parlor featuring homemade fudge, saltwater taffy, and hand-dipped ice cream.",
        location: "Ocean Shores, WA",
        activities: "Shopping, Sweets",
        season: "Year-round"
    },
    {
        name: "Westport Marina",
        category: "activities",
        description: "Busy fishing harbor offering charter fishing trips, whale watching tours, and fresh seafood markets.",
        location: "Westport, WA (20 min south)",
        activities: "Charter Fishing, Whale Watching, Seafood",
        season: "Year-round"
    }
];

// DOM elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const placesContainer = document.getElementById('placesContainer');
const noResults = document.getElementById('noResults');

// Display places
function displayPlaces(places) {
    placesContainer.innerHTML = '';
    
    if (places.length === 0) {
        placesContainer.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    placesContainer.style.display = 'grid';
    noResults.style.display = 'none';
    
    places.forEach(place => {
        const placeCard = createPlaceCard(place);
        placesContainer.appendChild(placeCard);
    });
}

// Create place card
function createPlaceCard(place) {
    const card = document.createElement('div');
    card.className = 'place-card';
    
    card.innerHTML = `
        <div class="place-header">
            <h3>${place.name}</h3>
            <span class="place-category">${getCategoryLabel(place.category)}</span>
        </div>
        <div class="place-body">
            <p class="place-description">${place.description}</p>
            <div class="place-details">
                <div class="place-detail">
                    <span class="place-icon">📍</span>
                    <span><strong>Location:</strong> ${place.location}</span>
                </div>
                <div class="place-detail">
                    <span class="place-icon">🎯</span>
                    <span><strong>Activities:</strong> ${place.activities}</span>
                </div>
                <div class="place-detail">
                    <span class="place-icon">📅</span>
                    <span><strong>Best Season:</strong> ${place.season}</span>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Get category label
function getCategoryLabel(category) {
    const labels = {
        'beach': 'Beaches',
        'nature': 'Nature & Parks',
        'dining': 'Dining',
        'shopping': 'Shopping',
        'activities': 'Activities',
        'attractions': 'Attractions'
    };
    return labels[category] || category;
}

// Filter places
function filterPlaces() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;
    
    let filtered = placesData;
    
    // Filter by category
    if (selectedCategory !== 'all') {
        filtered = filtered.filter(place => place.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
        filtered = filtered.filter(place => {
            return place.name.toLowerCase().includes(searchTerm) ||
                   place.description.toLowerCase().includes(searchTerm) ||
                   place.location.toLowerCase().includes(searchTerm) ||
                   place.activities.toLowerCase().includes(searchTerm);
        });
    }
    
    displayPlaces(filtered);
}

// Event listeners
searchInput.addEventListener('input', filterPlaces);
categoryFilter.addEventListener('change', filterPlaces);

// Initial display
displayPlaces(placesData);
