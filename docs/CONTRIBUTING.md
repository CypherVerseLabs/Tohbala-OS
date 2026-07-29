# Contributing to Tohbala OS

## Overview

Thank you for your interest in contributing to Tohbala OS.

Tohbala OS is a business operating system built to help organizations manage opportunities, relationships, technology solutions, and future AI-powered business intelligence.

This document explains the development workflow, coding standards, and contribution process.

---

# Development Philosophy

Contributions should follow these principles:

- Maintain clean architecture
- Write understandable code
- Protect business data
- Keep features scalable
- Document important changes
- Avoid unnecessary complexity

---

# Technology Stack

Tohbala OS is built with:

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Shadcn UI
- Lucide Icons

## Backend

- Supabase
- PostgreSQL
- Supabase Authentication

## State Management

- React Context API

Current contexts:

```
AuthContext

DataContext

AppContext
```

---

# Project Structure

```
src

├── components
│
├── contexts
│
├── services
│
├── pages
│
├── types
│
├── config
│
├── hooks
│
└── lib
```

---

# Getting Started

## Requirements

Install:

- Node.js
- npm
- Git

Recommended:

```
Node.js 20+
npm 10+
```

---

# Setup Development Environment

Clone repository:

```bash
git clone https://github.com/CypherVerseLabs/Tohbala-OS.git
```

Enter project:

```bash
cd Tohbala-OS
```

Install dependencies:

```bash
npm install
```

Create environment file:

```
.env
```

Add:

```env
VITE_SUPABASE_URL=your_supabase_url

VITE_SUPABASE_ANON_KEY=your_supabase_key
```

Start development server:

```bash
npm run dev
```

---

# Branch Strategy

Development uses feature branches.

Recommended format:

```
feature/feature-name

bugfix/issue-name

docs/document-name

refactor/component-name
```

Examples:

```
feature/ai-scanner

bugfix/pipeline-status

docs/api-update
```

---

# Development Workflow

Standard workflow:

```
Create Branch

↓

Develop Feature

↓

Test Changes

↓

Commit Changes

↓

Create Pull Request

↓

Review

↓

Merge
```

---

# Code Standards

## TypeScript

Use TypeScript types whenever possible.

Preferred:

```ts
const company: Company = data;
```

Avoid:

```ts
const company:any = data;
```

---

## React Components

Components should:

- Have clear names
- Use TypeScript interfaces
- Keep logic separated
- Avoid unnecessary complexity

Example:

```
CompanyCard.tsx

OpportunityCard.tsx

PipelineBoard.tsx
```

---

# Naming Conventions

## Components

Use PascalCase:

```
CompanyManager

OpportunityCard

ActivityTimeline
```

---

## Functions

Use camelCase:

```
createCompany()

updateOpportunity()

loadActivities()
```

---

## Files

Components:

```
CompanyForm.tsx
```

Services:

```
companyService.ts
```

Contexts:

```
DataContext.tsx
```

---

# Service Layer Guidelines

Database communication should happen through services.

Example:

```
Component

↓

Context

↓

Service

↓

Supabase
```

Avoid direct database calls inside components.

---

# Database Changes

Database changes should include:

- Schema updates
- Migration files
- Documentation updates

Before changing tables:

Review:

```
DATABASE_SCHEMA.md
```

---

# Adding New Features

When adding a feature:

Update:

## Code

Implementation files

## Documentation

Relevant docs:

```
ARCHITECTURE.md

DATABASE_SCHEMA.md

API_DOCUMENTATION.md

ROADMAP.md
```

## Testing

Verify:

- Existing features still work
- Data saves correctly
- Authentication remains secure

---

# Commit Guidelines

Use descriptive commits.

Recommended format:

```
type: description
```

Examples:

```
feat: add AI opportunity scanner foundation

fix: correct pipeline status update

docs: update database schema

refactor: improve company service
```

---

# Pull Requests

Pull requests should include:

## Description

Explain:

- What changed
- Why it changed
- How it was tested

---

## Checklist

Before submitting:

```
☐ Application builds successfully

☐ No TypeScript errors

☐ Feature tested locally

☐ Documentation updated

☐ No sensitive information included
```

---

# Security Guidelines

Never commit:

```
.env files

API keys

Passwords

Private credentials

Service role keys
```

Only use:

```
VITE_SUPABASE_ANON_KEY
```

in frontend environments.

---

# Testing Guidelines

Before merging:

Test:

- Authentication
- Database operations
- Forms
- Pipeline movement
- Activity creation
- Responsive layouts

---

# Reporting Issues

When reporting a bug include:

## Description

What happened?

## Expected Behavior

What should happen?

## Steps To Reproduce

Example:

```
1. Login
2. Open Opportunities
3. Create opportunity
4. Save
```

## Environment

Include:

- Browser
- Operating system
- Application version

---

# Feature Requests

Feature requests should explain:

- Problem being solved
- User benefit
- Expected workflow
- Possible implementation approach

---

# Future Contribution Areas

Future contributors may work on:

- AI Opportunity Scanner
- Business intelligence engine
- Automation workflows
- Integrations
- Reporting systems
- Enterprise permissions
- Multi-tenant architecture

---

# Maintainer

Project:

```
Tohbala OS
```

Organization:

```
CypherVerse Labs
```

Version:

```
v0.2.0
```