window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const textInput = document.getElementById('text-to-speak');
  const faceImg = document.querySelector('img');
  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-name', voice.name);
      option.setAttribute('data-lang', voice.lang);
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  speakButton.addEventListener('click', () => {
    const utterThis = new SpeechSynthesisUtterance(textInput.value);
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');
    utterThis.voice = voices.find(v => v.name === selectedVoice);

    faceImg.src = 'assets/images/smiling-open.png';
    synth.speak(utterThis);

    utterThis.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
    };
  });
}
