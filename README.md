# OpportunityFlow

## Overview

OpportunityFlow is an AI-powered SaaS platform that helps startup founders discover, filter, and track funding opportunities from across the internet.

Instead of manually searching dozens of websites every week, founders receive personalized opportunities that match their startup profile, funding stage, industry, and location.

The goal is to save founders time while increasing their chances of discovering relevant grants, accelerators, incubators, competitions, fellowships, investors, and other funding programs.

---

# Mission

Help every founder discover the right opportunity at the right time.

---

# Target Users

Primary users:

* Early-stage startup founders
* Solo founders
* Technical founders
* Student entrepreneurs
* Startup teams looking for funding

Future expansion:

* Freelancers
* Agencies
* Developers
* Researchers
* Job seekers
* Other professionals searching for opportunities

---

# MVP Goals

The MVP focuses on solving one core problem:

> Finding relevant funding opportunities quickly.

The first version should be simple, fast, and useful.

---

# MVP Features

## Authentication

* User registration
* Login
* Logout
* Protected dashboard

---

## Founder Profile

Users can configure:

* Startup name
* Industry
* Country
* Startup stage
* Team size
* Funding stage
* Website (optional)

---

## Opportunity Database

Store opportunities including:

* Title
* Organization
* Description
* Category
* Deadline
* Country
* Eligibility
* Funding amount
* Official URL
* Source

---

## Opportunity Discovery

Display opportunities with:

* Search
* Filters
* Sorting
* Pagination

---

## AI Matching

Recommend opportunities based on the founder profile.

The matching logic should prioritize:

* Industry
* Startup stage
* Country
* Eligibility
* Funding type

---

## Opportunity Details

Each opportunity page should display:

* Full description
* Eligibility
* Deadline
* Funding information
* Official application link

---

## Saved Opportunities

Users can bookmark opportunities.

---

## Dashboard

Dashboard should show:

* Recommended opportunities
* Saved opportunities
* Upcoming deadlines
* Recently added opportunities

---

# Future Features

* AI opportunity summaries
* AI application assistant
* Deadline reminders
* Email notifications
* Calendar integration
* Opportunity scoring
* Application tracking
* Team workspaces
* Admin dashboard
* Web scraping automation
* Opportunity verification
* Analytics
* Stripe subscriptions

---

# Tech Stack

Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

UI
* Shadcn UI / Shadcn libraries

Backend

* Next.js API Routes

Database

* PostgreSQL

ORM

* Prisma

Authentication

* Better Auth

Deployment

* Vercel

Version Control

* Git + GitHub

---

# Design Principles

The application should always be:

* Fast
* Clean
* Minimal
* Modern
* Responsive
* Accessible
* Scalable
* Maintainable

---

# Development Principles

When implementing features:

* Keep components reusable.
* Write clean TypeScript.
* Avoid duplicated code.
* Prefer readability over cleverness.
* Follow modern React patterns.
* Use server components where appropriate.
* Keep business logic separated from UI.
* Build for scalability from the beginning.

---

# Folder Structure

```
app/
components/
features/
lib/
services/
hooks/
types/
prisma/
public/
```

Folders should remain organized and modular.

---

# Coding Standards

* Use TypeScript everywhere.
* Use descriptive variable names.
* Keep components small.
* Prefer composition over duplication.
* Document complex logic.
* Keep files focused on one responsibility.

---

# Cursor Instructions

Assume this project is a production-ready SaaS.

When generating code:

* Follow the existing architecture.
* Prefer reusable components.
* Explain architectural decisions before major changes.
* Do not generate unnecessary complexity.
* Keep the MVP simple.
* Preserve scalability.
* Avoid breaking existing features.
* Use best practices for Next.js, React, TypeScript, Prisma, and PostgreSQL.

---

# Long-Term Vision

OpportunityFlow aims to become the platform where ambitious founders discover every important opportunity available to grow their startups.

The MVP focuses on funding opportunities, but the long-term vision is to expand into a comprehensive opportunity discovery platform for professionals across multiple industries.
