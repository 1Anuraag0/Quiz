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
        
        this.initializeElements();
        this.attachEventListeners();
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
        this.startTime = Date.now();
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
            } else {
                // Allow clicking only if not answered
                optionDiv.addEventListener('click', () => this.selectAnswer(index));
            }
            
            this.answerOptions.appendChild(optionDiv);
        });
        
        // Update navigation buttons
        this.updateNavigationButtons();
    }

    selectAnswer(answerIndex) {
        // Prevent re-selection if already answered
        if (this.userAnswers[this.currentQuestionIndex] !== null) {
            return;
        }
        
        this.userAnswers[this.currentQuestionIndex] = answerIndex;
        const correctAnswer = this.questions[this.currentQuestionIndex].correctAnswer;
        
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
            
            if (this.userAnswers[index] === question.correctAnswer) {
                this.score += questionMarks;
            }
        });
    }

    displayResults() {
        this.showScreen(this.resultsScreen);
        
        // Calculate percentage based on marks
        const percentage = Math.round((this.score / this.totalMarks) * 100);
        this.scorePercentage.textContent = `${percentage}%`;
        this.scoreText.textContent = `Your Score: ${this.score}/${this.totalMarks} marks`;
        
        // Performance message
        let message = '';
        if (percentage >= 90) {
            message = 'Outstanding! You\'re a quiz master! 🌟';
        } else if (percentage >= 75) {
            message = 'Excellent! Great performance! 🎉';
        } else if (percentage >= 60) {
            message = 'Good job! Well done! 👍';
        } else if (percentage >= 40) {
            message = 'Fair attempt! Keep practicing! �';
        } else {
            message = 'Don\'t give up! Study and try again! 💪';
        }
        this.performanceMessage.textContent = message;
        
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

    restartQuiz() {
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.elapsedTime = 0;
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
