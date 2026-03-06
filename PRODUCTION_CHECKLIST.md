# Appify Digital - Production Deployment Guide

## Complete Checklist for Going Live

### Step 1: Code Preparation
- [ ] Remove all console.log statements
- [ ] Remove hardcoded credentials
- [ ] Update site domain/URLs
- [ ] Verify all links work
- [ ] Check mobile responsiveness
- [ ] Test all forms
- [ ] Test email functionality
- [ ] Test admin dashboard

### Step 2: Security Setup

**Change Default Credentials:**
```bash
# In server/.env
ADMIN_EMAIL=your_admin_email@domain.com
ADMIN_PASSWORD=strong_random_password_32_chars
JWT_SECRET=random_jwt_secret_32_chars
```

**Enable HTTPS:**
- Vercel: Automatic
- Render: Automatic
- Self-hosted: Use Let's Encrypt

### Step 3: Database Setup

**MongoDB Atlas:**
1. Create production cluster (M2 or higher)
2. Enable IP whitelist for specific IPs
3. Enable automated backups
4. Create production database user
5. Get production connection string

**Database Optimization:**
```javascript
// Add indexes to frequently queried fields
db.contacts.createIndex({ email: 1 });
db.visitors.createIndex({ createdAt: -1 });
db.newsletter.createIndex({ email: 1 });
```

### Step 4: Email Configuration

**Gmail Setup (Recommended):**
1. Enable 2-Factor Authentication
2. Generate App Password
3. Note the 16-character password
4. Use in SMTP_PASSWORD

**Professional Email (Recommended for production):**
- Brevo (Sendinblue)
- SendGrid
- Mailgun
- Amazon SES

### Step 5: Frontend Deployment (Vercel)

```bash
# Option 1: Via CLI
npm i -g vercel
cd client
vercel

# Option 2: Via Dashboard
# Go to vercel.com, connect GitHub, import project

# Add environment variables:
NEXT_PUBLIC_API_URL=https://your-api-domain.com
NEXT_PUBLIC_WHATSAPP_NUMBER=8877403146
```

### Step 6: Backend Deployment (Render)

```bash
# Via Render Dashboard:
# 1. Create new Web Service
# 2. Connect GitHub repo
# 3. Configure build/start commands:
#    Build: npm install
#    Start: npm start
# 4. Add environment variables
# 5. Deploy
```

### Step 7: Domain Configuration

**Vercel Frontend:**
```
Frontend Domain → Vercel
DNS Records:
- A Record: 76.76.19.20
- CNAME: cname.vercel-dns.com
```

**Render Backend:**
```
API Domain → Render
Get URL from Render dashboard
Update FRONTEND_URL with backend URL
```

### Step 8: SSL/HTTPS

- [ ] Frontend: Automatic (Vercel)
- [ ] Backend: Automatic (Render)
- [ ] Setup auto-renewal certificates
- [ ] Test https in browser

### Step 9: Testing

**Test Everything:**
```bash
# Frontend Tests
curl https://your-domain.com
curl https://your-domain.com/services
curl https://your-domain.com/admin

# API Tests
curl https://api.your-domain.com/api/health
curl -X POST https://api.your-domain.com/api/visitors
```

### Step 10: Monitoring & Logging

**Setup Error Tracking:**
```javascript
// Frontend: Add Sentry
import * as Sentry from "@sentry/nextjs";

// Backend: Add logging
const winston = require('winston');
```

**Setup Uptime Monitoring:**
- UptimeRobot
- Pingdom
- Datadog

**Database Monitoring:**
- MongoDB Atlas Charts
- Custom dashboard

### Step 11: Setup Email Notifications

**Admin Alert Emails:**
1. New contact form submissions
2. New pricing inquiries
3. Errors or failures
4. Daily statistics

### Step 12: Performance Optimization

**Frontend:**
```javascript
// Optimize images
// Enable code splitting
// Minimize bundle size
// Cache static assets
```

**Backend:**
```javascript
// Add Redis caching
// Optimize database queries
// Add database indexes
// Implement rate limiting
```

### Step 13: Scale Resources

**Auto-scaling Configuration:**
- Render: Auto-scaling in Settings
- Database: Enable read replicas if needed
- CDN: Cloudflare for caching

### Step 14: Backup Configuration

**Database Backups:**
- MongoDB Atlas: Enable daily backups
- Retention: 30+ days
- Test backup restoration monthly

**Code Backups:**
- GitHub is your backup
- Enable branch protection
- Require code reviews

### Step 15: Security Hardening

```bash
# Add rate limiting
npm install express-rate-limit

# Add security headers
npm install helmet

# Validate inputs
npm install joi

# Sanitize outputs
npm install xss
```

### Step 16: SEO & Analytics

**Add Google Analytics:**
```javascript
// In frontend layout
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

**Add Google Search Console:**
- Verify domain ownership
- Submit sitemap
- Monitor indexing

**Setup robots.txt:**
```
User-agent: *
Allow: /
Disallow: /admin

Sitemap: https://your-domain.com/sitemap.xml
```

## Production Environment Variables

### Frontend (.env.production)
```
NEXT_PUBLIC_API_URL=https://api.your-domain.com
NEXT_PUBLIC_WHATSAPP_NUMBER=8877403146
NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X
```

### Backend (.env.production)
```
NODE_ENV=production
PORT=5000

# Database
MONGODB_URI=mongodb+srv://prod_user:password@prod-cluster.mongodb.net/appify_digital_prod

# Security
JWT_SECRET=generate_random_string_here
JWT_EXPIRY=7d

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=production_email@gmail.com
SMTP_PASSWORD=your_app_password

# Admin
ADMIN_EMAIL=your_email@domain.com
ADMIN_PASSWORD=very_strong_password

# URLs
FRONTEND_URL=https://www.your-domain.com
API_URL=https://api.your-domain.com

# Logging
LOG_LEVEL=info
SENTRY_DSN=your_sentry_dsn

# Rate Limiting
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX=100
```

## Post-Launch Monitoring

**Daily Checks:**
- [ ] Website loading fast
- [ ] Admin dashboard accessible
- [ ] Contact form working
- [ ] Emails sending
- [ ] No errors in logs

**Weekly Checks:**
- [ ] Database size
- [ ] Visitor count
- [ ] New contact submissions
- [ ] Email delivery rate
- [ ] API response times

**Monthly Checks:**
- [ ] Backup restoration test
- [ ] Security updates
- [ ] Performance analysis
- [ ] Cost review
- [ ] Feature usage analytics

## Emergency Contacts

- **Hosting Support**: support@render.com
- **Database Support**: support@mongodb.com
- **Email Support**: Gmail Support
- **Your Support**: contact@appifydigital.com

## Rollback Plan

If something goes wrong:

1. **Frontend Issues:**
   - Navigate to Vercel dashboard
   - Click "Deployments"
   - Select previous working version
   - Click "Promote to Production"

2. **Backend Issues:**
   - Navigate to Render dashboard
   - Click "Events"
   - Select previous working version
   - Click "Deploy"

3. **Database Issues:**
   - MongoDB Atlas has automatic backups
   - Select backup point in "Backup & Restore"
   - Create new cluster from backup
   - Update connection string

---

**Production deployment complete! 🚀**

Monitor your site, and you're ready to acquire customers!
