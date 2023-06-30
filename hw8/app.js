const puzzles = [
    {
        puzzle: "Что не жует, но все пожирает?",
        answer: "Огонь"
    },
    {
        puzzle: "Куда я, туда и она",
        answer: "Тень"
    },
    {
        puzzle: "Что станет больше, если его перевернуть вверх ногами?",
        answer: "Число 6"
    },
    {
        puzzle: "Что получится, если барабан разделить на барабан?",
        answer: "Барабанная дробь"
    },
    {
        puzzle: "Какое слово всегда звучит неверно?",
        answer: "Неверно"
    },
    {
        puzzle: "Не машет крылом, но летает; не птица, но птиц обгоняет",
        answer: "Самолет"
    }
]

puzzles.forEach(puzzle => {
    document.querySelector(".puzzles").innerHTML += `
    <div class="puzzle">
        <div class="texts">
            <h2 class="puzzle">${puzzle.puzzle}</h2>
            <h3 class="answer">${puzzle.answer}</h3>
        </div>
        <button class="showAnswer">show answer</button>
    </div>`

    document.querySelectorAll(".showAnswer").forEach(btn => {
        btn.onclick = () => {
            if (btn.innerHTML === "show answer") {
                btn.innerHTML = "hide answer"
            } else {
                btn.innerHTML = "show answer"
            }
            btn.parentElement.classList.toggle("show");
        }
    })
})