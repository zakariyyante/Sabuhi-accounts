export const siteConfig = {
  // Basic site information
  name: "10Casinos.uk",
  description: "Compare UK's top 10 online casinos. Licensed, secure, and trusted platforms with exclusive welcome offers.",
  url: "https://10casinos.uk",
  
  // Brand colors - Electric blue with vibrant accents
  colors: {
    primary: "#3B82F6",    // Electric Blue - trust & energy
    secondary: "#06B6D4",  // Cyan - modern & fresh
    accent: "#F59E0B",     // Amber - excitement & warmth
    background: "#0F172A", // Deep navy background
    surface: "#1E293B",    // Slate surface
    surfaceLight: "#334155", // Lighter slate surface
    text: "#FFFFFF",       // Pure white text
    textSecondary: "#94A3B8", // Light slate text
    border: "#475569",     // Slate borders
  },
  
  // Hero section content
  hero: {
    headline: "Compare UK's Best 10 Casinos",
    subheadline: "",
    subtext: "Hand-selected UKGC licensed operators featuring exclusive promotions, secure banking, and rapid payouts. Find your perfect casino match today.",
  },
  
  // Casino brands data
  casinos: [
    {
      name: "AmonBet",
      logo: "amonbet-logo-1000x134-hrzntl-white.svg",
      bonus: "Up to £100 + 50 FS",
      rating: 10.0,
      playLink: "https://amonbetpartner.media/n1upelfilu?subid=AmonBet-UK01ZZAgency&visit_id=",
      mobile: true


    },
    {
      name: "LuckyWave",
      logo: "logo--plain.svg",
      bonus: "£1000 + 100 FS",
      rating: 9.8,
      playLink: "https://luckywavepartner.media/n1fr0jzlg6?subid=LuckyWave-UK01ZZAgency&visit_id=",
      mobile: true


    },

    {
      name: "LegionBet",
      logo: "legionbet-logo-desktop-inv-120x31.svg",
      bonus: "Up to £1,000 + 200 FS",
      rating: 9.9,
      playLink: "https://legionbetpartner.media/n1hilq8afb?subid=LegionBet-UK01ZZAgency&visit_id=",
      mobile: true




    },
   
    
    {
      name: "Slotlair",
      logo: "slotlair-logo-desktop-74x28.png",
      bonus: "725% up to £6250 + 425 FS",
      rating: 9.7,
      playLink: "https://slotlairpartner.media/n1zgrbtach?subid=Slotlair-UK01ZZAgency&visit_id=",
      mobile: true




    },
    {
      name: "WinPlace",
      logo: "winplace-logo-desktop-inv-68x44.png",
      bonus: "150% UP TO £900 + 150 FS",
      rating: 9.6,
      playLink: "https://winplacepartner.media/n1rge1n32r?subid=WinPlace-UK01ZZAgency&visit_id=",
      mobile: true




    },
    {
      name: "Karamba",
      logo: "Logo-Karamba.svg",
      bonus: "100% UP TO £250\n250 Free Spins",
      rating: 8.0,
      playLink: "https://go.karambaaffiliates.com/visit/?bta=40838&nci=6499&utm_campaign=Karamba-UK03ZZ&afp=",
      mobile: false

, // Default brand - always shows
    }
  ],

  
  // Contact information
  contact: {
    email: "info@10casinos.uk"
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
