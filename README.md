# Sports Memorabilia Shop

Premium ecommerce foundation for baseball cards, jerseys, autographs, authenticated collectibles, and rare auction inventory.

## Stack

- Next.js 15 App Router
- React 19
- Tailwind CSS
- Prisma
- Supabase/Postgres
- Stripe

## Setup

```bash
pnpm install
cp .env.example .env
pnpm prisma generate
pnpm prisma db push
pnpm dev
```

## Asset Handling

Use Git LFS for large product media:

```bash
git lfs install
git lfs track "*.jpg" "*.png" "*.webp" "*.mp4"
```

High-resolution originals belong in `assets/products/raw`. Web-optimized exports belong in `assets/products/optimized`. Only small public assets should live under `public`.

## Privacy Notes

- Do not commit real customer data, private buyer lists, or undisclosed high-value inventory.
- Keep API keys in environment variables.
- Use database row-level security for customer and order data.
- Add rate limiting before exposing search and upload APIs publicly.
- Keep private inventory docs in `docs/` out of public distribution.
