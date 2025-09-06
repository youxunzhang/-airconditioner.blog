// Local Brand Logo URLs - Fast Loading
const brandLogos = {
    "Gree": {
        logo: "logos/gree.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=G"
    },
    "Midea": {
        logo: "logos/midea.png", 
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=M"
    },
    "Haier": {
        logo: "logos/haier.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=H"
    },
    "Chigo": {
        logo: "logos/chigo.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=C"
    },
    "AUX": {
        logo: "logos/aux.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=A"
    },
    "Daikin": {
        logo: "logos/daikin.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=D"
    },
    "Panasonic": {
        logo: "logos/panasonic.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=P"
    },
    "Mitsubishi Heavy Industries": {
        logo: "logos/mhi.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=MHI"
    },
    "Mitsubishi Electric": {
        logo: "logos/mitsubishi-electric.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=ME"
    },
    "LG": {
        logo: "logos/lg.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=LG"
    },
    "Samsung": {
        logo: "logos/samsung.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=S"
    },
    "Hitachi": {
        logo: "logos/hitachi.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=H"
    },
    "Toshiba": {
        logo: "logos/toshiba.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=T"
    },
    "Fujitsu": {
        logo: "logos/fujitsu.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=F"
    },
    "Sharp": {
        logo: "logos/sharp.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=S"
    },
    "York": {
        logo: "logos/york.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=Y"
    },
    "Carrier": {
        logo: "logos/carrier.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=C"
    },
    "Trane": {
        logo: "logos/trane.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=T"
    },
    "Lennox": {
        logo: "logos/lennox.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=L"
    },
    "Rheem": {
        logo: "logos/rheem.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=R"
    },
    "Goodman": {
        logo: "logos/goodman.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=G"
    },
    "Bryant": {
        logo: "logos/bryant.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=B"
    },
    "American Standard": {
        logo: "logos/american-standard.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=AS"
    },
    "Amana": {
        logo: "logos/amana.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=A"
    },
    "Frigidaire": {
        logo: "logos/frigidaire.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=F"
    },
    "Whirlpool": {
        logo: "logos/whirlpool.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=W"
    },
    "GE Appliances": {
        logo: "logos/ge.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=GE"
    },
    "Maytag": {
        logo: "logos/maytag.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=M"
    },
    "Kenmore": {
        logo: "logos/kenmore.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=K"
    },
    "Bosch": {
        logo: "logos/bosch.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=B"
    },
    "Sanyo": {
        logo: "logos/sanyo.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=S"
    },
    "O General": {
        logo: "logos/o-general.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=OG"
    },
    "Voltas": {
        logo: "logos/voltas.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=V"
    },
    "Blue Star": {
        logo: "logos/blue-star.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=BS"
    },
    "Carrier India": {
        logo: "logos/carrier-india.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=CI"
    },
    "Hitachi Cooling & Heating": {
        logo: "logos/hitachi-cooling.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=HCH"
    },
    "Toshiba Air Conditioning": {
        logo: "logos/toshiba-aircon.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=TAC"
    },
    "Fujitsu General": {
        logo: "logos/fujitsu-general.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=FG"
    },
    "Sharp Air Conditioning": {
        logo: "logos/sharp-aircon.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=SAC"
    },
    "Daikin Europe": {
        logo: "logos/daikin-europe.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=DE"
    },
    "Mitsubishi Heavy Industries Europe": {
        logo: "logos/mhi-europe.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=MHIE"
    },
    "LG Electronics Europe": {
        logo: "logos/lg-europe.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=LGE"
    },
    "Samsung Electronics Europe": {
        logo: "logos/samsung-europe.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=SEE"
    },
    "Panasonic Europe": {
        logo: "logos/panasonic-europe.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=PE"
    },
    "Gree Europe": {
        logo: "logos/gree-europe.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=GE"
    },
    "Midea Europe": {
        logo: "logos/midea-europe.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=ME"
    },
    "Haier Europe": {
        logo: "logos/haier-europe.png",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=HE"
    }
};

// Function to get logo URL for a brand
function getBrandLogo(brandName) {
    const brandData = brandLogos[brandName];
    if (!brandData) {
        return {
            logo: `https://via.placeholder.com/200x200/667eea/ffffff?text=${brandName[0]}`,
            fallback: `https://via.placeholder.com/200x200/667eea/ffffff?text=${brandName[0]}`
        };
    }
    
    return {
        logo: brandData.logo,
        fallback: brandData.fallback
    };
}

// Function to create logo image element
function createBrandLogoImage(brandName) {
    const logoData = getBrandLogo(brandName);
    const img = document.createElement('img');
    img.src = logoData.logo;
    img.alt = `${brandName} Logo`;
    img.className = 'brand-logo-img';
    
    // Error handling
    img.onerror = function() {
        this.src = logoData.fallback;
        this.onerror = null; // Prevent infinite loop
    };
    
    return img;
}
