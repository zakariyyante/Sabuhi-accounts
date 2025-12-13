export const siteConfig = {
  // Basic site information
  name: "Top 15 Best Casinos UK",
  description: "Discover the UK's most trusted online casinos. Expert reviews, exclusive bonuses, and instant withdrawals.",
  url: "https://top15bestcasinosuk.com",
  
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
    headline: "UK's Most Trusted Casino Aggregator",
    subheadline: "Compare. Choose. Win.",
    subtext: "Expert-curated online casinos with verified bonuses, instant payouts, and full UK Gambling Commission licensing. Your path to premium gaming starts here.",
  },
  
  // Casino brands data
  casinos: [
    // {
    //   name: "55bet",
    //   logo: "55bet.svg",
    //   bonus: "100% up to £300",
    //   rating: 9.8,
    //   playLink: "https://affiliates.museoita.com/click?pid=183&offer_id=3625&sub1=nsx3&sub2=",
    //   mobile:true,
    // },
    // {
    //   name: "LuckyTwice",
    //   logo: "luckytwice.webp",
    //   bonus: "100% Up to £500\n250 Free Spins",
    //   rating: 9.6,
    //   playLink: "https://affiliates.museoita.com/click?pid=183&offer_id=3137&sub1=nsx3&sub2=",
    //   mobile:true,
    // },
    // {
    //   name: "Qbet",
    //   logo: "qbet.png",
    //   bonus: "Bonus up to £100\n50 Free Spins",
    //   rating: 9.4,
    //   playLink: "https://affiliates.museoita.com/click?pid=183&offer_id=2976&sub1=nsx3&sub2=",
    //   mobile:true,
    // },
    // {
    //   name: "Monaco",
    //   logo: "monacojack.png",
    //   bonus: "Up to €2,500\n275 Free Spins",
    //   rating: 9.2,
    //   playLink: "https://affiliates.museoita.com/click?pid=183&offer_id=3723&sub1=nsx3&sub2=",
    //   mobile:true,
    // },
    // {
    //   name: "Betzino",
    //   logo: "betzino.png",
    //   bonus: "200% Welcome Bonus\nUp to €200",
    //   rating: 9.0,
    //   playLink: "https://affiliates.museoita.com/click?pid=183&offer_id=3487&sub1=nsx3&sub2=",
    //   mobile:true,
    // },
    // {
    //   name: "FishAndSpins",
    //   logo: "fish1.png",
    //   bonus: "100% up to £1000\n100 Free Spins",
    //   rating: 8.8,
    //   playLink: "https://affiliates.museoita.com/click?pid=183&offer_id=3537&sub1=nsx3&sub2=",
    //   mobile:true,
    // },
    // {
    //   name: "HarryCasino",
    //   logo: "harry.png",
    //   bonus: "200% up to £2000\n200 Free Spins",
    //   rating: 8.6,
    //   playLink: "https://affiliates.museoita.com/click?pid=183&offer_id=3446&sub1=nsx3&sub2=",
    //   mobile:true,
    // },
    // {
    //   name: "Dracula",
    //   logo: "Dracula.svg",
    //   bonus: "200% up to €500",
    //   rating: 8.4,
    //   playLink: "https://affiliates.museoita.com/click?pid=183&offer_id=3658&sub1=nsx3&sub2=",
    //   mobile:true,
    // },
    // {
    //   name: "Amonbet",
    //   logo: "Amonbet.svg",
    //   bonus: "100% up to £1,000\n100 Free Spins",
    //   rating: 8.2,
    //   playLink: "https://affiliates.museoita.com/click?pid=183&offer_id=3527&sub1=nsx3&sub2=",
    //   mobile:true,
    // },
    {
      name: "GrandIvy",
      logo: "grandivy.webp",
      bonus: "Bet £20\nGet 100 Free Spins",
      rating: 8.0,
      playLink: "https://media1.casimbaaff.com/redirect.aspx?pid=16629&lpid=224&bid=1633&subid=GrandIvy-CXUK01&clickid="
    }
  ],

  
  // Contact information
  contact: {
    email: "info@top15bestcasinosuk.com"
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
