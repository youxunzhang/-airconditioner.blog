// Brand data embedded directly
const brands = [
  {
    "name": "Gree",
    "category": "domestic",
    "description": "Leading Chinese AC brand specializing in residential and commercial air conditioning systems.",
    "website": "https://www.gree.com/",
    "phone": "1-800-GREE-AC",
    "email": "service@gree.com",
    "address": "Gree Electric Appliances Inc., Zhuhai, Guangdong, China"
  },
  {
    "name": "Midea",
    "category": "domestic",
    "description": "China's leading home appliance brand with comprehensive AC product lines for residential and commercial use.",
    "website": "https://www.midea.com/",
    "phone": "1-800-MIDEA-AC",
    "email": "service@midea.com",
    "address": "Midea Group, Shunde, Foshan, Guangdong, China"
  },
  {
    "name": "Haier",
    "category": "domestic",
    "description": "Global home appliance brand known for smart and energy-efficient air conditioning solutions.",
    "website": "https://www.haier.com/",
    "phone": "1-800-HAIER-AC",
    "email": "service@haier.com",
    "address": "Haier Group, Qingdao, Shandong, China"
  },
  {
    "name": "Daikin",
    "category": "international",
    "description": "Japanese premium AC brand specializing in high-end residential and commercial air conditioning systems.",
    "website": "https://www.daikin.com/",
    "phone": "1-800-DAIKIN-AC",
    "email": "service@daikin.com",
    "address": "Daikin Industries Ltd., Osaka, Japan"
  },
  {
    "name": "Panasonic",
    "category": "international",
    "description": "Japanese electronics giant offering quiet and energy-efficient air conditioning products.",
    "website": "https://www.panasonic.com/",
    "phone": "1-800-PANASONIC",
    "email": "service@panasonic.com",
    "address": "Panasonic Corporation, Osaka, Japan"
  },
  {
    "name": "Mitsubishi Heavy Industries",
    "category": "international",
    "description": "Mitsubishi Group company focused on high-efficiency and energy-saving air conditioning solutions.",
    "website": "https://www.mhi.com/",
    "phone": "1-800-MHI-AC",
    "email": "service@mhi.com",
    "address": "Mitsubishi Heavy Industries, Tokyo, Japan"
  },
  {
    "name": "Hitachi",
    "category": "luxury",
    "description": "Japanese premium AC brand known for high efficiency and whisper-quiet operation.",
    "website": "https://www.hitachi.com/",
    "phone": "1-800-HITACHI",
    "email": "service@hitachi.com",
    "address": "Hitachi Ltd., Tokyo, Japan"
  },
  {
    "name": "Toshiba",
    "category": "luxury",
    "description": "Japanese premium electronics brand offering innovative and energy-efficient air conditioning solutions.",
    "website": "https://www.toshiba.com/",
    "phone": "1-800-TOSHIBA",
    "email": "service@toshiba.com",
    "address": "Toshiba Corporation, Tokyo, Japan"
  },
  {
    "name": "Fujitsu",
    "category": "luxury",
    "description": "Japanese premium AC brand specializing in comfort and energy-saving technologies.",
    "website": "https://www.fujitsu.com/",
    "phone": "1-800-FUJITSU",
    "email": "service@fujitsu.com",
    "address": "Fujitsu Limited, Tokyo, Japan"
  },
  {
    "name": "York",
    "category": "commercial",
    "description": "American commercial AC brand widely used in large-scale building applications.",
    "website": "https://www.york.com/",
    "phone": "1-800-YORK-AC",
    "email": "service@york.com",
    "address": "Johnson Controls, Milwaukee, Wisconsin, USA"
  }
];

let filteredBrands = brands;

// DOM elements
const brandsGrid = document.getElementById('brandsGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const mainSearchInput = document.getElementById('mainSearchInput');
const mainSearchBtn = document.getElementById('mainSearchBtn');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const searchResults = document.getElementById('searchResults');
const brandModal = document.getElementById('brandModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.querySelector('.modal .close');

// Initialize after page loads
document.addEventListener('DOMContentLoaded', function() {
    renderBrands(brands);
});

// Render brand cards
function renderBrands(list) {
    if (!brandsGrid) return;
    
    brandsGrid.innerHTML = '';
    if (!list.length) {
        brandsGrid.innerHTML = '<p style="text-align:center;color:#888;">No brands found</p>';
        return;
    }
    
    list.forEach(brand => {
        const card = document.createElement('div');
        card.className = 'brand-card';
        card.innerHTML = `
            <div class="brand-image">${brand.name[0]}</div>
            <div class="brand-info">
                <div class="brand-name">${brand.name}</div>
                <div class="brand-category">${getCategoryName(brand.category)}</div>
                <div class="brand-description">${brand.description}</div>
                <div class="brand-contact">
                    <button class="contact-btn primary" onclick="event.stopPropagation();window.open('${brand.website}','_blank')">Website</button>
                    <button class="contact-btn secondary" onclick="event.stopPropagation();showBrandModal('${brand.name}')">Details</button>
                </div>
            </div>
        `;
        card.onclick = () => showBrandModal(brand.name);
        brandsGrid.appendChild(card);
    });
}

// Get category name in English
function getCategoryName(cat) {
    switch(cat) {
        case 'domestic': return 'Domestic Brands';
        case 'international': return 'International Brands';
        case 'luxury': return 'Premium Brands';
        case 'commercial': return 'Commercial Brands';
        default: return 'Other';
    }
}

// Search functionality
function doSearch(keyword) {
    keyword = keyword.trim();
    if (!keyword) {
        renderBrands(filteredBrands);
        if (searchResults) searchResults.innerHTML = '';
        return;
    }
    
    const result = brands.filter(b =>
        b.name.toLowerCase().includes(keyword.toLowerCase()) ||
        b.description.toLowerCase().includes(keyword.toLowerCase()) ||
        getCategoryName(b.category).toLowerCase().includes(keyword.toLowerCase())
    );
    
    renderBrands(result);
    
    // Search section results
    if (searchResults) {
        if (!result.length) {
            searchResults.innerHTML = '<p style="color:#888;">No brands found</p>';
        } else {
            searchResults.innerHTML = result.map(b => `
                <div class="brand-card" style="margin-bottom:1rem;">
                    <div class="brand-image">${b.name[0]}</div>
                    <div class="brand-info">
                        <div class="brand-name">${b.name}</div>
                        <div class="brand-category">${getCategoryName(b.category)}</div>
                        <div class="brand-description">${b.description}</div>
                        <div class="brand-contact">
                            <button class="contact-btn primary" onclick="window.open('${b.website}','_blank')">Website</button>
                            <button class="contact-btn secondary" onclick="showBrandModal('${b.name}')">Details</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
}

// Category filter
if (categoryFilter) {
    categoryFilter.addEventListener('change', function() {
        const cat = this.value;
        filteredBrands = cat ? brands.filter(b => b.category === cat) : brands;
        renderBrands(filteredBrands);
    });
}

// Sort functionality
if (sortFilter) {
    sortFilter.addEventListener('change', function() {
        const val = this.value;
        let list = [...filteredBrands];
        if (val === 'name') {
            list.sort((a, b) => a.name.localeCompare(b.name, 'en'));
        }
        renderBrands(list);
    });
}

// Homepage search
if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => doSearch(searchInput.value));
    searchInput.addEventListener('keydown', e => { 
        if (e.key === 'Enter') doSearch(searchInput.value); 
    });
}

// Main search section
if (mainSearchBtn && mainSearchInput) {
    mainSearchBtn.addEventListener('click', () => doSearch(mainSearchInput.value));
    mainSearchInput.addEventListener('keydown', e => { 
        if (e.key === 'Enter') doSearch(mainSearchInput.value); 
    });
}

// Popular search tags
document.addEventListener('DOMContentLoaded', function() {
    const searchTags = document.querySelectorAll('.search-tag');
    searchTags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            doSearch(this.dataset.search);
        });
    });
});

// Brand detail modal
function showBrandModal(name) {
    const brand = brands.find(b => b.name === name);
    if (!brand || !modalContent) return;
    
    modalContent.innerHTML = `
        <div class="brand-detail">
            <div class="brand-detail-header">
                <div class="brand-detail-logo">${brand.name[0]}</div>
                <div class="brand-detail-info">
                    <h2>${brand.name}</h2>
                    <div class="category">${getCategoryName(brand.category)}</div>
                </div>
            </div>
            <div class="brand-detail-content">
                <div class="brand-detail-section">
                    <h3>Brand Overview</h3>
                    <p>${brand.description}</p>
                </div>
                <div class="brand-detail-section">
                    <h3>Contact Information</h3>
                    <div class="contact-info">
                        <div><strong>Website:</strong> <a href="${brand.website}" target="_blank">${brand.website}</a></div>
                        <div><strong>Phone:</strong> ${brand.phone}</div>
                        <div><strong>Email:</strong> <a href="mailto:${brand.email}">${brand.email}</a></div>
                        <div><strong>Address:</strong> ${brand.address}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    if (brandModal) {
        brandModal.style.display = 'block';
    }
}

// Close modal
if (modalClose) {
    modalClose.addEventListener('click', () => {
        if (brandModal) brandModal.style.display = 'none';
    });
}

window.addEventListener('click', function(event) {
    if (event.target === brandModal) {
        brandModal.style.display = 'none';
    }
}); 