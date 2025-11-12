export const siteConfig = {
  // Basic site information
  name: "Top 15 Best Casinos UK",
  description: "Discover the top 15 UK licensed casinos with exclusive offers and lightning-fast payouts",
  url: "https://top15bestcasinosuk.com",
  
  // Brand colors - fresh teal & coral design
  colors: {
    primary: "#0D9488",    // Teal - trustworthy & modern
    secondary: "#1E293B",  // Slate Gray - sleek dark
    accent: "#F97316",     // Coral Orange - vibrant & energetic
    background: "#0F172A", // Deep slate background
    surface: "#1E293B",    // Slate surface
    text: "#F8FAFC",       // Crisp white text
    textSecondary: "#CBD5E1", // Cool gray
  },
  
  // Hero section content
  hero: {
    headline: "Top 15 UK Licensed Online Casinos",
    subtext: "Explore our handpicked selection of UK Gambling Commission regulated online casinos offering verified promotions, secure payment systems, and dedicated 24/7 assistance. Each operator holds valid UK licensing.",
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
