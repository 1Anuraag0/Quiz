# Interactive Quiz Platform

A modern, responsive quiz application built with HTML, CSS, and JavaScript. Features include multiple-choice questions, real-time scoring, timer functionality, and detailed results analysis.

## 🚀 Live Demo

Deploy this project to Vercel: [Your Vercel URL will appear here after deployment]

## Features

- 🎯 **Two Question Sets** - Choose between Set 1 (45 questions) or Set 2 (50 questions)
- ✨ **Instant Feedback** - Green for correct, red for incorrect answers
- 🎯 Multiple choice questions with visual feedback
- ⏱️ Real-time timer tracking
- 📊 **Progress Bar** - Visual progress indicator
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🔄 **Navigation** - Move between questions with Previous/Next buttons
- ✅ **Results Analysis** - Detailed breakdown of correct and incorrect answers
- 🎉 **Score Display** - Visual score representation with percentage

## How to Use

1. Open `index.html` in your web browser
2. Click "Start Quiz" to begin
3. Select your answer for each question
4. Navigate between questions using Previous/Next buttons
5. Click "Submit Quiz" after answering all questions
6. Review your results and click "Try Again" to restart

## Project Structure

```
quiz/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Quiz application logic
├── questions.js        # Question database
└── README.md          # Project documentation
```

## Customization

### Adding More Questions

Edit `questions.js` and add new question objects:

```javascript
{
    question: "Your question text here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctAnswer: 0  // Index of correct answer (0-3)
}
```

### Changing Colors

Modify the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --success-color: #10b981;
    --danger-color: #ef4444;
}
```

## Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Styling, animations, and responsive design
- **JavaScript (ES6+)** - Quiz logic and interactivity
- **Vercel** - Deployment and hosting

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed):
```powershell
npm install -g vercel
```

2. **Navigate to your project directory**:
```powershell
cd c:\Users\ianur\OneDrive\Desktop\quiz
```

3. **Login to Vercel**:
```powershell
vercel login
```

4. **Deploy the project**:
```powershell
vercel
```

5. **Follow the prompts**:
   - Set up and deploy? `Y`
   - Which scope? (Select your account)
   - Link to existing project? `N`
   - Project name? `java-quiz-platform` (or your preferred name)
   - In which directory is your code located? `./`
   - Want to modify settings? `N`

6. **Deploy to production**:
```powershell
vercel --prod
```

### Option 2: Deploy via Vercel Website

1. **Push your code to GitHub**:
```powershell
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Java Quiz Platform"

# Create a new repository on GitHub and push
git remote add origin https://github.com/YOUR_USERNAME/java-quiz-platform.git
git branch -M main
git push -u origin main
```

2. **Go to [Vercel](https://vercel.com)**
3. Click **"Add New Project"**
4. **Import your GitHub repository**
5. Vercel will automatically detect it as a static site
6. Click **"Deploy"**
7. Your quiz will be live in seconds!

### Option 3: Deploy by Dragging Folder

1. Go to [Vercel](https://vercel.com)
2. Click **"Add New Project"**
3. **Drag and drop your `quiz` folder** directly to the upload area
4. Click **"Deploy"**

## After Deployment

Once deployed, Vercel will provide you with:
- 🌐 A production URL (e.g., `java-quiz-platform.vercel.app`)
- 🔄 Automatic deployments on every push (if using Git)
- 📊 Analytics and performance metrics
- 🔒 HTTPS by default

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## Future Enhancements

- Question categories
- Difficulty levels
- Leaderboard system
- Question randomization
- Time limit per question
- Sound effects
- Dark mode toggle

## License

This project is open source and available for educational purposes.

## Author

Created as an interactive learning tool for quiz enthusiasts!
