# 🧠 Quiz Master - Interactive Quiz Application

A modern, responsive quiz application built with HTML, CSS, and JavaScript featuring dark mode, smooth animations, and an engaging user experience.



## ✨ Features

- 🌙 **Dark Mode Toggle** - Switch between light and dark themes with smooth transitions
- 📊 **Progress Bar** - Visual indicator showing quiz completion status
- 🎨 **Modern UI Design** - Beautiful gradient backgrounds and contemporary styling
- ✨ **Smooth Animations** - Engaging animations for questions, answers, and feedback
- ✅ **Instant Feedback** - Visual indicators for correct and incorrect answers
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🏆 **Score Summary** - Detailed results with percentage and motivational messages
- 🎯 **Interactive Elements** - Hover effects and button animations for better UX
- 🔄 **Replay Option** - Restart the quiz instantly after completion

## 🚀 Demo

Simply open the `index.html` file in your web browser to start the quiz!

## 📋 Prerequisites

No prerequisites required! This is a standalone application that runs entirely in the browser.

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/BlesseeDevamani/FWD-Quiz-App.git
```

2. Navigate to the project directory:
```bash
cd "Quiz App"
```

3. Open `index.html` in your preferred web browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or simply drag and drop the `index.html` file into your browser.

## 📁 Project Structure

```
Quiz App/
│
├── index.html
├── styles.css
├── script.js          
└── README.md          # Project documentation
```

## 🎮 How to Use

1. **Start the Quiz** - The quiz loads automatically when you open the page
2. **Answer Questions** - Click on any answer option to select it
3. **View Feedback** - Correct answers turn green, incorrect ones turn red
4. **Navigate** - Click the "Next" button to move to the next question
5. **Toggle Dark Mode** - Click the moon/sun icon in the top right corner
6. **View Results** - After completing all questions, see your score and performance
7. **Play Again** - Click "Play Again" to restart the quiz

## 📊 Quiz Content

The quiz currently contains **11 questions** covering various topics:
- Geography
- Science
- Literature
- History
- Chemistry

### Adding New Questions

To add more questions, modify the `questions` array in the JavaScript section:

```javascript
const questions = [
    {
        question: "Your question here?",
        answers: [
            { text: "Option 1", correct: false },
            { text: "Option 2", correct: true },
            { text: "Option 3", correct: false },
            { text: "Option 4", correct: false }
        ]
    },
    // Add more questions...
];
```

## 🎨 Customization

### Changing Colors

**Light Mode Colors:**
- Primary gradient: `#667eea` to `#764ba2`
- Modify in the `body` background gradient

**Dark Mode Colors:**
- Primary gradient: `#1a1a2e` to `#16213e`
- Accent color: `#e94560`
- Modify in the `body.dark-mode` section

### Modifying Animations

Animations are defined in CSS `@keyframes`:
- `slideIn` - Initial container animation
- `fadeIn` - Question fade effect
- `correctPulse` - Correct answer feedback
- `shake` - Incorrect answer feedback
- `bounce` - Score icon animation

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: < 480px

## 🔧 Technologies Used

- **HTML5** - Structure and markup
- **CSS3** - Styling, animations, and responsive design
- **JavaScript (ES6)** - Quiz logic and interactivity
- **Font Awesome 6.4.0** - Icons (via CDN)

## 🎯 Performance Features

- No external dependencies (except Font Awesome CDN)
- Lightweight and fast loading
- Smooth 60fps animations
- Optimized for mobile devices
- In-memory state management

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

### Ideas for Contribution
- Add more question categories
- Implement difficulty levels
- Add timer functionality
- Create a leaderboard system
- Add sound effects
- Multi-language support

## 📝 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2025 Quiz Master

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👨‍💻 Author

Created with ❤️ by **Yadiki Blessee Devamani**

## 🙏 Acknowledgments

- Font Awesome for the beautiful icons
- Inspiration from modern quiz applications
- The web development community

## 📞 Contact

For questions or feedback, please reach out:
- Email: blesseedevamani751@gmail.com
- GitHub: [@BlesseeDevamani](https://github.com/BlesseeDevamani)
- Repository: [Quiz-App](https://github.com/BlesseeDevamani/FWD-Quiz-App)

## 🔮 Future Enhancements

- [ ] Add timer for each question
- [ ] Implement different difficulty levels
- [ ] Add category selection
- [ ] Create user authentication
- [ ] Add local storage for score history
- [ ] Implement sound effects
- [ ] Add social sharing features
- [ ] Create backend API integration

---

**Made with 🧠 and ☕ | Star ⭐ this repo if you find it helpful!**
