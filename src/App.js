import "./styles.css";

export default function App() {
  fetch(
    "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/7a6561"
  )
    .then((response) => {
      console.log("how many times this happening?");
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.text();
    })
    .then((text) => {
      console.log(text);
      document.getElementById("loading").remove();
      for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
          const newDiv = document.createElement("li");
          newDiv.textContent = text[i];
          document.getElementById("list").appendChild(newDiv);
        }, 500 * (i + 1));
      }
    })
    .catch((error) => {
      console.log(`Could not fetch: ${error}`);
    });
  return (
    <div className="App">
      <h1 id="loading">Loading...</h1>
      <ul id="list"></ul>
    </div>
  );
}

/*
Script to get URL from step 2:

let s = ""
for (let i = 0; i < document.getElementsByTagName("b").length; i++) {
    if (!document.getElementsByTagName("b")[i].className.includes("ref0"))
        s += document.getElementsByTagName("b")[i].getAttribute("value")
}
console.log(s)
*/
