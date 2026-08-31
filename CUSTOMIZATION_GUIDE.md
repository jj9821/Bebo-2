# 💖 Digital Sanctuary Customization Guide (Maria & Bebo Edition)

This guide walks you through customizing and adding photos, videos, and narrative memories to Maria's digital sanctuary.

---

## 📸 Media Data Structure (`memories.ts` & `mediaData.js`)

All 42 memories and videos are managed in **[`memories.ts`](file:///home/jo_vellappani/bebo/memories.ts)** (TypeScript) and **[`mediaData.js`](file:///home/jo_vellappani/bebo/mediaData.js)** (Browser runtime).

### Structure of a Media Item:
```typescript
interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;          // Path to image or MP4 video URL
  poster?: string;       // Thumbnail image for video preview
  title: string;         // Headline title
  caption: string;       // Sentimental description / memory story
  tag: string;           // 'beginning' | 'whole-world' | 'adventures' | 'unfiltered' | 'favorites'
  aspectRatio: 'portrait' | 'landscape' | 'square';
}
```

### Adding New Photos or Videos:
1. Save your photos in `assets/photos/` (e.g. `assets/photos/my_photo.jpg`).
2. Save short video clips in `assets/videos/` (e.g. `assets/videos/our_reel.mp4`).
3. Update `mediaData.js` (and `memories.ts`):
```javascript
{
  id: 1,
  type: 'video',
  src: 'assets/videos/our_reel.mp4',
  poster: 'assets/photos/my_photo.jpg',
  title: 'Our Spontaneous Road Trip',
  caption: 'Driving with the windows down, singing at the top of our lungs...',
  tag: 'adventures',
  aspectRatio: 'portrait'
}
```

---

## 📖 Storytelling Spotlight Chapters

In [`index.html`](file:///home/jo_vellappani/bebo/index.html), you'll find two dedicated narrative chapters:
1. **Chapter I: "Loved You Before We Ever Began"** (`#story-beginning`): Captures the early unspoken realization of falling for Maria before day one.
2. **Chapter II: "My Whole World"** (`#story-whole-world`): Celebrates everyday magic with Bebo (morning glasses, café sunshine, dosa breakfast dates).

You can easily adjust the text directly in the HTML or in `config.js`!

---

## 🗝️ Secret Vault Passcode

- **Vault Key**: `140323` (March 14, 2023)
- Also unlocks with: `bebo`, `maria`, `forever`, `love`

---

## 🌐 Deploying to the Web

- **Vercel**: Import the GitHub repo → Click **Deploy**.
- **Netlify**: Drag & drop the `bebo` folder to [netlify.com/drop](https://app.netlify.com/drop).
- **GitHub Pages**: Go to Repo Settings → Pages → Deploy from `main` branch.
