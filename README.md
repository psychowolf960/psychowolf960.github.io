# Project Structure

This project has been reorganized for better maintainability and organization.

## New Directory Structure

```
/
├── index.html                 # Main portfolio page
├── assets/                    # All static assets
│   ├── css/                   # Stylesheets
│   │   ├── style.css          # Main stylesheet
│   │   └── styles.css         # Additional styles
│   ├── fonts/                 # Font files
│   │   └── ROMA.ttf           # Custom ROMA font
│   └── images/                # All images organized by type
│       ├── projects/          # Portfolio project images
│       │   ├── arkensoi.png
│       │   ├── artal.png
│       │   └── cote_photo.png
│       ├── games/             # Game images
│       │   ├── Better.gif
│       │   ├── DawnFire.png
│       │   ├── FPills.gif
│       │   ├── Knight.png
│       │   ├── Oneway.png
│       │   ├── PAINTer.png
│       │   ├── Puff.gif
│       │   └── Unispin.png
│       └── general/           # General purpose images
│           ├── Frame 1.png
│           ├── portrait.jpg
│           └── strag.png
├── js/                        # JavaScript files
│   └── script.js              # Main script file
├── pages/                     # Additional HTML pages
│   └── merci.html             # Thank you page
├── blog/                      # Blog section (unchanged)
│   ├── index.html
│   ├── script.js
│   └── style.css
└── _backup/                   # Backup files
    ├── _pgbackup/             # Pinegrow backup files
    └── _pginfo/               # Pinegrow info files
```

## Changes Made

1. **Assets Organization**: All static files (CSS, fonts, images) moved to `assets/` folder
2. **Image Categorization**: Images organized into logical subfolders (projects, games, general)
3. **Script Organization**: JavaScript files moved to `js/` folder
4. **Page Organization**: Additional HTML pages moved to `pages/` folder
5. **Backup Consolidation**: All backup files moved to `_backup/` folder

## Updated File References

All file references have been updated accordingly:
- CSS and font paths in stylesheets
- Image paths in HTML files
- Script paths in HTML files
- Inter-page navigation links

## Benefits

- **Better Organization**: Files are logically grouped by type and function
- **Easier Maintenance**: Clear separation of concerns
- **Scalability**: Easy to add new files in appropriate folders
- **Clean Root**: Root directory is cleaner with main files only
- **Professional Structure**: Follows web development best practices
