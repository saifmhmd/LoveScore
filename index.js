function calculateLove() {
    const name = document.getElementById("yourName").value.trim();
    const firstLetter = name.slice(0, 1).toUpperCase();
    const remainingLetter = name.slice(1, name.length).toLowerCase();
    const yourName = firstLetter + remainingLetter;
    const theirName = document.getElementById("theirName").value.trim();

    document.getElementById("container").style.display = "none";
    document.getElementById("progressContainer").style.display = "flex";

    let width = 0;
    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    const interval = setInterval(() => {
        if (width >= 100) {
        clearInterval(interval);
        showResult(yourName);
        } else {
        width++;
        progressBar.style.width = width + "%";
        progressText.textContent = width + "%";
        }
    }, 10); // 5 seconds total
}

function showResult(name) {
    const score = Math.floor(Math.random() * 101);
    let quote = "";

    if (score >= 80) {
        quote = "You two are a perfect match! Love is in the air!";
    } else if (score >= 60) {
        quote = "There's definitely a spark! Keep building that connection.";
    } else if (score >= 30) {
        quote = "Love takes time. Get to know each other better!";
    } else {
        quote = "Not much chemistry, but who knows what the future holds?";
    }

    document.getElementById("progressContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "flex";
    document.getElementById("resultText").textContent = `Hey ${name}, your love score is "${score}%"`;
    document.getElementById("quoteText").textContent = quote;
}
  

  