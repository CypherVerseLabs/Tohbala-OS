# Tohbala OS Architecture

## System Overview

Tohbala OS is built as a modern business application platform using a layered architecture.

The system separates:

- User interface components
- Application state management
- Business logic services
- Backend communication
- Database persistence

This structure allows the platform to scale from a single-user application into a multi-organization business operating system.

---

# High-Level Architecture

```text
User Interface

        ↓

React Components

        ↓

Application Context Layer

(AuthContext / DataContext)

        ↓

Service Layer

(CompanyService
 OpportunityService
 ActivityService)

        ↓

Supabase Client

        ↓

PostgreSQL Database

Frontend Architecture

Tohbala OS uses a modern React-based frontend.

Core Technologies

Built with:

React
TypeScript
Vite
Tailwind CSS
Shadcn UI
Lucide Icons
Component Architecture

The application is organized into reusable components.

Examples:

components

├── Dashboard

├── Company Management

│   ├── CompanyForm
│   └── CompanyManager

├── Opportunity Management

│   ├── OpportunityCard
│   ├── OpportunityManager
│   └── DiscoveryForm

├── Activity System

│   ├── ActivityTimeline
│   └── AddActivityForm

└── Pipeline Management

    └── PipelineBoard

Components are responsible for:

Rendering UI
Collecting user input
Displaying business data
Triggering application actions
State Management

Tohbala OS uses React Context API for centralized application state.

AuthContext

Responsible for:

User authentication state
Session management
Login state
Logout handling
Protected application access
DataContext

Responsible for business data management.

Manages:

Companies
Opportunities
Activities

Provides:

Data loading
Create operations
Update operations
Delete operations
Business event tracking

Example:

Component

↓

useData()

↓

DataContext

↓

Service Layer

↓

Database
Service Layer

The service layer separates application logic from UI components.

Services communicate with Supabase and handle database operations.

Current services:

services

├── companyService.ts

├── opportunityService.ts

└── activityService.ts
Company Service

Responsible for company operations.

Capabilities:

Retrieve companies
Create companies
Update companies
Delete companies
Map database records into application models
Opportunity Service

Responsible for opportunity management.

Capabilities:

Retrieve opportunities
Create opportunities
Update opportunities
Delete opportunities
Filter opportunities by company
Maintain pipeline information
Activity Service

Responsible for relationship history.

Capabilities:

Retrieve activities
Create activities
Track company interactions
Track opportunity history
Maintain timeline records
Backend Architecture

Tohbala OS uses Supabase as the backend platform.

Supabase provides:

PostgreSQL database
Authentication
API access
Cloud data storage
Database management
Database Layer

The PostgreSQL database stores:

Companies

Business relationship information.

Example:

companies

id
name
industry
website
contacts
description
created_at
updated_at
Opportunities

Business growth opportunities.

Example:

opportunities

id
company_id
company_name
problem
solution
technology_needs
status
estimated_value
created_at
updated_at
Activities

Relationship history.

Example:

activities

id
company_id
opportunity_id
type
title
description
created_at
Data Flow

The application follows a predictable data flow.

Example:

Creating an opportunity:

User Input

↓

Opportunity Form

↓

OpportunityManager

↓

DataContext

↓

OpportunityService

↓

Supabase

↓

PostgreSQL Database

After completion:

Database Update

↓

Service Response

↓

Context Refresh

↓

UI Update
Database Mapping Layer

Tohbala OS uses mapping functions between application models and database tables.

Example:

Frontend Model

Opportunity

        ↓

Database Mapping

        ↓

PostgreSQL Record

This keeps the frontend structure independent from database naming conventions.

Security Model

Current security foundation:

Supabase Authentication
Protected routes
Session management
Environment-based configuration
Future Security Development
Row Level Security (RLS)

Planned:

User-specific data access
Organization-level permissions
Database policies
Multi-User Organizations

Future support:

Company accounts
Team members
Organization ownership
Shared workspaces
Permission Management

Future capabilities:

Admin roles
User roles
Feature permissions
Data access controls
Scalability Strategy

Tohbala OS architecture is designed to support future expansion.

Future additions:

AI services
External integrations
Workflow automation
Advanced analytics
Real-time collaboration
Enterprise features

The layered architecture allows new capabilities to be added without restructuring the core platform.

Architecture Vision

Tohbala OS is designed to evolve from a CRM foundation into a complete business intelligence operating system.

Future architecture:

Business Data

        ↓

Data Platform

        ↓

AI Intelligence Layer

        ↓

Automation Engine

        ↓

Business Decisions

The architecture provides the foundation for intelligent business operations.