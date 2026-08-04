# Revenue OS Technical Specification

## 1. System Overview

Revenue OS is a modular SaaS revenue management application built inside Tohbala OS.

Architecture:

```
React Frontend
        |
        |
Supabase Client
        |
        |
PostgreSQL Database
        |
        |
Supabase Auth
```

---

# 2. Frontend Architecture

## Framework

React + TypeScript

Purpose:

* Component-driven UI
* Type safety
* Scalable module architecture

---

## UI Framework

Tailwind CSS

Used for:

* Layout
* Responsive design
* Theme management

Component library:

shadcn/ui

---

## Icons

Lucide React

---

# 3. Application Modules

## Revenue Layout

Location:

```
modules/revenue/components/layout
```

Responsibilities:

* Sidebar navigation
* Header management
* Revenue workspace shell

---

## Revenue Sidebar

Responsibilities:

* Navigation
* Active route detection
* Module switching

Routes:

```
/revenue
/revenue/accounts
/revenue/pipeline
/revenue/proposals
/revenue/meetings
/revenue/forecast
/revenue/ai
/revenue/settings
```

---

## Revenue Header

Responsibilities:

* Workspace navigation
* Search
* User actions
* Quick creation actions

---

# 4. State Management

## AuthContext

Responsible for:

* Authentication state
* User session
* Profile loading
* Role checking

Provides:

```typescript
user
session
profile
role
signIn()
signUp()
signOut()
hasRole()
```

---

## DataContext

Responsible for:

* Companies
* Opportunities
* Activities

Provides:

```typescript
companies

opportunities

activities

addCompany()

updateCompany()

deleteCompany()

addOpportunity()

updateOpportunity()

deleteOpportunity()
```

---

# 5. Database Architecture

## profiles

Purpose:

Stores application user information.

Schema:

```
id
full_name
company_name
role
avatar_url
created_at
updated_at
```

Relationship:

```
profiles.id
      |
      |
auth.users.id
```

---

# companies

Stores customer organizations.

Example:

```
id
user_id
name
industry
created_at
updated_at
```

---

# opportunities

Stores revenue opportunities.

Example:

```
id
user_id
company_id
company_name
estimated_value
status
business_problem
created_at
updated_at
```

---

# activities

Stores timeline events.

Example:

```
id
user_id
company_id
opportunity_id
type
title
description
created_at
```

---

# 6. Security Architecture

## Authentication

Supabase Auth manages:

* User identity
* Sessions
* Password security

---

## Row Level Security

All revenue tables use RLS.

Example:

```sql
auth.uid() = user_id
```

This ensures:

* Users only access their own data
* Data isolation between organizations
* SaaS-ready security model

---

# 7. Service Layer

Services isolate database operations.

Example:

```
companyService

getAll()

create()

update()

remove()
```

Benefits:

* Clean components
* Easier testing
* Backend migration flexibility

---

# 8. Pipeline System

Pipeline stages:

```
research

contacted

conversation

discovery

proposal

client

lost
```

Each opportunity contains:

```
status
estimatedValue
company
activity history
```

---

# 9. Production Requirements

Before launch:

## Required

* Complete RLS policies
* Database indexes
* Error monitoring
* Environment variables
* User onboarding
* Audit logging

## Recommended

* Email notifications
* Background jobs
* Analytics tracking
* AI integrations
* API layer

---

# 10. Deployment

Frontend:

Recommended:

* Vercel
* Netlify

Backend:

* Supabase

Database:

* PostgreSQL

Environment:

```
VITE_SUPABASE_URL

VITE_SUPABASE_ANON_KEY
```

---

# 11. Development Standards

Required:

* TypeScript strict mode
* Component isolation
* Service-based data access
* No direct database calls inside UI components
* Role-based authorization

---

# 12. Product Roadmap

Phase 1:

Completed:

* Revenue dashboard
* Accounts
* Pipeline
* Opportunities
* Authentication

Phase 2:

* Team management
* Forecasting
* Notifications
* AI assistant

Phase 3:

* Automated sales workflows
* Client portal
* Enterprise integrations
