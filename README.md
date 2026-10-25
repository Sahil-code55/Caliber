# Caliber — Interview Practice Tracker

A simple, responsive web application to organize interview preparation questions, track progress, and manage revision notes.

## Features

- **Dashboard:** View question summaries and progress statistics.
- **Question Management:** Add, edit, and delete questions.
- **Search & Filters:** Find questions by title, category, difficulty, and status.
- **Progress Tracking:** Track questions as Pending, In Progress, or Completed.
- **Notes:** Store useful approaches and revision notes for each question.
- **Data Persistence:** Save questions in browser LocalStorage so they remain available after refreshing.
- **Responsive UI:** Layout designed for desktop and mobile screens.
- **Form Validation:** Prevent empty question titles and reject invalid question data.
- **Settings:** Clear saved questions when needed.

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router
- Lucide React
- Context API
- Browser LocalStorage

## Getting Started

### Prerequisites

- Node.js and npm installed
- Git (optional, for cloning the repository)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sahil-code55/Caliber.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Caliber
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run lint` | Check code using ESLint |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |

## Data Storage

Caliber uses browser LocalStorage to save questions. Data is stored locally in the browser and does not automatically synchronize across devices or browsers. Clearing browser storage may remove saved questions.

## Future Improvements

- User authentication and cloud synchronization
- Import and export questions
- Advanced progress analytics
- Automated tests

## Author

Developed as an interview preparation and progress-tracking project.
