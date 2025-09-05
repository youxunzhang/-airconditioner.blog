// Brand data embedded directly
const brands = [
  {
    "name": "Gree",
    "category": "domestic",
    "description": "Leading Chinese AC brand specializing in residential and commercial air conditioning systems with innovative technology and energy efficiency.",
    "website": "https://www.gree.com/",
    "phone": "1-800-GREE-AC",
    "email": "service@gree.com",
    "address": "Gree Electric Appliances Inc., Zhuhai, Guangdong, China"
  },
  {
    "name": "Midea",
    "category": "domestic",
    "description": "China's leading home appliance brand with comprehensive AC product lines for residential and commercial use, known for smart connectivity.",
    "website": "https://www.midea.com/",
    "phone": "1-800-MIDEA-AC",
    "email": "service@midea.com",
    "address": "Midea Group, Shunde, Foshan, Guangdong, China"
  },
  {
    "name": "Haier",
    "category": "domestic",
    "description": "Global home appliance brand known for smart and energy-efficient air conditioning solutions with IoT integration.",
    "website": "https://www.haier.com/",
    "phone": "1-800-HAIER-AC",
    "email": "service@haier.com",
    "address": "Haier Group, Qingdao, Shandong, China"
  },
  {
    "name": "Chigo",
    "category": "domestic",
    "description": "Chinese AC manufacturer specializing in residential and light commercial air conditioning with competitive pricing.",
    "website": "https://www.chigo.com/",
    "phone": "1-800-CHIGO-AC",
    "email": "service@chigo.com",
    "address": "Chigo Group, Foshan, Guangdong, China"
  },
  {
    "name": "AUX",
    "category": "domestic",
    "description": "Chinese AC brand offering reliable and affordable air conditioning solutions for home and office use.",
    "website": "https://www.aux.com/",
    "phone": "1-800-AUX-AC",
    "email": "service@aux.com",
    "address": "AUX Group, Ningbo, Zhejiang, China"
  },
  {
    "name": "Daikin",
    "category": "international",
    "description": "Japanese premium AC brand specializing in high-end residential and commercial air conditioning systems with inverter technology.",
    "website": "https://www.daikin.com/",
    "phone": "1-800-DAIKIN-AC",
    "email": "service@daikin.com",
    "address": "Daikin Industries Ltd., Osaka, Japan"
  },
  {
    "name": "Panasonic",
    "category": "international",
    "description": "Japanese electronics giant offering quiet and energy-efficient air conditioning products with nanoe technology.",
    "website": "https://www.panasonic.com/",
    "phone": "1-800-PANASONIC",
    "email": "service@panasonic.com",
    "address": "Panasonic Corporation, Osaka, Japan"
  },
  {
    "name": "Mitsubishi Heavy Industries",
    "category": "international",
    "description": "Mitsubishi Group company focused on high-efficiency and energy-saving air conditioning solutions for all applications.",
    "website": "https://www.mhi.com/",
    "phone": "1-800-MHI-AC",
    "email": "service@mhi.com",
    "address": "Mitsubishi Heavy Industries, Tokyo, Japan"
  },
  {
    "name": "Mitsubishi Electric",
    "category": "international",
    "description": "Premium Japanese brand known for high-quality air conditioning systems with advanced climate control technology.",
    "website": "https://www.mitsubishielectric.com/",
    "phone": "1-800-MELCO-AC",
    "email": "service@mitsubishielectric.com",
    "address": "Mitsubishi Electric Corporation, Tokyo, Japan"
  },
  {
    "name": "LG",
    "category": "international",
    "description": "Korean electronics giant offering innovative air conditioning solutions with smart features and energy efficiency.",
    "website": "https://www.lg.com/",
    "phone": "1-800-LG-AC",
    "email": "service@lg.com",
    "address": "LG Electronics, Seoul, South Korea"
  },
  {
    "name": "Samsung",
    "category": "international",
    "description": "Korean technology leader providing smart air conditioning systems with IoT connectivity and energy management.",
    "website": "https://www.samsung.com/",
    "phone": "1-800-SAMSUNG",
    "email": "service@samsung.com",
    "address": "Samsung Electronics, Seoul, South Korea"
  },
  {
    "name": "Hitachi",
    "category": "luxury",
    "description": "Japanese premium AC brand known for high efficiency and whisper-quiet operation with advanced air purification.",
    "website": "https://www.hitachi.com/",
    "phone": "1-800-HITACHI",
    "email": "service@hitachi.com",
    "address": "Hitachi Ltd., Tokyo, Japan"
  },
  {
    "name": "Toshiba",
    "category": "luxury",
    "description": "Japanese premium electronics brand offering innovative and energy-efficient air conditioning solutions with smart controls.",
    "website": "https://www.toshiba.com/",
    "phone": "1-800-TOSHIBA",
    "email": "service@toshiba.com",
    "address": "Toshiba Corporation, Tokyo, Japan"
  },
  {
    "name": "Fujitsu",
    "category": "luxury",
    "description": "Japanese premium AC brand specializing in comfort and energy-saving technologies with advanced climate control.",
    "website": "https://www.fujitsu.com/",
    "phone": "1-800-FUJITSU",
    "email": "service@fujitsu.com",
    "address": "Fujitsu Limited, Tokyo, Japan"
  },
  {
    "name": "Sharp",
    "category": "luxury",
    "description": "Japanese electronics brand offering high-quality air conditioning with Plasmacluster ion technology for air purification.",
    "website": "https://www.sharp.com/",
    "phone": "1-800-SHARP-AC",
    "email": "service@sharp.com",
    "address": "Sharp Corporation, Osaka, Japan"
  },
  {
    "name": "York",
    "category": "commercial",
    "description": "American commercial AC brand widely used in large-scale building applications with comprehensive HVAC solutions.",
    "website": "https://www.york.com/",
    "phone": "1-800-YORK-AC",
    "email": "service@york.com",
    "address": "Johnson Controls, Milwaukee, Wisconsin, USA"
  },
  {
    "name": "Carrier",
    "category": "commercial",
    "description": "American HVAC leader providing commercial and residential air conditioning systems with innovative technology.",
    "website": "https://www.carrier.com/",
    "phone": "1-800-CARRIER",
    "email": "service@carrier.com",
    "address": "Carrier Global Corporation, Palm Beach Gardens, Florida, USA"
  },
  {
    "name": "Trane",
    "category": "commercial",
    "description": "American commercial HVAC brand specializing in large-scale building climate control and energy management systems.",
    "website": "https://www.trane.com/",
    "phone": "1-800-TRANE-AC",
    "email": "service@trane.com",
    "address": "Trane Technologies, Davidson, North Carolina, USA"
  },
  {
    "name": "Lennox",
    "category": "commercial",
    "description": "American HVAC manufacturer offering residential and commercial air conditioning with high efficiency ratings.",
    "website": "https://www.lennox.com/",
    "phone": "1-800-LENNOX",
    "email": "service@lennox.com",
    "address": "Lennox International, Richardson, Texas, USA"
  },
  {
    "name": "Rheem",
    "category": "commercial",
    "description": "American HVAC brand providing reliable air conditioning systems for residential and commercial applications.",
    "website": "https://www.rheem.com/",
    "phone": "1-800-RHEEM-AC",
    "email": "service@rheem.com",
    "address": "Rheem Manufacturing Company, Atlanta, Georgia, USA"
  },
  {
    "name": "Goodman",
    "category": "commercial",
    "description": "American HVAC manufacturer offering affordable and reliable air conditioning solutions for various applications.",
    "website": "https://www.goodmanmfg.com/",
    "phone": "1-800-GOODMAN",
    "email": "service@goodman.com",
    "address": "Goodman Manufacturing Company, Houston, Texas, USA"
  },
  {
    "name": "Bryant",
    "category": "commercial",
    "description": "American HVAC brand providing reliable residential and commercial air conditioning systems with advanced technology.",
    "website": "https://www.bryant.com/",
    "phone": "1-800-BRYANT",
    "email": "service@bryant.com",
    "address": "Bryant Heating & Cooling Systems, Indianapolis, Indiana, USA"
  },
  {
    "name": "American Standard",
    "category": "commercial",
    "description": "American HVAC manufacturer offering high-quality air conditioning systems for residential and commercial use.",
    "website": "https://www.americanstandardair.com/",
    "phone": "1-800-AMERICAN",
    "email": "service@americanstandard.com",
    "address": "American Standard Companies, Piscataway, New Jersey, USA"
  },
  {
    "name": "Amana",
    "category": "commercial",
    "description": "American HVAC brand known for reliable and energy-efficient air conditioning solutions.",
    "website": "https://www.amana-hac.com/",
    "phone": "1-800-AMANA-AC",
    "email": "service@amana.com",
    "address": "Amana Corporation, Amana, Iowa, USA"
  },
  {
    "name": "Frigidaire",
    "category": "international",
    "description": "American appliance brand offering reliable air conditioning systems with innovative cooling technology.",
    "website": "https://www.frigidaire.com/",
    "phone": "1-800-FRIGIDAIRE",
    "email": "service@frigidaire.com",
    "address": "Electrolux Home Products, Charlotte, North Carolina, USA"
  },
  {
    "name": "Whirlpool",
    "category": "international",
    "description": "Global appliance manufacturer providing reliable air conditioning solutions for home and office.",
    "website": "https://www.whirlpool.com/",
    "phone": "1-800-WHIRLPOOL",
    "email": "service@whirlpool.com",
    "address": "Whirlpool Corporation, Benton Harbor, Michigan, USA"
  },
  {
    "name": "GE Appliances",
    "category": "international",
    "description": "American appliance brand offering innovative air conditioning systems with smart technology.",
    "website": "https://www.geappliances.com/",
    "phone": "1-800-GE-APPLIANCES",
    "email": "service@geappliances.com",
    "address": "GE Appliances, Louisville, Kentucky, USA"
  },
  {
    "name": "Maytag",
    "category": "international",
    "description": "American appliance brand known for durable and reliable air conditioning systems.",
    "website": "https://www.maytag.com/",
    "phone": "1-800-MAYTAG",
    "email": "service@maytag.com",
    "address": "Maytag Corporation, Newton, Iowa, USA"
  },
  {
    "name": "Kenmore",
    "category": "international",
    "description": "American appliance brand offering reliable air conditioning solutions for residential use.",
    "website": "https://www.kenmore.com/",
    "phone": "1-800-KENMORE",
    "email": "service@kenmore.com",
    "address": "Sears Holdings Corporation, Hoffman Estates, Illinois, USA"
  },
  {
    "name": "Bosch",
    "category": "luxury",
    "description": "German engineering company offering premium air conditioning systems with advanced technology.",
    "website": "https://www.bosch-climate.com/",
    "phone": "1-800-BOSCH-AC",
    "email": "service@bosch.com",
    "address": "Bosch Thermotechnology, Wetzlar, Germany"
  },

  {
    "name": "Sanyo",
    "category": "international",
    "description": "Japanese electronics brand offering reliable air conditioning systems with energy-saving technology.",
    "website": "https://www.sanyo.com/",
    "phone": "1-800-SANYO-AC",
    "email": "service@sanyo.com",
    "address": "Sanyo Electric Co., Ltd., Osaka, Japan"
  },
  {
    "name": "O General",
    "category": "international",
    "description": "Japanese brand specializing in air conditioning systems with advanced cooling technology.",
    "website": "https://www.ogeneral.com/",
    "phone": "1-800-OGENERAL",
    "email": "service@ogeneral.com",
    "address": "General Corporation, Tokyo, Japan"
  },
  {
    "name": "Voltas",
    "category": "international",
    "description": "Indian air conditioning brand offering reliable cooling solutions for various applications.",
    "website": "https://www.voltas.com/",
    "phone": "1-800-VOLTAS",
    "email": "service@voltas.com",
    "address": "Voltas Limited, Mumbai, Maharashtra, India"
  },
  {
    "name": "Blue Star",
    "category": "international",
    "description": "Indian HVAC company providing air conditioning systems for residential and commercial use.",
    "website": "https://www.bluestarindia.com/",
    "phone": "1-800-BLUESTAR",
    "email": "service@bluestar.com",
    "address": "Blue Star Limited, Mumbai, Maharashtra, India"
  },
  {
    "name": "Carrier India",
    "category": "commercial",
    "description": "Indian subsidiary of Carrier Global offering comprehensive HVAC solutions.",
    "website": "https://www.carrierindia.com/",
    "phone": "1-800-CARRIER-IN",
    "email": "service@carrierindia.com",
    "address": "Carrier Airconditioning & Refrigeration Ltd., Gurgaon, India"
  },
  {
    "name": "Hitachi Cooling & Heating",
    "category": "luxury",
    "description": "Japanese premium brand specializing in advanced air conditioning and heating solutions.",
    "website": "https://www.hitachiaircon.com/",
    "phone": "1-800-HITACHI-AC",
    "email": "service@hitachiaircon.com",
    "address": "Hitachi Air Conditioning, Tokyo, Japan"
  },
  {
    "name": "Toshiba Air Conditioning",
    "category": "luxury",
    "description": "Japanese premium brand offering innovative air conditioning systems with smart controls.",
    "website": "https://www.toshiba-aircon.co.uk/",
    "phone": "1-800-TOSHIBA-AC",
    "email": "service@toshiba-aircon.com",
    "address": "Toshiba Air Conditioning, Tokyo, Japan"
  },
  {
    "name": "Fujitsu General",
    "category": "luxury",
    "description": "Japanese premium brand specializing in comfort and energy-saving air conditioning technologies.",
    "website": "https://www.fujitsu-general.com/",
    "phone": "1-800-FUJITSU-GEN",
    "email": "service@fujitsu-general.com",
    "address": "Fujitsu General Limited, Kawasaki, Japan"
  },
  {
    "name": "Sharp Air Conditioning",
    "category": "luxury",
    "description": "Japanese electronics brand offering high-quality air conditioning with Plasmacluster ion technology.",
    "website": "https://www.sharp.co.jp/",
    "phone": "1-800-SHARP-AC",
    "email": "service@sharp.co.jp",
    "address": "Sharp Corporation, Osaka, Japan"
  },
  {
    "name": "Daikin Europe",
    "category": "international",
    "description": "European division of Daikin offering premium air conditioning systems with inverter technology.",
    "website": "https://www.daikin.eu/",
    "phone": "1-800-DAIKIN-EU",
    "email": "service@daikin.eu",
    "address": "Daikin Europe N.V., Brussels, Belgium"
  },
  {
    "name": "Mitsubishi Heavy Industries Europe",
    "category": "international",
    "description": "European division of MHI offering high-efficiency air conditioning solutions.",
    "website": "https://www.mhi.com/",
    "phone": "1-800-MHI-EU",
    "email": "service@mhi-europe.com",
    "address": "Mitsubishi Heavy Industries Europe, London, UK"
  },
  {
    "name": "LG Electronics Europe",
    "category": "international",
    "description": "European division of LG offering innovative air conditioning solutions with smart features.",
    "website": "https://www.lg.com/uk/",
    "phone": "1-800-LG-EU",
    "email": "service@lg-europe.com",
    "address": "LG Electronics Europe, London, UK"
  },
  {
    "name": "Samsung Electronics Europe",
    "category": "international",
    "description": "European division of Samsung providing smart air conditioning systems with IoT connectivity.",
    "website": "https://www.samsung.com/uk/",
    "phone": "1-800-SAMSUNG-EU",
    "email": "service@samsung-europe.com",
    "address": "Samsung Electronics Europe, London, UK"
  },
  {
    "name": "Panasonic Europe",
    "category": "international",
    "description": "European division of Panasonic offering quiet and energy-efficient air conditioning products.",
    "website": "https://www.panasonic.eu/",
    "phone": "1-800-PANASONIC-EU",
    "email": "service@panasonic-europe.com",
    "address": "Panasonic Europe, Wiesbaden, Germany"
  },
  {
    "name": "Gree Europe",
    "category": "domestic",
    "description": "European division of Gree offering innovative air conditioning systems with energy efficiency.",
    "website": "https://www.gree.com/",
    "phone": "1-800-GREE-EU",
    "email": "service@gree-europe.com",
    "address": "Gree Electric Appliances Europe, Milan, Italy"
  },
  {
    "name": "Midea Europe",
    "category": "domestic",
    "description": "European division of Midea offering comprehensive AC product lines with smart connectivity.",
    "website": "https://www.midea.com/",
    "phone": "1-800-MIDEA-EU",
    "email": "service@midea-europe.com",
    "address": "Midea Europe, Milan, Italy"
  },
  {
    "name": "Haier Europe",
    "category": "domestic",
    "description": "European division of Haier offering smart and energy-efficient air conditioning solutions.",
    "website": "https://www.haier.com/",
    "phone": "1-800-HAIER-EU",
    "email": "service@haier-europe.com",
    "address": "Haier Europe, Milan, Italy"
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
    updateBrandStats();
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
        
        // Create brand image container
        const brandImageDiv = document.createElement('div');
        brandImageDiv.className = 'brand-image';
        
        // Create and append logo image
        const logoImg = createBrandLogoImage(brand.name);
        brandImageDiv.appendChild(logoImg);
        
        // Create brand info container
        const brandInfoDiv = document.createElement('div');
        brandInfoDiv.className = 'brand-info';
        brandInfoDiv.innerHTML = `
            <div class="brand-name">${brand.name}</div>
            <div class="brand-category">${getCategoryName(brand.category)}</div>
            <div class="brand-description">${brand.description}</div>
            <div class="brand-contact">
                <button class="contact-btn primary" onclick="event.stopPropagation();window.open('${brand.website}','_blank')">Website</button>
                <button class="contact-btn secondary" onclick="event.stopPropagation();showBrandModal('${brand.name}')">Details</button>
            </div>
        `;
        
        // Append elements to card
        card.appendChild(brandImageDiv);
        card.appendChild(brandInfoDiv);
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

// Update brand statistics
function updateBrandStats() {
    const totalBrands = brands.length;
    const domesticBrands = brands.filter(b => b.category === 'domestic').length;
    const internationalBrands = brands.filter(b => b.category === 'international').length;
    const premiumBrands = brands.filter(b => b.category === 'luxury').length;
    const commercialBrands = brands.filter(b => b.category === 'commercial').length;
    
    // Update DOM elements if they exist
    const totalElement = document.getElementById('totalBrands');
    const domesticElement = document.getElementById('domesticBrands');
    const internationalElement = document.getElementById('internationalBrands');
    const premiumElement = document.getElementById('premiumBrands');
    const commercialElement = document.getElementById('commercialBrands');
    
    if (totalElement) totalElement.textContent = totalBrands;
    if (domesticElement) domesticElement.textContent = domesticBrands;
    if (internationalElement) internationalElement.textContent = internationalBrands;
    if (premiumElement) premiumElement.textContent = premiumBrands;
    if (commercialElement) commercialElement.textContent = commercialBrands;
    
    console.log(`Brand Stats: Total=${totalBrands}, Domestic=${domesticBrands}, International=${internationalBrands}, Premium=${premiumBrands}, Commercial=${commercialBrands}`);
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
            searchResults.innerHTML = result.map(b => {
                const logoData = getBrandLogo(b.name);
                return `
                    <div class="brand-card" style="margin-bottom:1rem;">
                        <div class="brand-image">
                            <img src="${logoData.logo}" alt="${b.name} Logo" class="brand-logo-img" onerror="this.src='${logoData.fallback}'">
                        </div>
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
                `;
            }).join('');
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
                <div class="brand-detail-logo">
                    <img src="${getBrandLogo(brand.name).logo}" alt="${brand.name} Logo" class="brand-detail-logo-img" onerror="this.src='${getBrandLogo(brand.name).fallback}'">
                </div>
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

// Bookmark functionality
document.addEventListener('DOMContentLoaded', function() {
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    const shareBtn = document.getElementById('shareBtn');
    const shareModal = document.getElementById('shareModal');
    
    // Bookmark functionality
    if (bookmarkBtn) {
        bookmarkBtn.addEventListener('click', function() {
            const currentUrl = window.location.href;
            const currentTitle = document.title;
            
            // Check if already bookmarked
            const bookmarks = JSON.parse(localStorage.getItem('acBookmarks') || '[]');
            const isBookmarked = bookmarks.some(bookmark => bookmark.url === currentUrl);
            
            if (isBookmarked) {
                // Remove bookmark
                const updatedBookmarks = bookmarks.filter(bookmark => bookmark.url !== currentUrl);
                localStorage.setItem('acBookmarks', JSON.stringify(updatedBookmarks));
                bookmarkBtn.classList.remove('bookmarked');
                showToast('Bookmark removed!', 'success');
            } else {
                // Add bookmark
                bookmarks.push({
                    url: currentUrl,
                    title: currentTitle,
                    timestamp: new Date().toISOString()
                });
                localStorage.setItem('acBookmarks', JSON.stringify(bookmarks));
                bookmarkBtn.classList.add('bookmarked');
                showToast('Page bookmarked!', 'success');
            }
        });
        
        // Check if current page is bookmarked
        const bookmarks = JSON.parse(localStorage.getItem('acBookmarks') || '[]');
        const currentUrl = window.location.href;
        const isBookmarked = bookmarks.some(bookmark => bookmark.url === currentUrl);
        if (isBookmarked) {
            bookmarkBtn.classList.add('bookmarked');
        }
    }
    
    // Share functionality
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            if (shareModal) {
                shareModal.style.display = 'block';
                setupShareButtons();
            }
        });
    }
    
    // Close share modal
    const shareModalClose = shareModal?.querySelector('.close');
    if (shareModalClose) {
        shareModalClose.addEventListener('click', () => {
            shareModal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', function(event) {
        if (event.target === shareModal) {
            shareModal.style.display = 'none';
        }
    });
});

// Setup share buttons
function setupShareButtons() {
    const currentUrl = encodeURIComponent(window.location.href);
    const currentTitle = encodeURIComponent(document.title);
    const currentDescription = encodeURIComponent('Find the perfect air conditioning brand with our comprehensive directory');
    
    // Facebook
    const facebookBtn = document.getElementById('shareFacebook');
    if (facebookBtn) {
        facebookBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
        facebookBtn.target = '_blank';
    }
    
    // Twitter
    const twitterBtn = document.getElementById('shareTwitter');
    if (twitterBtn) {
        twitterBtn.href = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${currentTitle}`;
        twitterBtn.target = '_blank';
    }
    
    // LinkedIn
    const linkedinBtn = document.getElementById('shareLinkedIn');
    if (linkedinBtn) {
        linkedinBtn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
        linkedinBtn.target = '_blank';
    }
    
    // Reddit
    const redditBtn = document.getElementById('shareReddit');
    if (redditBtn) {
        redditBtn.href = `https://reddit.com/submit?url=${currentUrl}&title=${currentTitle}`;
        redditBtn.target = '_blank';
    }
    
    // Pinterest
    const pinterestBtn = document.getElementById('sharePinterest');
    if (pinterestBtn) {
        pinterestBtn.href = `https://pinterest.com/pin/create/button/?url=${currentUrl}&description=${currentTitle}`;
        pinterestBtn.target = '_blank';
    }
    
    // Copy Link
    const copyBtn = document.getElementById('copyLink');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(window.location.href).then(() => {
                showToast('Link copied to clipboard!', 'success');
            }).catch(() => {
                showToast('Failed to copy link', 'error');
            });
        });
    }
}

// Toast notification function
function showToast(message, type = 'success') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create new toast
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
} 