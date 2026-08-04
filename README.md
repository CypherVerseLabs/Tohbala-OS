# README.md (Part 1)

````md
<br/>
<br/>

<p align="center">
    <img width="500" src="YOUR_TOHBALA_LOGO_URL" alt="Tohbala OS logo" />
</p>

<h3 align="center">
    Tohbala OS
</h3>

<h5 align="center">
    A Modular Revenue CRM & Business Operating System for Technology Consulting, Solution Sales, and Business Growth.
</h5>

<br/>

<div align="center">

[![Version](https://img.shields.io/badge/version-0.2.0-blue?style=flat&colorA=000000&colorB=000000)](#)
[![Status](https://img.shields.io/badge/status-active-success?style=flat&colorA=000000&colorB=000000)](#)
[![Database](https://img.shields.io/badge/database-Supabase-green?style=flat&colorA=000000&colorB=000000)](#)
[![License](https://img.shields.io/badge/license-private-red?style=flat&colorA=000000&colorB=000000)](#)

</div>

<br/>

<p align="center">
    <a href="YOUR_WEBSITE_URL">Website</a>
    ·
    <a href="YOUR_DEMO_URL">Demo</a>
    ·
    <a href="YOUR_DISCORD_URL">Community</a>
</p>

<br/>
<br/>

<hr/>

# About

Tohbala OS is a modern Business Operating System built for technology consultants, solution providers, and growing organizations.

The platform combines CRM functionality, opportunity management, technology assessments, proposal generation, activity tracking, business intelligence, and future AI-powered consulting into one unified Revenue CRM workspace.

Tohbala OS helps businesses:

- Build stronger customer relationships
- Manage revenue opportunities
- Perform technology assessments
- Create professional proposals
- Track meetings and activities
- Improve operational efficiency
- Make data-driven decisions

Tohbala OS is developed by **CypherVerse Labs**.

---

# Platform Status

Tohbala OS has evolved from a CRM prototype into a modular Revenue CRM platform with a scalable Context + Service architecture powered by Supabase.

## Current Capabilities

✅ Company Management  
✅ Contact Management  
✅ Opportunity Pipeline  
✅ Revenue CRM Workspace  
✅ Technology Blueprint Assessments  
✅ Proposal Management  
✅ Activity & Meeting Tracking  
✅ Dashboard Analytics  
✅ Supabase Database Integration  
✅ Cloud Data Persistence  
✅ Context-based State Management  
✅ Service Layer Architecture  
✅ Authentication  
✅ Protected Routes  
✅ Row Level Security (RLS)  
✅ User-owned Records  

## Currently Developing

- Multi-user organizations
- Team collaboration
- Permission management
- Revenue forecasting
- AI Business Intelligence layer

---

# Core Features

## Company Management

Manage organizations and customer relationships.

Tracks:

- Company Name
- Industry
- Website
- Company Size
- Location
- Primary Contacts
- Email Information
- Phone Information
- Business Description
- Relationship History
- Created Timestamp
- Updated Timestamp

Company records are fully persisted in Supabase PostgreSQL and secured through Row Level Security.

---

# Opportunity Management

Create, organize, and manage business opportunities throughout the sales lifecycle.

Each opportunity tracks:

- Prospect Company
- Associated Contact
- Business Problem
- Proposed Solution
- Technology Requirements
- Estimated Revenue
- Sales Source
- Follow-up Dates
- Notes
- Pipeline Stage

### Sales Pipeline

```text
Research
    ↓
Contacted
    ↓
Conversation
    ↓
Discovery
    ↓
Proposal
    ↓
Client
    ↓
Lost
````

Every opportunity maintains:

* Current pipeline stage
* Activity history
* Notes
* Follow-up information
* Revenue potential
* Business intelligence metadata

---

# Revenue CRM

Tohbala OS includes a dedicated Revenue CRM workspace designed specifically for technology consulting and solution sales.

## Revenue CRM Modules

* Accounts
* Opportunities
* Technology Blueprints
* Proposals
* Activities
* Meetings
* Forecast Dashboard
* AI Revenue Workspace

Every module follows the same scalable architecture:

```text
React Page
      ↓
Context Provider
      ↓
Service Layer
      ↓
Supabase
      ↓
PostgreSQL
```

This consistent architecture allows every business domain to remain independently maintainable while sharing common patterns across the application.

---

# Technology Blueprints

Technology Blueprints provide consultants with a structured framework for assessing business operations and identifying technology opportunities.

Each Blueprint captures:

* Current Systems
* Business Challenges
* Technology Score
* AI Opportunities
* Recommendations
* 30 Day Roadmap
* 90 Day Roadmap
* 12 Month Roadmap

## Blueprint Status

* DRAFT
* ANALYZING
* COMPLETED
* ARCHIVED

Blueprints are fully persisted in Supabase and managed through **BlueprintContext** and **BlueprintService**.

---

# Proposal Management

Proposal Management is fully integrated into the Revenue CRM workspace.

Features include:

* Create Proposal
* View Proposal
* Update Proposal
* Delete Proposal
* Proposal Status Tracking
* Company Association
* Opportunity Association
* Blueprint Association
* Investment Tracking
* Timeline Tracking
* Service Line Items

## Proposal Statuses

* DRAFT
* SENT
* VIEWED
* ACCEPTED
* REJECTED
* EXPIRED

Proposal records are protected using Supabase Row Level Security and are automatically associated with the authenticated owner.

---

# Activity & Meeting Tracking

The activity system records customer interactions and maintains a complete relationship timeline.

Examples include:

* Company Created
* Opportunity Created
* Opportunity Updated
* Meetings
* Calls
* Emails
* Notes
* Follow-up Activities

Relationship Structure:

```text
Company
    │
    ▼
Opportunity
    │
    ▼
Activity History
```

Activities are managed through **ActivityContext** and **ActivityService**, providing a centralized history of customer engagement.

---

# Command Center Dashboard

The Revenue Dashboard provides visibility into business growth and sales performance.

Displays:

* Active Opportunities
* Pipeline Value
* Revenue Forecast
* Discovery Activity
* Active Clients
* Pipeline Distribution
* Priority Opportunities
* Business Intelligence Metrics

The Command Center serves as the operational hub for monitoring pipeline performance and business growth.

---

# AI Revenue Workspace

The future intelligence layer of Tohbala OS builds on CRM, Blueprint, Proposal, and Activity data to deliver AI-assisted consulting.

Planned capabilities include:

* Opportunity Scoring
* Revenue Forecasting
* AI Recommendations
* Technology Recommendations
* Business Risk Analysis
* Follow-up Suggestions
* Customer Insights
* Market Intelligence
* Executive Summaries

The modular Revenue CRM architecture provides the foundation for future AI-powered consulting workflows.

```
```
````md
# Technology Stack

## Frontend

Built with:

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Lucide React
- React Hook Form
- Recharts
- dnd-kit

---

# Application Architecture

Tohbala OS follows a modular, context-driven architecture that separates presentation, business logic, and data persistence.

Each business domain follows the same design pattern, making the platform scalable, maintainable, and easy to extend.

Architecture:

```text
React Components

        ↓

React Context

        ↓

Service Layer

        ↓

Supabase Client

        ↓

PostgreSQL Database
```

Each layer has a dedicated responsibility:

| Layer | Responsibility |
|--------|----------------|
| React Components | User Interface |
| Context Providers | State Management |
| Service Layer | Business Logic |
| Supabase | Authentication & Database |
| PostgreSQL | Persistent Storage |

---

# State Management

Tohbala OS uses React Context for business-domain state management.

## Current Context Providers

- AuthContext
- CompanyContext
- ContactContext
- OpportunityContext
- BlueprintContext
- ProposalContext
- ActivityContext
- DataContext *(legacy compatibility)*

Each business domain manages its own state while sharing a consistent Context + Service architecture.

Application state includes:

- Authentication
- Companies
- Contacts
- Opportunities
- Technology Blueprints
- Proposals
- Activities
- User Sessions
- Dashboard Metrics
- Business Events

This architecture keeps business logic isolated while allowing modules to communicate through well-defined interfaces.

---

# Service Layer

Business operations are separated from UI components through dedicated service classes.

Current services:

```text
services

├── companyService.ts
├── contactService.ts
├── opportunityService.ts
├── blueprintService.ts
├── proposalService.ts
└── activityService.ts
```

Responsibilities include:

- CRUD Operations
- Database Communication
- Data Transformation
- Validation
- Error Handling
- Business Rules
- Mapping Layer
- Synchronization with Supabase

Each Context communicates only with its corresponding Service, creating a clean separation of concerns.

---

# Backend & Cloud Infrastructure

Powered by Supabase.

## Current

✅ PostgreSQL Database

✅ Supabase Authentication

✅ Row Level Security (RLS)

✅ CRUD Operations

✅ Company Ownership

✅ Proposal Ownership

✅ Blueprint Persistence

✅ Opportunity Persistence

✅ Activity Persistence

✅ Cloud Synchronization

✅ Secure User Sessions

### Planned

- Multi-user Organizations
- Team Collaboration
- Real-time Updates
- File Storage
- Background Processing
- Reporting Engine

---

# Authentication

Tohbala OS uses Supabase Authentication for secure access management.

Current capabilities:

✅ Login

✅ Logout

✅ Session Persistence

✅ Protected Routes

✅ Authentication Context

✅ Secure User Sessions

Authentication Flow:

```text
User

    ↓

Login Page

    ↓

AuthContext

    ↓

Supabase Authentication

    ↓

Protected Application
```

Authentication is integrated throughout the platform, ensuring that every business record is securely associated with its authenticated owner.

---

# Security Foundation

Security is a foundational component of Tohbala OS.

## Current Security Capabilities

- Supabase Authentication
- Protected Routes
- Environment Variables
- User-owned Records
- Row Level Security (RLS)
- Owner-based CRUD Permissions

## Future

- Organization Isolation
- Team Roles
- Role-based Permissions
- Audit Logging

The platform is designed so that every major business entity can be secured independently while supporting future multi-tenant collaboration.

---

# Quick Start

## Requirements

Install:

- Node.js
- npm
- Git

---

## Clone Repository

```bash
git clone https://github.com/CypherVerseLabs/Tohbala-OS.git

cd Tohbala-OS
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Setup

Create:

```text
.env
```

Add:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## Run Development Server

```bash
npm run dev
```

The application will launch locally.

---

## Production Build

```bash
npm run build
```

Creates:

```text
dist/
```

---

# Deployment

Tohbala OS can be deployed using modern cloud platforms including Vercel, Netlify, Azure, AWS, and DigitalOcean.

Deployment requirements:

- Production Environment Variables
- Supabase Project
- Database Migrations
- Secure Hosting
- HTTPS

Production Checklist

✅ Environment Variables Configured

✅ Database Connected

✅ Authentication Enabled

✅ Row Level Security Enabled

✅ Production Build Verified

✅ Security Policies Reviewed
````
````md
# Project Architecture

Tohbala OS is organized as a modular business platform where each Revenue CRM domain maintains its own context, services, components, and data models.

Current architecture:

```text
src

├── components
│
├── contexts
│   ├── AuthContext.tsx
│   ├── CompanyContext.tsx
│   ├── ContactContext.tsx
│   ├── OpportunityContext.tsx
│   ├── BlueprintContext.tsx
│   ├── ProposalContext.tsx
│   ├── ActivityContext.tsx
│   └── DataContext.tsx
│
├── services
│   ├── companyService.ts
│   ├── contactService.ts
│   ├── opportunityService.ts
│   ├── blueprintService.ts
│   ├── proposalService.ts
│   └── activityService.ts
│
├── modules
│   └── revenue
│       ├── accounts
│       ├── opportunities
│       ├── blueprints
│       ├── proposals
│       ├── meetings
│       ├── forecast
│       ├── ai
│       └── settings
│
├── pages
│
├── lib
│
├── types
│
└── main.tsx
```

Each module follows the same structure:

```text
Page

↓

Context Provider

↓

Service Layer

↓

Mapping Layer

↓

Supabase

↓

PostgreSQL
```

This architecture allows business capabilities to evolve independently while maintaining consistency across the platform.

---

# Database Model

Tohbala OS uses PostgreSQL through Supabase as the primary persistence layer.

The database model supports CRM operations, revenue management, technology assessments, proposals, and customer engagement tracking.

---

## Companies

Companies represent organizations and customer accounts.

```text
Company

|

├── ID

├── Owner ID

├── Name

├── Industry

├── Website

├── Company Size

├── Location

├── Description

├── Contacts

├── Metadata

├── Created Date

└── Updated Date
```

Companies are protected through ownership-based access control.

---

## Contacts

Contacts represent people associated with companies.

```text
Contact

|

├── ID

├── Company ID

├── Name

├── Email

├── Phone

├── Role

├── Notes

├── Created Date

└── Updated Date
```

---

## Opportunities

The opportunity engine manages revenue opportunities throughout the sales lifecycle.

```text
Opportunity

|

├── ID

├── Owner ID

├── Company ID

├── Contact ID

├── Business Problem

├── Proposed Solution

├── Technology Needs

├── Pipeline Stage

├── Estimated Value

├── Source

├── Follow-up Dates

├── Notes

├── Metadata

└── Created Date
```

---

## Technology Blueprints

Blueprints store structured business and technology assessments.

```text
Blueprint

|

├── ID

├── Owner ID

├── Company ID

├── Opportunity ID

├── Current Systems

├── Business Challenges

├── Technology Score

├── AI Opportunities

├── Recommendations

├── 30 Day Roadmap

├── 90 Day Roadmap

├── 12 Month Roadmap

├── Status

└── Created Date
```

Blueprint Status:

```text
DRAFT

ANALYZING

COMPLETED

ARCHIVED
```

---

## Proposals

Proposal records manage solution documents and commercial information.

```text
Proposal

|

├── ID

├── Owner ID

├── Company ID

├── Opportunity ID

├── Blueprint ID

├── Status

├── Investment

├── Timeline

├── Service Line Items

├── Created Date

└── Updated Date
```

Proposal Status:

```text
DRAFT

SENT

VIEWED

ACCEPTED

REJECTED

EXPIRED
```

---

## Activities

Activities maintain relationship history.

```text
Activity

|

├── ID

├── Owner ID

├── Company ID

├── Opportunity ID

├── Type

├── Title

├── Description

└── Timestamp
```

Examples:

- Company Created
- Opportunity Created
- Proposal Sent
- Customer Communication
- Meetings
- Notes
- Follow-up Activities

Relationship model:

```text
Company

    ↓

Opportunity

    ↓

Blueprint / Proposal

    ↓

Activity History
```

---

# Roadmap

## Phase 1 — Foundation ✅

Completed:

- React application
- CRM interface
- Company management
- Opportunity tracking
- Pipeline board
- Dashboard analytics foundation

---

# Phase 2 — Database Platform ✅

Completed:

- Supabase PostgreSQL integration
- Company persistence
- Opportunity persistence
- Activity tracking
- Database mapping layer
- Service architecture
- Cloud data synchronization

---

# Phase 3 — Authentication & Security ✅

Completed:

- Supabase Authentication
- Protected Routes
- Session Persistence
- Row Level Security
- Owner-based CRUD
- User-owned Companies
- User-owned Opportunities
- User-owned Blueprints
- User-owned Proposals

---

# Phase 4 — Revenue CRM 🚧

## Completed

- Company Management
- Opportunity Pipeline
- Technology Blueprints
- Proposal Management
- Activity Tracking
- Revenue CRM Architecture
- Context-based State Management
- Service Layer
- Supabase Integration

## In Progress

- Revenue Forecasting
- Meeting Workspace
- Dashboard Metrics
- Reporting

---

# Phase 5 — AI Business Intelligence Layer

Planned:

The AI intelligence layer will transform CRM and consulting data into actionable business insights.

Capabilities:

- Opportunity Analysis
- Revenue Forecasting
- AI Recommendations
- Customer Intelligence
- Technology Recommendations
- Automated Summaries
- Growth Insights

---

# Phase 6 — Business Automation

Future:

- Email Integration
- Calendar Integration
- CRM Workflows
- Customer Portals
- Automated Reporting
- Digital Signatures
- Business Process Automation

---

# Current Architecture

Every business feature follows the same architecture:

```text
UI Components

↓

React Context

↓

Service Layer

↓

Mapping Layer

↓

Supabase

↓

PostgreSQL
```

This architecture keeps business logic separate from presentation while making each module independently maintainable and scalable.

---

# Vision

Tohbala OS aims to become a complete Business Operating System that helps organizations:

- Discover opportunities
- Understand customer needs
- Build technology solutions
- Automate workflows
- Manage revenue
- Scale efficiently
- Make intelligent decisions

The future of business growth requires:

- Better information
- Better automation
- Better intelligence

Tohbala OS is being built to provide that foundation.

---

# License

Private project.

Developed by **CypherVerse Labs**.
````
