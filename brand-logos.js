// Brand Logo URLs - Updated with reliable sources
const brandLogos = {
    "Gree": {
        logo: "https://logo.clearbit.com/gree.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=G"
    },
    "Midea": {
        logo: "https://logo.clearbit.com/midea.com", 
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=M"
    },
    "Haier": {
        logo: "https://logo.clearbit.com/haier.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=H"
    },
    "Chigo": {
        logo: "https://logo.clearbit.com/chigo.com.cn",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=C"
    },
    "AUX": {
        logo: "https://logo.clearbit.com/aux.com.cn",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=A"
    },
    "Daikin": {
        logo: "https://logo.clearbit.com/daikin.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=D"
    },
    "Panasonic": {
        logo: "https://logo.clearbit.com/panasonic.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=P"
    },
    "Mitsubishi Heavy Industries": {
        logo: "https://logo.clearbit.com/mhi.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=MHI"
    },
    "Mitsubishi Electric": {
        logo: "https://logo.clearbit.com/mitsubishielectric.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=ME"
    },
    "LG": {
        logo: "https://logo.clearbit.com/lg.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=LG"
    },
    "Samsung": {
        logo: "https://logo.clearbit.com/samsung.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=S"
    },
    "Hitachi": {
        logo: "https://logo.clearbit.com/hitachi.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=H"
    },
    "Toshiba": {
        logo: "https://logo.clearbit.com/toshiba.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=T"
    },
    "Fujitsu": {
        logo: "https://logo.clearbit.com/fujitsu.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=F"
    },
    "Sharp": {
        logo: "https://logo.clearbit.com/sharp.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=S"
    },
    "York": {
        logo: "https://logo.clearbit.com/johnsoncontrols.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=Y"
    },
    "Carrier": {
        logo: "https://logo.clearbit.com/carrier.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=C"
    },
    "Trane": {
        logo: "https://logo.clearbit.com/trane.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=T"
    },
    "Lennox": {
        logo: "https://logo.clearbit.com/lennox.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=L"
    },
    "Rheem": {
        logo: "https://logo.clearbit.com/rheem.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=R"
    },
    "Goodman": {
        logo: "https://logo.clearbit.com/goodmanmfg.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=G"
    },
    "Bryant": {
        logo: "https://logo.clearbit.com/bryant.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=B"
    },
    "American Standard": {
        logo: "https://logo.clearbit.com/americanstandardair.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=AS"
    },
    "Amana": {
        logo: "https://logo.clearbit.com/amana-hac.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=A"
    },
    "Frigidaire": {
        logo: "https://logo.clearbit.com/frigidaire.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=F"
    },
    "Whirlpool": {
        logo: "https://logo.clearbit.com/whirlpool.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=W"
    },
    "GE Appliances": {
        logo: "https://logo.clearbit.com/geappliances.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=GE"
    },
    "Maytag": {
        logo: "https://logo.clearbit.com/maytag.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=M"
    },
    "Kenmore": {
        logo: "https://logo.clearbit.com/kenmore.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=K"
    },
    "Bosch": {
        logo: "https://logo.clearbit.com/bosch-climate.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=B"
    },
    "Sanyo": {
        logo: "https://logo.clearbit.com/panasonic.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=S"
    },
    "O General": {
        logo: "https://logo.clearbit.com/ogeneral.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=OG"
    },
    "Voltas": {
        logo: "https://logo.clearbit.com/voltas.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=V"
    },
    "Blue Star": {
        logo: "https://logo.clearbit.com/bluestarindia.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=BS"
    },
    "Carrier India": {
        logo: "https://logo.clearbit.com/carrierindia.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=CI"
    },
    "Hitachi Cooling & Heating": {
        logo: "https://logo.clearbit.com/hitachiaircon.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=HCH"
    },
    "Toshiba Air Conditioning": {
        logo: "https://logo.clearbit.com/toshiba-aircon.co.uk",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=TAC"
    },
    "Fujitsu General": {
        logo: "https://logo.clearbit.com/fujitsu-general.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=FG"
    },
    "Sharp Air Conditioning": {
        logo: "https://logo.clearbit.com/sharp.co.jp",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=SAC"
    },
    "Daikin Europe": {
        logo: "https://logo.clearbit.com/daikin.eu",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=DE"
    },
    "Mitsubishi Heavy Industries Europe": {
        logo: "https://logo.clearbit.com/mhi.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=MHIE"
    },
    "LG Electronics Europe": {
        logo: "https://logo.clearbit.com/lg.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=LGE"
    },
    "Samsung Electronics Europe": {
        logo: "https://logo.clearbit.com/samsung.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=SEE"
    },
    "Panasonic Europe": {
        logo: "https://logo.clearbit.com/panasonic.eu",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=PE"
    },
    "Gree Europe": {
        logo: "https://logo.clearbit.com/gree.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=GE"
    },
    "Midea Europe": {
        logo: "https://logo.clearbit.com/midea.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=ME"
    },
    "Haier Europe": {
        logo: "https://logo.clearbit.com/haier.com",
        fallback: "https://via.placeholder.com/200x200/667eea/ffffff?text=HE"
    }
};

// Function to get logo URL for a brand with multiple fallback options
function getBrandLogo(brandName) {
    const brandData = brandLogos[brandName];
    if (!brandData) {
        return {
            logo: `https://via.placeholder.com/200x200/667eea/ffffff?text=${brandName[0]}`,
            fallback: `https://via.placeholder.com/200x200/667eea/ffffff?text=${brandName[0]}`
        };
    }
    
    // Extract domain from Clearbit URL for fallback options
    const clearbitUrl = brandData.logo;
    const domain = clearbitUrl.replace('https://logo.clearbit.com/', '');
    
    // Try multiple logo paths for better success rate
    const logoPaths = [
        brandData.logo, // Clearbit logo
        `https://${domain}/favicon.ico`, // Direct favicon
        `https://${domain}/logo.png`, // Direct logo
        `https://${domain}/favicon.png`, // Alternative favicon
        brandData.fallback // Placeholder
    ];
    
    return {
        logo: logoPaths[0],
        fallback: brandData.fallback,
        alternatives: logoPaths.slice(1)
    };
}

// Function to create logo image element with error handling and multiple fallbacks
function createBrandLogoImage(brandName) {
    const logoData = getBrandLogo(brandName);
    const img = document.createElement('img');
    img.src = logoData.logo;
    img.alt = `${brandName} Logo`;
    img.className = 'brand-logo-img';
    
    // Error handling with multiple fallback options
    let fallbackIndex = 0;
    img.onerror = function() {
        if (logoData.alternatives && fallbackIndex < logoData.alternatives.length) {
            this.src = logoData.alternatives[fallbackIndex];
            fallbackIndex++;
        } else {
            this.src = logoData.fallback;
            this.onerror = null; // Prevent infinite loop
        }
    };
    
    return img;
}
