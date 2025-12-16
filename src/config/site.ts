export const siteConfig = {
  // Basic site information
  name: "Winning Spins",
  description: "Discover the UK's most trusted online casinos. Expert reviews, exclusive bonuses, and instant withdrawals.",
  url: "https://winningspins.uk",
  
  // Brand colors - Premium dark theme with gold accents
  colors: {
    primary: "#FFD700",    // Gold - premium & luxury
    secondary: "#8B5CF6",  // Purple - modern & vibrant
    accent: "#10B981",     // Emerald - success & trust
    background: "#0A0A0F", // Deep dark background
    surface: "#1A1A24",    // Dark surface
    surfaceLight: "#242433", // Lighter surface
    text: "#FFFFFF",       // Pure white text
    textSecondary: "#A1A1AA", // Gray text
    border: "#2D2D3D",     // Subtle borders
  },
  
  // Hero section content
  hero: {
    headline: "Top Rated UK Casinos DECEMBER 2025",
    subheadline: "Win with the best!",
    subtext: "Expert-curated online casinos with verified bonuses, instant payouts, and full UK Gambling Commission licensing. Your path to premium gaming starts here.",
  },
  
  // Casino brands data
  casinos: [
    {
      name: "Superspins",
      logo: "super spin (1).svg",
      bonus: "725% up to £6250 + 425 FS",
      rating: 10.0,
      playLink: "https://superspins777.net/dhpkgcx7q?subid=Superspins-UK03ZZ&visit_id=",
      mobile: true
    },
    {
      name: "SlotExpress",
      logo: "SlotExpress-Casino.webp",
      bonus: "Up to £1,000 + 200 FS",
      rating: 9.8,
      playLink: "https://record.slotexpressaffiliates.com/_XUdgfahaGge2bnhOaaLAUmNd7ZgqdRLk/4/?pg=2&s2s.req_id=SlotExpress-UK03ZZ&payload=",
      mobile: true
    },
    
    {
      name: "BetNinja",
      logo: "BetNinja.png",
      bonus: "£1000 + 100 FS",
      rating: 9.6,
      playLink: "https://tidgw.com/?a=274&oc=3267&c=8639&s3=BetNinja-UK03ZZ&s2=",
      mobile: true
    },
    
    {
      name: "30Bet",
      logo: "30Bet.gif",
      bonus: "Up to £100 + 50 FS",
      rating: 9.4,
      playLink: "https://record.betgroup.partners/_YnRh4Sd1bK-RpNYGCjuhmmNd7ZgqdRLk/1/?pg=3&s2s.req_id=30BET-UK03ZZ&payload=",
      mobile: true
    },
    {
      name: "RollySpin",
      logo: "rollyspins.svg",
      bonus: "425% up to £4250 + 425 FS",
      rating: 9.2,
      playLink: "https://rollyspin19.net/d8hyrrn6u?subid=RollySpin-UK03ZZ&visit_id=",
      mobile: true
    },
    {
      name: "WinOlympia",
      logo: "Winolimpia.png",
      bonus: "425% up to £4250 + 425 FS",
      rating: 9.0,
      playLink: "https://tokenaffstracker.com/j5scxt5kf?subid=WinOlympia-UK03ZZ&visit_id=",
      mobile: true
    },
    {
      name: "Lizaro",
      logo: "lizaro.webp",
      bonus: "250% up to £2,550 + 350 FS + 1 Bonus Crab",
      rating: 8.8,
      playLink: "https://bestcpa.online/click?o=184&a=36&sub_id1=Lizaro-UK03ZZ&aff_click_id=",
      mobile: true
    },
    {
      name: "Karamba",
      logo: "Logo-Karamba.svg",
      bonus: "100% UP TO £250\n250 Free Spins",
      rating: 8.0,
      playLink: "https://go.karambaaffiliates.com/visit/?bta=40838&nci=6499&utm_campaign=Karamba-UK03ZZ&afp=",
      mobile: false, // Default brand - always shows
    }
  ],

  
  // Contact information
  contact: {
    email: "info@winningspins.uk"
  }
};

// Utility function to check if device is mobile
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Utility function to get URL parameter
export const getUrlParameter = (name: string): string | null => {
  if (typeof window === 'undefined') return null;
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};

// Utility function to check if referrer contains Google
export const isGoogleReferrer = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // Check if we already stored that this was a Google referrer
  const storedGoogleRef = sessionStorage.getItem('google_referrer');
  if (storedGoogleRef === 'true') {
    return true;
  }
  
  // Check current referrer
  const isFromGoogle = document.referrer.toLowerCase().includes('google');
  
  // If from Google, store it in sessionStorage for future page refreshes
  if (isFromGoogle) {
    sessionStorage.setItem('google_referrer', 'true');
  }
  
  return isFromGoogle;
};

// Function to filter casinos based on mobile, gclid, and Google referrer
export const getFilteredCasinos = () => {
  const isMobile = isMobileDevice();
  const hasGclid = getUrlParameter('gclid') !== null;
  const isFromGoogle = isGoogleReferrer();
  
  // If on mobile AND has gclid AND referrer contains google, show only mobile:true brands
  if (isMobile && hasGclid && isFromGoogle) {
    return siteConfig.casinos.filter(casino => 'mobile' in casino && casino.mobile === true);
  }
  
  // Otherwise return all casinos
  return siteConfig.casinos;
};
