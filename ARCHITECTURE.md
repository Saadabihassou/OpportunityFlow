# OpportunityFlow — Folder Architecture

This document describes the project structure, conventions, and extension points.

---

## Design Goals

1. **MVP-first** — Only folders needed for Milestones 1–10; no premature abstractions.
2. **Feature-based** — Domain logic lives in `features/`, not scattered across the app.
3. **Separation of concerns** — Routes (`app/`), UI (`components/`), business logic (`services/`), integrations (`lib/`).
4. **Next.js App Router native** — Route groups, Server Components, Server Actions, and colocated API routes.
5. **Future-ready** — Clear homes for admin, billing, AI, and ingestion without building them now.

---

## Top-Level Overview

```
OpportunityFlow/
├── app/                  # Routes, layouts, API handlers
├── components/           # Shared, reusable UI (design system + composites)
├── features/             # Domain modules (auth, opportunities, profile, …)
├── lib/                  # Third-party clients & shared utilities
├── services/             # Business logic & data access
├── hooks/                # Shared React hooks
├── types/                # Shared TypeScript types
├── config/               # App-wide constants & env validation
├── prisma/               # Database schema & migrations
├── public/               # Static assets
└── middleware.ts         # Auth guards & request preprocessing
```

---

## `app/` — Routing Layer

Uses **route groups** to separate layouts without affecting URLs.

| Group | Purpose |
|-------|---------|
| `(marketing)` | Public landing pages |
| `(auth)` | Login, register (minimal layout) |
| `(dashboard)` | Authenticated app shell (sidebar, navbar) |

```
app/
├── (marketing)/
│   ├── layout.tsx
│   └── page.tsx
├── (auth)/
│   ├── layout.tsx
│   ├── login/page.tsx
│   └── register/page.tsx
├── (dashboard)/
│   ├── layout.tsx          # Protected shell
│   ├── dashboard/page.tsx
│   ├── opportunities/
│   │   ├── page.tsx        # List + search + filters
│   │   └── [id]/page.tsx   # Detail view
│   ├── saved/page.tsx
│   └── profile/page.tsx
├── api/
│   ├── auth/[...all]/route.ts   # Better Auth handler
│   ├── opportunities/route.ts
│   └── saved/route.ts
├── layout.tsx              # Root layout
├── globals.css
├── loading.tsx
├── error.tsx
└── not-found.tsx
```

**Why route groups?** Marketing, auth, and dashboard need different layouts. Groups keep layouts isolated while URLs stay clean (`/dashboard`, not `/dashboard-group/dashboard`).

**Why thin pages?** Pages fetch data and compose feature components. Business logic stays in `services/` and `features/`.

---

## `components/` — Shared UI

Split by reusability, not by feature.

```
components/
├── ui/           # Shadcn primitives (Button, Input, Card, …)
├── layout/       # Navbar, Sidebar, Footer, PageHeader
├── opportunities/ # Cross-route opportunity display (cards, badges)
└── shared/       # LoadingSpinner, EmptyState, ErrorMessage, Pagination
```

**Rule:** If a component is used by one feature only, put it in `features/<name>/components/`. Move to `components/` when reused across features.

---

## `features/` — Domain Modules

Each feature is a self-contained module for a user-facing capability.

```
features/
├── auth/
│   ├── components/     # LoginForm, RegisterForm
│   ├── actions/        # Server Actions (signIn, signOut)
│   └── schemas/        # Zod validation for auth forms
├── profile/
│   ├── components/
│   ├── actions/
│   └── schemas/
├── opportunities/
│   ├── components/     # OpportunityList, FilterBar, SearchBar
│   ├── actions/
│   └── schemas/
├── saved/
│   ├── components/
│   └── actions/
├── dashboard/
│   └── components/     # Widgets: Recommended, Deadlines, Recent
└── matching/
    └── matching.ts       # AI / rule-based matching (Milestone 7)
```

**Why features/?** PROJECT_RULES require feature-based organization. Colocating components, actions, and schemas per domain makes milestones independent and teams can work in parallel later.

---

## `services/` — Business Logic

Pure functions that talk to the database. No React, no HTTP.

```
services/
├── opportunity.service.ts
├── profile.service.ts
├── saved.service.ts
└── matching.service.ts
```

**Why separate from features?** Services can be called from Server Components, Server Actions, and API routes without importing React. Easy to unit test and reuse when adding admin or background jobs.

---

## `lib/` — Integrations & Utilities

```
lib/
├── auth/
│   ├── client.ts         # Better Auth client (browser)
│   └── server.ts         # Better Auth instance (server)
├── db/
│   └── prisma.ts         # Prisma singleton
├── validations/          # Shared Zod schemas (if cross-feature)
└── utils.ts              # cn(), formatters, helpers
```

**Why `lib/db/prisma.ts`?** Prevents multiple Prisma client instances in development (Next.js hot reload).

---

## `types/` — Shared Types

```
types/
├── index.ts
├── opportunity.ts
├── profile.ts
└── api.ts                # API request/response shapes
```

Prisma generates model types; `types/` holds UI/API-specific types and enums not in the schema.

---

## `hooks/` — Shared React Hooks

```
hooks/
├── use-debounce.ts
└── use-media-query.ts
```

Feature-specific hooks live in `features/<name>/hooks/`.

---

## `config/` — Constants & Env

```
config/
├── site.ts               # App name, metadata defaults
└── env.ts                # Validated environment variables (Zod)
```

Centralizes env validation so misconfiguration fails at startup.

---

## `prisma/` — Database

```
prisma/
├── schema.prisma
└── migrations/
```

Core models for MVP: User (via Better Auth), FounderProfile, Opportunity, SavedOpportunity.

---

## Data Flow

```
Browser → app/page.tsx (Server Component)
       → services/opportunity.service.ts
       → lib/db/prisma.ts
       → PostgreSQL
```

Mutations:

```
Browser → features/*/actions/*.ts (Server Action)
       → services/*.service.ts
       → Prisma
```

Client interactivity (filters, forms):

```
Client Component → hooks / local state
                → Server Action or API route
```

---

## Extension Points (Post-MVP)

| Future feature | Where it goes |
|----------------|---------------|
| Admin dashboard | `app/(admin)/`, `features/admin/` |
| Stripe billing | `features/billing/`, `lib/stripe/` |
| Email notifications | `services/notification.service.ts`, `lib/email/` |
| Web scraping | `services/ingestion/`, cron in `app/api/cron/` |
| Team workspaces | New Prisma models + `features/workspaces/` |
| Public API | `app/api/v1/` |

Add folders when the feature starts — not before.

---

## Import Conventions

Use the `@/*` path alias:

```ts
import { Button } from "@/components/ui/button";
import { getOpportunities } from "@/services/opportunity.service";
import { auth } from "@/lib/auth/server";
import type { OpportunityFilters } from "@/types/opportunity";
```

---

## File Naming

| Kind | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `OpportunityCard.tsx` |
| Services | kebab-case + `.service.ts` | `opportunity.service.ts` |
| Actions | kebab-case + `.actions.ts` | `profile.actions.ts` |
| Schemas | kebab-case + `.schema.ts` | `profile.schema.ts` |
| Hooks | `use-` prefix | `use-debounce.ts` |
| Types | kebab-case | `opportunity.ts` |
