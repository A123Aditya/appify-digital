# Appify Digital - Complete Digital Agency Website

A production-grade digital agency website built with Next.js, React, Tailwind CSS, Framer Motion, Node.js, Express, and MongoDB. Features modern UI/UX design, smooth animations, admin dashboard, contact management, and visitor tracking.

## 🚀 Features

### Frontend Features
- **Modern Hero Section** with animated background and gradient overlays
- **Services Section** with 7 different service offerings
- **Live Demo Websites** with preview cards
- **Dynamic Pricing** with three pricing plans and annual billing toggle
- **Website Price Calculator** for cost estimation
- **Testimonials Slider** showcasing client reviews
- **FAQ Accordion** with common questions
- **Contact Form** with email notifications
- **Newsletter Subscription** system
- **Visitor Stats** tracking
- **WhatsApp Integration** with floating button
- **AI Chatbot** for customer support
- **Blog Section** for content marketing
- **Admin Dashboard** with analytics and management tools
- **Fully Responsive** design for all devices
- **SEO Optimized** with meta tags and structured data

### Backend Features
- **RESTful API** with Express.js
- **MongoDB Database** with Mongoose schemas
- **JWT Authentication** for admin login
- **Email Notifications** using Nodemailer
- **Contact Management** system
- **Visitor Tracking** with statistics
- **Newsletter Subscription** system
- **Order/Pricing Inquiry** management
- **Admin Dashboard** analytics
- **CORS Enabled** for secure frontend communication

### Design System
- **Premium Gradient Palette**: Deep blue and purple tones
- **Glassmorphism Effects**: Modern frosted glass UI
- **Smooth Animations**: Powered by Framer Motion
- **Custom Typography**: Professional font stack
- **Responsive Grid**: Mobile-first approach
- **Dark Mode**: Premium dark theme throughout

## 📁 Project Structure

```
appify-digital/
├── client/                          # Next.js Frontend
│   ├── app/                         # Next.js app directory
│   │   ├── layout.tsx               # Root layout with metadata
│   │   ├── page.tsx                 # Home page
│   │   ├── services/page.tsx        # Services page
│   │   ├── portfolio/page.tsx       # Demo websites page
│   │   ├── pricing/page.tsx         # Pricing page
│   │   ├── about/page.tsx           # About us page
│   │   ├── contact/page.tsx         # Contact page
│   │   ├── blog/page.tsx            # Blog page
│   │   ├── admin/page.tsx           # Admin dashboard
│   │   └── globals.css              # Global styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx           # Navigation bar
│   │   │   └── Footer.jsx           # Footer component
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx      # Hero banner
│   │   │   ├── ServicesSection.jsx  # Services grid
│   │   │   ├── DemoWebsitesSection.jsx
│   │   │   ├── PricingSection.jsx   # Pricing cards
│   │   │   ├── TestimonialsSection.jsx
│   │   │   ├── CalculatorSection.jsx
│   │   │   ├── FAQSection.jsx       # FAQ accordion
│   │   │   ├── ContactSection.jsx   # Contact form
│   │   │   ├── StatsSection.jsx     # Statistics
│   │   │   └── NewsletterSection.jsx
│   │   └── common/
│   │       ├── WhatsAppButton.jsx   # Floating WhatsApp
│   │       └── Chatbot.jsx          # AI chatbot
│   ├── libs/
│   │   ├── api.js                   # Axios API client
│   │   └── store.js                 # Zustand store
│   ├── styles/
│   │   └── globals.css              # Global CSS
│   ├── public/                      # Static assets
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── tsconfig.json
│   └── .env.local                   # Frontend env vars
│
└── server/                          # Express.js Backend
    ├── config/
    │   ├── database.js              # MongoDB connection
    │   └── email.js                 # Email configuration
    ├── models/
    │   ├── User.js                  # User schema
    │   ├── Contact.js               # Contact form schema
    │   ├── Visitor.js               # Visitor tracking schema
    │   ├── Order.js                 # Order/Inquiry schema
    │   └── Newsletter.js            # Newsletter schema
    ├── controllers/
    │   ├── contactController.js     # Contact management
    │   ├── visitorController.js     # Visitor tracking
    │   ├── newsletterController.js  # Newsletter logic
    │   ├── orderController.js       # Order management
    │   └── adminController.js       # Admin operations
    ├── routes/
    │   ├── contacts.js              # Contact endpoints
    │   ├── visitors.js              # Visitor endpoints
    │   ├── newsletter.js            # Newsletter endpoints
    │   ├── orders.js                # Order endpoints
    │   └── admin.js                 # Admin endpoints
    ├── middleware/
    │   └── auth.js                  # JWT authentication
    ├── server.js                    # Main server file
    ├── package.json
    └── .env.example                 # Environment template
```

## 🔌 API Endpoints

### Contact Routes (`/api/contacts`)
- `POST /` - Create new contact
- `GET /` - Get all contacts (admin only)
- `GET /:id` - Get contact by ID (admin only)
- `PATCH /:id/status` - Update contact status (admin only)
- `DELETE /:id` - Delete contact (admin only)

### Visitor Routes (`/api/visitors`)
- `POST /` - Track visitor
- `GET /count` - Get total visitor count
- `GET /` - Get visitors with pagination

### Newsletter Routes (`/api/newsletter`)
- `POST /` - Subscribe to newsletter
- `POST /unsubscribe` - Unsubscribe
- `GET /` - Get all subscribers (admin only)

### Order Routes (`/api/orders`)
- `POST /` - Create pricing inquiry order
- `GET /` - Get all orders (admin only)
- `PATCH /:id/status` - Update order status (admin only)

### Admin Routes (`/api/admin`)
- `POST /login` - Admin login
- `GET /stats` - Get dashboard statistics (admin only)
- `GET /contacts` - Get contacts (admin only)
- `GET /orders` - Get orders (admin only)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js >= 16.0.0
- MongoDB (local or Atlas)
- npm or yarn

### Frontend Setup

```bash
cd client

# Install dependencies
npm install

# Create .env.local (copy from example)
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_WHATSAPP_NUMBER=8877403146
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hello, I want to build a website for my business.

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

Frontend runs on `http://localhost:3000`

### Backend Setup

```bash
cd server

# Install dependencies
npm install

# Create .env file (copy from .env.example)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/appify_digital
JWT_SECRET=your_secret_key_change_this
PORT=5000
NODE_ENV=development

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
SMTP_FROM=noreply@appifydigital.com

# Admin Credentials
ADMIN_EMAIL=admin@appifydigital.com
ADMIN_PASSWORD=password123

# URLs
FRONTEND_URL=http://localhost:3000
WHATSAPP_BUSINESS_NUMBER=8877403146

# Run development server
npm run dev

# Run production server
npm start
```

Backend runs on `http://localhost:5000`

## 📊 Database Schema

### User (Admin)
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String enum(['admin', 'user']),
  createdAt: Date
}
```

### Contact
```javascript
{
  name: String,
  email: String,
  phone: String,
  businessType: String,
  message: String,
  status: String enum(['new', 'viewed', 'responded']),
  createdAt: Date
}
```

### Visitor
```javascript
{
  ip: String,
  userAgent: String,
  createdAt: Date
}
```

### Order
```javascript
{
  planName: String enum(['Starter', 'Business', 'Premium']),
  name: String,
  email: String,
  phone: String,
  businessType: String,
  amount: Number,
  paymentStatus: String enum(['pending', 'completed', 'failed']),
  createdAt: Date
}
```

### Newsletter
```javascript
{
  email: String (unique),
  subscribedAt: Date,
  status: String enum(['subscribed', 'unsubscribed'])
}
```

## 🎨 Color Palette

```
Primary Dark:    #0F2027
Secondary Dark:  #2C5364
Primary Purple:  #4A00E0
Light Purple:    #8E2DE2
Cyan:            #00C6FF
Dark Purple:     #6A11CB
```

## 📱 Responsive Breakpoints

- Mobile: < 640px (SM)
- Tablet: 640px - 1024px (MD)
- Desktop: 1024px+ (LG, XL)

## 🚀 Deployment

### Frontend Deployment (Vercel)

1. Push code to GitHub
2. Go to https://vercel.com
3. Connect your GitHub repository
4. Set environment variables:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-api.com
   ```
5. Deploy
6. Your site will be live at `your-project.vercel.app`

### Backend Deployment (Render or Railway)

#### Using Render.com
1. Push code to GitHub
2. Go to https://render.com
3. Create new Web Service
4. Connect GitHub repository
5. Set environment variables in Render dashboard
6. Set start command: `npm start`
7. Deploy

#### Using Railway.app
1. Push code to GitHub
2. Go to https://railway.app
3. Create new project from GitHub
4. Add MongoDB plugin
5. Set environment variables
6. Deploy

#### Using Heroku
1. Install Heroku CLI
2. `heroku login`
3. `heroku create your-app-name`
4. Set config vars:
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_uri
   heroku config:set JWT_SECRET=your_secret
   ```
5. `git push heroku main`

### MongoDB Atlas Setup

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Create database user
4. Get connection string
5. Replace in `.env` file

## 📧 Email Configuration

### Using Gmail
1. Enable 2-factor authentication
2. Generate app password
3. Use app password in `.env` as `SMTP_PASSWORD`

### Using Other Email Services
- SendGrid
- Mailgun
- Amazon SES
- Brevo (formerly Sendinblue)

Update `server/config/email.js` accordingly

## 🔐 Security Tips

1. **Change JWT_SECRET** in production
2. **Use strong ADMIN_PASSWORD**
3. **Enable HTTPS** on production
4. **Validate all inputs** on backend
5. **Implement rate limiting** for API
6. **Use environment variables** for secrets
7. **Keep dependencies updated**
8. **Add CSRF protection** for forms

## 🎯 Admin Dashboard Credentials

**Default Credentials:**
- Email: `admin@appifydigital.com`
- Password: `password123`

⚠️ Change these credentials immediately in production!

## 📈 Key Metrics Tracked

- Total Website Visitors
- Contact Form Submissions
- Pricing Plan Inquiries
- Newsletter Subscribers
- Contact Lead Status
- Order Payment Status

## 🎬 Animations & Interactions

- Hero section with floating shapes
- Smooth page transitions
- Card hover animations
- Scroll-based reveals
- Smooth color transitions
- Loading states
- Form feedback animations
- Modal animations

## ♿ Accessibility Features

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Alt text for images
- Focus indicators

## 📱 Mobile Optimization

- Responsive grid layouts
- Touch-friendly buttons (min 44px)
- Mobile-first CSS approach
- Optimized images
- Minimal animations on mobile
- Readable font sizes

## 🔍 SEO Optimization

- Meta tags and descriptions
- Open Graph tags
- Structured data markup
- Sitemap
- Mobile responsive
- Fast load times
- Clean URL structure

## 📝 License

This project is proprietary. All rights reserved to Appify Digital.

## 📞 Support

For issues or questions:
- WhatsApp: +91 8877403146
- Email: contact@appifydigital.com

---

**Built with ❤️ by Appify Digital**
