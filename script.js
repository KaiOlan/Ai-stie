async function sendToOpenAI() {
  const userMessage = document.getElementById("userInput").value;
  const responseBox = document.getElementById("responseBox");

  const apiKey = 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; // Replace with your actual key

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a friendly assistant." },
        { role: "user", content: userMessage }
      ]
    })
  });

  const data = await response.json();
  responseBox.innerText = data.choices[0].message.content;
}
