function sortBooks(...books) {
    let approved = []
    let rejected = []

    books.forEach(book => {
        if (book.includes("у")) {
            approved.push(book)
        } else {
            rejected.push(book)
        }
    })

    console.log("approved: " + approved)
    console.log("rejected: " + rejected)
}

sortBooks("Кукушка", "Варежки", "Пицца", "Гарри Поттер", "Золушка", "Умиротворение")