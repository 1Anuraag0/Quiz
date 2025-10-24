// Quiz Application Logic
class QuizApp {
    constructor() {
        this.allQuestionSets = {
            set1: quizQuestionsSet1,
            set2: quizQuestionsSet2
        };
        this.questions = [];
        this.currentSet = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.timer = null;
        this.startTime = null;
        this.elapsedTime = 0;
        
        // Streak and stats tracking
        this.streak = 0;
        this.maxStreak = 0;
        this.correctCount = 0;
        this.wrongCount = 0;
        
        this.initializeElements();
        this.attachEventListeners();
        this.initializeSounds();
        this.createStreakDisplay();
    }
    
    initializeSounds() {
        // Using Web Audio API for open-source sound generation
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.soundEnabled = true;
    }
    
    playCorrectSound() {
        if (!this.soundEnabled) return;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(523.25, this.audioContext.currentTime); // C5
        oscillator.frequency.setValueAtTime(659.25, this.audioContext.currentTime + 0.1); // E5
        oscillator.frequency.setValueAtTime(783.99, this.audioContext.currentTime + 0.2); // G5
        
        gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.3);
    }
    
    playWrongSound() {
        if (!this.soundEnabled) return;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
        oscillator.frequency.setValueAtTime(150, this.audioContext.currentTime + 0.15);
        
        gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.3);
    }
    
    playStreakSound() {
        if (!this.soundEnabled) return;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(880, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1760, this.audioContext.currentTime + 0.2);
        
        gainNode.gain.setValueAtTime(0.4, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.4);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.4);
    }
    
    createStreakDisplay() {
        // Create streak container if it doesn't exist
        if (document.getElementById('streak-container')) return;
        
        const streakContainer = document.createElement('div');
        streakContainer.id = 'streak-container';
        streakContainer.className = 'streak-container';
        streakContainer.style.display = 'none';
        streakContainer.innerHTML = `
            <div class="streak-badge">
                <span class="streak-icon">🔥</span>
                <span class="streak-count">0</span>
            </div>
            <div class="stats-mini">
                <span class="correct-mini">✓ <span id="correct-count">0</span></span>
                <span class="wrong-mini">✗ <span id="wrong-count">0</span></span>
            </div>
        `;
        document.body.appendChild(streakContainer);
        
        this.streakContainer = streakContainer;
        this.streakCount = document.querySelector('.streak-count');
        this.correctCountDisplay = document.getElementById('correct-count');
        this.wrongCountDisplay = document.getElementById('wrong-count');
    }
    
    updateStreakDisplay() {
        if (!this.streakCount) return;
        
        this.streakCount.textContent = this.streak;
        this.correctCountDisplay.textContent = this.correctCount;
        this.wrongCountDisplay.textContent = this.wrongCount;
        
        const streakBadge = document.querySelector('.streak-badge');
        if (this.streak >= 5) {
            streakBadge.classList.add('on-fire');
        } else {
            streakBadge.classList.remove('on-fire');
        }
    }
    
    showFeedbackAnimation(type) {
        const feedback = document.createElement('div');
        feedback.className = `feedback-overlay ${type}`;
        feedback.innerHTML = type === 'correct' 
            ? '<div class="feedback-icon">✓</div><div class="feedback-text">Correct!</div>'
            : '<div class="feedback-icon">✗</div><div class="feedback-text">Wrong!</div>';
        
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            feedback.classList.remove('show');
            setTimeout(() => feedback.remove(), 300);
        }, 1000);
    }
    
    showStreakMilestone() {
        const milestone = document.createElement('div');
        milestone.className = 'streak-milestone';
        milestone.innerHTML = `
            <div class="milestone-icon">🔥</div>
            <div class="milestone-text">${this.streak} Streak!</div>
            <div class="milestone-subtitle">You're on fire!</div>
        `;
        
        document.body.appendChild(milestone);
        
        setTimeout(() => {
            milestone.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            milestone.classList.remove('show');
            setTimeout(() => milestone.remove(), 500);
        }, 2000);
    }

    initializeElements() {
        // Screens
        this.setSelectionScreen = document.getElementById('set-selection-screen');
        this.welcomeScreen = document.getElementById('welcome-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultsScreen = document.getElementById('results-screen');

        // Set selection buttons
        this.set1Btn = document.getElementById('set1-btn');
        this.set2Btn = document.getElementById('set2-btn');

        // Buttons
        this.startBtn = document.getElementById('start-btn');
        this.backToSetsBtn = document.getElementById('back-to-sets-btn');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.submitBtn = document.getElementById('submit-btn');
        this.restartBtn = document.getElementById('restart-btn');

        // Welcome screen elements
        this.welcomeTitle = document.getElementById('welcome-title');
        this.welcomeDescription = document.getElementById('welcome-description');

        // Quiz elements
        this.questionText = document.getElementById('question-text');
        this.answerOptions = document.getElementById('answer-options');
        this.questionCount = document.getElementById('question-count');
        this.timerDisplay = document.getElementById('timer');
        this.progressBar = document.getElementById('progress');

        // Results elements
        this.scorePercentage = document.getElementById('score-percentage');
        this.scoreText = document.getElementById('score-text');
        this.performanceMessage = document.getElementById('performance-message');
        this.resultsList = document.getElementById('results-list');
    }

    attachEventListeners() {
        this.set1Btn.addEventListener('click', () => this.selectSet('set1'));
        this.set2Btn.addEventListener('click', () => this.selectSet('set2'));
        this.startBtn.addEventListener('click', () => this.startQuiz());
        this.backToSetsBtn.addEventListener('click', () => this.showSetSelection());
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.submitBtn.addEventListener('click', () => this.submitQuiz());
        this.restartBtn.addEventListener('click', () => this.restartQuiz());
    }

    selectSet(setName) {
        this.currentSet = setName;
        this.questions = this.allQuestionSets[setName];
        
        // Calculate total marks for the set
        const totalMarks = this.questions.reduce((sum, q) => sum + (q.marks || 1), 0);
        
        // Update welcome screen based on selected set
        if (setName === 'set1') {
            this.welcomeTitle.textContent = 'Java Quiz - Set 1';
            this.welcomeDescription.textContent = `Java Basics & OOP Concepts\n45 Questions | Total: ${totalMarks} Marks`;
        } else {
            this.welcomeTitle.textContent = 'Java Quiz - Set 2';
            this.welcomeDescription.textContent = `Comprehensive Java Assessment\n50 Questions | Total: ${totalMarks} Marks`;
        }
        
        this.showScreen(this.welcomeScreen);
    }

    showSetSelection() {
        this.showScreen(this.setSelectionScreen);
    }

    startQuiz() {
        this.showScreen(this.quizScreen);
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(this.questions.length).fill(null);
        this.score = 0;
        this.streak = 0;
        this.maxStreak = 0;
        this.correctCount = 0;
        this.wrongCount = 0;
        this.startTime = Date.now();
        
        // Show streak display
        if (this.streakContainer) {
            this.streakContainer.style.display = 'flex';
            this.updateStreakDisplay();
        }
        
        this.startTimer();
        this.displayQuestion();
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
            const minutes = Math.floor(this.elapsedTime / 60);
            const seconds = this.elapsedTime % 60;
            this.timerDisplay.textContent = `Time: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }, 1000);
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        const isAnswered = this.userAnswers[this.currentQuestionIndex] !== null;
        
        // Update question text
        this.questionText.textContent = question.question;
        
        // Update question counter
        this.questionCount.textContent = `Question ${this.currentQuestionIndex + 1} of ${this.questions.length}`;
        
        // Update progress bar
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressBar.style.width = `${progress}%`;
        
        // Display answer options
        this.answerOptions.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'answer-option';
            optionDiv.textContent = option;
            optionDiv.dataset.index = index;
            
            // If question was already answered, show the feedback
            if (isAnswered) {
                const userAnswer = this.userAnswers[this.currentQuestionIndex];
                const correctAnswer = question.correctAnswer;
                
                if (question.multipleAnswers) {
                    // Multiple answer handling
                    if (Array.isArray(userAnswer) && userAnswer.includes(index)) {
                        optionDiv.classList.add('selected');
                    }
                } else {
                    // Single answer handling
                    optionDiv.classList.add('disabled');
                    
                    if (index === userAnswer) {
                        if (index === correctAnswer) {
                            optionDiv.classList.add('correct');
                        } else {
                            optionDiv.classList.add('incorrect');
                        }
                    }
                    
                    if (index === correctAnswer) {
                        optionDiv.classList.add('correct');
                    }
                }
            } else {
                // Allow clicking
                optionDiv.addEventListener('click', () => this.selectAnswer(index));
            }
            
            this.answerOptions.appendChild(optionDiv);
        });
        
        // Update navigation buttons
        this.updateNavigationButtons();
    }

    selectAnswer(answerIndex) {
        const question = this.questions[this.currentQuestionIndex];
        
        // Check if this is a multiple answer question
        if (question.multipleAnswers) {
            // Initialize array if first selection
            if (this.userAnswers[this.currentQuestionIndex] === null) {
                this.userAnswers[this.currentQuestionIndex] = [];
            }
            
            const userAnswers = this.userAnswers[this.currentQuestionIndex];
            const answerIdx = userAnswers.indexOf(answerIndex);
            
            // Toggle selection
            if (answerIdx > -1) {
                userAnswers.splice(answerIdx, 1);
            } else {
                userAnswers.push(answerIndex);
            }
            
            // Update UI for multiple selection
            const options = this.answerOptions.querySelectorAll('.answer-option');
            options[answerIndex].classList.toggle('selected');
            
        } else {
            // Single answer question - prevent re-selection if already answered
            if (this.userAnswers[this.currentQuestionIndex] !== null) {
                return;
            }
            
            this.userAnswers[this.currentQuestionIndex] = answerIndex;
            const correctAnswer = question.correctAnswer;
            const isCorrect = answerIndex === correctAnswer;
            
            // Update streak
            if (isCorrect) {
                this.streak++;
                this.correctCount++;
                if (this.streak > this.maxStreak) {
                    this.maxStreak = this.streak;
                }
                this.playCorrectSound();
                this.showFeedbackAnimation('correct');
                
                // Streak milestone sound
                if (this.streak % 5 === 0 && this.streak > 0) {
                    setTimeout(() => this.playStreakSound(), 300);
                    this.showStreakMilestone();
                }
            } else {
                this.streak = 0;
                this.wrongCount++;
                this.playWrongSound();
                this.showFeedbackAnimation('wrong');
            }
            
            this.updateStreakDisplay();
            
            // Update UI to show instant feedback
            const options = this.answerOptions.querySelectorAll('.answer-option');
            options.forEach((option, index) => {
                option.classList.add('disabled'); // Disable further clicks
                
                if (index === answerIndex) {
                    // Show user's selection
                    if (index === correctAnswer) {
                        option.classList.add('correct');
                    } else {
                        option.classList.add('incorrect');
                    }
                }
                
                // Always highlight the correct answer
                if (index === correctAnswer) {
                    option.classList.add('correct');
                }
            });
        }
    }
    
    updateStreakDisplay() {
        this.streakCount.textContent = this.streak;
        this.correctCountDisplay.textContent = this.correctCount;
        this.wrongCountDisplay.textContent = this.wrongCount;
        
        const streakBadge = document.querySelector('.streak-badge');
        if (this.streak >= 5) {
            streakBadge.classList.add('on-fire');
        } else {
            streakBadge.classList.remove('on-fire');
        }
    }
    
    showFeedbackAnimation(type) {
        const feedback = document.createElement('div');
        feedback.className = `feedback-overlay ${type}`;
        feedback.innerHTML = type === 'correct' 
            ? '<div class="feedback-icon">✓</div><div class="feedback-text">Correct!</div>'
            : '<div class="feedback-icon">✗</div><div class="feedback-text">Wrong!</div>';
        
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            feedback.classList.remove('show');
            setTimeout(() => feedback.remove(), 300);
        }, 1000);
    }
    
    showStreakMilestone() {
        const milestone = document.createElement('div');
        milestone.className = 'streak-milestone';
        milestone.innerHTML = `
            <div class="milestone-icon">🔥</div>
            <div class="milestone-text">${this.streak} Streak!</div>
            <div class="milestone-subtitle">You're on fire!</div>
        `;
        
        document.body.appendChild(milestone);
        
        setTimeout(() => {
            milestone.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            milestone.classList.remove('show');
            setTimeout(() => milestone.remove(), 500);
        }, 2000);
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        }
    }

    updateNavigationButtons() {
        // Previous button
        this.prevBtn.disabled = this.currentQuestionIndex === 0;
        
        // Next/Submit button
        const isLastQuestion = this.currentQuestionIndex === this.questions.length - 1;
        
        if (isLastQuestion) {
            this.nextBtn.style.display = 'none';
            this.submitBtn.style.display = 'block';
        } else {
            this.nextBtn.style.display = 'block';
            this.submitBtn.style.display = 'none';
        }
    }

    submitQuiz() {
        // Check if all questions are answered
        const unansweredCount = this.userAnswers.filter(answer => answer === null).length;
        
        if (unansweredCount > 0) {
            const confirmSubmit = confirm(`You have ${unansweredCount} unanswered question(s). Do you want to submit anyway?`);
            if (!confirmSubmit) {
                return;
            }
        }
        
        this.stopTimer();
        this.calculateScore();
        this.displayResults();
    }

    calculateScore() {
        this.score = 0;
        this.totalMarks = 0;
        
        this.questions.forEach((question, index) => {
            const questionMarks = question.marks || 1; // Default to 1 mark if not specified
            this.totalMarks += questionMarks;
            
            const userAnswer = this.userAnswers[index];
            const correctAnswer = question.correctAnswer;
            
            // Handle multiple answer questions
            if (question.multipleAnswers && Array.isArray(correctAnswer)) {
                if (Array.isArray(userAnswer)) {
                    // Check if arrays match (same elements regardless of order)
                    const sorted1 = [...userAnswer].sort();
                    const sorted2 = [...correctAnswer].sort();
                    if (sorted1.length === sorted2.length && 
                        sorted1.every((val, idx) => val === sorted2[idx])) {
                        this.score += questionMarks;
                    }
                }
            } else {
                // Single answer question
                if (userAnswer === correctAnswer) {
                    this.score += questionMarks;
                }
            }
        });
    }

    displayResults() {
        this.showScreen(this.resultsScreen);
        
        // Calculate percentage based on marks
        const percentage = Math.round((this.score / this.totalMarks) * 100);
        
        // Hide streak display
        if (this.streakContainer) {
            this.streakContainer.style.display = 'none';
        }
        
        // Animate score
        this.animateScore(percentage);
        
        // Display detailed stats
        const statsHTML = `
            <div class="result-stats">
                <div class="stat-card">
                    <div class="stat-icon">✓</div>
                    <div class="stat-value">${this.correctCount}</div>
                    <div class="stat-label">Correct</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">✗</div>
                    <div class="stat-value">${this.wrongCount}</div>
                    <div class="stat-label">Wrong</div>
                </div>
                <div class="stat-card fire">
                    <div class="stat-icon">🔥</div>
                    <div class="stat-value">${this.maxStreak}</div>
                    <div class="stat-label">Best Streak</div>
                </div>
            </div>
        `;
        
        // Insert stats
        const existingStats = document.querySelector('.result-stats');
        if (existingStats) {
            existingStats.remove();
        }
        this.performanceMessage.insertAdjacentHTML('beforebegin', statsHTML);
        
        // Performance message
        let message = '';
        let emoji = '';
        if (percentage >= 90) {
            message = 'Outstanding! You\'re a quiz master!';
            emoji = '🌟';
        } else if (percentage >= 75) {
            message = 'Excellent! Great performance!';
            emoji = '🎉';
        } else if (percentage >= 60) {
            message = 'Good job! Well done!';
            emoji = '👍';
        } else if (percentage >= 40) {
            message = 'Fair attempt! Keep practicing!';
            emoji = '📚';
        } else {
            message = 'Don\'t give up! Study and try again!';
            emoji = '💪';
        }
        this.performanceMessage.innerHTML = `${emoji} ${message}`;
        
        // Add confetti for high scores
        if (percentage >= 75) {
            setTimeout(() => this.showConfetti(), 500);
        }
        
        // Display detailed results
        this.displayDetailedResults();
    }

    displayDetailedResults() {
        this.resultsList.innerHTML = '';
        
        this.questions.forEach((question, index) => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            
            const isCorrect = this.userAnswers[index] === question.correctAnswer;
            const questionMarks = question.marks || 1;
            resultItem.classList.add(isCorrect ? 'correct' : 'incorrect');
            
            const userAnswerText = this.userAnswers[index] !== null 
                ? question.options[this.userAnswers[index]] 
                : 'Not answered';
            
            const marksAwarded = isCorrect ? questionMarks : 0;
            
            resultItem.innerHTML = `
                <h4>Question ${index + 1} <span class="question-marks">[${questionMarks} mark${questionMarks > 1 ? 's' : ''}]</span></h4>
                <p><strong>${question.question}</strong></p>
                <p class="marks-info">${isCorrect ? `✓ Earned: ${marksAwarded}/${questionMarks} marks` : `✗ Earned: 0/${questionMarks} marks`}</p>
                <p class="correct-answer">✓ Correct Answer: ${question.options[question.correctAnswer]}</p>
                ${!isCorrect ? `<p class="your-answer">✗ Your Answer: ${userAnswerText}</p>` : ''}
            `;
            
            this.resultsList.appendChild(resultItem);
        });
    }

    animateScore(targetPercentage) {
        let currentPercentage = 0;
        const increment = targetPercentage / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        this.scorePercentage.textContent = '0%';
        this.scoreText.textContent = `Your Score: 0/${this.totalMarks} marks`;
        
        const timer = setInterval(() => {
            currentPercentage += increment;
            if (currentPercentage >= targetPercentage) {
                currentPercentage = targetPercentage;
                clearInterval(timer);
            }
            
            const displayPercentage = Math.round(currentPercentage);
            const displayScore = Math.round((currentPercentage / 100) * this.totalMarks);
            
            this.scorePercentage.textContent = `${displayPercentage}%`;
            this.scoreText.textContent = `Your Score: ${displayScore}/${this.totalMarks} marks`;
        }, stepTime);
    }
    
    showConfetti() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDelay = Math.random() * 3 + 's';
                confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                document.body.appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 5000);
            }, i * 30);
        }
    }
    
    restartQuiz() {
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.elapsedTime = 0;
        this.streak = 0;
        this.maxStreak = 0;
        this.correctCount = 0;
        this.wrongCount = 0;
        
        // Remove any existing stats
        const existingStats = document.querySelector('.result-stats');
        if (existingStats) {
            existingStats.remove();
        }
        
        this.showSetSelection();
    }

    showScreen(screen) {
        [this.setSelectionScreen, this.welcomeScreen, this.quizScreen, this.resultsScreen].forEach(s => {
            s.classList.remove('active');
        });
        screen.classList.add('active');
    }
}

// Initialize the quiz app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
