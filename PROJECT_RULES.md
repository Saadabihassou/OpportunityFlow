# OpportunityFlow Development Rules

This document provides instructions for both developers and AI assistants working on this repository.

---

# General Philosophy

OpportunityFlow is intended to become a production-quality SaaS.

Every implementation should prioritize:

* Simplicity
* Readability
* Maintainability
* Scalability

Never sacrifice code quality for short-term speed.

---

# MVP First

Always build the smallest useful solution.

Avoid:

* Overengineering
* Premature optimization
* Unnecessary abstractions

Every feature should solve a real user problem.

---

# Architecture Principles

* Modular architecture
* Reusable components
* Separation of concerns
* Feature-based organization
* Predictable folder structure

---

# TypeScript

Always:

* Use strict typing.
* Avoid `any`.
* Create reusable interfaces and types.
* Keep types organized.

---

# React

Prefer:

* Functional components
* Server Components when appropriate
* Client Components only when necessary

Keep components:

* Small
* Reusable
* Easy to test

---

# Styling

Use:

* Tailwind CSS

Guidelines:

* Mobile-first
* Consistent spacing
* Reusable utility classes
* Modern UI
* Accessible color contrast

---

# Component Guidelines

Every component should have one responsibility.

Large components should be broken into smaller reusable pieces.

Avoid deeply nested JSX.

---

# State Management

Prefer:

1. React state
2. Context
3. Server Components

Avoid unnecessary global state.

---

# Database

Use:

* PostgreSQL
* Prisma ORM

Keep database models:

* Normalized
* Simple
* Well named

---

# API Design

Keep API routes:

* RESTful
* Predictable
* Secure

Always validate inputs.

Never trust client data.

---

# Authentication

Authentication should:

* Protect private pages
* Validate sessions
* Secure user data

---

# Error Handling

Every async operation should handle:

* Loading
* Success
* Error

Users should always receive helpful feedback.

---

# Performance

Prefer:

* Server rendering
* Lazy loading
* Optimized images
* Efficient queries

Avoid unnecessary re-renders.

---

# Accessibility

Every page should support:

* Keyboard navigation
* Semantic HTML
* Proper labels
* ARIA attributes where needed

---

# Git Workflow

Small commits.

Clear commit messages.

One feature per commit whenever possible.

---

# AI Instructions

When generating code:

* Explain architectural decisions.
* Preserve existing architecture.
* Reuse existing components.
* Do not duplicate code.
* Keep solutions production-ready.
* Follow Next.js best practices.
* Follow TypeScript best practices.
* Follow React best practices.
* Keep the MVP focused.
* Ask for clarification if requirements are ambiguous.
* Favor readable code over clever code.

---

# Code Quality Checklist

Before completing any feature, verify:

* Code compiles
* No TypeScript errors
* No ESLint errors
* Responsive layout
* Accessibility maintained
* Components reusable
* Functions documented when necessary
* No duplicated logic

If any of these fail, fix them before considering the feature complete.
