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
      name: "30Bet",
      logo: "30Bet.gif",
      bonus: "Up to £100 + 50 FS",
      rating: 10.0,
      playLink: "https://record.betgroup.partners/_YnRh4Sd1bK-RpNYGCjuhmmNd7ZgqdRLk/1/?pg=3&s2s.req_id=30BET-UK03ZZ&payload=",
      mobile: true
    },
    {
      name: "BetNinja",
      logo: "BetNinja-Casino.svg",
      bonus: "£1000 + 100 FS",
      rating: 9.8,
      playLink: "https://tidgw.com/?a=274&oc=3267&c=8639&s3=BetNinja-UK03ZZ&s2=",
      mobile: true


    },

    {
      name: "SlotExpress",
      logo: "SlotExpress-Casino.webp",
      bonus: "Up to £1,000 + 200 FS",
      rating: 9.9,
      playLink: "https://record.slotexpressaffiliates.com/_XUdgfahaGge2bnhOaaLAUmNd7ZgqdRLk/4/?pg=2&s2s.req_id=SlotExpress-UK03ZZ&payload=",
      mobile: true


    },
   
    
    {
      name: "Superspins",
      logo: "super spin (1).svg",
      bonus: "725% up to £6250 + 425 FS",
      rating: 9.7,
      playLink: "https://superspins777.net/dhpkgcx7q?subid=Superspins-UK03ZZ&visit_id=",
      mobile: true


    },
    {
      name: "Spinshark",
      logo: "spinshark.svg",
      bonus: "150% UP TO £900 + 150 FS",
      rating: 9.6,
      playLink: "https://spinshark.site/jyqc8t242?subid=SpinShark-UK03ZZ&visit_id=",
      mobile: true


    },
    {
      name: "BeOnBet",
      logo: "beonbet.webp",
      bonus: "400% UP TO £2.450 + 300 FS",
      rating: 9.5,
      playLink: "https://bestcpa.online/click?o=260&a=36&sub_id1=BeOnBet-UK03ZZ&aff_click_id=",
      mobile: true


    },
    // {
    //   name: "Lizaro",
    //   logo: "lizaro.webp",
    //   bonus: "250% up to £2,550 + 350 FS + 1 Bonus Crab",
    //   rating: 9.4,
    //   playLink: "https://bestcpa.online/click?o=184&a=36&sub_id1=Lizaro-UK03ZZ&aff_click_id=",
    //   mobile: true


    // },
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
