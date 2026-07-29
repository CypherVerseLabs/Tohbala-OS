# Tohbala OS Deployment Guide

## Overview

This document explains how to deploy Tohbala OS from development into production.

Tohbala OS uses a modern cloud architecture:

```
Frontend Application

        ↓

Hosting Platform

        ↓

Supabase Backend

        ↓

PostgreSQL Database
```

Deployment components:

- React frontend
- Vite build system
- Supabase backend
- Environment configuration
- Authentication services
- Database services

---

# Deployment Architecture

Production environment:

```
User

 ↓

Web Browser

 ↓

Frontend Hosting

 ↓

React Application

 ↓

Supabase Client

 ↓

Supabase Services

 ↓

PostgreSQL Database
```

---

# Requirements

Before deployment install:

- Node.js
- npm
- Git
- Supabase account
- Hosting provider account

Recommended:

- Node.js 20+
- npm 10+

---

# Environment Configuration

Tohbala OS requires environment variables.

Create:

```
.env
```

Configuration:

```env
VITE_SUPABASE_URL=your_supabase_project_url

VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

# Local Development Deployment

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

Application runs locally:

```
http://localhost:5173
```

---

# Production Build

Create optimized production files:

```bash
npm run build
```

Output:

```
dist/
```

The generated files contain:

- Optimized JavaScript
- CSS bundles
- Static assets
- Production-ready application files

---

# Production Testing

Before publishing:

Run:

```bash
npm run preview
```

Verify:

- Authentication works
- Database connection works
- Company creation works
- Opportunity creation works
- Pipeline updates work
- Activities save correctly

---

# Frontend Deployment

Supported platforms:

Recommended:

- Vercel
- Netlify
- Cloudflare Pages

Deployment process:

```
Git Repository

        ↓

Hosting Platform

        ↓

Build Process

        ↓

Production Website
```

---

# Vercel Deployment

## Install Vercel CLI

```bash
npm install -g vercel
```

## Deploy

```bash
vercel
```

Production deployment:

```bash
vercel --prod
```

---

# Build Configuration

Required build command:

```
npm run build
```

Output directory:

```
dist
```

Framework:

```
Vite
```

---

# Supabase Deployment

Supabase provides:

- PostgreSQL database
- Authentication
- API services
- Storage
- Security policies

Required setup:

```
Supabase Project

        ↓

Database Tables

        ↓

Authentication

        ↓

Application Connection
```

---

# Database Deployment

Current database tables:

```
companies

opportunities

activities
```

Future:

```
users

organizations

permissions

ai_insights
```

Database changes should be managed through:

- Supabase migrations
- SQL scripts
- Version-controlled schema updates

---

# Authentication Deployment

Production authentication requires:

Configure:

- Site URL
- Redirect URLs
- Email settings
- Authentication providers

Production flow:

```
User

 ↓

Login

 ↓

Supabase Auth

 ↓

AuthContext

 ↓

Protected Application
```

---

# Security Configuration

Before production release:

Enable:

- Row Level Security
- Database policies
- User permissions
- Environment protection

Never expose:

```
SUPABASE_SERVICE_ROLE_KEY
```

in frontend applications.

Only expose:

```
SUPABASE_ANON_KEY
```

through frontend environment variables.

---

# Deployment Environments

Recommended structure:

```
Development

↓

Testing

↓

Staging

↓

Production
```

---

## Development

Purpose:

- Feature creation
- Testing
- Debugging

---

## Staging

Purpose:

- Final testing
- Database verification
- Release preparation

---

## Production

Purpose:

- Customer usage
- Live business operations

---

# Monitoring

Future production monitoring:

Recommended:

- Application error tracking
- Database monitoring
- Performance monitoring
- User analytics
- Security auditing

---

# Backup Strategy

Production systems should maintain:

Database backups:

- Daily backups
- Migration history
- Recovery procedures

Application backups:

- Git repository
- Release tags
- Deployment history

---

# Release Process

Standard release workflow:

```
Development

↓

Code Review

↓

Testing

↓

Build

↓

Deploy

↓

Monitor
```

---

# Version Management

Current version:

```
v0.2.0
```

Release format:

```
Major.Minor.Patch
```

Example:

```
1.0.0
```

---

# Future Infrastructure

Planned improvements:

- CI/CD pipelines
- Automated testing
- Container deployment
- Infrastructure monitoring
- Multi-region support
- Enterprise deployment options

---

# Maintainer

Developed by:

```
CypherVerse Labs
```

Product:

```
Tohbala OS
```