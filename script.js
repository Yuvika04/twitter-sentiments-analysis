function analyze() {
    var tweet = document.getElementById('tweet').value;
    var analysis = getSentiment(tweet);
    displayResult(analysis);
}

function getSentiment(tweet) {
    // This is a placeholder function for sentiment analysis.
    // You would replace this with your actual sentiment analysis logic.
    // For demonstration purposes, it returns 'positive' if the tweet contains the word 'happy',
    // 'negative' if it contains the word 'sad', and 'neutral' otherwise.
    if (tweet.toLowerCase().includes('happy')) {
        return 'positive';
    } else if (tweet.toLowerCase().includes('sad')) {
        return 'negative';
    } else {
        return 'neutral';
    }
}

function displayResult(sentiment) {
    var resultElement = document.getElementById('result');
    resultElement.textContent = 'Sentiment: ' + sentiment.charAt(0).toUpperCase() + sentiment.slice(1);
}
