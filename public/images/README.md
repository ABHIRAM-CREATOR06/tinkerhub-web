# Local Image Assets

This folder is the **single source of truth for every image** on the site. The
React components in `/components` do **not** call any third-party image API —
they all read from here.

## Folders

| Folder              | Used by                                    | Naming convention                     |
|---------------------|--------------------------------------------|---------------------------------------|
| `team/`             | `CoreTeam` — campus leadership cards       | `<id>.jpg` (e.g. `abhiram.jpg`)       |
| `spotlight/`        | `Spotlight` — maker / volunteer spotlights | `<id>.jpg` (e.g. `1.jpg`)             |
| `hero/`             | `Hero` — polaroid decor cards              | `maker-of-month.jpg`, `campus.jpg`    |

## Adding a new photo

1. Drop the file into the right folder, ideally as a square `.jpg` (≥ 400×400
   looks best on the polaroid cards).
2. Update the matching JSON in `/data/...json` so the `image` field points to
   the local path:

   ```json
   "image": "/images/team/abhiram.jpg"
   ```

3. That's it. The `LocalImage` component handles the rest.

## Fallback behaviour

If the file is missing or the path is empty, the `LocalImage` component
falls back to the team's brand gradient + the person's initials. You'll never
see a broken-image icon, even before the real photo lands.

## Why local?

- No third-party API in the critical render path
- No rate-limits, no CORS, no privacy surprises
- Real photos of real people, not generic bot avatars
- Works fully offline
