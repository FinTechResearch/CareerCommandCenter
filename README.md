# Career Command Center

AI-powered desktop career toolkit.

## Features

- Resume Matching
- AI Job Analysis
- Interview Preparation
- Cover Letter Generation
- Job Search
- Application Tracking

## Download

Download Link = https://adityamadhok.gumroad.com/l/Career-Command-Center

dev.to artical of this project = https://dev.to/adityamadhok/i-built-career-command-center-an-ai-powered-job-search-dashboard-with-python-textual-496d

-------------------------------------------------------------------------------------------------------------------------------------------------------

If you've ever managed dozens of job applications across multiple websites, you know how chaotic the process becomes.

Spreadsheets, bookmarked job listings, resumes tailored for different roles, interview notes, cover letters, and application tracking quickly become overwhelming.

So I decided to build something for myself.

Introducing **Career Command Center** — an AI-powered terminal dashboard built with Python and Textual that helps job seekers organize and accelerate their job search.

---

## Why I Built It

I wanted a single application where I could:

* Track applications
* Search jobs
* Generate cover letters
* Match resumes against jobs
* Prepare for interviews
* Analyze job descriptions with AI
* View application statistics

without constantly switching between websites and tools.

The result is a desktop application that feels like a futuristic command center for career management.

---

## Tech Stack


### Frontend

* Python
* Textual (Terminal UI Framework)
* Rich

### Backend

* SQLite
* Groq AI API

### Job Sources

* RemoteOK
* Browser-integrated Cutshort search
* Extensible multi-source architecture

### Packaging

* PyInstaller
* Windows Executable
* Linux Binary

---

## Features


## Application Tracking

Keep track of:

* Applied jobs
* Interviews
* Offers
* Rejections

with a built-in SQLite database.

---

## AI Job Analyzer

Paste any job description and receive:

* Skills required
* Experience level
* Responsibilities
* Suggested interview topics
* Resume improvement recommendations

Powered by Groq AI.

---

## Resume Match

Upload your resume and compare it against a job description.

Get:

* Match score
* Missing skills
* Resume gaps
* Suggested improvements
* ATS-style feedback

---

## AI Cover Letter Generator

Generate customized cover letters in seconds.

No more rewriting the same template over and over.

---

## Interview Preparation

Generate:

* Technical questions
* Behavioral questions
* Follow-up questions
* Preparation tips

based on a target role.

---

## Real Job Search

Search remote opportunities directly from the application.

Current integrations include:

* RemoteOK

---

## API Settings

Users can connect their own Groq API key.

The application stores the key locally so users remain in control of their usage.

---

## Dashboard Overview

The dashboard provides:

* Total Applications
* Interviews
* Offers
* Rejections

along with quick navigation to all tools.

---

## Packaging Challenges

One interesting challenge was packaging a Textual application into standalone executables.

Textual applications are terminal-based, so Windows builds require a console-enabled executable rather than a GUI-only executable.

After several iterations with PyInstaller, I successfully packaged:

* Windows EXE
* Linux Binary

for distribution.

---

## Screenshots


### Dashboard


![Dashboard](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/njv3a676e8cjtddic7py.png)

### AI Job Analyzer


![AI Job Analyzer](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n13z6v3bqvch196u4rl9.png)

### Resume Match


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/71d5h769zy717p8ivmp6.png)

### Interview Preparation


![Interview Preparation](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n10pndo54ac5zynlr40j.png)

### Job Search


![Job Search](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b3sqj7wt9ew53nns5u38.png)

### API Settings


![API Settings](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/svheaterusfs8pc0tsfk.png)

---

## What I Learned

Building this project taught me a lot about:

* Textual application development
* SQLite integration
* AI-powered workflows
* Desktop packaging
* Cross-platform deployment
* Product design for job seekers

---

## Future Roadmap

Planned improvements include:

* Resume optimization
* ATS scoring
* PDF report exports
* Multi-source job aggregation
* Advanced analytics dashboard

---

## Availability

Career Command Center is available as a downloadable desktop application.

If you'd like to support the project and get access to future updates, you can purchase it here:

Windows and Linux versions available:

**👉 https://adityamadhok.gumroad.com/l/Career-Command-Center**

---

## Final Thoughts

This project started as a personal productivity tool and evolved into a complete AI-powered career toolkit.

If you're learning Python, exploring Textual, or interested in building AI-powered desktop applications, I highly recommend experimenting with tools like these.

Thanks for reading.

If you'd like to see future updates, feel free to follow me here on Dev.to and share your feedback.

Happy coding and good luck with your job search!

