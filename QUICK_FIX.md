# 🚀 Quick Fix - Make Login Work in 3 Steps

Your frontend and backend are deployed but **login fails** because backend is missing **environment variables**.

## ✅ DO THIS NOW (3 steps, 2 minutes)

### Step 1: Get a Free Database
Go to **ONE** of these (pick any):
- **Neon.tech** (easiest): https://console.neon.tech → Sign up → Create project → Copy connection string
- **Render.com**: https://dashboard.render.com → New → PostgreSQL → Copy connection string  
- **Supabase**: https://supabase.com → New project → Copy connection string

It will look like:
```
postgresql://user:password@host.somewhere.com:5432/dbname
```

---

### Step 2: Add Variables to Your Render Backend

1. Open https://dashboard.render.com
2. Click your service: **edualfa-2-1** (or your backend service name)
3. Click **Environment** tab
4. Click **New Environment Variable** and add **ONLY 2 VARIABLES**:

| Key | Value |
|-----|-------|
| `DATABASE_URL` | `postgresql://...` (paste from Step 1) |
| `JWT_SECRET` | `super-secret-jwt-key-make-it-long-at-least-32-characters` |

Just pick any secure string for JWT_SECRET, like:
```
edualfa-production-secret-2026-make-it-long-enough
```

---

### Step 3: Deploy

1. Click **Manual Deploy** button on Render (blue button, top right)
2. Wait for "Live" status (shows green checkmark, takes ~3 min)
3. Go to **Logs** tab — you should see: `Server running on port 3000`

---

## 🎉 DONE

Now test:
- Open https://frontend-edualfa.vercel.app
- Try login/signup
- **Should work!**

---

## ❌ If Still Not Working

Run this in your browser console (Ctrl+Shift+J) on the frontend:
```javascript
fetch('https://edualfa-2-1.onrender.com/api/health')
  .then(r => r.json())
  .then(d => console.log(d))
  .catch(e => console.error(e))
```

- If you see `{"status":"ok"}` → Backend is working, check login credentials
- If error → Backend not running, check Render logs for error

---

## ⚠️ Common Issues

| Problem | Solution |
|---------|----------|
| "Connection refused" | DATABASE_URL is wrong or missing |
| "No such table: users" | Database migrations didn't run (click Manual Deploy again) |
| "Invalid JWT" | JWT_SECRET is different between frontend/backend requests |
| Backend shows "Crashed" | Check Render Logs tab for error message |

---

**That's it!** 2-3 minutes and you're live. 🚀
