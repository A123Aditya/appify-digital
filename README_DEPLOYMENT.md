# Deployment Guide

## Step 1: Push Code to GitHub

### Using GitHub Desktop (Recommended)
1. Download [GitHub Desktop](https://desktop.github.com)
2. Open GitHub Desktop
3. Click "File" → "Clone Repository"
4. Enter: `https://github.com/A123Aditya/appify-digital.git`
5. Choose local path (the folder you're working in)
6. Click "Publish to GitHub"

### Or using Git command line (if installed)
```bash
cd c:\Users\Aditya\OneDrive\Desktop\SelfWebSite\appify-digital
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/A123Aditya/appify-digital.git
git push -u origin main
```

---

## Step 2: Deploy Backend to Railway

1. Go to [railway.app](https://railway.app)
2. Click "Start a New Project"
3. Select "Deploy from GitHub"
4. Authorize & select your `appify-digital` repository
5. Choose the `server` folder as root directory
6. Add environment variables:
   - `MONGODB_URI`: mongodb+srv://appify_user:%40shibu.com@cluster0.icr0ezv.mongodb.net/appify_digital?retryWrites=true&w=majority&appName=Cluster0
   - `JWT_SECRET`: (create a secure random string)
   - `PORT`: 5000
   - `NODE_ENV`: production
   - `SMTP_HOST`: smtp.gmail.com
   - `SMTP_PORT`: 587
   - `SMTP_USER`: ad8235152595@gmail.com
   - `SMTP_PASSWORD`: tqykjwzdvzkjmojo
   - `SMTP_FROM`: noreply@appifydigital.com
   - `ADMIN_EMAIL`: admin@appifydigital.com
   - `ADMIN_PASSWORD`: (secure password)

7. Deploy! You'll get a URL like: `https://appify-digital-backend-production.up.railway.app`

---

## Step 3: Deploy Frontend to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New"
3. Select "Project"
4. Import your GitHub repository
5. Select `appify-digital` repository
6. Root directory: `client`
7. Add environment variables:
   - `NEXT_PUBLIC_API_URL`: (your Railway backend URL from Step 2)
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: 8877403146
   - `NEXT_PUBLIC_WHATSAPP_MESSAGE`: Hello, I want to build a website for my business.

8. Deploy!

Your site will be live at: `https://appify-digital.vercel.app`

---

## Step 4: Update Backend API URL

After getting your Vercel frontend URL and Railway backend URL, make sure they're connected:

**In Vercel dashboard:**
- Update `NEXT_PUBLIC_API_URL` environment variable with your Railway backend URL

That's it! Your website is now live with backend! 🚀

