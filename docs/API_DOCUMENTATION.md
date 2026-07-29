# Tohbala OS API Documentation

## Overview

Tohbala OS uses a service-based application architecture that separates business logic from the user interface.

The current API layer operates through internal application services connected to Supabase.

Architecture:

```
React Component

        ↓

DataContext

        ↓

Service Layer

        ↓

Supabase Client

        ↓

PostgreSQL Database
```

The API layer provides structured access to:

- Companies
- Opportunities
- Activities
- Authentication
- Future AI intelligence services

---

# API Architecture

## Current Service Layer

```
src/services/

├── companyService.ts
├── opportunityService.ts
└── activityService.ts
```

Each service handles:

- Database communication
- Data transformation
- CRUD operations
- Error handling

---

# Authentication API

Authentication is managed through Supabase Authentication.

## Login

### Purpose

Authenticate a user and create an application session.

Future endpoint:

```
POST /auth/login
```

Request:

```json
{
  "email": "user@example.com",
  "password": "password"
}
```

Response:

```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com"
  },
  "session": "token"
}
```

---

## Logout

Future endpoint:

```
POST /auth/logout
```

Response:

```json
{
  "success": true
}
```

---

# Company API

## Get Companies

Returns all organizations.

Future endpoint:

```
GET /companies
```

Response:

```json
[
  {
    "id": "uuid",
    "name": "ABC Construction",
    "industry": "Construction",
    "website": "https://example.com"
  }
]
```

---

## Get Company By ID

Future endpoint:

```
GET /companies/:id
```

Example:

```
GET /companies/12345
```

---

## Create Company

Future endpoint:

```
POST /companies
```

Request:

```json
{
  "name": "ABC Construction",
  "industry": "Construction",
  "website": "example.com",
  "description": "Commercial construction company"
}
```

---

## Update Company

Future endpoint:

```
PUT /companies/:id
```

---

## Delete Company

Future endpoint:

```
DELETE /companies/:id
```

---

# Opportunity API

## Get Opportunities

Returns pipeline opportunities.

Future endpoint:

```
GET /opportunities
```

Response:

```json
[
 {
   "id":"uuid",
   "company":"ABC Construction",
   "status":"discovery",
   "estimatedValue":50000
 }
]
```

---

## Create Opportunity

Future endpoint:

```
POST /opportunities
```

Request:

```json
{
 "companyId":"uuid",
 "businessProblem":"Manual workflows",
 "proposedSolution":"AI automation",
 "estimatedValue":50000,
 "status":"research"
}
```

---

## Update Opportunity

Future endpoint:

```
PUT /opportunities/:id
```

Used for:

- Pipeline movement
- Value updates
- Solution updates
- Follow-up changes

---

## Delete Opportunity

Future endpoint:

```
DELETE /opportunities/:id
```

---

# Pipeline API

The pipeline system manages opportunity stages.

Current stages:

```
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
```

Future endpoint:

```
PATCH /opportunities/:id/status
```

Request:

```json
{
 "status":"proposal"
}
```

---

# Activity API

Activities record company and opportunity history.

---

## Get Activities

Future endpoint:

```
GET /activities
```

---

## Get Company Activities

Future endpoint:

```
GET /companies/:id/activities
```

---

## Get Opportunity Activities

Future endpoint:

```
GET /opportunities/:id/activities
```

---

## Create Activity

Future endpoint:

```
POST /activities
```

Request:

```json
{
 "companyId":"uuid",
 "opportunityId":"uuid",
 "type":"meeting",
 "title":"Discovery Call",
 "description":"Discussed automation needs"
}
```

---

# AI Intelligence API

Future AI services will provide business intelligence.

Planned endpoints:

---

## Opportunity Analysis

```
POST /ai/opportunity-analysis
```

Input:

```json
{
 "opportunityId":"uuid"
}
```

Output:

```json
{
 "score":85,
 "recommendation":
 "Schedule technical discovery meeting",
 "confidence":0.91
}
```

---

## Sales Forecasting

```
GET /ai/forecast
```

Returns:

- Revenue predictions
- Pipeline probability
- Growth trends

---

## Recommended Actions

```
GET /ai/recommendations
```

Returns:

- Follow-up suggestions
- Customer insights
- Priority opportunities

---

# Error Handling

All APIs follow a consistent error structure.

Example:

```json
{
 "success":false,
 "error":{
   "code":"NOT_FOUND",
   "message":"Company does not exist"
 }
}
```

Common errors:

| Code | Meaning |
|---|---|
| 400 | Invalid request |
| 401 | Unauthorized |
| 403 | Permission denied |
| 404 | Resource not found |
| 500 | Server error |

---

# Security

API access will use:

- Supabase Authentication
- JWT sessions
- Row Level Security
- Organization permissions
- Role-based access control

Future request flow:

```
Request

↓

Authentication

↓

Permission Check

↓

Service Layer

↓

Database
```

---

# Versioning

API Version:

```
v1
```

Future endpoint structure:

```
/api/v1/resource
```

Example:

```
/api/v1/opportunities
```

---

# Future API Expansion

Planned integrations:

- Email providers
- Calendar systems
- CRM platforms
- Customer portals
- AI providers
- Reporting systems
- Automation engines

---

# Maintainer

Developed by:

```
CypherVerse Labs
```

Project:

```
Tohbala OS
```