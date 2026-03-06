# Architecture & System Overview

## 🏛️ System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER (Browser)                    │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │              Next.js Frontend Application                 │   │
│  │                                                            │   │
│  │  ┌─── Pages ───┐  ┌─── Components ───┐                   │   │
│  │  │ • Home      │  │ • Navbar          │                   │   │
│  │  │ • Services  │  │ • Footer          │                   │   │
│  │  │ • Portfolio │  │ • Hero Section    │                   │   │
│  │  │ • Pricing   │  │ • Services Cards  │                   │   │
│  │  │ • About     │  │ • Pricing Plans   │                   │   │
│  │  │ • Contact   │  │ • Contact Form    │                   │   │
│  │  │ • Blog      │  │ • Testimonials    │                   │   │
│  │  │ • Admin     │  │ • FAQ             │                   │   │
│  │  └─────────────┘  │ • Newsletter      │                   │   │
│  │                   │ • WhatsApp Button │                   │   │
│  │                   │ • Chatbot         │                   │   │
│  │                   │ • Calculator      │                   │   │
│  │                   └───────────────────┘                   │   │
│  │                                                            │   │
│  │  Technologies: React, Tailwind CSS, Framer Motion, Zustand  │   │
│  └──────────────────────────────────────────────────────────┘   │
│                              │                                    │
│                              │ HTTPS                             │
│                              ▼                                    │
└─────────────────────────────────────────────────────────────────┘
                                │
                                │ API Calls (Axios)
                                │
┌─────────────────────────────────────────────────────────────────┐
│                      API/SERVER LAYER                             │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │          Express.js Backend Server                        │   │
│  │                Port: 5000 (default)                       │   │
│  │                                                            │   │
│  │  ┌────── Routes ──────┐  ┌──── Controllers ────────┐     │   │
│  │  │ /api/contacts      │  │ Contact Form Handler   │     │   │
│  │  │ /api/visitors      │  │ Visitor Tracker        │     │   │
│  │  │ /api/newsletter    │  │ Newsletter Manager     │     │   │
│  │  │ /api/orders        │  │ Order Processor        │     │   │
│  │  │ /api/admin         │  │ Admin Dashboard        │     │   │
│  │  │ /api/health        │  │ System Health Check    │     │   │
│  │  └────────────────────┘  └────────────────────────┘     │   │
│  │                                                            │   │
│  │  ┌──── Middleware ─────┐                                 │   │
│  │  │ • Auth (JWT)        │                                 │   │
│  │  │ • CORS              │                                 │   │
│  │  │ • Error Handling    │                                 │   │
│  │  │ • Logging           │                                 │   │
│  │  └─────────────────────┘                                 │   │
│  │                                                            │   │
│  │  Technologies: Node.js, Express, Mongoose, JWT, bcrypt   │   │
│  └──────────────────────────────────────────────────────────┘   │
│                              │                                    │
└──────────────┬───────────────┼───────────────┬──────────────────┘
               │ Database      │ Email         │ File System
               │ Queries       │ Service       │
               ▼               ▼               ▼
┌──────────────────┐  ┌──────────────┐  ┌─────────────┐
│  MongoDB Atlas   │  │ SMTP Service │  │ Logs/Config │
│                  │  │ (Gmail/SMTP) │  │   Storage   │
│  Collections:    │  │              │  │             │
│  • Users         │  │ Nodemailer   │  │ Environment │
│  • Contacts      │  │ Email Config │  │ Variables   │
│  • Visitors      │  │              │  │             │
│  • Orders        │  │ Features:    │  │ Credentials │
│  • Newsletter    │  │ • Confirmations              │
│                  │  │ • Notifications              │
│  Features:       │  │ • Admin Alerts               │
│  • Auto-backup   │  │                  │             │
│  • Indexing      │  └──────────────┘  └─────────────┘
│  • Replication   │
│  • Free tier     │
└──────────────────┘
```

---

## 🔄 Data Flow Diagram

### Contact Form Submission Flow
```
User fills Contact Form (Frontend)
         │
         ▼
[POST /api/contacts] + Form Data
         │
         ▼
Backend receives request
         │
         ├→ Validate input
         │
         ├→ Save to MongoDB
         │
         ├→ Send confirmation email to user
         │
         ├→ Send notification email to admin
         │
         └→ Return success/error response
         │
         ▼
Frontend shows success message
         │
         ▼
User receives email + Admin receives notification
```

### Admin Dashboard Flow
```
User visits /admin
         │
         ▼
Show login form
         │
         ▼
User enters credentials
         │
         ▼
[POST /api/admin/login]
         │
         ├→ Verify credentials
         │
         ├→ Generate JWT token
         │
         └→ Return token
         │
         ▼
Store token in localStorage
         │
         ▼
[GET /api/admin/stats] + JWT token
         │
         ├→ Verify token
         │
         ├→ Query MongoDB for stats
         │
         └→ Return: visitors, contacts, orders, newsletter
         │
         ▼
Display dashboard with real-time data
```

### Visitor Tracking Flow
```
User visits website
         │
         ▼
Page loads (frontend)
         │
         ▼
[POST /api/visitors] (automatic)
         │
         ├→ Extract IP address
         │
         ├→ Extract user agent
         │
         ├→ Save to MongoDB
         │
         └→ Increment counter
         │
         ▼
Admin can see visitor count in dashboard
```

---

## 🗄️ Database Schema Relationships

```
┌─────────────────┐
│     Users       │
├─────────────────┤
│ _id             │
│ name            │
│ email (unique)  │
│ password        │
│ role: admin     │
│ createdAt       │
└─────────────────┘
       │
       │ (Only 1 admin user by default)
       │
       ▼
┌─────────────────┐
│    Contacts     │
├─────────────────┤
│ _id             │
│ name            │
│ email           │
│ phone           │
│ businessType    │
│ message         │
│ status          │ ← Updated by admin
│ createdAt       │
└─────────────────┘

┌─────────────────┐
│    Visitors     │
├─────────────────┤
│ _id             │
│ ip              │
│ userAgent       │
│ createdAt       │
└─────────────────┘

┌─────────────────┐
│     Orders      │
├─────────────────┤
│ _id             │
│ planName        │ ← Starter/Business/Premium
│ name            │
│ email           │
│ phone           │
│ businessType    │
│ amount          │
│ paymentStatus   │ ← pending/completed/failed
│ createdAt       │
└─────────────────┘

┌──────────────────┐
│   Newsletter     │
├──────────────────┤
│ _id              │
│ email (unique)   │
│ subscribedAt     │
│ status           │ ← subscribed/unsubscribed
└──────────────────┘
```

---

## 🔐 Authentication Flow

```
┌────────────────────────────────────────┐
│         Admin Login Process            │
├────────────────────────────────────────┤
│                                        │
│  Frontend (Admin Page)                 │
│  ↓                                     │
│  Email: admin@appifydigital.com        │
│  Password: password123                 │
│  ↓                                     │
│  [POST /api/admin/login]               │
│  ↓                                     │
│  Backend                               │
│  ├→ Check if credentials match         │
│  ├→ If valid:                          │
│  │   JWT_SIGN(email, role, secret)     │
│  │   Return token (7 days expiry)      │
│  └→ If invalid:                        │
│      Return 401 error                  │
│  ↓                                     │
│  Frontend                              │
│  ├→ Store token in localStorage        │
│  ├→ Add to API headers:                │
│  │   Authorization: Bearer {token}     │
│  └→ Show dashboard                     │
│  ↓                                     │
│  Protected API calls                   │
│  [GET /api/admin/stats]                │
│  With JWT token                        │
│  ↓                                     │
│  Backend                               │
│  ├→ Verify JWT token                   │
│  ├→ If valid: Return data              │
│  └→ If expired: Return 401             │
│                                        │
└────────────────────────────────────────┘
```

---

## 🌐 API Request/Response Example

### Contact Form Submission
```
REQUEST:
─────────
POST /api/contacts HTTP/1.1
Host: api.appifydigital.com
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91-9876543210",
  "businessType": "restaurant",
  "message": "I need a website for my restaurant"
}

RESPONSE:
─────────
HTTP/1.1 201 Created
Content-Type: application/json

{
  "success": true,
  "message": "Your inquiry has been submitted successfully"
}
```

### Admin Dashboard Stats
```
REQUEST:
─────────
GET /api/admin/stats HTTP/1.1
Host: api.appifydigital.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...

RESPONSE:
─────────
HTTP/1.1 200 OK
Content-Type: application/json

{
  "visitors": 1543,
  "contacts": 87,
  "orders": 23,
  "newsletter": 156
}
```

---

## 🛠️ Technology Stack Layers

```
┌─────────────────────────────────────────┐
│         PRESENTATION LAYER              │
│  HTML / CSS / JavaScript / React        │
│                                         │
│  UI Components:                         │
│  • Tailwind CSS (styling)               │
│  • Framer Motion (animations)           │
│  • React Components                     │
│  • Next.js Pages                        │
└─────────────────────────────────────────┘
                    ▲
                    │
┌─────────────────────────────────────────┐
│         APPLICATION LAYER               │
│  Next.js / React / Zustand              │
│                                         │
│  Logic:                                 │
│  • Page routing                         │
│  • State management                     │
│  • API client (Axios)                   │
│  • Form handling                        │
└─────────────────────────────────────────┘
                    ▲
                    │ HTTP/REST
                    │
┌─────────────────────────────────────────┐
│          API LAYER                      │
│  Express.js / Node.js                   │
│                                         │
│  Features:                              │
│  • Routing                              │
│  • Middleware                           │
│  • Controllers                          │
│  • Authentication (JWT)                 │
│  • Error Handling                       │
└─────────────────────────────────────────┘
                    ▲
                    │
┌─────────────────────────────────────────┐
│       BUSINESS LOGIC LAYER              │
│  Controllers / Models / Services        │
│                                         │
│  Operations:                            │
│  • Validate input                       │
│  • Process data                         │
│  • Send emails                          │
│  • Hash passwords                       │
│  • Generate tokens                      │
└─────────────────────────────────────────┘
                    ▲
                    │
┌─────────────────────────────────────────┐
│       DATA ACCESS LAYER                 │
│  Mongoose / MongoDB                     │
│                                         │
│  Operations:                            │
│  • CRUD operations                      │
│  • Schema validation                    │
│  • Indexing                             │
│  • Query optimization                   │
└─────────────────────────────────────────┘
                    ▲
                    │
┌─────────────────────────────────────────┐
│         DATA LAYER                      │
│  MongoDB Database                       │
│                                         │
│  Storage:                               │
│  • Users                                │
│  • Contacts                             │
│  • Visitors                             │
│  • Orders                               │
│  • Newsletter                           │
└─────────────────────────────────────────┘
```

---

## 📊 Server Response Times (Target)

```
API Endpoint              │ Target   │ MongoDB │ Email
────────────────────────────────────────────────────────
GET /api/visitors/count  │ < 100ms  │ Query  │ —
POST /api/contacts       │ < 500ms  │ Insert │ Send
GET /api/admin/stats     │ < 200ms  │ Query  │ —
POST /api/newsletter     │ < 300ms  │ Insert │ Send
POST /api/admin/login    │ < 300ms  │ Query  │ —
────────────────────────────────────────────────────────
```

---

## 🚀 Deployment Architecture

```
┌────────────────────────────────────────────────────────┐
│              CLIENT BROWSER                            │
│         https://appify-digital.vercel.app              │
└────────────────────────────────────────────────────────┘
              │                    │
              │ Static Assets      │ API Calls
              │                    │
              ▼                    ▼
         CDN (Vercel)      Backend API (Render)
         Edge Network      https://api.appify...
         
              │
              │ Proxy
              ▼
         ┌──────────────────────────┐
         │  MongoDB Atlas Cluster   │
         │  (Cloud Database)        │
         │  Auto-backup + Replica   │
         └──────────────────────────┘
              │
              │ Email
              ▼
         ┌──────────────────────────┐
         │   SMTP Server (Gmail)    │
         │   Nodemailer Sender      │
         └──────────────────────────┘
```

---

## 📈 Scalability Path

```
Phase 1: MVP (Current)
├─ Single server (Render free)
├─ Single database (MongoDB free)
└─ ~100-1000 monthly visitors

Phase 2: Growth
├─ Upgrade server tier (Render paid)
├─ Upgrade database (MongoDB M2)
├─ Add caching (Redis)
└─ ~10K-50K monthly visitors

Phase 3: Scale
├─ Multiple servers (load balanced)
├─ Database replication (MongoDB)
├─ CDN for assets (Cloudflare)
└─ ~100K+ monthly visitors

Phase 4: Enterprise
├─ Kubernetes (containerized)
├─ Database sharding
├─ Global CDN
└─ 1M+ monthly visitors
```

---

## 🔄 CI/CD Pipeline (Future)

```
Push to GitHub
    │
    ▼
GitHub Actions (Automated Tests)
    │
    ├─ Lint code
    ├─ Run tests
    └─ Build check
    │
    ▼
Vercel Auto-Deploys Frontend
    │
    ├─ Install deps
    ├─ Build project
    ├─ Deploy to edge
    └─ Run checks
    
Render Auto-Deploys Backend
    │
    ├─ Install deps
    ├─ Run tests
    ├─ Build app
    └─ Deploy
    
    ▼
Live on Production!
```

---

## 🔐 Security Layers

```
┌─────────────────────────────────────────┐
│          HTTPS/TLS Encryption           │
│       (Data in transit protected)       │
└─────────────────────────────────────────┘
                    │
┌─────────────────────────────────────────┐
│        CORS + CSRF Protection           │
│    (Prevents unauthorized requests)     │
└─────────────────────────────────────────┘
                    │
┌─────────────────────────────────────────┐
│      Input Validation & Sanitization    │
│   (Prevents injection attacks)          │
└─────────────────────────────────────────┘
                    │
┌─────────────────────────────────────────┐
│      JWT Authentication                 │
│  (Secure admin access control)          │
└─────────────────────────────────────────┘
                    │
┌─────────────────────────────────────────┐
│      Password Hashing (bcrypt)          │
│     (Passwords never stored plain)      │
└─────────────────────────────────────────┘
                    │
┌─────────────────────────────────────────┐
│      MongoDB Access Control             │
│  (IP whitelist + authentication)        │
└─────────────────────────────────────────┘
```

---

**This architecture is designed to be:**
- ✅ Scalable (grows with you)
- ✅ Reliable (auto-backups)
- ✅ Secure (encrypted, validated)
- ✅ Fast (CDN, optimized)
- ✅ Maintainable (modular code)
- ✅ Cost-effective (free tiers available)
