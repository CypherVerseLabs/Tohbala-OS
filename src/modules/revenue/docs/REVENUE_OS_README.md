# Revenue OS

## Overview

Revenue OS is the revenue operations platform inside Tohbala OS.

It provides a centralized workspace for managing:

* Accounts
* Opportunities
* Revenue pipeline
* Proposals
* Meetings
* Forecasting
* Revenue intelligence
* AI-assisted growth workflows

Revenue OS is designed to help businesses manage their complete revenue lifecycle from prospecting through client acquisition and expansion.

---

# Core Features

## Revenue Dashboard

The command center for revenue operations.

Provides:

* Pipeline value
* Active clients
* Proposal tracking
* Discovery opportunities
* Revenue insights
* Recent activity tracking

---

## Accounts Management

Manage customer and prospect organizations.

Capabilities:

* Create accounts
* Store company information
* Track account activity
* Associate opportunities

---

## Opportunity Management

Manage revenue opportunities through the sales lifecycle.

Pipeline stages:

1. Research
2. Contacted
3. Conversation
4. Discovery
5. Proposal
6. Client
7. Lost

Features:

* Opportunity creation
* Estimated deal value
* Stage tracking
* Pipeline movement
* Activity logging

---

## Pipeline Board

Visual revenue workflow.

Features:

* Kanban-style pipeline
* Drag and drop opportunities
* Stage updates
* Revenue calculation
* Conversion tracking

---

## Revenue Intelligence

Provides operational insight into:

* Follow-up requirements
* Pipeline health
* High-value opportunities
* Revenue velocity

---

# User Roles

Revenue OS supports role-based access.

## ADMIN

Full system access.

Capabilities:

* Manage users
* Manage revenue data
* Configure settings

---

## REVENUE_MANAGER

Revenue team management.

Capabilities:

* View team pipeline
* Manage opportunities
* Monitor forecasts

---

## SALES_REP

Sales execution.

Capabilities:

* Manage assigned accounts
* Create opportunities
* Update pipeline

---

## VIEWER

Read-only access.

Capabilities:

* View dashboards
* View revenue information

---

# Authentication

Authentication is handled through Supabase Auth.

Supported features:

* Email/password authentication
* Session persistence
* Protected routes
* User profiles
* Role management

User lifecycle:

```
User Signup
      |
      v
Supabase Auth
      |
      v
Profile Creation Trigger
      |
      v
Revenue OS Access
```

---

# Data Ownership

Revenue OS is built as a multi-user SaaS platform.

Every business object is associated with a user:

```
User
 |
 +-- Companies
 |
 +-- Opportunities
 |
 +-- Activities
```

Supabase Row Level Security controls access.

---

# Technology Stack

Frontend:

* React
* TypeScript
* Vite
* Tailwind CSS
* shadcn/ui
* Lucide Icons

Routing:

* React Router

State:

* React Context API
* Custom hooks

Backend:

* Supabase

Database:

* PostgreSQL

Authentication:

* Supabase Auth

Security:

* Row Level Security
* Role-based authorization

---

# Project Structure

```
src/

├── contexts
│   ├── AuthContext.tsx
│   └── DataContext.tsx

├── modules
│   └── revenue
│       ├── components
│       ├── hooks
│       ├── pages
│       └── services

├── services
│   ├── companyService.ts
│   ├── opportunityService.ts
│   └── activityService.ts

├── types
│   ├── user.ts
│   ├── company.ts
│   └── opportunity.ts

└── routes
```

---

# Future Modules

Planned Revenue OS expansion:

* AI Revenue Advisor
* Revenue forecasting engine
* Automated proposal generation
* Client portal
* Email integrations
* Calendar integrations
* CRM synchronization
* Revenue analytics
* Sales automation

---

# Vision

Revenue OS transforms Tohbala OS into a complete operating system for business growth.

The goal:

> Convert leads into predictable revenue through intelligent workflows, automation, and operational visibility.
