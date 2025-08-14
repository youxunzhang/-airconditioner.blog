// Brand Logo URLs - Using favicon icons
const brandLogos = {
    "Gree": {
        logo: "https://www.gree.com/favicon.ico",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=G"
    },
    "Midea": {
        logo: "https://www.midea.com/favicon.ico", 
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=M"
    },
    "Haier": {
        logo: "https://www.haier.com/favicon.ico",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=H"
    },
    "Daikin": {
        logo: "https://www.daikin.com/favicon.ico",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=D"
    },
    "Panasonic": {
        logo: "https://www.panasonic.com/favicon.ico",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=P"
    },
    "LG": {
        logo: "https://www.lg.com/favicon.ico",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=LG"
    },
    "Samsung": {
        logo: "https://www.samsung.com/favicon.ico",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=S"
    },
    "Carrier": {
        logo: "https://www.carrier.com/favicon.ico",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=C"
    }
};

function getBrandLogo(brandName) {
    return brandLogos[brandName] || {
        logo: `https://via.placeholder.com/200x200/667eea/ffffff?text=${brandName[0]}`,
        fallback: `https://via.placeholder.com/200x200/667eea/ffffff?text=${brandName[0]}`
    };
}

function createBrandLogoImage(brandName) {
    const logoData = getBrandLogo(brandName);
    const img = document.createElement('img');
    img.src = logoData.logo;
    img.alt = `${brandName} Logo`;
    img.className = 'brand-logo-img';
    
    img.onerror = function() {
        this.src = logoData.fallback;
        this.onerror = null;
    };
    
    return img;
}
