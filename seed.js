require("dotenv").config();
const mongoose = require("mongoose");
const Blog = require("./models/Blog");

const sampleBlogs = [
  {
    title: "India vs Australia – Thriller at Melbourne",
    slug: "india-vs-australia-thriller-at-melbourne",
    excerpt: "A nail-biting finish as India chased 280 in the final over. Read the full breakdown and key turning points.",
    content: `
## The Chase Begins

India needed 280 runs in 50 overs on a sporting MCG pitch. The openers started cautiously, with Rohit Sharma and Shubman Gill putting on 65 runs before the first wicket fell.

## Middle Order Magic

Virat Kohli walked in at number 3 and played a masterclass innings of 89 runs from 94 balls. His partnership with KL Rahul was the backbone of the chase.

## The Final Over Drama

With 14 needed off the last over, Hardik Pandya hit two sixes to seal a remarkable victory. The crowd of 90,000 witnessed one of cricket's most dramatic finishes.

## Key Stats
- India: 281/6 (49.4 overs)
- Australia: 280/8 (50 overs)
- Player of the Match: Virat Kohli (89 runs)
    `,
    category: "Match Analysis",
    tags: ["India", "Australia", "ODI", "Melbourne", "Chase"],
    author: "Ravi Sharma",
    coverImage: "https://placehold.co/800x400/16a34a/white?text=IND+vs+AUS",
  },
  {
    title: "Jasprit Bumrah: The Art of Reverse Swing",
    slug: "jasprit-bumrah-the-art-of-reverse-swing",
    excerpt: "How Bumrah mastered reverse swing to become the world's most feared fast bowler.",
    content: `
## The Unique Action

Jasprit Bumrah's action defies traditional biomechanics. His yorker, delivered from a scrambled seam position, consistently clocks 145 km/h and has dismissed the best batters in the world.

## Reverse Swing Secrets

Bumrah's ability to get the old ball to reverse swing comes from years of practice in the Indian nets. He angles the ball at 45 degrees during delivery, creating maximum air resistance on one side.

## Numbers Don't Lie

With over 160 Test wickets at an average under 22, Bumrah stands among the greatest fast bowlers in cricket history. His economy rate in ODIs of 4.6 is remarkable for a pace bowler.
    `,
    category: "Player Spotlight",
    tags: ["Bumrah", "Bowling", "India", "Fast Bowling"],
    author: "Ankit Mehta",
    coverImage: "https://placehold.co/800x400/1e3a5f/white?text=Bumrah+Spotlight",
  },
  {
    title: "IPL 2026: Teams to Watch This Season",
    slug: "ipl-2026-teams-to-watch-this-season",
    excerpt: "A comprehensive preview of all 10 IPL franchises and their chances in the upcoming season.",
    content: `
## Mumbai Indians

The five-time champions have rebuilt their squad around Hardik Pandya's leadership. New signings include three overseas pacers who could be game-changers on Mumbai's flat pitches.

## Chennai Super Kings

MS Dhoni's final season? CSK have assembled a strong squad with a mix of experience and youth. Ruturaj Gaikwad leads the batting charge.

## Royal Challengers Bengaluru

Virat Kohli and a revamped bowling attack could finally bring RCB their first IPL title. Their auction strategy focused on quality pace bowling.

## Dark Horses: Lucknow Super Giants

With KL Rahul at the helm and a balanced squad, LSG could surprise everyone this season.
    `,
    category: "Series Preview",
    tags: ["IPL", "T20", "Preview", "2026"],
    author: "Priya Nair",
    coverImage: "https://placehold.co/800x400/7c3aed/white?text=IPL+2026+Preview",
  },
  {
    title: "Why Test Cricket Will Never Die",
    slug: "why-test-cricket-will-never-die",
    excerpt: "Despite the T20 revolution, Test cricket continues to produce the most compelling cricket stories.",
    content: `
## The Greatest Format

Five days, two innings, and the full range of cricket's skills on display. Test cricket is the ultimate examination of a player's technique, temperament, and character.

## Recent Classic Tests

The Ashes series of 2025 reminded the world why Test cricket is irreplaceable. Ben Stokes's leadership and the 'Bazball' philosophy have reinvigorated the longest format.

## The New Generation

Young players like Shubman Gill, Yashasvi Jaiswal, and Harry Brook have embraced Test cricket with an attacking mindset that makes the format more watchable than ever.
    `,
    category: "Opinion",
    tags: ["Test Cricket", "Ashes", "Opinion", "Tradition"],
    author: "David Thompson",
    coverImage: "https://placehold.co/800x400/92400e/white?text=Test+Cricket",
  },
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    await Blog.deleteMany({});
    console.log("🗑️  Cleared existing blogs");

    await Blog.insertMany(sampleBlogs);
    console.log(`🌱 Seeded ${sampleBlogs.length} sample cricket blogs`);

    mongoose.connection.close();
    console.log("✅ Done! Run your server and visit http://localhost:5000/api/blogs");
  } catch (err) {
    console.error("❌ Seed error:", err.message);
    process.exit(1);
  }
}

seedDB();