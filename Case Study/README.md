Case Study Webpages — SIT JS Lab

This repository collects small JavaScript/HTML demos organized as "Case Study1" .. "Case Study10".

What is included
-----------------
- Each `Case StudyX/` folder contains one or more static HTML demos (with optional JS/CSS files).
- A `PROJECTS_OVERVIEW.txt` file (root) summarizes each folder, its pages and their purpose.

How to view locally
-------------------
1. Open any case study folder and open the `index.html` (or the relevant .html) in a browser.
2. Alternatively, run a simple static server from the workspace root (recommended) to avoid browser restrictions for local files:

# If you have Python 3 installed (PowerShell):
python -m http.server 8000
# Then open http://localhost:8000/ in your browser

# Or using Node.js http-server (if installed):
# npx http-server -p 8000

Make this project Git-available
-------------------------------
I created a `.gitignore` and you can initialize git locally (I can do that for you). After initializing, push to a GitHub repo you create and provide the remote URL:

```powershell
git remote add origin <your-remote-url>
git branch -M main
git push -u origin main
```

Notes & next steps
------------------
- Consider adding a top-level `index.html` linking to each Case Study for easy browsing.
- Add author/license details to README if you want to publish this publicly.
- If you want, I can initialize git here and push to a GitHub repo if you provide the remote URL or authorize creation.

-- Generated automatically
