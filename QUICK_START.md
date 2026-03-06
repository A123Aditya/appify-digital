# Getting Started - Quick Setup Guide

## ⚡ 5-Minute Quick Start

### 1. Clone/Setup Repository
```bash
cd appify-digital
```

### 2. Setup Frontend
```bash
cd client
npm install
echo 'NEXT_PUBLIC_API_URL=http://localhost:5000' > .env.local
npm run dev
```
✅ Frontend ready at http://localhost:3000

### 3. Setup Backend
```bash
cd ../server
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and email credentials
npm run dev
```
✅ Backend ready at http://localhost:5000

### 4. Access Admin Dashboard
- URL: http://localhost:3000/admin
- Email: admin@appifydigital.com
- Password: password123

---

## 📋 System Requirements

- **Node.js:** v16+ (verify: `node -v`)
- **npm:** v8+ (verify: `npm -v`)
- **MongoDB:** Local or Atlas account
- **Email Service:** Gmail or similar (for sending emails)

---

## 🔑 Key Configuration Files

### Frontend
- `client/.env.local` - API URL and WhatsApp settings
- `client/tailwind.config.js` - Design system colors
- `client/next.config.js` - Next.js settings

### Backend
- `server/.env` - Database, email, and auth settings
- `server/server.js` - Main server file
- `server/config/` - Configuration files

---

## 🚀 Production Deployment URLs

### Frontend: Vercel
```
https://your-project.vercel.app
```

### Backend: Render/Railway/Heroku
```
https://your-api.render.com
https://your-api.railway.app
https://your-api.herokuapp.com
```

---

## 💾 Database Setup

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Create database user
4. Get connection string
5. Add to `.env` file

**Example:**
```
MONGODB_URI=mongodb+srv://user:pass@cluster0.abc.mongodb.net/appify_digital?retryWrites=true&w=majority
```

---

## 📧 Email Setup (Gmail Example)

1. Enable 2-factor authentication in Gmail
2. Generate app password: https://myaccount.google.com/apppasswords
3. Copy the 16-character password
4. Add to `.env`:
```
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=xxxx xxxx xxxx xxxx
```

---

## 📱 Testing Features

### Contact Form
1. Go to /contact page
2. Fill form with test data
3. Submit - should see success message
4. Check backend logs for email

### Newsletter
1. Enter email on homepage
2. Submit - should see success
3. Check MongoDB for subscriber record

### Admin Dashboard
1. Go to /admin
2. Login with demo credentials
3. See analytics and contact submissions

### WhatsApp Button
1. Look for floating green button on right
2. Click to open WhatsApp chat
3. Should open WhatsApp with pre-filled message

---

## 🐛 Troubleshooting

**Ports already in use?**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

**MongoDB connection error?**
- Check if MongoDB is running
- Verify connection string
- Check IP whitelist

**Email not working?**
- Verify SMTP credentials
- Check "Allow less secure apps" setting
- Use app password for Gmail

**API 404 errors?**
- Check if backend is running
- Verify API URL in frontend .env
- Check route definition in backend

---

## 📚 Project Features Overview

### Frontend Components
- **Hero Section**: Animated banner with CTA
- **Services**: 7 service cards with hover effects
- **Pricing**: 3 plans with calculator
- **Contact Form**: Email integration
- **Admin Dashboard**: Analytics and management

### Backend Endpoints
- `/api/contacts` - Contact management
- `/api/visitors` - Visitor tracking
- `/api/newsletter` - Newsletter subscription
- `/api/orders` - Pricing inquiries
- `/api/admin` - Admin operations

### Database Collections
- Users (Admin only)
- Contacts (Form submissions)
- Visitors (Website analytics)
- Orders (Pricing inquiries)
- Newsletter (Subscriptions)

---

## 🎯 Next Steps

1. **Customize Content**
   - Update company info in components
   - Change colors in tailwind.config.js
   - Update text and descriptions

2. **Setup Email**
   - Configure SMTP settings
   - Test contact form

3. **Deploy**
   - Push to GitHub
   - Deploy frontend to Vercel
   - Deploy backend to Render

4. **Monitor**
   - Setup error tracking
   - Monitor logs
   - Check analytics

---

## 📞 Support

- **Docs**: See README.md and DEPLOYMENT.md
- **Email**: contact@appifydigital.com
- **WhatsApp**: +91 8877403146

---

**Happy Building! 🚀**
