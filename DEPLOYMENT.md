# Deployment Guide for Appify Digital

## Table of Contents
1. [Frontend Deployment](#frontend-deployment)
2. [Backend Deployment](#backend-deployment)
3. [Database Setup](#database-setup)
4. [Environment Variables](#environment-variables)
5. [Pre-Deployment Checklist](#pre-deployment-checklist)

---

## Frontend Deployment

### Option 1: Vercel (Recommended for Next.js)

**Easiest and fastest option.**

#### Steps:

1. **Prepare your code:**
   ```bash
   cd client
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub:**
   - Create repository on GitHub
   - Push your code
   ```bash
   git remote add origin https://github.com/yourusername/appify-digital.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import GitHub repository
   - Vercel auto-detects Next.js
   - Add environment variables:
     ```
     NEXT_PUBLIC_API_URL=https://your-backend-api.com
     NEXT_PUBLIC_WHATSAPP_NUMBER=8877403146
     ```
   - Click "Deploy"

4. **Your site is live!**
   - Vercel provides free HTTPS
   - Auto-deploys on git push
   - Preview deployments for PRs

---

### Option 2: Netlify

#### Steps:

1. **Build your project:**
   ```bash
   cd client
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to https://netlify.com
   - Drag and drop `out` folder
   - Or connect GitHub repository
   - Add environment variables in Site Settings
   - Deploy

---

### Option 3: Self-Hosted (AWS S3 + CloudFront)

#### Steps:

1. **Build the project:**
   ```bash
   cd client
   npm run build
   ```

2. **Create S3 bucket:**
   - Go to AWS S3
   - Create bucket with same name as domain
   - Enable static website hosting
   - Upload contents of `.next` folder

3. **Setup CloudFront:**
   - Create CloudFront distribution
   - Point to S3 bucket
   - Add SSL certificate
   - Point domain to CloudFront

---

## Backend Deployment

### Option 1: Render.com (Easiest)

**Free tier available, easy setup.**

#### Steps:

1. **Prepare backend code:**
   ```bash
   cd server
   git init
   git add .
   git commit -m "Backend initial commit"
   git remote add origin https://github.com/yourusername/appify-digital-server.git
   git push -u origin main
   ```

2. **Create account on Render:**
   - Go to https://render.com
   - Sign up with GitHub

3. **Create new Web Service:**
   - Click "New +"
   - Select "Web Service"
   - Connect GitHub repository
   - Select branch and repository

4. **Configure service:**
   - Name: `appify-digital-api`
   - Runtime: `Node`
   - Build command: `npm install`
   - Start command: `npm start`
   - Choose Free plan

5. **Add environment variables:**
   ```
   MONGODB_URI=mongodb+srv://...
   JWT_SECRET=your_secret_key
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASSWORD=your_app_password
   ADMIN_EMAIL=admin@appifydigital.com
   ADMIN_PASSWORD=your_password
   FRONTEND_URL=https://your-frontend-url.com
   NODE_ENV=production
   ```

6. **Deploy:**
   - Click "Create Web Service"
   - Render auto-deploys on git push
   - Get your API URL: `https://appify-digital-api.onrender.com`

---

### Option 2: Railway.app

**Modern, simple deployment.**

#### Steps:

1. **Go to Railway:**
   - https://railway.app
   - Sign up with GitHub

2. **Create new project:**
   - Click "New Project"
   - Select "GitHub repo" option
   - Authorize and select your repository

3. **Add MongoDB:**
   - Click "Add service"
   - Select "MongoDB"
   - Railway creates free MongoDB instance

4. **Configure variables:**
   - Go to "Variables" tab
   - Add all environment variables
   - Railway auto-includes MongoDB URL

5. **Deploy:**
   - Automatic deployment on git push
   - Get public URL from "Settings"

---

### Option 3: Heroku (Legacy)

#### Steps:

1. **Install Heroku CLI:**
   ```bash
   # Windows
   https://cli-assets.heroku.com/heroku-x64.exe
   
   # Mac
   brew tap heroku/brew && brew install heroku
   ```

2. **Login to Heroku:**
   ```bash
   heroku login
   ```

3. **Create app:**
   ```bash
   cd server
   heroku create appify-digital-api
   ```

4. **Set environment variables:**
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_uri
   heroku config:set JWT_SECRET=your_secret_key
   heroku config:set SMTP_USER=your_email@gmail.com
   heroku config:set ADMIN_PASSWORD=your_password
   # ... add all other variables
   ```

5. **Deploy:**
   ```bash
   git push heroku main
   ```

---

## Database Setup

### MongoDB Atlas (Free Cloud Hosting)

#### Steps:

1. **Create account:**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up (free account)

2. **Create cluster:**
   - Click "Build a Cluster"
   - Choose free tier
   - Select region (choose closest to your users)
   - Click "Create Cluster"
   - Wait for cluster to be created (5-10 mins)

3. **Create database user:**
   - Go to "Database Access"
   - Click "Add New Database User"
   - Create username and password
   - Set password to "Scram-SHA-1"
   - Click "Add User"

4. **Whitelist IP:**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Choose "Allow Access from Anywhere" (0.0.0.0/0)
   - Click "Confirm"
   - Or add specific IPs for security

5. **Get connection string:**
   - Click "Connect"
   - Choose "Connect your application"
   - Copy connection string
   - Replace `<password>` with your password
   - Replace `myFirstDatabase` with `appify_digital`

6. **Example connection string:**
   ```
   mongodb+srv://username:password@cluster0.abc123.mongodb.net/appify_digital?retryWrites=true&w=majority
   ```

7. **Use in .env:**
   ```
   MONGODB_URI=your_connection_string
   ```

---

## Environment Variables

### Frontend (.env.local)

```
NEXT_PUBLIC_API_URL=https://your-api-url.com
NEXT_PUBLIC_WHATSAPP_NUMBER=8877403146
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hello, I want to build a website for my business.
```

### Backend (.env)

```
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/appify_digital

# JWT
JWT_SECRET=choose_a_very_strong_random_secret_key_at_least_32_characters

# Server
PORT=5000
NODE_ENV=production

# Email Configuration (Gmail Example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_16_character_app_password
SMTP_FROM=noreply@appifydigital.com

# Admin Credentials (CHANGE IN PRODUCTION!)
ADMIN_EMAIL=admin@appifydigital.com
ADMIN_PASSWORD=change_this_to_secure_password_in_production

# URLs
FRONTEND_URL=https://your-frontend-url.com
WHATSAPP_BUSINESS_NUMBER=8877403146
```

---

## Pre-Deployment Checklist

### Code Quality
- [ ] All console.log removed
- [ ] No sensitive data in code
- [ ] Error handling implemented
- [ ] API error messages are user-friendly
- [ ] No hardcoded IPs or URIs
- [ ] Code follows best practices

### Security
- [ ] Changed ADMIN_PASSWORD
- [ ] Changed JWT_SECRET to random string
- [ ] CORS properly configured
- [ ] HTTPS enabled everywhere
- [ ] Input validation on all endpoints
- [ ] Rate limiting configured
- [ ] Dependencies updated

### Testing
- [ ] Frontend tested on mobile
- [ ] All API endpoints tested
- [ ] Contact form works end-to-end
- [ ] Email sending works
- [ ] Admin login works
- [ ] Database operations work

### Configuration
- [ ] Environment variables set correctly
- [ ] Database connection verified
- [ ] Email service configured
- [ ] API URLs point to production
- [ ] Logging configured
- [ ] Error tracking setup (optional: Sentry)

### Monitoring
- [ ] Database backups configured
- [ ] Error logging enabled
- [ ] Performance monitoring setup
- [ ] Uptime monitoring setup
- [ ] Email alerts configured

---

## Post-Deployment

### 1. Test the live website
- Visit your frontend URL
- Test all pages
- Submit contact form
- Subscribe to newsletter
- Check admin dashboard

### 2. Monitor performance
```bash
# Watch server logs
render logs
# or
heroku logs --tail
# or
railway logs
```

### 3. Setup backups
- MongoDB Atlas has automatic backups
- Configure backup retention
- Test backup restoration

### 4. Setup monitoring
- Use Sentry for error tracking
- Setup AlertManager for uptime
- Google Analytics for traffic
- Use MongoDB Atlas monitoring

### 5. Custom domain
- Purchase domain from Namecheap, GoDaddy, etc.
- Point nameservers or A records to hosting provider
- Update FRONTEND_URL in backend .env
- Test domain functionality

---

## Common Issues & Solutions

### Issue: "Cannot find module"
**Solution:** 
```bash
# Force reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Issue: "MongoDB connection failed"
**Solution:**
- Verify connection string
- Check if IP is whitelisted
- Check username/password
- Verify cluster is running

### Issue: "Email not sending"
**Solution:**
- Check SMTP credentials
- For Gmail, use app password (not regular password)
- Enable "Less secure apps" or use 2FA app password
- Check SMTP port (587 for TLS, 465 for SSL)

### Issue: "CORS error"
**Solution:**
```javascript
// In server.js, ensure CORS is configured
const cors = require('cors');
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
```

### Issue: "Cannot GET /api/..."
**Solution:**
- Check API route is defined
- Verify API URL in frontend env variables
- Check backend is running
- Check API method (GET, POST, etc.)

---

## Scaling Tips

### Frontend
- Enable image optimization
- Implement code splitting
- Use dynamic imports
- Cache with service workers

### Backend
- Add redis for caching
- Implement pagination
- Add database indexing
- Consider CDN for files

### Database
- Optimize queries
- Add indexes
- Archive old data
- Use read replicas

---

## Support & Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Docs:** https://vercel.com/docs
- **Express.js Guide:** https://expressjs.com
- **MongoDB Docs:** https://docs.mongodb.com
- **Render Docs:** https://render.com/docs

---

**Questions? Issues? Contact support at contact@appifydigital.com**
