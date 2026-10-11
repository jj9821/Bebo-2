/**
 * ============================================================================
 * 💖 DIGITAL SANCTUARY - CONFIGURATION & CONTENT
 * ============================================================================
 * Welcome to your personalized romantic website config!
 * You can effortlessly customize every detail: names, anniversary dates,
 * photos, heartfelt reasons, love letter text, secret vault codes, and music.
 * ============================================================================
 */

var SANCTUARY_CONFIG = {
  // Couple Information
  recipientName: "Maria", // Your partner's name
  senderName: "Joel", // Your name or romantic signature
  petName: "Bebo", // Her special sweet nickname
  
  // Relationship Milestone Date (YYYY, MM-1, DD, HH, MM, SS)
  // Note: Month is 0-indexed (0 = Jan, 1 = Feb, 2 = Mar, ..., 8 = Sept, etc.)
  anniversaryDate: new Date(2023, 2, 14, 0, 0, 0), // March 14, 2023

  // Lockscreen & Screen Sleep Settings
  lockscreen: {
    enabled: true, // The iPad lock screen opens as the first thing on the site
    passcode: "123987",
    preventDeviceSleep: true // Uses HTML5 Screen Wake Lock API to prevent phone/iPad from automatically sleeping/locking
  },

  // Hero Section Customization
  hero: {
    badge: "★ DESTINED SOULMATES // TWO SOULS • ONE FREQUENCY ★",
    titlePrefix: "To My Dearest Maria,",
    titleHighlight: "BEBO: MY ETERNAL SOULMATE",
    subtitle: "In a multiverse of infinite timelines, my heart would search and find you every single time.",
    scrollHint: "Explore Our Cosmic Chapters",
    milestoneLabel: "Orbiting Each Other For"
  },

  // Ambient Audio Settings & Soulmate Mixtape Playlist
  audio: {
    autoplayPrompt: true, // Prompts subtle unmute on first user click
    defaultVolume: 0.85,
    trackTitle: "Cloud 9 — Beach Bunny",
    customAudioUrl: "assets/audio/Cloud9.mp3",
    playlist: [
      {
        id: "apocalypse",
        title: "Apocalypse",
        artist: "Cigarettes After Sex",
        url: "assets/audio/Apocalypse.mp3",
        vibe: "Dreamy • Slow Dance • Ethereal Romance",
        color: "#FF0066",
        badge: "TRACK 01"
      },
      {
        id: "iwanna-be-yours",
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        url: "assets/audio/IWannaBeYours.mp3",
        vibe: "Deep Devotion • Electric Cosmic Pull",
        color: "#7B00FF",
        badge: "TRACK 02"
      },
      {
        id: "cloud-9",
        title: "Cloud 9",
        artist: "Beach Bunny",
        url: "assets/audio/Cloud9.mp3",
        vibe: "Pure Joy • Golden Sunshine • Butterflies",
        color: "#FFE600",
        badge: "TRACK 03"
      },
      {
        id: "something-about-you",
        title: "Something About You",
        artist: "Eyedress & Dent May",
        url: "assets/audio/SomethingAboutYou.mp3",
        vibe: "Warm Glow • Soulmate Groove • Magic",
        color: "#00F5FF",
        badge: "TRACK 04"
      },
      {
        id: "k",
        title: "K.",
        artist: "Cigarettes After Sex",
        url: "assets/audio/K.mp3",
        vibe: "Late Night Whispers • Tender Heartbeats",
        color: "#FF4D00",
        badge: "TRACK 05"
      },
      {
        id: "the-night-we-met",
        title: "The Night We Met",
        artist: "Lord Huron",
        url: "assets/audio/TheNightWeMet.mp3",
        vibe: "Written in the Stars • Timeless Echoes",
        color: "#00FF75",
        badge: "TRACK 06"
      },
      {
        id: "love-you-so",
        title: "Love You So",
        artist: "The Walters",
        url: "assets/audio/LoveYouSo.mp3",
        vibe: "Playful Love • Infectious Smile • Pure Bebo",
        color: "#FF0066",
        badge: "TRACK 07"
      },
      {
        id: "classic-anthem",
        title: "Until I Found You",
        artist: "Stephen Sanchez",
        url: "assets/audio/1.mp3",
        vibe: "Classic Track 08 • Eternal Sanctuary Anthem",
        color: "#FFE600",
        badge: "TRACK 08"
      }
    ]
  },

  // Polaroid Memories Timeline Gallery
  // High aesthetic romantic imagery with sentimental captions
  memories: [
    {
      id: "mem-1",
      category: "firsts",
      categoryLabel: "The Beginning",
      title: "The Evening Time Stood Still",
      date: "March 14, 2023",
      location: "The Rooftop Bistro",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop",
      caption: "I remember looking into your eyes under the golden string lights and realizing every love story I had ever read was written for this very moment.",
      rotation: "-2.5deg",
      tapeColor: "rose"
    },
    {
      id: "mem-2",
      category: "adventures",
      categoryLabel: "Adventures",
      title: "Chasing Midnight Constellations",
      date: "June 28, 2023",
      location: "Serenity Coastline",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      caption: "Wrapped in blankets with the ocean whispering against the shore, listening to our favorite songs as shooting stars streaked across the dark velvet sky.",
      rotation: "3deg",
      tapeColor: "gold"
    },
    {
      id: "mem-3",
      category: "cozy",
      categoryLabel: "Cozy Days",
      title: "Rainy Sunday Mornings & Warm Coffee",
      date: "October 15, 2023",
      location: "Our Quiet Sanctuary",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
      caption: "Messy hair, soft acoustic melodies playing in the background, and the sweet warmth of your laughter making the cold autumn rain feel like pure magic.",
      rotation: "-1.8deg",
      tapeColor: "blush"
    },
    {
      id: "mem-4",
      category: "milestones",
      categoryLabel: "Milestone",
      title: "Paris Under Autumn Rain",
      date: "December 24, 2023",
      location: "Pont Alexandre III",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
      caption: "Standing beneath the illuminated bridge with misty rain on our coats, sharing an unforgettable kiss while the Eiffel Tower sparkled in golden light.",
      rotation: "2.2deg",
      tapeColor: "champagne"
    },
    {
      id: "mem-5",
      category: "adventures",
      categoryLabel: "Adventures",
      title: "Sunset Glow Over the Hills",
      date: "April 08, 2024",
      location: "Golden Valley Trail",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      caption: "The golden hour painted your silhouette with warm amber and coral glow. You turned to smile at me, and I fell in love all over again.",
      rotation: "-3.2deg",
      tapeColor: "rose"
    },
    {
      id: "mem-6",
      category: "cozy",
      categoryLabel: "Cozy Days",
      title: "Candlelit Talks Until 3 AM",
      date: "July 19, 2024",
      location: "Balcony of Whispers",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
      caption: "Talking about our deepest dreams, childhood memories, and universe philosophies. Every silence with you feels like home.",
      rotation: "1.5deg",
      tapeColor: "gold"
    }
  ],

  // "Reasons Why You're My Universe" Bento Grid
  reasons: [
    {
      id: "reason-1",
      gridSpan: "col-span-12 md:col-span-8 lg:col-span-8",
      icon: "sparkles",
      title: "The Radiance of Your Laugh",
      category: "Pure Magic",
      shortDescription: "A melody that instantly dissolves every worry in my world.",
      revealedContent: "Your genuine, crinkled-eye laugh is my favorite sound in existence. Whenever you burst into uncontrollable giggles, my entire day glows brighter. It’s impossible not to smile when your happiness fills the room.",
      accentGradient: "from-rose-500/20 via-pink-500/10 to-transparent",
      badge: "Favorite Melody",
      interactiveType: "flip"
    },
    {
      id: "reason-2",
      gridSpan: "col-span-12 md:col-span-4 lg:col-span-4",
      icon: "heart-handshake",
      title: "Your Gentle Empathy",
      category: "Heart of Gold",
      shortDescription: "The effortless warmth with which you care for the world.",
      revealedContent: "You treat everyone, every animal, and every moment with an innate gentleness that touches my soul. Watching you care for others reminds me how blessed I am to be loved by someone so deeply kind.",
      accentGradient: "from-amber-500/20 via-rose-500/10 to-transparent",
      badge: "Pure Kindness",
      interactiveType: "flip"
    },
    {
      id: "reason-3",
      gridSpan: "col-span-12 md:col-span-4 lg:col-span-4",
      icon: "moon",
      title: "Our 2:00 AM Conversations",
      category: "Soul Connection",
      shortDescription: "Where vulnerability turns into eternal comfort.",
      revealedContent: "Those late-night conversations when the world goes quiet and it feels like only the two of us exist in the cosmos. There is nothing I cannot say to you, and no truth I cannot trust you with.",
      accentGradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
      badge: "Midnight Talks",
      interactiveType: "flip"
    },
    {
      id: "reason-4",
      gridSpan: "col-span-12 md:col-span-4 lg:col-span-4",
      icon: "flame",
      title: "Your Inspiring Passion",
      category: "Brilliance",
      shortDescription: "The fire in your eyes when you talk about your passions.",
      revealedContent: "Watching you speak about the things you love with vivid excitement is mesmerizing. Your ambition, your curiosity, and your dedication inspire me to be a better person every day.",
      accentGradient: "from-rose-600/20 via-orange-500/10 to-transparent",
      badge: "Endless Fire",
      interactiveType: "flip"
    },
    {
      id: "reason-5",
      gridSpan: "col-span-12 md:col-span-4 lg:col-span-4",
      icon: "coffee",
      title: "Your Adorable Quirks",
      category: "Sweet Secrets",
      shortDescription: "The tiny, endearing habits only I get to witness.",
      revealedContent: "The little happy dance you do when good food arrives, the way you tuck your hair behind your ear when focusing, and how you cuddle into my shoulder when you're sleepy.",
      accentGradient: "from-pink-500/20 via-rose-500/10 to-transparent",
      badge: "Irresistible",
      interactiveType: "flip"
    },
    {
      id: "reason-6",
      gridSpan: "col-span-12 md:col-span-6 lg:col-span-6",
      icon: "compass",
      title: "You Feel Like Home",
      category: "Sanctuary",
      shortDescription: "No matter where we are in the world, in your arms I am safe.",
      revealedContent: "Home isn’t four walls or a geographic coordinate anymore. Home is the warmth of your hand in mine, your voice over the phone after a long day, and the profound peace of resting beside you.",
      accentGradient: "from-purple-500/20 via-pink-500/10 to-transparent",
      badge: "Safe Haven",
      interactiveType: "scratch"
    },
    {
      id: "reason-7",
      gridSpan: "col-span-12 md:col-span-6 lg:col-span-6",
      icon: "infinity",
      title: "Building Our Future Dreams",
      category: "Forever Vision",
      shortDescription: "Every plan, every dream, every sunrise is brighter with you.",
      revealedContent: "Every vision of my future includes your smile. From quiet cozy living rooms to distant road trips across uncharted continents, every tomorrow is an adventure I cannot wait to share with you.",
      accentGradient: "from-amber-400/20 via-rose-500/10 to-transparent",
      badge: "To Eternity",
      interactiveType: "scratch"
    }
  ],

  // Endless Sweet Affirmations & Whispers Generator
  whispers: [
    "You are the poetry I never knew how to write until I met you.",
    "Every heartbeat is just my soul reminding me how much I adore you.",
    "If I had a single flower for every time I thought of you, I could walk through an eternal garden.",
    "You make ordinary days feel like once-in-a-lifetime celebrations.",
    "Falling in love with you was the easiest and most beautiful decision of my life.",
    "You are my favorite thought before falling asleep and my first gratitude upon waking.",
    "Loving you is as natural and essential as breathing air.",
    "You make my world infinitely softer, warmer, and more magical."
  ],

  // Interactive Love Letter
  letter: {
    dateHeading: "Under the Starlit Sky",
    greeting: "My Dearest Maria (My Sweet Bebo),",
    paragraphs: [
      "I loved you even before our story officially started. Long before we ever whispered our first confessions or counted the days together, there was an unspoken certainty in my heart whenever you were near.",
      "You walked into my life not like a storm, but like a sunrise—slowly illuminating every dark corner, turning routine moments into pure magic, and making the ordinary world around us sing.",
      "With you, Bebo, love lives in the quietest, purest details: your sweet laughter across the breakfast table, the adorable way you tuck your hair behind your ear, and the effortless peace that wraps around my soul whenever your hand is in mine.",
      "Every single day since has only made me more certain of one absolute truth: I can never imagine a world without you. You are my home, my anchor, and my sweetest miracle.",
      "Today, tomorrow, and through every galaxy yet to be born..."
    ],
    signOff: "Eternally & Unconditionally Yours,",
    signatureName: "Your Fatty ❤️",
    waxSealText: "SEALED WITH LOVE",
    typingSpeed: 20, // milliseconds per character
  },

  // Grand Finale Modal & Declaration
  finale: {
    buttonLabel: "Open My Entire Heart ✨",
    modalTitle: "You Are My Forever & Always, Bebo",
    modalSubtitle: "A love deeper than the oceans, brighter than a trillion stars.",
    quote: "“I loved you yesterday, I love you still, I always have, I always will.”",
    closingNote: "Thank you for being the most precious chapter of my life. Happy Anniversary, my beautiful Maria (Bebo)!",
    confettiColors: ['#F4D0D2', '#E8A598', '#FCEADE', '#FF6B8B', '#E5B299', '#FFF0F5', '#FFD700']
  },

  // Secret Star Vault (Easter Egg feature)
  secretVault: {
    enabled: true,
    passcodePrompt: "Enter our secret vault passcode",
    validCodes: ["210604", "21-06-04", "21/06/04"],
    title: "✨ Secret Constellation Vault Unlocked ✨",
    secretMessage: "You found the most sacred chamber of my heart, Bebo! Seeing your radiant smile, holding hands, and building our world together—my forever begins and ends with you.",
    specialRewardPhoto: "assets/photos/bebo_vault_family_memory.jpg",
    rewardCaption: "You found the most sacred chamber of my heart, Bebo! Seeing your radiant smile, holding hands, and building our world together—my forever begins and ends with you."
  }
};

// Export configuration globally for browser scripts
if (typeof window !== "undefined") {
  window.SANCTUARY_CONFIG = SANCTUARY_CONFIG;
}
