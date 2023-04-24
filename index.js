const startBtn = document.getElementById('start-btn');

const recognition = new webkitSpeechRecognition();

recognition.continuous = true;
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const synth = window.speechSynthesis;

startBtn.addEventListener('click',() => {
    recognition.start();
    console.log('Mic Active')
})

recognition.onresult = (e) => {
    const transcript = e.results[e.results.length-1][0].transcript.trim();
    console.log(transcript)

    if(transcript == "hello"){
        recognition.stop()
        const bot = document.getElementById('bot-msg').innerHTML='Hello how may I help you'
        const user = document.getElementById('user-msg').innerHTML=transcript
        const utter = new SpeechSynthesisUtterance('Hello how may I help you')
        synth.speak(utter);
    }
    if(transcript == "what is cyber crime"){
        recognition.stop()
        const bot = document.getElementById('bot-msg').innerHTML='criminal activities carried out by means of computers or the internet.'
        const user = document.getElementById('user-msg').innerHTML=transcript
        const utter = new SpeechSynthesisUtterance('criminal activities carried out by means of computers or the internet.')
        synth.speak(utter);
    }
    if(transcript == "various government schemes"){
        recognition.stop()
        const bot = document.getElementById('bot-msg').innerHTML='the Government has established Indian Cyber Crime Coordination Centre (14C) to provide a framework and eco-system for LEAS to deal wit h the cyber crimes in a comprehensive and coordinated manner.'
        const user = document.getElementById('user-msg').innerHTML=transcript
        const utter = new SpeechSynthesisUtterance('the Government has established Indian Cyber Crime Coordination Centre (14C) to provide a framework and eco-system for LEAS to deal wit h the cyber crimes in a comprehensive and coordinated manner.')
        synth.speak(utter);
    }
    if(transcript == "how does the app works"){
        recognition.stop()
        const bot = document.getElementById('bot-msg').innerHTML='1 Login 2 Allow Permissions 3 Set your location 4 It will display various options available to you'
        const user = document.getElementById('user-msg').innerHTML=transcript
        const utter = new SpeechSynthesisUtterance('1 Login 2 Allow Permissions 3 Set your location 4 It will display various options available to you.')
        synth.speak(utter);
    }
    if(transcript == "list various features of the app"){
        recognition.stop()
        const bot = document.getElementById('bot-msg').innerHTML='Used to detect  1 Malicious URL 2 Fraud Mobile Numbers 3 SPAM messages 4 Fake UPI address'
        const user = document.getElementById('user-msg').innerHTML=transcript
        const utter = new SpeechSynthesisUtterance('Used to detect  1 Malicious URL 2 Fraud Mobile Numbers 3 SPAM messages 4 Fake UPI address')
        synth.speak(utter);
    }
    if(transcript == "preventive measures against these crimes"){
        recognition.stop()
        const bot = document.getElementById('bot-msg').innerHTML='1 Strong Passwords 2 Update your software regularly 3 Use full service internet security suite'
        const user = document.getElementById('user-msg').innerHTML=transcript
        const utter = new SpeechSynthesisUtterance('1 Strong Passwords 2 Update your software regularly 3 Use full service internet security suite')
        synth.speak(utter);
    }
    if(transcript == "list various types of scams"){
        recognition.stop()
        const bot = document.getElementById('bot-msg').innerHTML='1 Phishing 2 Ransomeware 3 Scareware 4 Hitman 5 Fake Shopping Websites'
        const user = document.getElementById('user-msg').innerHTML=transcript
        const utter = new SpeechSynthesisUtterance('1 Phishing 2 Ransomeware 3 Scareware 4 Hitman 5 Fake Shopping Websites')
        synth.speak(utter);
    }
    if(transcript == "suggest tollfree helpline number to register complaint"){
        recognition.stop()
        const bot = document.getElementById('bot-msg').innerHTML='National police helpline number is 112. National women helpline number is 181 and Cyber Crime Helpline is 1930'
        const user = document.getElementById('user-msg').innerHTML=transcript
        const utter = new SpeechSynthesisUtterance('National police helpline number is 112. National women helpline number is 181 and Cyber Crime Helpline is 1930')
        synth.speak(utter);
    }
    if(transcript == "thanks"){
        recognition.stop()
        const bot = document.getElementById('bot-msg').innerHTML='Kindly rate the app'
        const user = document.getElementById('user-msg').innerHTML=transcript
        const utter = new SpeechSynthesisUtterance('Kindly rate the app')
        synth.speak(utter);
    }
}
