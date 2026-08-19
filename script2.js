/* ================= TYPING EFFECT ================= */

const typing = document.getElementById("typing");

const words = [
    "FULL STACK DEVELOPER",
    "PYTHON DEVELOPER",
    "QUICK LEARNER",
    "INNOVATIVE THINKER",
    "AI ENTHUSIAST"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const word = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            word.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === word.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typing.textContent =
            word.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );
}

typeEffect();



/* ================= AI PORTFOLIO ================= */

function addMessage(text, type) {

    const chatBox =
        document.getElementById("chat-box");

    const message =
        document.createElement("div");

    message.className =
        type === "user"
            ? "user-message"
            : "bot-message";

    if (type === "bot") {

        message.innerHTML =
            `<span class="bot-icon">AI</span> ${text}`;

    } else {

        message.textContent = text;

    }

    chatBox.appendChild(message);

    chatBox.scrollTop =
        chatBox.scrollHeight;
}


function askAI() {

    const input =
        document.getElementById("user-input");

    const question =
        input.value.trim();

    if (!question) return;

    addMessage(question, "user");

    input.value = "";

    setTimeout(() => {

        const answer =
            generateAnswer(question);

        addMessage(answer, "bot");

    }, 500);
}


function quickQuestion(question) {

    document.getElementById("user-input").value =
        question;

    askAI();
}


function handleEnter(event) {

    if (event.key === "Enter") {
        askAI();
    }
}


function generateAnswer(question) {

    const q =
        question.toLowerCase();


    /* SKILLS */

    if (
        q.includes("skill") ||
        q.includes("technology") ||
        q.includes("tech")
    ) {

        return `
        Sanjay is learning Java, C, C++, Python and
        Full Stack Development. He is particularly
        well-versed in Python and Full Stack Development.
        He is also improving his communication skills.
        `;

    }


    /* EDUCATION */

    if (
        q.includes("education") ||
        q.includes("12th") ||
        q.includes("school") ||
        q.includes("mark")
    ) {

        return `
        Sanjay completed his 12th standard at C.R.H.S.
        School with 85%, scoring 510 marks. In 2023,
        he joined B.E. Computer Science and Engineering
        at Nehru Institute of Engineering and Technology.
        `;

    }


    /* TEAM PROJECTS */

    if (
        q.includes("team project") ||
        q.includes("team")
    ) {

        return `
        Sanjay's team projects are Animal Healthcare System,
        Weather Forecasting UI and AI Career Intelligence
        Platform.
        `;

    }


    /* ANIMAL HEALTHCARE */

    if (
        q.includes("animal") ||
        q.includes("healthcare")
    ) {

        return `
        The Animal Healthcare System is designed to identify
        possible animal health problems and provide disease
        information and care recommendations. Its purpose is
        to support early detection and better animal healthcare.
        `;

    }


    /* WEATHER */

    if (
        q.includes("weather") ||
        q.includes("forecast")
    ) {

        return `
        The Weather Forecasting UI is designed to provide
        real-time weather information such as temperature,
        humidity, wind speed and weather conditions through
        a simple and responsive interface.
        `;

    }


    /* AI CAREER */

    if (
        q.includes("career") ||
        q.includes("ai career")
    ) {

        return `
        The AI Career Intelligence Platform analyzes a user's
        skills, interests, resume and career goals. It aims
        to provide personalized career recommendations,
        identify skill gaps and suggest learning paths and
        suitable job opportunities.
        `;

    }


    /* INDIVIDUAL PROJECTS */

    if (
        q.includes("individual") ||
        q.includes("personal project")
    ) {

        return `
        Sanjay's individual projects include an E-Commerce
        Website, Currency Converter and ATM Machine.
        `;

    }


    /* ROLE */

    if (
        q.includes("role") ||
        q.includes("contribution") ||
        q.includes("develop")
    ) {

        return `
        The team project idea was initiated by Sanjay.
        He contributed to the development process and
        developed the project code. His contributions
        included project ideation, coding, problem solving
        and team collaboration.
        `;

    }


    /* STRENGTH */

    if (
        q.includes("strength") ||
        q.includes("strong")
    ) {

        return `
        Sanjay's main strength is that he is a quick learner.
        He adapts quickly to new concepts and continuously
        works on improving his technical and communication skills.
        `;

    }


    /* HOBBIES */

    if (
        q.includes("hobby") ||
        q.includes("hobbies") ||
        q.includes("chess") ||
        q.includes("cricket")
    ) {

        return `
        Sanjay's hobbies are playing chess, playing cricket
        and learning new things.
        `;

    }


    /* RESUME */

    if (
        q.includes("resume") ||
        q.includes("cv")
    ) {

        return `
        You can view or download Sanjay's complete resume
        using the Resume buttons on this portfolio.
        `;

    }


    /* HIRE */

    if (
        q.includes("hire") ||
        q.includes("why should")
    ) {

        return `
        Sanjay combines programming knowledge, quick learning
        ability and innovative thinking. He enjoys building
        projects, learning new technologies and converting
        ideas into practical solutions.
        `;

    }


    /* GREETING */

    if (
        q.includes("hello") ||
        q.includes("hi") ||
        q.includes("hey")
    ) {

        return `
        Hello! 👋 I am Sanjay AI.
        Ask me about Sanjay's education, skills,
        projects, role, strengths or hobbies.
        `;

    }


    /* DEFAULT */

    return `
        I can tell you about Sanjay's education,
        technical skills, team projects, individual projects,
        role, strengths, hobbies and resume.
        Try asking me one of these.
    `;
}