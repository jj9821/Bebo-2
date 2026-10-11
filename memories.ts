export interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  poster?: string;
  title: string;
  caption: string;
  tag: string;
  aspectRatio: "portrait" | "landscape" | "square";
}

export const MEDIA_ITEMS: MediaItem[] = [
  {
    "id": 1,
    "type": "image",
    "src": "assets/photos/couple_sweet_selfie.jpg",
    "title": "The Easiest Love in the World \ud83d\udc91",
    "caption": "Life was complicated until you walked in. Loving you is the easiest, most natural thing I have ever done in my entire life.",
    "tag": "beginning",
    "aspectRatio": "landscape"
  },
  {
    "id": 2,
    "type": "image",
    "src": "assets/photos/bebo_glasses_cozy.jpg",
    "title": "My Instant Peace of Mind \ud83d\udc53",
    "caption": "No matter how chaotic the world gets outside, one look at you in your cute glasses makes everything instantly quiet and calm.",
    "tag": "whole-world",
    "aspectRatio": "portrait"
  },
  {
    "id": 3,
    "type": "image",
    "src": "assets/photos/bebo_breakfast_date.jpg",
    "title": "Mornings Are Sweeter With You \ud83e\udd5e",
    "caption": "Waking up knowing I have you in my life makes every single morning something to look forward to.",
    "tag": "whole-world",
    "aspectRatio": "portrait"
  },
  {
    "id": 4,
    "type": "image",
    "src": "assets/photos/bebo_saree_radiance.jpg",
    "title": "My Breath of Fresh Air \u2728",
    "caption": "You make this life so effortless to live\u2014just standing next to you looking this gorgeous in your saree makes all my worries disappear.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 5,
    "type": "image",
    "src": "assets/photos/bebo_starbucks_date.jpg",
    "title": "You Make Every Day Lighter \u2615",
    "caption": "Even silly coffee runs feel like adventures. You have this magical way of making the simplest moments feel completely effortless and joyful.",
    "tag": "adventures",
    "aspectRatio": "portrait"
  },
  {
    "id": 6,
    "type": "image",
    "src": "assets/photos/bebo_saree_sunlight_portrait.jpg",
    "title": "Golden Hour Glow ✨",
    "caption": "Every ray of golden sunlight pales compared to your natural radiance. Loving you is the sweetest blessing in my life.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 7,
    "type": "video",
    "src": "assets/videos/IMG_3694.mp4",
    "poster": "assets/posters/IMG_3694.jpg",
    "title": "The Reason I Smile Without Trying \ud83d\udc83",
    "caption": "Your joyful energy is contagious. Whenever you twirl and laugh like this, you make heavy days feel as light as air.",
    "tag": "whole-world",
    "aspectRatio": "portrait"
  },
  {
    "id": 8,
    "type": "video",
    "src": "assets/videos/IMG_3659.mp4",
    "poster": "assets/posters/IMG_3659.jpg",
    "title": "You Turn Ordinary Into Magic \u2728",
    "caption": "Life is just so much fun with you. You bring out the happiest, most carefree version of me every single day.",
    "tag": "beginning",
    "aspectRatio": "portrait"
  },
  {
    "id": 9,
    "type": "image",
    "src": "assets/photos/bebo_couch_laughter.jpg",
    "title": "My Heavy Days Melt Away \ud83e\udd70",
    "caption": "Whenever I\u2019m with you on the couch laughing, all the weight of the world vanishes. You make life so genuinely good.",
    "tag": "favorites",
    "aspectRatio": "landscape"
  },
  {
    "id": 10,
    "type": "video",
    "src": "assets/videos/PXL_20230923_115253183.mp4",
    "poster": "assets/posters/PXL_20230923_115253183.jpg",
    "title": "My Calm in Every Storm \ud83c\udf3f",
    "caption": "Just sitting across from you in a caf\u00e9 reminds me how peaceful life can be when you\u2019re with the right person.",
    "tag": "beginning",
    "aspectRatio": "portrait"
  },
  {
    "id": 11,
    "type": "video",
    "src": "assets/videos/IMG_3574.mp4",
    "poster": "assets/posters/IMG_3574.jpg",
    "title": "My Soft Place to Land \ud83c\udf19",
    "caption": "Late night talks and sleepy smiles. Being loved by you is the gentlest comfort I have ever known.",
    "tag": "unfiltered",
    "aspectRatio": "landscape"
  },
  {
    "id": 12,
    "type": "video",
    "src": "assets/videos/IMG_3578.mp4",
    "poster": "assets/posters/IMG_3578.jpg",
    "title": "Home is Wherever You Are \ud83d\udcab",
    "caption": "Resting my head near yours and knowing I am home. With you, life never feels overwhelming anymore.",
    "tag": "unfiltered",
    "aspectRatio": "landscape"
  },
  {
    "id": 13,
    "type": "image",
    "src": "assets/photos/bebo_bistro_lanterns_radiance.jpg",
    "title": "You Bring Color to My World \ud83c\udfee",
    "caption": "Before you, days felt routine. With you, every evening feels warm, bright, and full of gentle wonder.",
    "tag": "beginning",
    "aspectRatio": "portrait"
  },
  {
    "id": 14,
    "type": "image",
    "src": "assets/photos/bebo_thoughtful_smile.jpg",
    "title": "My Favorite Thought \ud83d\udcad",
    "caption": "Whenever life gets busy, thinking of your sweet smile instantly puts my mind at ease and makes me smile.",
    "tag": "beginning",
    "aspectRatio": "portrait"
  },
  {
    "id": 15,
    "type": "image",
    "src": "assets/photos/bebo_fairy_lights_saree.jpg",
    "title": "You Make Life Feel Like a Celebration \u2728",
    "caption": "Your presence turns everyday life into something beautiful. You make every milestone effortless to celebrate.",
    "tag": "beginning",
    "aspectRatio": "portrait"
  },
  {
    "id": 16,
    "type": "image",
    "src": "assets/photos/bebo_white_crop_top.jpg",
    "title": "The Best Part of Every Day \ud83e\udd0d",
    "caption": "No matter what happens during the day, coming back to you is the highlight of my entire existence.",
    "tag": "beginning",
    "aspectRatio": "portrait"
  },
  {
    "id": 17,
    "type": "image",
    "src": "assets/photos/bebo_cafe_glow.jpg",
    "title": "Cozy Warmth in Human Form \ud83d\udd6f\ufe0f",
    "caption": "You have this gentle warmth that makes even the coldest days feel soft, safe, and easy to live through.",
    "tag": "beginning",
    "aspectRatio": "portrait"
  },
  {
    "id": 18,
    "type": "image",
    "src": "assets/photos/bebo_cinematic_portrait_eyes.jpg",
    "title": "One Look & Everything Makes Sense \ud83e\udd7a",
    "caption": "Whenever I feel lost, looking into your eyes grounds me immediately. You are my anchor in this world.",
    "tag": "beginning",
    "aspectRatio": "portrait"
  },
  {
    "id": 19,
    "type": "image",
    "src": "assets/photos/bebo_garden_cafe_laugh.jpg",
    "title": "Your Laughter is My Medicine \ud83c\udf38",
    "caption": "Hearing you laugh with your whole heart instantly cures whatever was bothering me. You make happiness feel so simple.",
    "tag": "whole-world",
    "aspectRatio": "portrait"
  },
  {
    "id": 20,
    "type": "image",
    "src": "assets/photos/bebo_striped_shirt_glasses.jpg",
    "title": "My Brilliant, Beautiful Better Half \ud83e\udd13",
    "caption": "You inspire me every day to be a better person, while making me feel completely loved just as I am.",
    "tag": "whole-world",
    "aspectRatio": "landscape"
  },
  {
    "id": 21,
    "type": "image",
    "src": "assets/photos/bebo_sunlit_bliss.jpg",
    "title": "Golden Sunshine in My Soul \u2600\ufe0f",
    "caption": "You are the sunshine that cleared away every gray cloud in my life. Life is so bright with you, Bebo.",
    "tag": "whole-world",
    "aspectRatio": "portrait"
  },
  {
    "id": 22,
    "type": "image",
    "src": "assets/photos/bebo_white_blouse_curls.jpg",
    "title": "Effortless Serenity \ud83d\udd4a\ufe0f",
    "caption": "Sitting beside you in silence feels more comforting than a thousand words. You make existing feel effortless.",
    "tag": "whole-world",
    "aspectRatio": "portrait"
  },
  {
    "id": 23,
    "type": "image",
    "src": "assets/photos/bebo_saree_beaming_smile.jpg",
    "title": "A Heart That Makes Mine Beat Easier \ud83d\udc9a",
    "caption": "With you, I never have to pretend. Being with you is as easy as breathing, and just as necessary.",
    "tag": "whole-world",
    "aspectRatio": "portrait"
  },
  {
    "id": 24,
    "type": "image",
    "src": "assets/photos/bebo_casual_denim.jpg",
    "title": "Simply Irreplaceable \ud83e\udd0d",
    "caption": "You make the ordinary extraordinary. Everyday life is a thousand times better simply because you are in it.",
    "tag": "adventures",
    "aspectRatio": "portrait"
  },
  {
    "id": 25,
    "type": "image",
    "src": "assets/photos/bebo_dazzling_curls_smile.jpg",
    "title": "My Daily Dose of Joy \ud83d\ude01",
    "caption": "That radiant smile of yours makes all the hard work and struggles in life completely worth it.",
    "tag": "adventures",
    "aspectRatio": "portrait"
  },
  {
    "id": 26,
    "type": "image",
    "src": "assets/photos/bebo_forehead_boop.jpg",
    "title": "You Keep Life Playful & Sweet \ud83d\udc46",
    "caption": "You remind me not to take life too seriously, to laugh at the little things, and to always choose joy.",
    "tag": "unfiltered",
    "aspectRatio": "portrait"
  },
  {
    "id": 27,
    "type": "image",
    "src": "assets/photos/bebo_rain_drenched_goof.jpg",
    "title": "Dancing Through Every Storm \ud83c\udf27\ufe0f",
    "caption": "Even when it rains on our plans, you turn it into a memory we laugh about. You make hard times easy to endure.",
    "tag": "unfiltered",
    "aspectRatio": "portrait"
  },
  {
    "id": 28,
    "type": "image",
    "src": "assets/32/photos/20240824_115114.jpg",
    "title": "Walking Beside My Best Friend \ud83d\udeb6\u200d\u2640\ufe0f",
    "caption": "Life is an easy journey when the person walking beside you is your best friend and the love of your life.",
    "tag": "adventures",
    "aspectRatio": "landscape"
  },
  {
    "id": 29,
    "type": "image",
    "src": "assets/32/photos/20241120_162128.jpg",
    "title": "My Warm Comfort Zone \ud83e\uddf8",
    "caption": "Wrapped up with you, life feels so simple, so gentle, and so wonderfully uncomplicated.",
    "tag": "whole-world",
    "aspectRatio": "landscape"
  },
  {
    "id": 30,
    "type": "image",
    "src": "assets/32/photos/20250722_214102.jpg",
    "title": "My Midnight Peace \ud83c\udf0c",
    "caption": "No racing thoughts, no worries about tomorrow. Just you, me, and the easiest kind of happiness.",
    "tag": "unfiltered",
    "aspectRatio": "landscape"
  },
  {
    "id": 31,
    "type": "image",
    "src": "assets/32/photos/20250826_211314.jpg",
    "title": "Sweet Simplicity \ud83c\udf66",
    "caption": "Sharing sweet treats and giggles. You make life feel like the sweetest, easiest dessert date.",
    "tag": "adventures",
    "aspectRatio": "landscape"
  },
  {
    "id": 32,
    "type": "image",
    "src": "assets/32/photos/20251114_202244.jpg",
    "title": "You Make the World Gentle \ud83d\udd6f\ufe0f",
    "caption": "In a world that can be so loud and rushed, your presence brings the sweetest, softest calm into my life.",
    "tag": "favorites",
    "aspectRatio": "landscape"
  },
  {
    "id": 33,
    "type": "image",
    "src": "assets/32/photos/20251114_202246.jpg",
    "title": "My Favorite Secret Keeper \ud83e\udd2b",
    "caption": "I can tell you anything without fear. Having you in my corner makes navigating life so easy.",
    "tag": "unfiltered",
    "aspectRatio": "landscape"
  },
  {
    "id": 34,
    "type": "image",
    "src": "assets/32/photos/20251217_114835.jpg",
    "title": "Warmth in the Coldest Seasons \ud83e\udde3",
    "caption": "Whenever life feels a little cold or distant, your hug reminds me how warm and good my world really is.",
    "tag": "whole-world",
    "aspectRatio": "landscape"
  },
  {
    "id": 35,
    "type": "image",
    "src": "assets/32/photos/20260304_093502.jpg",
    "title": "Singing Away Every Worry \ud83d\ude97",
    "caption": "Windows down, bad singing, and zero stress. You make the road of life so fun to travel together.",
    "tag": "adventures",
    "aspectRatio": "landscape"
  },
  {
    "id": 36,
    "type": "image",
    "src": "assets/32/photos/20260312_200752.jpg",
    "title": "Midnight Cravings & Zero Doubts \ud83c\udf5f",
    "caption": "The late-night laughs and easy conversations make me realize I never want to do life with anyone else.",
    "tag": "unfiltered",
    "aspectRatio": "landscape"
  },
  {
    "id": 37,
    "type": "image",
    "src": "assets/32/photos/IMG-20250926-WA0027_Original.jpg",
    "title": "Grace That Calms My Heart \ud83e\udd0d",
    "caption": "Your gentle nature softens every edge of my day. You make my life a truly peaceful sanctuary.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 38,
    "type": "image",
    "src": "assets/32/photos/IMG_1030.jpg",
    "title": "Never Lost When I Am With You \u2708\ufe0f",
    "caption": "We could be anywhere in the world and I would feel safe and content, as long as your hand is in mine.",
    "tag": "adventures",
    "aspectRatio": "portrait"
  },
  {
    "id": 39,
    "type": "image",
    "src": "assets/32/photos/IMG_1312.jpg",
    "title": "My Sweetest Morning Awakening \ud83d\ude34",
    "caption": "Seeing your sleepy smile first thing in the morning makes every single day start with effortless gratitude.",
    "tag": "whole-world",
    "aspectRatio": "portrait"
  },
  {
    "id": 40,
    "type": "image",
    "src": "assets/32/photos/IMG_1313.jpg",
    "title": "Unhurried Afternoons Together \u2615",
    "caption": "Time slows down in the best way when I am with you. You make life feel rich, calm, and beautiful.",
    "tag": "beginning",
    "aspectRatio": "portrait"
  },
  {
    "id": 41,
    "type": "image",
    "src": "assets/32/photos/IMG_1415.jpg",
    "title": "Pure, Genuine Goodness \ud83d\udcf8",
    "caption": "You don\u2019t even have to try\u2014your natural kindness and sweetness make everyone around you feel loved.",
    "tag": "unfiltered",
    "aspectRatio": "portrait"
  },
  {
    "id": 42,
    "type": "image",
    "src": "assets/32/photos/IMG_1446.jpg",
    "title": "The Hug That Fixes Everything \ud83e\udec2",
    "caption": "Ten seconds in your arms and everything that felt heavy or stressful is suddenly completely okay.",
    "tag": "favorites",
    "aspectRatio": "landscape"
  },
  {
    "id": 43,
    "type": "image",
    "src": "assets/32/photos/IMG_1616.jpg",
    "title": "Sunlight, Green Grass & You \ud83e\uddfa",
    "caption": "You teach me to slow down, breathe, and appreciate the simple magic of being alive together.",
    "tag": "adventures",
    "aspectRatio": "portrait"
  },
  {
    "id": 44,
    "type": "image",
    "src": "assets/32/photos/IMG_1638.jpg",
    "title": "You Make Me Laugh Until My Stomach Hurts \ud83d\ude1c",
    "caption": "Life can never be boring or sad when you\u2019re around to make the most delightfully goofy faces.",
    "tag": "unfiltered",
    "aspectRatio": "portrait"
  },
  {
    "id": 45,
    "type": "image",
    "src": "assets/32/photos/IMG_1696.jpg",
    "title": "Sunset Peace on the Horizon \ud83c\udf07",
    "caption": "Watching the day end leaning against you. Life is so easy to live when I know tomorrow has you in it too.",
    "tag": "whole-world",
    "aspectRatio": "portrait"
  },
  {
    "id": 46,
    "type": "image",
    "src": "assets/32/photos/IMG_1705.jpg",
    "title": "My Everyday Teammate \u270b",
    "caption": "Tackling life as a team with you turns every obstacle into a fun little adventure we conquer together.",
    "tag": "unfiltered",
    "aspectRatio": "portrait"
  },
  {
    "id": 47,
    "type": "image",
    "src": "assets/32/photos/IMG_2692.jpg",
    "title": "The Luckiest Guy Alive \ud83d\udc57",
    "caption": "Every time you look at me with love, I\u2019m reminded how much better my life became the day you walked into it.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 48,
    "type": "image",
    "src": "assets/32/photos/IMG_2694.jpg",
    "title": "Pure Morning Optimism \ud83c\udf3b",
    "caption": "Your bright perspective on life makes even difficult days feel manageable, hopeful, and bright.",
    "tag": "whole-world",
    "aspectRatio": "portrait"
  },
  {
    "id": 49,
    "type": "image",
    "src": "assets/32/photos/IMG_2695.jpg",
    "title": "Giggles That Melt Away Stress \ud83e\udd2d",
    "caption": "No bad mood can survive your playful teasing. You make my life feel like pure joy.",
    "tag": "unfiltered",
    "aspectRatio": "portrait"
  },
  {
    "id": 50,
    "type": "image",
    "src": "assets/32/photos/IMG_3107.jpg",
    "title": "Cozy Blanket Fort Energy \ud83c\udf7f",
    "caption": "All I need after a long week is you, a warm blanket, and our quiet bubble of happiness.",
    "tag": "whole-world",
    "aspectRatio": "landscape"
  },
  {
    "id": 51,
    "type": "image",
    "src": "assets/32/photos/IMG_3439.jpg",
    "title": "Rain or Shine, You Are My Light \u2614",
    "caption": "Whatever weather life throws our way, you always make sure there\u2019s sunshine in our hearts.",
    "tag": "adventures",
    "aspectRatio": "portrait"
  },
  {
    "id": 52,
    "type": "image",
    "src": "assets/32/photos/IMG_3451.jpg",
    "title": "Effortless Elegance & Kindness \ud83d\udc51",
    "caption": "You treat the world with such tenderness. Being loved by you is the greatest gift of my life.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 53,
    "type": "image",
    "src": "assets/32/photos/IMG_3542.jpg",
    "title": "Holding Hands, Holding Peace \ud83e\udd1d",
    "caption": "Our fingers locking together is my reminder that everything is going to be wonderful.",
    "tag": "beginning",
    "aspectRatio": "portrait"
  },
  {
    "id": 54,
    "type": "image",
    "src": "assets/32/photos/IMG_3649.jpg",
    "title": "Silly Moments That Mean Everything \ud83e\udd33",
    "caption": "It\u2019s in these goofy, unscripted moments that I realize how delightfully easy life is with you.",
    "tag": "unfiltered",
    "aspectRatio": "portrait"
  },
  {
    "id": 55,
    "type": "image",
    "src": "assets/32/photos/IMG_3657.jpg",
    "title": "Turning Errands Into Dates \ud83d\uded2",
    "caption": "Even grocery shopping is a romantic comedy with you. You make mundane life feel like an absolute treat.",
    "tag": "adventures",
    "aspectRatio": "portrait"
  },
  {
    "id": 56,
    "type": "image",
    "src": "assets/32/photos/IMG_3672.jpg",
    "title": "A Heart Full of Pure Gold \ud83d\udcab",
    "caption": "Your gentle empathy and endless patience make navigating this world so much easier and sweeter.",
    "tag": "favorites",
    "aspectRatio": "landscape"
  },
  {
    "id": 57,
    "type": "image",
    "src": "assets/32/photos/IMG_3867.jpg",
    "title": "Dreaming Big Because of You \ud83c\udf20",
    "caption": "You believe in me when I doubt myself. You make every dream feel possible and reachable.",
    "tag": "beginning",
    "aspectRatio": "landscape"
  },
  {
    "id": 58,
    "type": "image",
    "src": "assets/32/photos/IMG_3868.jpg",
    "title": "My One and Only Certainty \ud83d\udc8d",
    "caption": "In a world where everything changes, my love for you is steady, easy, and completely unshakable.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 59,
    "type": "video",
    "src": "assets/32/videos/0dd38fde-9fe6-4fcb-adb0-0e9a7cc9c642.mp4",
    "poster": "assets/32/posters/0dd38fde-9fe6-4fcb-adb0-0e9a7cc9c642.jpg",
    "title": "You Make Life a Beautiful Song \ud83c\udfa4",
    "caption": "Dancing in the living room without a care in the world. You fill my life with music and light.",
    "tag": "whole-world",
    "aspectRatio": "landscape"
  },
  {
    "id": 60,
    "type": "video",
    "src": "assets/32/videos/20230909_124558.mp4",
    "poster": "assets/32/posters/20230909_124558.jpg",
    "title": "No Map Needed When I Have You \ud83d\udee3\ufe0f",
    "caption": "As long as we\u2019re driving through life together, every destination is paradise.",
    "tag": "adventures",
    "aspectRatio": "portrait"
  },
  {
    "id": 61,
    "type": "video",
    "src": "assets/32/videos/20240803_203414.mp4",
    "poster": "assets/32/posters/20240803_203414.jpg",
    "title": "Sweet Tooth & Sweeter Girl \ud83c\udf70",
    "caption": "Watching your face light up over small pleasures reminds me how simple and sweet true happiness is.",
    "tag": "unfiltered",
    "aspectRatio": "portrait"
  },
  {
    "id": 62,
    "type": "video",
    "src": "assets/32/videos/20241008_185208.mp4",
    "poster": "assets/32/posters/20241008_185208.jpg",
    "title": "You Are the Sparkle in My Life \ud83c\udf89",
    "caption": "You bring the magic, the warmth, and the fireworks into every single day of my year.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 63,
    "type": "video",
    "src": "assets/32/videos/20250603_134230.mp4",
    "poster": "assets/32/posters/20250603_134230.jpg",
    "title": "Peaceful Strolls & Quiet Joy \ud83c\udf33",
    "caption": "Walking quietly by your side reminds me that the best things in life are simple, easy, and gentle.",
    "tag": "beginning",
    "aspectRatio": "landscape"
  },
  {
    "id": 64,
    "type": "video",
    "src": "assets/32/videos/20250906_201904.mp4",
    "poster": "assets/32/posters/20250906_201904.jpg",
    "title": "Kitchen Chaos, Perfect Harmony \ud83c\udf73",
    "caption": "Cooking, burning toast, laughing until tears stream down our faces. You make home feel like heaven.",
    "tag": "whole-world",
    "aspectRatio": "landscape"
  },
  {
    "id": 65,
    "type": "video",
    "src": "assets/32/videos/20250925_194214.mp4",
    "poster": "assets/32/posters/20250925_194214.jpg",
    "title": "Ocean Breezes & Boundless Freedom \ud83c\udf0a",
    "caption": "With you, I feel completely free to be my truest self. That\u2019s the greatest peace in the world.",
    "tag": "adventures",
    "aspectRatio": "landscape"
  },
  {
    "id": 66,
    "type": "video",
    "src": "assets/32/videos/20251213_192533.mp4",
    "poster": "assets/32/posters/20251213_192533.jpg",
    "title": "The Sweetest Harmony \ud83c\udfb6",
    "caption": "Your presence in my life is like a soft, soothing melody that plays softly in the background of everything.",
    "tag": "unfiltered",
    "aspectRatio": "portrait"
  },
  {
    "id": 67,
    "type": "video",
    "src": "assets/32/videos/IMG_1317.mp4",
    "poster": "assets/32/posters/IMG_1317.jpg",
    "title": "Radiant Inside and Out \u2728",
    "caption": "You don\u2019t just make my life look better\u2014you make my soul feel deeply cherished and understood.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 68,
    "type": "video",
    "src": "assets/32/videos/IMG_1598.mp4",
    "poster": "assets/32/posters/IMG_1598.jpg",
    "title": "From That Very First Day \ud83d\udc8c",
    "caption": "From the moment I met you, life stopped feeling like a struggle and started feeling like a blessing.",
    "tag": "beginning",
    "aspectRatio": "portrait"
  },
  {
    "id": 69,
    "type": "video",
    "src": "assets/32/videos/IMG_1634.mp4",
    "poster": "assets/32/posters/IMG_1634.jpg",
    "title": "Silly Dancing, Serious Love \ud83d\udd7a\ud83d\udc83",
    "caption": "We don\u2019t need perfection. We just need each other, laughing and dancing through the years.",
    "tag": "whole-world",
    "aspectRatio": "portrait"
  },
  {
    "id": 70,
    "type": "video",
    "src": "assets/32/videos/IMG_3107.mp4",
    "poster": "assets/32/posters/IMG_3107.jpg",
    "title": "Standing on Top of the World \u26f0\ufe0f",
    "caption": "Every peak we climb is sweeter because I get to turn around and see your proud, smiling face.",
    "tag": "adventures",
    "aspectRatio": "landscape"
  },
  {
    "id": 71,
    "type": "video",
    "src": "assets/32/videos/IMG_3436.mp4",
    "poster": "assets/32/posters/IMG_3436.jpg",
    "title": "Never Stop Being This Adorable \ud83e\udd2a",
    "caption": "Your silly humor and sweet spirit make even the longest workdays vanish in seconds.",
    "tag": "unfiltered",
    "aspectRatio": "landscape"
  },
  {
    "id": 72,
    "type": "video",
    "src": "assets/32/videos/IMG_3451.mp4",
    "poster": "assets/32/posters/IMG_3451.jpg",
    "title": "A Memory I Will Hold Forever \ud83c\udf9e\ufe0f",
    "caption": "Every second spent with you is a treasure that makes my whole life richer and more meaningful.",
    "tag": "favorites",
    "aspectRatio": "portrait"
  },
  {
    "id": 73,
    "type": "video",
    "src": "assets/32/videos/IMG_3454.mp4",
    "poster": "assets/32/posters/IMG_3454.jpg",
    "title": "Quiet Morning Coffee Rituals \u2615",
    "caption": "Starting the day with your hand in mine gives me all the strength and calm I need for anything.",
    "tag": "beginning",
    "aspectRatio": "landscape"
  },
  {
    "id": 74,
    "type": "video",
    "src": "assets/32/videos/IMG_3542.mp4",
    "poster": "assets/32/posters/IMG_3542.jpg",
    "title": "The Warmest Rhythm of Life \ud83c\udfb5",
    "caption": "Swaying in the kitchen together\u2014life is so effortless, so tender, and so right when it is with you.",
    "tag": "whole-world",
    "aspectRatio": "portrait"
  },
  {
    "id": 75,
    "type": "video",
    "src": "assets/32/videos/IMG_3551.mp4",
    "poster": "assets/32/posters/IMG_3551.jpg",
    "title": "Pure Childlike Joy With You \ud83c\udfa1",
    "caption": "You bring out the youngest, happiest heart in me. Life with you is pure delight.",
    "tag": "adventures",
    "aspectRatio": "portrait"
  },
  {
    "id": 76,
    "type": "video",
    "src": "assets/32/videos/IMG_3568.mp4",
    "poster": "assets/32/posters/IMG_3568.jpg",
    "title": "Rainy Day Cuddle Therapy \ud83c\udf27\ufe0f",
    "caption": "Listening to the rain while feeling your steady heartbeat. You make life feel so safe and serene.",
    "tag": "unfiltered",
    "aspectRatio": "landscape"
  },
  {
    "id": 77,
    "type": "video",
    "src": "assets/32/videos/IMG_3582.mp4",
    "poster": "assets/32/posters/IMG_3582.jpg",
    "title": "Toasting to the Easiest Choice I Ever Made \ud83e\udd42",
    "caption": "Choosing you was the easiest decision of my life, and loving you is the greatest reward.",
    "tag": "favorites",
    "aspectRatio": "square"
  },
  {
    "id": 78,
    "type": "video",
    "src": "assets/32/videos/IMG_3657.mp4",
    "poster": "assets/32/posters/IMG_3657.jpg",
    "title": "The Glance That Changed My Whole Life \ud83d\udcab",
    "caption": "One gentle glance from you and my whole future clicked into place. Everything became clear.",
    "tag": "beginning",
    "aspectRatio": "portrait"
  },
  {
    "id": 79,
    "type": "video",
    "src": "assets/32/videos/VID-20241008-WA0009.mp4",
    "poster": "assets/32/posters/VID-20241008-WA0009.jpg",
    "title": "Flour, Cheese & Endless Smiles \ud83c\udf55",
    "caption": "Messy kitchen dates with you are better than any five-star restaurant. You make life so genuinely fun.",
    "tag": "whole-world",
    "aspectRatio": "landscape"
  },
  {
    "id": 80,
    "type": "video",
    "src": "assets/32/videos/d86b8d52-80b9-4d28-8c20-d68339dbd961.mp4",
    "poster": "assets/32/posters/d86b8d52-80b9-4d28-8c20-d68339dbd961.jpg",
    "title": "Cruising Toward Forever \ud83c\udf05",
    "caption": "Singing with the windows down at sunset\u2014loving you is the smoothest, sweetest ride in the world.",
    "tag": "adventures",
    "aspectRatio": "landscape"
  },
  {
    "id": 81,
    "type": "video",
    "src": "assets/32/videos/dddd2aad-645f-47c7-b9e2-c34f9d298a2c.mp4",
    "poster": "assets/32/posters/dddd2aad-645f-47c7-b9e2-c34f9d298a2c.jpg",
    "title": "Life is Simply Better With You \u2764\ufe0f",
    "caption": "Through every tomorrow and every chapter ahead, you make my life infinitely better, softer, and more beautiful. I love you, Bebo.",
    "tag": "favorites",
    "aspectRatio": "landscape"
  },
  {
      "id": 82,
      "type": "image",
      "src": "assets/photos/20230607_154350_Original.jpg",
      "title": "Sunlit Smiles & Endless Sunshine \u2600\ufe0f",
      "caption": "The warmth of early summer days is nothing compared to how bright you make every single second of my world.",
      "tag": "beginning",
      "aspectRatio": "portrait"
  },
  {
      "id": 83,
      "type": "video",
      "src": "assets/videos/20230621_141641.mp4",
      "poster": "assets/posters/20230621_141641.jpg",
      "title": "Summer Escapade Together \ud83d\ude97",
      "caption": "Windows rolled down, summer air rushing in, and your laughter ringing out across the highway.",
      "tag": "adventures",
      "aspectRatio": "portrait"
  },
  {
      "id": 84,
      "type": "image",
      "src": "assets/photos/20230811_215133_Original.jpg",
      "title": "Late Night Soulmate Whispers \ud83c\udf19",
      "caption": "Under the quiet August moon, talking with you until midnight felt like living inside my favorite dream.",
      "tag": "unfiltered",
      "aspectRatio": "portrait"
  },
  {
      "id": 85,
      "type": "video",
      "src": "assets/videos/20230621_141755.mp4",
      "poster": "assets/posters/20230621_141755.jpg",
      "title": "Unstoppable Sunlit Smiles \ud83c\udf1e",
      "caption": "No script, just genuine joy with the girl who stole my heart and made it beat ten times stronger.",
      "tag": "whole-world",
      "aspectRatio": "portrait"
  },
  {
      "id": 86,
      "type": "image",
      "src": "assets/photos/20240217_170715_Original.jpg",
      "title": "Winter Golden Hour Magic \u2728",
      "caption": "Wrapped in scarves and laughter, you turn chilly February afternoons into pure cosmic gold.",
      "tag": "adventures",
      "aspectRatio": "portrait"
  },
  {
      "id": 87,
      "type": "video",
      "src": "assets/videos/20241129_114659.mp4",
      "poster": "assets/posters/20241129_114659.jpg",
      "title": "November Wanderlust \ud83c\udf42",
      "caption": "Bundled up and discovering cozy little corners\u2014every journey with you is pure poetry.",
      "tag": "adventures",
      "aspectRatio": "landscape"
  },
  {
      "id": 88,
      "type": "image",
      "src": "assets/photos/20250126_123330_Original.jpg",
      "title": "New Year, Same Eternal Love \ud83d\udcab",
      "caption": "Another year around the sun, and loving you continues to be the greatest, easiest privilege of my existence.",
      "tag": "whole-world",
      "aspectRatio": "landscape"
  },
  {
      "id": 89,
      "type": "video",
      "src": "assets/videos/20250603_134230.mp4",
      "poster": "assets/posters/20250603_134230.jpg",
      "title": "Breezy Smiles & Sweet Banter \ud83c\udf2c\ufe0f",
      "caption": "Teasing each other under the open sky\u2014nobody makes me laugh the way you do, Maria.",
      "tag": "unfiltered",
      "aspectRatio": "landscape"
  },
  {
      "id": 90,
      "type": "image",
      "src": "assets/photos/20260804_173515_Original.jpg",
      "title": "Forever Locked In Orbit \ud83e\ude90",
      "caption": "No matter how much time passes, my heart still skips a beat every single time you look my way.",
      "tag": "favorites",
      "aspectRatio": "portrait"
  },
  {
      "id": 91,
      "type": "video",
      "src": "assets/videos/20250607_203518.mp4",
      "poster": "assets/posters/20250607_203518.jpg",
      "title": "Twilight Golden Hour Glow \ud83c\udf07",
      "caption": "As the sun dips below the horizon, your glow outshines every city light in the distance.",
      "tag": "favorites",
      "aspectRatio": "portrait"
  },
  {
      "id": 92,
      "type": "image",
      "src": "assets/photos/IMG-20230909-WA0035_Original.jpg",
      "title": "The Sweetest Giggle in the Universe \ud83c\udf38",
      "caption": "Caught in the middle of a belly laugh\u2014this is the exact face that makes all the noise of the world fade away.",
      "tag": "unfiltered",
      "aspectRatio": "portrait"
  },
  {
      "id": 93,
      "type": "video",
      "src": "assets/videos/236ef13b-eb52-45e8-beb8-8e5c914566a7.mp4",
      "poster": "assets/posters/236ef13b-eb52-45e8-beb8-8e5c914566a7.jpg",
      "title": "Silly Shenanigans with Bebo \ud83e\udd2a",
      "caption": "The goofiest, most precious moments where we can be 100% our weird, wonderful selves.",
      "tag": "unfiltered",
      "aspectRatio": "portrait"
  },
  {
      "id": 94,
      "type": "image",
      "src": "assets/photos/IMG_2562_Original.jpg",
      "title": "Destined Before Day One \ud83d\udc8c",
      "caption": "Looking at this photo, I swear the stars had us written together long before we even took our first breath.",
      "tag": "beginning",
      "aspectRatio": "portrait"
  },
  {
      "id": 95,
      "type": "video",
      "src": "assets/videos/27422041-0681-423d-8d2a-28a1dda6b7ae.mp4",
      "poster": "assets/posters/27422041-0681-423d-8d2a-28a1dda6b7ae.jpg",
      "title": "Spontaneous Joy Caught on Tape \ud83c\udfac",
      "caption": "Catching your surprise smiles on camera is my favorite sport. You are pure delight.",
      "tag": "whole-world",
      "aspectRatio": "portrait"
  },
  {
      "id": 96,
      "type": "image",
      "src": "assets/photos/IMG_2708_Original.jpg",
      "title": "My Favorite View Forever \ud83c\udf05",
      "caption": "People travel across continents looking for wonders, but all I need is right here in front of me.",
      "tag": "whole-world",
      "aspectRatio": "portrait"
  },
  {
      "id": 97,
      "type": "video",
      "src": "assets/videos/2bbb063c-5027-4d76-9be1-e9701960fbca.mp4",
      "poster": "assets/posters/2bbb063c-5027-4d76-9be1-e9701960fbca.jpg",
      "title": "The Melody of Your Laughter \ud83c\udfb5",
      "caption": "If I could record one sound to listen to for eternity, it would be you giggling at my jokes.",
      "tag": "beginning",
      "aspectRatio": "portrait"
  },
  {
      "id": 98,
      "type": "image",
      "src": "assets/photos/IMG_3016_Original.jpg",
      "title": "Pure Candid Happiness \u2615",
      "caption": "No posing, no filters, just our honest soulmate connection shining straight through the lens.",
      "tag": "unfiltered",
      "aspectRatio": "portrait"
  },
  {
      "id": 99,
      "type": "video",
      "src": "assets/videos/IMG_3387.mp4",
      "poster": "assets/posters/IMG_3387.jpg",
      "title": "Exploring Hand in Hand \ud83c\udf32",
      "caption": "Walking side by side, discovering new trails, and realizing that home is anywhere you are.",
      "tag": "adventures",
      "aspectRatio": "portrait"
  },
  {
      "id": 100,
      "type": "image",
      "src": "assets/photos/IMG_3198_Original.jpg",
      "title": "My Sanctuary & Safe Haven \ud83c\udfe1",
      "caption": "Wherever you are is my home. Next to you, my soul feels instantly protected and profoundly at peace.",
      "tag": "whole-world",
      "aspectRatio": "portrait"
  },
  {
      "id": 101,
      "type": "video",
      "src": "assets/videos/IMG_3856.mp4",
      "poster": "assets/posters/IMG_3856.jpg",
      "title": "Whispered Inside Jokes \ud83e\udd2b",
      "caption": "One glance across the room and we already know what the other is thinking. That's true soulmate energy.",
      "tag": "unfiltered",
      "aspectRatio": "landscape"
  },
  {
      "id": 102,
      "type": "image",
      "src": "assets/photos/IMG_3212_Original.jpg",
      "title": "A Vision in Every Universe \ud83d\udc51",
      "caption": "If I searched a million galaxies and lived a thousand lifetimes, I would still choose only you.",
      "tag": "favorites",
      "aspectRatio": "portrait"
  },
  {
      "id": 103,
      "type": "video",
      "src": "assets/videos/IMG_3857.mp4",
      "poster": "assets/posters/IMG_3857.jpg",
      "title": "That Unstoppable Grin \ud83d\ude04",
      "caption": "You tried not to smile, but it broke through anyway. My heart melts every single time.",
      "tag": "favorites",
      "aspectRatio": "landscape"
  },
  {
      "id": 104,
      "type": "image",
      "src": "assets/photos/IMG_3461_Original.jpg",
      "title": "Afternoon Roadtrip Bliss \ud83d\ude97",
      "caption": "Passenger seat confessions, loud singing, and you smiling back at me\u2014the recipe for perfection.",
      "tag": "adventures",
      "aspectRatio": "portrait"
  },
  {
      "id": 105,
      "type": "video",
      "src": "assets/videos/IMG_4524.mp4",
      "poster": "assets/posters/IMG_4524.jpg",
      "title": "A Memory Frozen In Gold \u23f3",
      "caption": "Holding you close while the world spins outside. In your arms, I have everything I'll ever need.",
      "tag": "beginning",
      "aspectRatio": "portrait"
  },
  {
      "id": 106,
      "type": "image",
      "src": "assets/photos/IMG_3581_Original.jpg",
      "title": "The Look That Captivates My Soul \ud83d\udc96",
      "caption": "That gentle, knowing gaze of yours has the power to heal every hard day in an instant.",
      "tag": "favorites",
      "aspectRatio": "portrait"
  },
  {
      "id": 107,
      "type": "video",
      "src": "assets/videos/IMG_5174.mp4",
      "poster": "assets/posters/IMG_5174.jpg",
      "title": "Dancing Through Everyday Life \ud83d\udc83",
      "caption": "Turning grocery aisles and kitchen floors into our private ballroom. You make life a celebration.",
      "tag": "whole-world",
      "aspectRatio": "portrait"
  },
  {
      "id": 108,
      "type": "image",
      "src": "assets/photos/PXL_20230727_075509932_Original.jpg",
      "title": "Morning Strolls With My Twin Flame \ud83c\udf3f",
      "caption": "Walking step-by-step through dew-covered paths, hand in hand, dreaming of the lifetime ahead.",
      "tag": "beginning",
      "aspectRatio": "portrait"
  },
  {
      "id": 109,
      "type": "video",
      "src": "assets/videos/IMG_5175.mp4",
      "poster": "assets/posters/IMG_5175.jpg",
      "title": "My Favorite Partner in Mischief \ud83d\ude1c",
      "caption": "Plotting silly pranks and laughing until our stomachs hurt\u2014life with you is never boring.",
      "tag": "unfiltered",
      "aspectRatio": "portrait"
  },
  {
      "id": 110,
      "type": "image",
      "src": "assets/photos/PXL_20230727_083312590.PORTRAIT_Original.jpg",
      "title": "Breathtakingly Beautiful Bebo \ud83c\udf39",
      "caption": "You have a natural grace that takes my breath away every single day. You are pure art.",
      "tag": "favorites",
      "aspectRatio": "portrait"
  },
  {
      "id": 111,
      "type": "video",
      "src": "assets/videos/IMG_5183.mp4",
      "poster": "assets/posters/IMG_5183.jpg",
      "title": "Sweet Chaos & Boundless Love \ud83c\udf89",
      "caption": "Even when plans go sideways, being with you turns every mishap into an unforgettable story.",
      "tag": "adventures",
      "aspectRatio": "portrait"
  },
  {
      "id": 112,
      "type": "image",
      "src": "assets/photos/PXL_20230727_083332509.PORTRAIT_Original.jpg",
      "title": "The Center of My Galaxy \ud83c\udf0c",
      "caption": "Everything good in my life revolves around your kindness, your warmth, and your boundless love.",
      "tag": "whole-world",
      "aspectRatio": "portrait"
  },
  {
      "id": 113,
      "type": "video",
      "src": "assets/videos/IMG_5186.mp4",
      "poster": "assets/posters/IMG_5186.jpg",
      "title": "The Golden Spark in Your Gaze \u2728",
      "caption": "The way you look at me when you think I'm not watching\u2014I carry that look with me everywhere.",
      "tag": "favorites",
      "aspectRatio": "portrait"
  },
  {
      "id": 114,
      "type": "image",
      "src": "assets/photos/PXL_20230727_084246015.PORTRAIT~2_Original.jpg",
      "title": "Sun-Kissed Radiance \u2600\ufe0f",
      "caption": "The golden summer light caught your features, and in that moment, time stood completely still.",
      "tag": "favorites",
      "aspectRatio": "portrait"
  },
  {
      "id": 115,
      "type": "video",
      "src": "assets/videos/IMG_5233.mp4",
      "poster": "assets/posters/IMG_5233.jpg",
      "title": "Unplanned Cosmic Roadtrip \ud83d\udee3\ufe0f",
      "caption": "Driving towards the horizon with our favorite soundtrack playing and you singing along softly.",
      "tag": "adventures",
      "aspectRatio": "portrait"
  },
  {
      "id": 116,
      "type": "image",
      "src": "assets/photos/PXL_20230727_084259092.LONG_EXPOSURE-01.COVER_Original.jpg",
      "title": "Eternity in a Millisecond \u23f3",
      "caption": "Even as the world rushes by in a blur, you remain my stillness, my clarity, and my constant.",
      "tag": "adventures",
      "aspectRatio": "portrait"
  },
  {
      "id": 117,
      "type": "video",
      "src": "assets/videos/PXL_20230825_130207264.mp4",
      "poster": "assets/posters/PXL_20230825_130207264.jpg",
      "title": "August Breeze & Warm Embrace \ud83c\udf43",
      "caption": "Feeling the summer breeze and holding your gentle hands\u2014peace doesn't get any purer than this.",
      "tag": "whole-world",
      "aspectRatio": "portrait"
  },
  {
      "id": 118,
      "type": "image",
      "src": "assets/photos/PXL_20230727_085453793.PORTRAIT_Original.jpg",
      "title": "The Eyes That Hold My Universe \ud83d\udd2e",
      "caption": "One look into your eyes and every question I ever had about destiny was answered forever.",
      "tag": "beginning",
      "aspectRatio": "portrait"
  },
  {
      "id": 119,
      "type": "video",
      "src": "assets/videos/PXL_20230825_150313502.mp4",
      "poster": "assets/posters/PXL_20230825_150313502.jpg",
      "title": "Radiant Sunlight Energy \u2600\ufe0f",
      "caption": "You literally light up whatever room you step into. Being your partner is my ultimate pride.",
      "tag": "favorites",
      "aspectRatio": "portrait"
  },
  {
      "id": 120,
      "type": "image",
      "src": "assets/photos/PXL_20230727_085458372.PORTRAIT_Original.jpg",
      "title": "Gentle Grace & Sweet Devotion \ud83c\udf37",
      "caption": "The tender way you care for everyone around you inspires me to be a better man every single day.",
      "tag": "whole-world",
      "aspectRatio": "portrait"
  },
  {
      "id": 121,
      "type": "video",
      "src": "assets/videos/PXL_20230825_162115512.mp4",
      "poster": "assets/posters/PXL_20230825_162115512.jpg",
      "title": "Afternoon Softness & Calm \u2601\ufe0f",
      "caption": "Quiet moments in the shade, resting our heads together, knowing we have all the time in the world.",
      "tag": "unfiltered",
      "aspectRatio": "portrait"
  },
  {
      "id": 122,
      "type": "image",
      "src": "assets/photos/PXL_20230807_091002966.PORTRAIT_Original.jpg",
      "title": "High Summer Adventures \ud83c\udf3b",
      "caption": "Exploring hidden corners and green valleys with you makes every ordinary road feel magical.",
      "tag": "adventures",
      "aspectRatio": "portrait"
  },
  {
      "id": 123,
      "type": "video",
      "src": "assets/videos/PXL_20230826_110947837.mp4",
      "poster": "assets/posters/PXL_20230826_110947837.jpg",
      "title": "Wandering Side by Side \ud83d\udc3e",
      "caption": "Every step taken with you feels purposeful. You give my journey meaning, direction, and warmth.",
      "tag": "adventures",
      "aspectRatio": "portrait"
  },
  {
      "id": 124,
      "type": "image",
      "src": "assets/photos/PXL_20230811_100401726.PORTRAIT_Original.jpg",
      "title": "Your Sweet Morning Glow \u2615",
      "caption": "Fresh air, morning sunshine, and your soft smile\u2014nothing in this life will ever top this.",
      "tag": "unfiltered",
      "aspectRatio": "portrait"
  },
  {
      "id": 125,
      "type": "video",
      "src": "assets/videos/PXL_20230826_111137590.mp4",
      "poster": "assets/posters/PXL_20230826_111137590.jpg",
      "title": "You, Always and Forever \ud83d\udc96",
      "caption": "From the very first second I saw you, there was never any doubt. It has always been you.",
      "tag": "beginning",
      "aspectRatio": "portrait"
  },
  {
      "id": 126,
      "type": "image",
      "src": "assets/photos/PXL_20230825_125500888.PORTRAIT_Original.jpg",
      "title": "August Romance in Bloom \ud83c\udf3a",
      "caption": "Summer days may fade into autumn, but my devotion to you only deepens with every sunrise.",
      "tag": "favorites",
      "aspectRatio": "portrait"
  },
  {
      "id": 127,
      "type": "video",
      "src": "assets/videos/PXL_20230827_053510366.LS.mp4",
      "poster": "assets/posters/PXL_20230827_053510366.LS.jpg",
      "title": "Early Morning Serenity \ud83c\udf05",
      "caption": "The world is asleep, but our love is awake and peaceful. Waking up to you is heaven on earth.",
      "tag": "whole-world",
      "aspectRatio": "portrait"
  },
  {
      "id": 128,
      "type": "image",
      "src": "assets/photos/PXL_20230825_150058110.PORTRAIT_Original.jpg",
      "title": "You Make Everything Effortless \ud83d\udc95",
      "caption": "Being with you is as natural as breathing. There is nowhere else I'd rather be.",
      "tag": "whole-world",
      "aspectRatio": "portrait"
  },
  {
      "id": 129,
      "type": "video",
      "src": "assets/videos/PXL_20240309_090533711.mp4",
      "poster": "assets/posters/PXL_20240309_090533711.jpg",
      "title": "Spring Sunshine Walk \ud83c\udf37",
      "caption": "Flowers blooming in the park, but none of them can match the radiance of my sweet Bebo.",
      "tag": "favorites",
      "aspectRatio": "portrait"
  },
  {
      "id": 130,
      "type": "image",
      "src": "assets/photos/PXL_20230826_075721772_Original.jpg",
      "title": "Unscripted Soul Connection \ud83e\udd50",
      "caption": "Just quiet moments over breakfast, exchanging secret smiles that only the two of us understand.",
      "tag": "unfiltered",
      "aspectRatio": "portrait"
  },
  {
      "id": 131,
      "type": "video",
      "src": "assets/videos/PXL_20240310_073116466.mp4",
      "poster": "assets/posters/PXL_20240310_073116466.jpg",
      "title": "Morning Coffee & Soft Kisses \u2615",
      "caption": "Sleepy eyes, tangled blankets, and sweet good mornings\u2014these are the riches of my life.",
      "tag": "unfiltered",
      "aspectRatio": "portrait"
  },
  {
      "id": 132,
      "type": "image",
      "src": "assets/photos/PXL_20240309_075140514.PORTRAIT_Original.jpg",
      "title": "Springtime Sunshine & Soft Kisses \ud83c\udf3c",
      "caption": "With you, winter always ends and spring always arrives. You bring color back into my world.",
      "tag": "favorites",
      "aspectRatio": "portrait"
  },
  {
      "id": 133,
      "type": "video",
      "src": "assets/videos/Snapchat-1592424298.mp4",
      "poster": "assets/posters/Snapchat-1592424298.jpg",
      "title": "Our Goofy Little Universe \ud83d\udc7d",
      "caption": "No filters can capture just how fun, wild, and hilarious our connection truly is.",
      "tag": "unfiltered",
      "aspectRatio": "portrait"
  },
  {
      "id": 134,
      "type": "image",
      "src": "assets/photos/PXL_20240309_085239303.PORTRAIT_Original.jpg",
      "title": "Chasing Sunbeams With You \ud83c\udfc3\u200d\u2642\ufe0f",
      "caption": "Running toward tomorrow with your hand held tightly in mine\u2014the adventure of a lifetime.",
      "tag": "adventures",
      "aspectRatio": "portrait"
  },
  {
      "id": 135,
      "type": "video",
      "src": "assets/videos/Snapchat-1883648215.mp4",
      "poster": "assets/posters/Snapchat-1883648215.jpg",
      "title": "Cute Faces & Stolen Kisses \ud83d\udc8b",
      "caption": "Quick video check-ins that made my whole day ten thousand times brighter.",
      "tag": "beginning",
      "aspectRatio": "portrait"
  },
  {
      "id": 136,
      "type": "image",
      "src": "assets/photos/a552b93f-0085-41d1-8e1f-37313199fc06_Original.jpg",
      "title": "Cosmic Soulmate Snapshot \ud83d\udcf8",
      "caption": "Two souls bound across space and time, locked together in an unbreakable frequency.",
      "tag": "beginning",
      "aspectRatio": "portrait"
  },
  {
      "id": 137,
      "type": "video",
      "src": "assets/videos/VID-20230713-WA0005.mp4",
      "poster": "assets/posters/VID-20230713-WA0005.jpg",
      "title": "Captured Heartbeat Moments \ud83d\udc93",
      "caption": "A quick clip that captures everything I cherish about your warmth, your eyes, and your voice.",
      "tag": "whole-world",
      "aspectRatio": "portrait"
  },
  {
      "id": 138,
      "type": "image",
      "src": "assets/photos/moment_c5c4dd992bee44918803b66e575be708_1694126187177_Original.jpg",
      "title": "Unfiltered Magic in the Chaos \ud83d\udcab",
      "caption": "In a noisy world full of distractions, your laughter is the only melody that matters to me.",
      "tag": "unfiltered",
      "aspectRatio": "landscape"
  },
  {
      "id": 139,
      "type": "video",
      "src": "assets/videos/VID-20230713-WA0006.mp4",
      "poster": "assets/posters/VID-20230713-WA0006.jpg",
      "title": "A Replay for Every Bad Day \ud83d\udcfc",
      "caption": "Whenever things feel tough, I watch this video and instantly remember that I am the luckiest guy alive.",
      "tag": "favorites",
      "aspectRatio": "portrait"
  },
  {
      "id": 140,
      "type": "image",
      "src": "assets/photos/original_81f61170-2ca5-4e92-a6ba-d98a450690a8_PXL_20230811_101941925.PORTRAIT_Original.jpg",
      "title": "My Crown & My Forever Love \ud83d\udc51",
      "caption": "You are my queen, my best friend, and my greatest blessing. I will love you until the end of time.",
      "tag": "favorites",
      "aspectRatio": "portrait"
  },
  {
      "id": 141,
      "type": "video",
      "src": "assets/videos/VID-20241116-WA0000.mp4",
      "poster": "assets/posters/VID-20241116-WA0000.jpg",
      "title": "Cozy Winter Snuggles \ud83e\udde3",
      "caption": "Cold weather outside, but complete warmth inside because I have you by my side.",
      "tag": "adventures",
      "aspectRatio": "portrait"
  },
  {
      "id": 142,
      "type": "video",
      "src": "assets/videos/a91a2031-5993-44d4-b058-3080f0943160.mp4",
      "poster": "assets/posters/a91a2031-5993-44d4-b058-3080f0943160.jpg",
      "title": "The Greatest Journey of My Life \ud83d\ude80",
      "caption": "Traveling with you is an infinite adventure. Here's to a thousand more destinations with my soulmate.",
      "tag": "adventures",
      "aspectRatio": "portrait"
  },
  {
      "id": 143,
      "type": "video",
      "src": "assets/videos/ab962ef3-6f9f-44a9-b28d-83fdbd4b9666.mp4",
      "poster": "assets/posters/ab962ef3-6f9f-44a9-b28d-83fdbd4b9666.jpg",
      "title": "Two Souls, One Destined Orbit \ud83d\udcab",
      "caption": "Gravity pulled our paths together, and nothing in this cosmos will ever pull us apart.",
      "tag": "favorites",
      "aspectRatio": "portrait"
  },
  {
      "id": 144,
      "type": "video",
      "src": "assets/videos/c2026ca2-f1fb-4146-90f4-30e5fd894247.mp4",
      "poster": "assets/posters/c2026ca2-f1fb-4146-90f4-30e5fd894247.jpg",
      "title": "Eternal Flame of My Life \ud83d\udd25",
      "caption": "The spark that started our fire will burn bright and warm forever and always.",
      "tag": "beginning",
      "aspectRatio": "portrait"
  }
];
export const memoriesData = MEDIA_ITEMS;
