# EduAlfa Deployment Guide

## ✅ Current Status

- **Frontend (Vercel)**: https://frontend-edualfa.vercel.app
- **Backend (Render)**: https://edualfa-2-1.onrender.com

## 🔧 What You Must Do on Render (Required)

Your backend service is created but **needs environment variables** to run.

### Step 1: Add Environment Variables to Render

1. Go to https://dashboard.render.com
2. Click your backend service: `edualfa-2-1` (or similar)
3. Click **Environment**
4. Add these variables (click "New Environment Variable" for each):

```
DATABASE_URL = postgresql://user:password@host:5432/edualfa
JWT_SECRET = your-super-secret-key-at-least-32-chars
NODE_ENV = production
FRONTEND_URL = https://frontend-edualfa.vercel.app
PORT = 3000
```

**If you don't have a PostgreSQL database yet:**
- Get one from Render (free tier) → New → PostgreSQL → create → copy connection string to `DATABASE_URL`
- Or use neon.tech, supabase.com, or railway.app (all have free tiers)

### Step 2: Deploy

After adding env vars:
1. Click **Manual Deploy** button on Render
2. Wait for "Live" status (3-5 mins)
3. Check **Logs** tab — should show "Server running on port 3000"

### Step 3: Test

Open https://frontend-edualfa.vercel.app and try:
- Admin Login (test credentials from your seed data)
- Student Signup / Login

---

## 🚀 Automated Deployment (Optional)

GitHub Action is set up to auto-deploy on `main` push if you add:
- GitHub Secrets: `RENDER_API_KEY`, `RENDER_SERVICE_ID` (skip this if manual deploy works)

---

## 📋 Checklist

- [ ] DATABASE_URL added to Render
- [ ] JWT_SECRET added to Render  
- [ ] NODE_ENV = production
- [ ] FRONTEND_URL = https://frontend-edualfa.vercel.app
- [ ] Manual Deploy clicked
- [ ] Backend shows "Live" status
- [ ] Logs show "Server running"
- [ ] Frontend login works

---

## ❌ Troubleshooting

**Backend shows "Crashed"**
- Check **Logs** tab for error messages
- Missing DATABASE_URL usually causes crash
- Missing JWT_SECRET causes crash

**Login fails with "Cannot reach server"**
- Verify `VITE_API_URL` is correct in Vercel (should be https://edualfa-2-1.onrender.com/api)
- Check backend /api/health endpoint: https://edualfa-2-1.onrender.com/api/health
- Should return: `{"status":"ok","uptime":...}`

**Database connection error**
- DATABASE_URL must be valid PostgreSQL connection string
- Format: `postgresql://user:password@host:port/dbname`

---

## 📞 Need Help?

Paste the error from Render **Logs** tab here and I'll fix it.
