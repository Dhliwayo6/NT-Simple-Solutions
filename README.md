# NT Simple Solutions Construction

This is a modern, premium, and fully responsive website for NT Simple Solutions Construction, built using React, Vite, and vanilla CSS.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Environment Variables

This project uses Formspree for handling quote requests. You need to configure the following environment variable:

- `VITE_FORMSPREE_ID`: The Formspree Form ID (e.g., `abcdefgh`).

### Local Development
Create a `.env` file in the root directory and add:
```env
VITE_FORMSPREE_ID=your_formspree_id
```

### Production (Netlify / Vercel)
Add `VITE_FORMSPREE_ID` as an environment variable in your hosting provider's dashboard settings.
