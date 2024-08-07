import {
  AvaxUSD,
  BitCoin,
  BnbUsd,
  ClickTrading,
  DodgeUsd,
  EthUsd,
  GasLess,
  Github,
  GreenGraph,
  HandStars,
  LinkUsd,
  LowLatency,
  MobileGraph,
  RadioBox,
  RedGraph,
  Telegram,
  Twittericon,
} from "./Icons";

// --------------------------------- Features Card --------------------------------
export const featuresDetails = [
  {
    img: <MobileGraph />,
    title: "Competitive Leagues",
    description:
      "Traders can participate in competitive leagues where they battle it out based on their Profit and Loss (PnL) scores. This feature adds a competitive edge to trading, fostering engagement.",
  },
  {
    img: <RadioBox />,
    title: "Weekly Challenges",
    description:
      "The platform offers weekly challenges or opportunities for traders to showcase their skills and earn rewards. These challenges may involve achieving specific trading targets.",
  },
  {
    img: <HandStars />,
    title: "Tier-based Rewards",
    description:
      "Traders are rewarded based on their tier placement at the end of each season. Higher tiers unlock access to better rewards, incentivizing traders to consistently.",
  },
];

// ----------------------------- levegeTradingCardLists -------------------------------
export const leverageTradingDetails = [
  {
    img: <BitCoin />,
    name: "BTCUSD",
    type: "BTC",
    graphImg: <RedGraph />,
    amount: "60942.36",
    chg: "-3.01%",
    vol: "$78.07M",
  },
  {
    img: <EthUsd />,
    name: "ETHUSD",
    type: "ETH",
    graphImg: <GreenGraph />,
    amount: "2,920.34",
    chg: "-3.72%",
    vol: "$78.07M",
  },
  {
    img: <DodgeUsd />,
    name: "DOGEUSD",
    type: "Dogecoin",
    graphImg: <GreenGraph />,
    amount: "0.14441",
    chg: "-4.50%",
    vol: "$78.07M",
  },
  {
    img: <AvaxUSD />,
    name: "BTCUSD",
    type: "USD",
    graphImg: <RedGraph />,
    amount: "33.59",
    chg: "-1.33%",
    vol: "$78.07M",
  },
  {
    img: <LinkUsd />,
    name: "LINK",
    type: "USD",
    graphImg: <GreenGraph />,
    amount: "13.61",
    chg: "-5.58%",
    vol: "$78.07M",
  },
  {
    img: <BnbUsd />,
    name: "BNB",
    type: "USD",
    graphImg: <RedGraph />,
    amount: "586.52",
    chg: "-4.48%",
    vol: "$78.07M",
  },
];

// ---------------------------- Team card data -----------------------------
export const teamCardDetails = [
  {
    profile: "/assets/images/teamImages/team1.webp",
    name: "Theresa Webb",
    post: "CEO",
  },
  {
    profile: "/assets/images/teamImages/Jerome.webp",
    name: "Jerome Bell",
    post: "Co-Founder",
  },
  {
    profile: "/assets/images/teamImages/Robert.webp",
    name: "Robert Fox",
    post: "Management",
  },
  {
    profile: "/assets/images/teamImages/Jenny.webp",
    name: "Jenny Wilson",
    post: "Chief Operating Officer",
  },
  {
    profile: "/assets/images/teamImages/Bessie.webp",
    name: "Bessie Cooper",
    post: "Director, Strategic",
  },
  {
    profile: "/assets/images/teamImages/Ralph.webp",
    name: "Ralph Edwards",
    post: "Account Executive",
  },
];

// -------------- Experience cards--------------------->

export const experienceCardDetails = [
  {
    img: <GasLess />,
    lottie:'/assets/lottie/graph.json',
    title: "Gasless",
    description:
      "No ETH needed! Thanks to account abstraction you can enjoy gasless transactions for hassle-free trading.",
  },
  {
    img: <ClickTrading />,
    lottie:'/assets/lottie/click.json',
    title: "Click trading",
    description:
      "Sign once and we take care of the rest - the simplicity of a CEX with the advantages of a DEX. Made possible by Bionomys smart accounts.",
  },
  {
    img: <LowLatency />,
    lottie:'/assets/lottie/percent.json',
    title: "Low latency",
    description:
      "High-frequency market data powered by Chain-link Data Streams, a cutting edge decentralized and transparent infrastructure.",
  },
];

// roadmap data

export const RoadmapDetails = [
  {
    point1: "MVP Launch: Arb. Sepolia",
    point2: "Referral Program",
  },
  {
    point1: "Copy Trading",
    point2: "Security Review",
  },
  {
    point1: "Mainnet Launch",
    point2: "Leagues & Seasons",
  },
  {
    point1: "Token Launch",
    point2: "Governance",
  },
];
// accordion Data
export const faqAccordionData = [
  {
    question: "What is gasless trading, and how does it work on your platform?",
    answer:
      "Gasless trading on our platform means that users can execute transactions without needing to pay gas fees typically associated with blockchain transactions.",
  },
  {
    question: "Can you explain how stable fees operate in your trading system?",
    answer:
      "Gasless trading on our platform means that users can execute transactions without needing to pay gas fees typically associated with blockchain transactions.",
  },
  {
    question: "How many markets can users trade across on your platform?",
    answer:
      "Gasless trading on our platform means that users can execute transactions without needing to pay gas fees typically associated with blockchain transactions.",
  },
  {
    question: "What is copy trading, and how can users utilize this feature?",
    answer:
      "Gasless trading on our platform means that users can execute transactions without needing to pay gas fees typically associated with blockchain transactions.",
  },
  {
    question:
      "How does the competitive ranking system function on your platform?",
    answer:
      "Gasless trading on our platform means that users can execute transactions without needing to pay gas fees typically associated with blockchain transactions.",
  },
  {
    question: "How can users get started with trading on your platform?",
    answer:
      "Gasless trading on our platform means that users can execute transactions without needing to pay gas fees typically associated with blockchain transactions.",
  },
];
export const navLinksDetails = [
  {
    title: "Home",
    url: "#",
    
  },
  {
    title: "Top-features",
    url: "#topfeatures",
  },
  {
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    title: "Docs",
    url: "#docs",
  },
  {
    title: "Community",
    SocialLinks: [
      {title : "Twitter", url :"https://twitter.com",},
      {title : "Discode", url :"https://discord.com/",},
      {title : "Youtube", url :"https://youtube.com/",},
      {title : "Telegram", url :"https://web.telegram.org/",},
      {title : "Linkedin", url :"https://www.linkedin.com/",},
     
   ]
  },
];
export const footerLinks = [
  {
    title: "Home",
    url: "#",
  },
  {
    title: "Top-features",
    url: "#topfeatures",
  },
  {
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    title: "Tokenomics",
    url: "#tokenomics",
  },
  {
    title: "FAQs",
    url: "#faq",
  },
];

export const ourPartnersSlidesImages = [
  { img: "/assets/images/ourPartners/pointLoma.webp" },
  { img: "/assets/images/ourPartners/singletion.webp" },
  { img: "/assets/images/ourPartners/asrv.webp" },
  { img: "/assets/images/ourPartners/nuvasive.webp" },
  { img: "/assets/images/ourPartners/drsDaylight.webp" },
  { img: "/assets/images/ourPartners/tonyRobbins.webp" },
  { img: "/assets/images/ourPartners/pointLoma.webp" },
  { img: "/assets/images/ourPartners/singletion.webp" },
  { img: "/assets/images/ourPartners/asrv.webp" },
  { img: "/assets/images/ourPartners/nuvasive.webp" },
  { img: "/assets/images/ourPartners/drsDaylight.webp" },
  { img: "/assets/images/ourPartners/tonyRobbins.webp" },
];
 export const TeamSocialMediaLinks = [
    {
      href: "https://x.com/?lang=en",
      ariaLabel: "Twitter",
      icon: <Twittericon />,
    },
    {
      href: "https://telegram.org/",
      ariaLabel: "Telegram",
      icon: <Telegram />,
    },
    {
      href: "https://github.com/",
      ariaLabel: "GitHub",
      icon: <Github />,
    },
  ];
