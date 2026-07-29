# Tohbala OS Database Schema

## Overview

Tohbala OS uses a relational database architecture powered by Supabase PostgreSQL.

The database is designed to support:

- Company relationship management
- Opportunity tracking
- Sales pipeline operations
- Activity history
- User authentication
- Future organization-based access control
- AI business intelligence features

The database follows a structured relational model where business entities are connected through unique identifiers.

---

# Database Architecture

Application

↓

DataContext

↓

Service Layer

↓

Supabase Client

↓

PostgreSQL Database


---

# Core Tables

Current production tables:


companies
opportunities
activities


Future tables:


users
organizations
organization_members
permissions
ai_insights
recommendations
automations


---

# Companies Table

Stores business organizations and customer relationships.

## Table


companies


## Schema

| Column | Type | Description |
|---|---|---|
| id | uuid | Primary key |
| name | text | Company name |
| industry | text | Business industry |
| website | text | Company website |
| size | text | Company size |
| location | text | Business location |
| contact_name | text | Primary contact |
| email | text | Contact email |
| phone | text | Contact phone |
| description | text | Business description |
| created_at | timestamp | Record creation |
| updated_at | timestamp | Last update |

---

# Opportunities Table

Stores potential business opportunities and sales pipeline information.

## Table


opportunities


## Schema

| Column | Type | Description |
|---|---|---|
| id | uuid | Primary key |
| company_id | uuid | Related company |
| company_name | text | Company display name |
| contact_name | text | Contact person |
| email | text | Contact email |
| phone | text | Contact phone |
| industry | text | Industry category |
| company_size | text | Organization size |
| business_problem | text | Customer challenge |
| proposed_solution | text | Recommended solution |
| technology_needs | json | Technology requirements |
| status | text | Pipeline stage |
| estimated_value | numeric | Potential revenue |
| source | text | Opportunity source |
| last_contact | timestamp | Previous contact |
| next_follow_up | timestamp | Next action |
| notes | text | Additional information |
| created_at | timestamp | Creation date |
| updated_at | timestamp | Update date |

---

# Pipeline Status Values

Opportunities follow a defined workflow.


research

↓

contacted

↓

conversation

↓

discovery

↓

proposal

↓

client

↓

lost


---

# Activities Table

Stores relationship history and business interactions.

## Table


activities


## Schema

| Column | Type | Description |
|---|---|---|
| id | uuid | Primary key |
| company_id | uuid | Related company |
| opportunity_id | uuid | Related opportunity |
| type | text | Activity category |
| title | text | Activity title |
| description | text | Activity details |
| created_at | timestamp | Activity timestamp |

---

# Activity Types

Supported activity categories:


call

email

meeting

proposal

note

status_change


---

# Database Relationships

## Company Relationship


Company

1

|

*

Opportunities


A company can have multiple opportunities.

---

## Opportunity Relationship


Opportunity

1

|

*

Activities


An opportunity can have multiple interactions.

---

## Complete Relationship Model


Company

|
|
↓

Opportunity

|
|
↓

Activity History


---

# Future Database Expansion

## Users

Authentication and identity management.


users

id
email
name
created_at


---

## Organizations

Multi-company SaaS support.


organizations

id
name
created_at


---

## Organization Members

Controls user access.


organization_members

id
organization_id
user_id
role


---

## AI Insights

Stores generated business intelligence.


ai_insights

id
company_id
opportunity_id
insight_type
recommendation
confidence_score
created_at


---

# Security Model

Database security will use:

- Supabase Authentication
- Row Level Security
- Organization ownership
- Role-based permissions

Future access model:


User

↓

Organization

↓

Companies

↓

Opportunities

↓

Activities


---

# Data Integrity

The system maintains:

- Unique identifiers
- Foreign key relationships
- Timestamp tracking
- Controlled pipeline states
- Structured service-layer access

---

# AI Data Foundation

The database structure supports future AI capabilities.

Potential AI processing:

- Opportunity scoring
- Customer pattern recognition
- Sales forecasting
- Recommended actions
- Technology recommendations
- Business growth analysis

The current schema provides the foundation for an intelligent business operating system.

---

# Version

Database Schema Version:


v0.2.0


Maintained by:


CypherVerse Labs