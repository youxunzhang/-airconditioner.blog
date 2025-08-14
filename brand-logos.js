// Brand Logo URLs
const brandLogos = {
    "Gree": {
        logo: "https://www.gree.com/static/images/logo.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=G"
    },
    "Midea": {
        logo: "https://www.midea.com/static/images/logo.png", 
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=M"
    },
    "Haier": {
        logo: "https://www.haier.com/static/images/logo.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=H"
    },
    "Chigo": {
        logo: "https://www.chigo.com/static/images/logo.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=C"
    },
    "AUX": {
        logo: "https://www.aux.com/static/images/logo.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=A"
    },
    "Daikin": {
        logo: "https://www.daikin.com/static/images/logo.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=D"
    },
    "Panasonic": {
        logo: "https://www.panasonic.com/static/images/logo.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=P"
    },
    "Mitsubishi Heavy Industries": {
        logo: "https://www.mhi.com/static/images/logo.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=MHI"
    },
    "Mitsubishi Electric": {
        logo: "https://www.mitsubishielectric.com/static/images/logo.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=ME"
    },
    "LG": {
        logo: "https://www.lg.com/static/images/logo.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=LG"
    },
    "Samsung": {
        logo: "https://www.samsung.com/static/images/logo.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=S"
    },
    "Hitachi": {
        logo: "https://www.hitachi.com/static/images/logo.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=H"
    },
    "Toshiba": {
        logo: "https://www.toshiba.com/static/images/logo.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=T"
    },
    "Fujitsu": {
        logo: "https://www.fujitsu.com/static/images/logo.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=F"
    },
    "Sharp": {
        logo: "https://www.sharp.com/static/images/logo.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=S"
    },
    "York": {
        logo: "https://www.york.com/static/images/logo.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=Y"
    },
    "Carrier": {
        logo: "https://www.carrier.com/static/images/logo.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=C"
    },
    "Trane": {
        logo: "https://www.trane.com/static/images/logo.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=T"
    },
    "Lennox": {
        logo: "https://www.lennox.com/static/images/logo.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=L"
    },
    "Rheem": {
        logo: "https://www.rheem.com/static/images/logo.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=R"
    },
    "Goodman": {
        logo: "https://www.goodmanmfg.com/static/images/logo.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=G"
    }
};

// Function to get logo URL for a brand
function getBrandLogo(brandName) {
    return brandLogos[brandName] || {
        logo: `https://via.placeholder.com/200x200/667eea/ffffff?text=${brandName[0]}`,
        fallback: `https://via.placeholder.com/200x200/667eea/ffffff?text=${brandName[0]}`
    };
}

// Function to create logo image element with error handling
function createBrandLogoImage(brandName) {
    const logoData = getBrandLogo(brandName);
    const img = document.createElement('img');
    img.src = logoData.logo;
    img.alt = `${brandName} Logo`;
    img.className = 'brand-logo-img';
    
    // Error handling - fallback to placeholder if logo fails to load
    img.onerror = function() {
        this.src = logoData.fallback;
        this.onerror = null; // Prevent infinite loop
    };
    
    return img;
}
