# Nairobi MotorHub

### A Digital Platform for Automotive Garages

**Developed by VincentAutoTech**

Nairobi MotorHub is a web-based automotive garage platform designed to help automotive service providers establish a professional online presence while making it easier for vehicle owners to discover services, request appointments, and contact garages.

## Project Overview

Many independent garages rely heavily on physical visits, referrals, and phone calls to reach customers.

Nairobi MotorHub aims to bridge this gap by providing a digital platform where customers can explore automotive services and submit service enquiries or booking requests.

The project demonstrates how modern web technologies can be applied to solve practical challenges in the automotive service industry.

## Key Features

- Responsive website design for desktop and mobile devices.
- Automotive service information and presentation.
- Garage introduction and business information.
- Service booking form.
- Customer contact and enquiry form.
- WhatsApp and telephone contact options.
- Supabase database integration.
- Row Level Security (RLS) for database access control.

## Technology Stack

| Technology | Purpose |
|---|---|
| React | Frontend user interface |
| TypeScript | Type-safe JavaScript development |
| Vite | Development server and build tool |
| Tailwind CSS | Interface styling |
| Lucide React | Icons |
| Supabase | Database and backend services |
| Git | Version control |
| GitHub | Source code hosting |
| Vercel | Deployment and hosting |

## Project Structure

```text
project/
├── public/
├── src/
│   ├── components/
│   ├── config/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── supabase/
│   └── migrations/
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.ts
```

## Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/kiptoovincent2019/nairobi-motorhub.git
```

### 2. Enter the project directory

```bash
cd nairobi-motorhub
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root using `.env.example` as a guide.

Add your Supabase project credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Never commit your actual `.env` file or expose your Supabase service role key.

### 5. Configure the database

Apply the SQL migration located in:

```text
supabase/migrations/
```

Make sure the required tables and Row Level Security policies are configured in your Supabase project.

### 6. Start the development server

```bash
npm run dev
```

Open the local address displayed in your terminal.

## Production Build

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

Additional checks:

```bash
npm run lint
npm run typecheck
```

## Deployment

The project can be deployed using Vercel.

Recommended configuration:

| Setting | Value |
|---|---|
| Framework | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |

Configure the following environment variables in Vercel:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

Ensure the Supabase database migration has been applied before testing live form submissions.

## Future Development

Potential improvements include:

- Garage owner dashboard.
- Booking management system.
- Customer notification functionality.
- Email notifications.
- Multiple garage registration.
- Garage discovery and search.
- Customer reviews and ratings.
- Additional spam protection.

## Developer

**KIPTOO VINCENT**

Automotive Engineering | Software Development | Automotive Technology

- GitHub: https://github.com/kiptoovincent2019
- LinkedIn: https://www.linkedin.com/in/kiptoo-vincent-7322aa2a
- Portfolio: https://kiptoovincent2019.github.io/portfolio/

---

*Built with a vision of connecting automotive engineering and technology to solve real-world problems.*