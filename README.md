<div class="hero-icon" align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
</div>

<h1 align="center">
job-search-portal-mvp
</h1>
<h4 align="center">A streamlined job search platform empowering users to find relevant opportunities with structured data and JSON-LD integration.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Framework-Next.js-blue" alt="Framework: Next.js">
  <img src="https://img.shields.io/badge/Frontend-TypeScript,_React-red" alt="Frontend: TypeScript, React">
  <img src="https://img.shields.io/badge/Backend-Node.js,_Express.js-blue" alt="Backend: Node.js, Express.js">
  <img src="https://img.shields.io/badge/Database-PostgreSQL-black" alt="Database: PostgreSQL">
</div>
<div class="badges" align="center">
  <img src="https://img.shields.io/github/last-commit/coslynx/job-search-portal-mvp?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/coslynx/job-search-portal-mvp?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/coslynx/job-search-portal-mvp?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
This repository houses the Minimum Viable Product (MVP) for a job search portal. This innovative web-based platform aims to revolutionize job hunting by providing a user-friendly, structured, and accessible experience. It utilizes cutting-edge technologies such as Next.js, TypeScript, React, and PostgreSQL, with a focus on structured data and JSON-LD integration for improved searchability. 

## 📦 Features

|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| 🔍 | **Job Search**     | Allows users to search for jobs using keywords, location, job title, company, and other criteria.  Advanced filtering options are available to narrow down results. |
| 📑 | **Structured Data** | Presents job listings with well-defined categories (job title, company description, location, responsibilities, qualifications, salary range). |
| 🌐 | **JSON-LD Integration** | Incorporates JSON-LD (JSON-LD for Linked Data) to enhance search engine visibility and discoverability of job listings. |
| 👤 | **User Authentication** | Enables users to create accounts, log in, and manage personal profiles, including saving jobs and accessing personalized features. |
| 🔐 | **Security**       | Implements robust security measures to protect user data, including secure authentication, password hashing, and input validation. |
| 🚀 | **Scalability**    |  Designed to handle increasing user volume and job postings, ensuring long-term sustainability and future expansion. |
| 🎨 | **User Interface** |  Offers a clear and intuitive interface across different devices, prioritizing ease of use and accessibility. |
| 📊 | **Analytics**      |  Collects data on user interactions and job trends to improve the platform's effectiveness and personalize the user experience. |

## 📂 Structure
```text
job-search-portal-mvp
├── pages
│   ├── search
│   │   └── index.tsx
│   ├── job
│   │   └── [jobId].tsx
│   ├── profile
│   │   └── index.tsx
│   └── api
│       ├── jobs
│       │   └── route.ts
│       └── auth
│           └── [...nextauth].ts
├── components
│   ├── shared
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   └── features
│       ├── auth
│       │   └── LoginForm.tsx
│       ├── search
│       │   ├── JobCard.tsx
│       │   └── SearchForm.tsx
│       ├── job
│       │   └── JobDetails.tsx
│       └── profile
│           └── UserProfile.tsx
├── lib
│   ├── api
│   │   └── client.ts
│   └── utils
│       ├── formatters.ts
│       └── helpers.ts
├── styles
│   └── globals.css
├── public
│   └── images
├── .env.local
├── .gitignore
├── package.json
└── next.config.js

```

## 💻 Installation
### 🔧 Prerequisites
- Node.js v18+ 
- npm 8+
- PostgreSQL 14+

### 🚀 Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/coslynx/job-search-portal-mvp.git
   cd job-search-portal-mvp
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```
   **Replace the placeholders in `.env` with your actual Supabase URL, API key, and any other necessary environment variables.** 
4. Start the development server:
   ```bash
   npm run dev
   ```
   This will launch the application at http://localhost:3000.

## 🏗️ Usage
This MVP demonstrates the core features of the job search portal, including:

- **Job Search:** Navigate to the homepage (http://localhost:3000) and use the search bar to find jobs based on keywords and location. 
- **Job Details:** Click on a job listing to view detailed information, including job title, company description, responsibilities, qualifications, salary range, and application instructions.
- **User Authentication:**  Use the "Sign In" button to register a new account or log in. Once logged in, you can save jobs to your profile. 

## 🌐 Hosting
This MVP is designed to be deployed using Vercel. Here are the steps for deployment:

1. **Create a Vercel account** if you don't have one already.
2. **Log in to Vercel** and select "New Project".
3. **Import from Git** and provide the repository URL: https://github.com/coslynx/job-search-portal-mvp
4. **Choose the environment variables** for deployment (refer to the `environment variables` section below).
5. **Deploy your application**! Once the deployment process is complete, you will have a live instance of the Job Search Portal MVP. 

### 🔑 Environment Variables
- `SUPABASE_URL`: Your Supabase URL 
- `SUPABASE_KEY`: Your Supabase API key
- `NEXTAUTH_SECRET`: A unique secret key for NextAuth.js (generate using `openssl rand -base64 32`)
- `NEXTAUTH_URL`: The URL of your Vercel deployment (e.g., `https://your-job-portal.vercel.app`)

## 📜 API Documentation
### 🔍 Endpoints

#### Authentication
- **POST /api/auth/register**
    - Description: Register a new user account.
    - Request Body: `{"email": "your@email.com", "password": "password123", "name": "Your Name"}`
    - Response (Success):  `{"id": "user-id", "email": "your@email.com", "name": "Your Name", "token": "your-jwt-token"}`
    - Response (Error):  `{"error": "error message"}` 
- **POST /api/auth/signin**
    - Description: Sign in an existing user.
    - Request Body: `{"email": "your@email.com", "password": "password123"}`
    - Response (Success):  `{"id": "user-id", "email": "your@email.com", "name": "Your Name", "token": "your-jwt-token"}`
    - Response (Error):  `{"error": "error message"}` 
- **GET /api/auth/session** 
    - Description: Check for existing user sessions.
    - Headers: `Authorization: Bearer TOKEN`
    - Response (Success):  `{"id": "user-id", "email": "your@email.com", "name": "Your Name"}`
    - Response (Error): `{"error": "error message"}`

#### Job Listing
- **GET /api/jobs**
    - Description:  Get a list of job listings based on search parameters.
    - Query Parameters: `q=keywords`, `location=city,state` (optional)
    - Response: `[{"id": "job-id", "title": "Job Title", "company": "Company Name", "location": "City, State", "description": "Job Description", ...}]`
- **GET /api/jobs/:id**
    - Description: Get details for a specific job listing by ID.
    - Response: `{"id": "job-id", "title": "Job Title", "company": "Company Name", "location": "City, State", "description": "Job Description", ...}]`


### 🔒 Authentication
- User authentication is managed using NextAuth.js.
- Users must register or sign in to access protected features like saving jobs.
- JWT tokens are issued upon successful authentication. 
- Include the JWT token in the `Authorization` header for all protected API requests (e.g., `Authorization: Bearer YOUR_JWT_TOKEN`).


### 📝 Examples

```bash
# Register a new user
curl -X POST http://localhost:3000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{"email": "your@email.com", "password": "password123", "name": "Your Name"}'

# Sign in an existing user
curl -X POST http://localhost:3000/api/auth/signin \
     -H "Content-Type: application/json" \
     -d '{"email": "your@email.com", "password": "password123"}'

# Get a list of job listings (with search parameters)
curl -X GET http://localhost:3000/api/jobs?q=Software+Engineer&location=San+Francisco,CA

# Get details for a specific job listing
curl -X GET http://localhost:3000/api/jobs/job-id-123
```

## 📜 License & Attribution

### 📄 License
This Minimum Viable Product (MVP) is licensed under the [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) license.

### 🤖 AI-Generated MVP
This MVP was entirely generated using artificial intelligence through [CosLynx.com](https://coslynx.com).

No human was directly involved in the coding process of the repository: job-search-portal-mvp

### 📞 Contact
For any questions or concerns regarding this AI-generated MVP, please contact CosLynx at:
- Website: [CosLynx.com](https://coslynx.com)
- Twitter: [@CosLynxAI](https://x.com/CosLynxAI)

<p align="center">
  <h1 align="center">🌐 CosLynx.com</h1>
</p>
<p align="center">
  <em>Create Your Custom MVP in Minutes With CosLynxAI!</em>
</p>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Developers-Drix10,_Kais_Radwan-red" alt="">
  <img src="https://img.shields.io/badge/Website-CosLynx.com-blue" alt="">
  <img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="">
  <img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4,_v6-black" alt="">
</div>