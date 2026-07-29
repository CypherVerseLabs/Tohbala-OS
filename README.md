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

Current pipeline stage
Activity history
Notes
Follow-up information
Revenue potential
Business intelligence data
Activity Timeline

The activity system tracks business interactions and relationship history.

Examples:

Company created
Opportunity created
Opportunity updated
Customer communication
Meetings
Notes
Future sales activities

Relationship structure:

Company

 |
 ↓

Opportunity

 |
 ↓

Activity History

Activities are managed through the centralized DataContext and ActivityService layer.

Command Center Dashboard

The dashboard provides visibility into business growth.

Displays:

Active opportunities
Pipeline value
Discovery activity
Active clients
Revenue projections
Pipeline distribution
Priority opportunities
Business intelligence insights

The Command Center acts as the primary operating dashboard for business activity.

AI Opportunity Scanner

The AI Intelligence layer is the future intelligence engine of Tohbala OS.

The first AI feature will be the:

AI Opportunity Scanner

Designed to analyze business information and provide actionable insights.

Planned capabilities:

Opportunity scoring
Sales probability analysis
Recommended next actions
Follow-up suggestions
Customer insights
Technology recommendations
Market analysis
Growth opportunities

Current CRM, opportunity, and activity data provide the foundation required for future AI capabilities.

Technology Stack
Frontend

Built with:

React
TypeScript
Vite
Tailwind CSS
Shadcn UI
Lucide Icons
React Hook Form
Recharts
dnd-kit
Application Architecture

Tohbala OS uses a layered application architecture.

React Components

        ↓

Contexts

(AuthContext / DataContext)

        ↓

Services Layer

(companyService
 opportunityService
 activityService)

        ↓

Supabase Client

        ↓

PostgreSQL Database
State Management

Current:

React Context API
AuthContext
DataContext
Application state management

The DataContext manages:

Companies
Opportunities
Activities
CRUD operations
Business event tracking
Backend

Powered by Supabase.

Current:

✅ PostgreSQL database
✅ Cloud data storage
✅ CRUD operations
✅ Database synchronization
✅ Authentication integration
✅ Data persistence

Planned:

Row Level Security
Organization accounts
User permissions
Real-time updates
File storage
Authentication

Tohbala OS uses Supabase Authentication.

Current:

✅ Login system
✅ Session persistence
✅ Protected routes
✅ Authentication context
✅ Secure logout

Authentication flow:

User

 ↓

Login Page

 ↓

AuthContext

 ↓

Supabase Authentication

 ↓

Protected Application
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
Project Architecture
src
│
├── components
│   ├── ui
│   ├── auth
│   │   └── ProtectedRoute.tsx
│   ├── CompanyForm
│   ├── OpportunityCard
│   ├── DiscoveryForm
│   ├── Activity
│   │   ├── ActivityTimeline.tsx
│   │   └── AddActivityForm.tsx
│   └── PipelineBoard
│
├── contexts
│   ├── AuthContext.tsx
│   ├── AppContext.tsx
│   └── DataContext.tsx
│
├── services
│   ├── companyService.ts
│   ├── opportunityService.ts
│   └── activityService.ts
│
├── pages
│   ├── Dashboard
│   ├── Login.tsx
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
├── Title
├── Description
└── Timestamp
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
Service architecture
Phase 3 — Authentication & Security 🚧

Completed:

Supabase authentication
Login system
Protected routes
Session management

Next:

Row Level Security policies
User ownership
Organization accounts
Permission management
Phase 4 — Business Workspace 🚧

Developing:

Settings management
User preferences
Dashboard customization
Workflow configuration
Business rules
Phase 5 — AI Opportunity Scanner

Planned:

AI opportunity analysis
Automated recommendations
Lead scoring
Follow-up generation
Market research assistance
Growth intelligence
Phase 6 — Business Automation

Future:

Email integration
Calendar integration
CRM workflows
Customer portals
Automated reporting
Vision

Tohbala OS aims to become a complete business operating system that helps organizations:

Discover opportunities
Understand customer needs
Build technology solutions
Automate workflows
Scale efficiently
Make intelligent decisions

The future of business growth requires better information, better automation, and better intelligence.

Tohbala OS is being built to provide that foundation.

License

Private project.

Developed by CypherVerse Labs.