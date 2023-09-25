import React, { useState } from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

function TextToSpeech({text}) {
//   const [text, setText] = useState('');
    console.log(text);
    const arrayOfMessages = text.map((obj) => (obj.isBot? "Chat bot : ": "User : ") + obj.text );
    const message = arrayOfMessages.join(" : ");
    console.log(message);
  const synth = window.speechSynthesis;
    
  const speakText = () => {
    if (synth.speaking) {
      console.error('SpeechSynthesis is already speaking');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(message);
    synth.speak(utterance);
  };

  return (
    <div>
        {message?<button className='mx-2' onClick={speakText}><VolumeUpIcon/></button>:""}
    </div>
  );
}

export default TextToSpeech;

// import React, { useState } from 'react';
// import VolumeDownIcon from '@mui/icons-material/VolumeDown';

// function TextToSpeech({text}) {
//   //const [text, setText] = useState('');
//   const synth = window.speechSynthesis;

//   const arrayOfMessages = text.map((obj) => (obj.isBot? "Chat bot : ": "User : ") + obj.text );
//     const message = arrayOfMessages.join(" ");

//   const downloadAudio = () => {
//     if (synth.speaking) {
//       console.error('SpeechSynthesis is already speaking');
//       return;
//     }

//     const utterance = new SpeechSynthesisUtterance(message);
//     synth.cancel(); // Cancel any ongoing speech
//     synth.speak(utterance);

//     utterance.onend = () => {
//       const blob = new Blob([message], { type: 'audio/wav' }); // Adjust the MIME type as needed
//       console.log(blob);
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = 'speech.wav'; // Adjust the file name and extension as needed
//       document.body.appendChild(a);
//       a.click();
//       URL.revokeObjectURL(url);
//       document.body.removeChild(a);
//     };
//   };

//   return (
//     <div>
//       <button onClick={downloadAudio}>Download Audio</button>
//     </div>
//   );
// }

// export default TextToSpeech;
