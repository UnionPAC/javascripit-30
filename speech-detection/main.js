window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
// The interimResults property of the SpeechRecognition interface controls whether interim results should be returned (true) or not (false.)
recognition.interimResults = true;
// sets the language of the current SpeechRecognition.
recognition.lang = "en-US";

// create a new paragraph
let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

recognition.addEventListener("result", (e) => {
  console.log(e);
  // what we are looking for is nested here ...
  // results.SpeechRecognitionResultList.SpeechRecognitionResult.SpeechRecognitionAlternative
  // we want what was said (transcript variable)
  const transcript = [...e.results]
    .map((res) => res[0])
    .map((res) => res.transcript)
    .join();

  const happyScript = transcript.replace(/happy|content|smile|good/gi, "🌞");
  p.textContent = happyScript;

  // start a new paragraph if the last one is done
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }
});

recognition.addEventListener("end", recognition.start);

// start audio detection
recognition.start();
