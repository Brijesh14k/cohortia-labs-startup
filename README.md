# Cohortia Labs Startup Website

A modern full-stack startup website built using React, TypeScript, Django REST Framework, and PostgreSQL.

## Features

- Modern responsive UI
- Multi-page routing
- Consultation booking form
- Django REST API
- PostgreSQL database integration
- Startup-style product pages
- Mobile responsive navbar
- Testimonials and stats sections

## Tech Stack

### Frontend
- React
- TypeScript
- TailwindCSS


### Backend
- Django
- Django REST Framework

### Database
- PostgreSQL

## Setup Instructions

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
venv\Scripts\activate
pip install -r requirements.txt
python manage.py runserver
```

## Architecture Overview

Frontend communicates with Django REST APIs using Axios.  
Backend APIs handle contact form submissions and store data in PostgreSQL.

## Key Design Decisions

- Multi-page architecture for better UX
- Responsive startup-grade UI
- Reusable React components
- Separate consultation workflow

## Assumptions

- PostgreSQL installed locally
- Frontend and backend run separately during development