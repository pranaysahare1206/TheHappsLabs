# MyHapps Labs Website
## GitHub Pages Setup Guide

---

## FOLDER STRUCTURE
```
myhappslabs/          ← your GitHub repo name
├── index.html        ← Homepage (lists all apps)
├── terms.html        ← Terms & Conditions
└── apps/
    ├── passport-photo-maker.html   ← App 1
    ├── your-next-app.html          ← App 2 (when ready)
    └── app-3.html                  ← App 3 (when ready)
```

---

## STEP 1 — Create GitHub Account
1. Go to github.com → Sign Up (free)
2. Verify your email

## STEP 2 — Create Repository
1. Click the "+" icon → New repository
2. Name it: myhappslabs  (all lowercase)
3. Set to Public
4. Click "Create repository"

## STEP 3 — Upload Files
1. Click "uploading an existing file"
2. Upload index.html and terms.html
3. Click "Commit changes"
4. Then go into the repo → create folder "apps"
5. Upload passport-photo-maker.html inside apps/

## STEP 4 — Enable GitHub Pages
1. Go to your repo → Settings → Pages
2. Under "Source" select: Deploy from branch
3. Branch: main  /  Folder: / (root)
4. Click Save
5. Wait 2 minutes → your site is live!

## YOUR URLS WILL BE:
```
Homepage:
https://yourusername.github.io/myhappslabs/

Passport App page:
https://yourusername.github.io/myhappslabs/apps/passport-photo-maker.html

Privacy Policy (paste this into Play Console):
https://yourusername.github.io/myhappslabs/apps/passport-photo-maker.html#privacy

Terms:
https://yourusername.github.io/myhappslabs/terms.html
```

---

## HOW TO ADD A NEW APP

### Step 1 — Duplicate the app page
Copy: apps/passport-photo-maker.html
Rename to: apps/your-new-app-name.html
Edit: app name, description, features, privacy policy content inside the file

### Step 2 — Add card on homepage
Open index.html, find this comment:
  <!-- ══ ADD NEW APP CARD HERE ══ -->

Paste this block above it:
```html
<a class="app-card" href="apps/your-new-app-name.html">
  <div class="card-top">
    <div class="card-icon">🎯</div>
    <span class="card-arrow">→</span>
  </div>
  <div class="card-name">Your New App Name</div>
  <div class="card-desc">Short description of what the app does.</div>
  <div class="card-tags">
    <span class="ctag live">Live</span>
    <span class="ctag">Android</span>
    <span class="ctag">Free</span>
  </div>
</a>
```

### Step 3 — Privacy URL for new app in Play Console:
https://yourusername.github.io/myhappslabs/apps/your-new-app-name.html#privacy

That's it. New app live in 2 minutes.

---

## REMEMBER TO UPDATE
- Replace support@myhappslabs.com with your real email in all files
- Replace Play Store link in each app page with the real Play Store URL after publishing
