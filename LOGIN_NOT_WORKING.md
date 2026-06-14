# 🔴 Login Not Working - Quick Fix

## Problem
When you try to login, it shows "login invalid" or nothing happens.

## Root Cause
Your backend service on Render **doesn't have the required environment variables set**, so it's not running.

---

## ✅ FIX (Takes 3 minutes)

### Step 1: Set Environment Variables on Render

1. Go to https://dashboard.render.com
2. Click **edualfa-2-1** (your backend service)
3. Click **Environment** tab
4. If you see "No environment variables", click **Add Environment Variable**
5. Add **ONLY 2 variables**:

**First Variable:**
- Key: `DATABASE_URL`
- Value: **[Get a free database first - see below]**
- Click "Save"

**Second Variable:**
- Key: `JWT_SECRET`
- Value: `edualfa-secret-production-2026-long-secret-key` (or any 32+ char string)
- Click "Save"

---

### Step 2: Get a Free Database (Pick ONE - Takes 1 minute)

#### 🚀 EASIEST: Neon.tech
1. Go to https://console.neon.tech
2. Click **Create Project**
3. Name: `edualfa`
4. Click **Create**
5. Wait 30 seconds, then click on your project
6. Copy the connection string (green button, looks like):
   ```
   postgresql://user:password@ep-xxx.us-east-2.neon.tech/neondb?sslmode=require
   ```
7. Go back to Render and paste this as `DATABASE_URL`

---

### Step 3: Deploy Backend

1. On Render, click **Manual Deploy** (blue button, top right)
2. **Wait** for green "Live" status (2-3 minutes)
3. Click **Logs** tab - should show:
   ```
   EduAlfa backend running on http://localhost:3000
   ```

---

## 🧪 Test Backend is Working

Open browser console (Ctrl+Shift+J) and run:
```javascript
fetch('https://edualfa-2-1.onrender.com/api/health')
  .then(r => r.json())
  .then(d => console.log('✅ Backend is LIVE:', d))
  .catch(e => console.error('❌ Backend still down:', e.message))
```

**If you see**: `✅ Backend is LIVE: {status: "ok", uptime: ...}` → Backend is working! Go to Step 4.

**If you see error**: Check Render logs for what went wrong.

---

## 🎯 Step 4: Test Login

1. Go to https://frontend-edualfa.vercel.app
2. Try **Admin Login**:
   - Username: `admin`
   - Password: `admin123`
   - Click "Enter Control Room"
3. Should see **Admin Dashboard** ✅

If still fails:
- Open browser console (Ctrl+Shift+J)
- Look for error messages (red text)
- Copy and share the error here

---

## ❌ Common Issues

| Problem | Solution |
|---------|----------|
| "Cannot POST /api/auth" | Backend not running, check Render logs |
| "ECONNREFUSED" | Backend crashed, check DATABASE_URL is valid |
| "Invalid credentials" | Try admin/admin123 (make sure it's lowercase) |
| "Connection timeout" | Backend still starting, wait 30 seconds and try again |

---

## 📋 Checklist

- [ ] Database created (Neon.tech, Render, or Supabase)
- [ ] DATABASE_URL added to Render Environment
- [ ] JWT_SECRET added to Render Environment (any 32+ char string)
- [ ] Manual Deploy clicked on Render
- [ ] Backend shows "Live" (green checkmark)
- [ ] Logs show "running on http://localhost:3000"
- [ ] Health check test returns `{"status":"ok"}`
- [ ] Frontend at https://frontend-edualfa.vercel.app loads
- [ ] Admin login works with admin/admin123
- [ ] Redirects to Dashboard after login

---

**DO THIS NOW**: Follow Steps 1-3 above, then test Step 4. The login will work immediately after! ⚡
