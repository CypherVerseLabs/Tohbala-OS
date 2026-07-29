<br/>
<br/>

<p align="center">
    <img width="500" src="YOUR_TOHBALA_LOGO_URL" alt="Tohbala OS logo" />
</p>

<h3 align="center">
     Tohbala OS
</h3>

<h5 align="center">
     A Business Operating System for Opportunity Management, Technology Solutions, and Growth.
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
    <a href="YOUR_WEBSITE_URL">website</a>
    ·
    <a href="YOUR_DEMO_URL">demo</a>
    ·
    <a href="YOUR_DISCORD_URL">community</a>
</p>

<br/>
<br/>
<br/>

<hr/>

# About

Tohbala OS is a modern business operating system designed to help organizations discover opportunities, understand customer problems, manage relationships, and identify technology solutions.

The platform combines CRM functionality, opportunity management, business intelligence, and future AI-powered analysis into one unified workspace.

The mission of Tohbala OS is to help businesses grow through:

- Better customer understanding
- Smarter opportunity management
- Technology adoption
- Workflow automation
- Data-driven decisions

Tohbala OS is developed by **CypherVerse Labs**.

---

# Current Platform Status

Tohbala OS has moved from prototype architecture into active application development.

Current capabilities:

✅ Company management  
✅ Opportunity management  
✅ Supabase database integration  
✅ Persistent cloud data storage  
✅ Company and opportunity mappers  
✅ Activity timeline tracking  
✅ Pipeline management  
✅ Dashboard analytics foundation  

Currently being developed:

- User authentication
- Row Level Security
- Multi-user organizations
- AI business intelligence layer

---

# Core Features

## Company Management

Manage organizations and customer relationships.

Tracks:

- Company name
- Industry
- Website
- Company size
- Location
- Primary contacts
- Email information
- Phone information
- Business descriptions
- Relationship history
- Creation and update timestamps

Company data is stored in Supabase PostgreSQL.

---

## Opportunity Management

Create, organize, and manage business opportunities.

Each opportunity tracks:

- Prospect company
- Existing company relationship
- Contact person
- Business problem
- Proposed solution
- Technology requirements
- Estimated value
- Sales source
- Follow-up dates
- Notes
- Pipeline stage

Example:

```text
Company:
ABC Construction


Problem:
Manual project tracking and poor customer communication.


Solution:
AI workflow automation + customer portal.


Technology:
CRM
AI Automation
Custom Software
Sales Pipeline

Tohbala OS provides a structured opportunity workflow.

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

Each opportunity maintains:

Current stage
Activity history
Notes
Follow-up information
Business intelligence data
Activity Timeline

The activity system tracks business interactions.

Examples:

Company created
Opportunity created
Opportunity updated
Opportunity deleted
Customer relationship events

Activities connect:

Company
   |
   └── Opportunity
          |
          └── Activity History
Command Center Dashboard

The dashboard provides visibility into business growth.

Displays:

Active opportunities
Pipeline value
Revenue projections
Discovery activity
Active clients
Pipeline distribution
Priority opportunities
Business intelligence insights
AI Intelligence Layer

The AI layer is planned to transform business information into actionable intelligence.

Planned capabilities:

Opportunity scoring
Sales forecasting
Recommended follow-ups
Customer insights
Technology recommendations
Market analysis
Growth suggestions

The current CRM foundation provides the data layer required for future AI capabilities.

<br/> <hr/>
Technology Stack
Frontend

Built with:

React
TypeScript
Vite
Tailwind CSS
Shadcn UI
Lucide Icons
Application Architecture

Current:

React Context API
Supabase client integration
Data abstraction layer
Database mapping functions

Architecture:

React Components

        ↓

DataContext

        ↓

Supabase Client

        ↓

PostgreSQL Database
Backend

Powered by Supabase.

Current:

✅ PostgreSQL database
✅ Cloud data storage
✅ CRUD operations
✅ Database synchronization

Planned:

Authentication
User accounts
Row Level Security
Real-time updates
File storage
Organization permissions
<br/> <hr/>
Quick Start
Requirements

Install:

Node.js
npm
Git
Clone Repository
git clone https://github.com/CypherVerseLabs/Tohbala-OS.git

Enter project:

cd Tohbala-OS
Install Dependencies
npm install
Environment Setup

Create:

.env

Add:

VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
Run Development Server
npm run dev
Production Build
npm run build

Creates:

dist/
<br/> <hr/>
Project Architecture
src
│
├── components
│   ├── ui
│   ├── CompanyForm
│   ├── OpportunityCard
│   ├── DiscoveryForm
│   └── PipelineBoard
│
├── contexts
│   └── DataContext.tsx
│
├── pages
│   ├── Dashboard
│   ├── Companies
│   └── Opportunities
│
├── types
│   ├── opportunity.ts
│   ├── activity.ts
│   └── company.ts
│
├── config
│   └── pipeline.ts
│
├── lib
│   └── supabase.ts
│
└── main.tsx
Database Model
Companies
Company

|
├── ID
├── Name
├── Industry
├── Website
├── Contacts
├── Description
├── Metadata
├── Created Date
└── Updated Date
Opportunities
Opportunity

|
├── ID
├── Company
├── Contact
├── Problem
├── Solution
├── Technology Needs
├── Pipeline Stage
├── Estimated Value
├── Source
├── Follow-up Dates
├── Notes
└── Metadata
Activities
Activity

|
├── ID
├── Company
├── Opportunity
├── Type
├── Description
└── Timestamp
<br/> <hr/>
Roadmap
Phase 1 — Foundation ✅

Completed:

React application
CRM interface
Company management
Opportunity tracking
Pipeline board
Dashboard analytics foundation
Phase 2 — Database Integration ✅

Completed:

Supabase PostgreSQL integration
Company persistence
Opportunity persistence
Activity tracking
Database mapping layer
Phase 3 — Authentication & Security 🚧

Next:

Supabase Authentication
User accounts
Row Level Security policies
Organization ownership
Permission management
Phase 4 — AI Business Intelligence

Planned:

AI opportunity analysis
Automated recommendations
Lead scoring
Follow-up generation
Market research assistance
Phase 5 — Business Automation

Future:

Email integration
Calendar integration
CRM workflows
Customer portals
Automated reporting
<br/> <hr/>
Vision

Tohbala OS aims to become a complete business operating system that helps organizations:

Discover opportunities
Understand customer needs
Build technology solutions
Automate workflows
Scale efficiently

The future of business growth requires better information, better automation, and better intelligence.

Tohbala OS is being built to provide that foundation.

<br/> <hr/>
License

Private project.

Developed by CypherVerse Labs.


Main changes:
- Version moved from **0.1.0 → 0.2.0**
- Removed "Supabase coming" wording
- Added current database architecture
- Added mappers/data layer
- Added activity timeline
- Updated roadmap so Auth + RLS is the next real milestone
- Made it read more like an active SaaS product instead of a prototype