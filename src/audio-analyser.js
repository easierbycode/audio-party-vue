const container = document.getElementById('container');
const canvas = document.getElementById('canvas1');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
let audioSource;
let analyser;


var play = () => {
    const audio1 = document.getElementById('audio1');
    const audioContext = new AudioContext();
    audio1.play();

    // if audio1.src = 'BASE64...'
    // audioSource = <MediaElementAudioSourceNode>audioContext.createMediaElementSource(audio1);
    // if <audio> has src='', use approach below
    audioSource = new MediaElementAudioSourceNode(audioContext, {
        mediaElement: audio1
    });
    
    analyser = audioContext.createAnalyser();
    audioSource.connect(analyser);
    analyser.connect(audioContext.destination);
    
    // fftSize default is 2048.  can be any multiple of 32 up to 32768
    // analyser.fftSize = 64;
    // analyser.fftSize = 128;
    analyser.fftSize = 32;

    // frequencyBinCount = fftSize / 2
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const barWidth = canvas.width / bufferLength;
    let barHeight;
    let x;

    function animate() {
        x = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // copies frequency data into unsigned byte array
        // frequency data is composed of integers on a scale from 0 to 255
        analyser.getByteFrequencyData(dataArray);
        
        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];
            // ctx.fillStyle = 'white';
            ctx.fillStyle = `rgb(${barHeight}, 50, 50)`;
            ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
            x += barWidth;

            let pct = +(barHeight / 255).toFixed(2);
            let color = 0x0a0a0a | (pct * 0xffffff);
            
            // change star colors based on 4th, 6th, and 15th frequency bars
            if (i === 3 && window.backgrounds) {
            window.backgrounds[1].layers.children.iterate((sprite) => {
                sprite.setTint(color); 
            });
            }
            if (i === 5 && window.backgrounds) {
                window.backgrounds[2].layers.children.iterate((sprite) => {
                    sprite.setTint(color); 
                });
                }
            if (i === 14 && window.backgrounds) {
            window.backgrounds[0].layers.children.iterate((sprite) => {
                sprite.setTint(color); 
            });
            }

            // shake dancer based on 9th frequency bar
            if (i === 8 && window.dancer) {
                window.dancer.anims.setProgress(pct)
                window.dancer2.anims.setProgress(pct)
                window.nymph.anims.setProgress(pct)
            };

            // move lights based on 10th frequency bar
            if (i === 9 && window.bg) {
                window.bg.anims.setProgress(pct)
                window.lights.anims.setProgress(pct)
            };
        }
        requestAnimationFrame(animate);
    }


    setTimeout(() => {
        if (window.dancer)  dancer.anims.pause();
        // if (window.lasers)  lasers.anims.pause();

        animate();
    }, 13)
    

    container.removeEventListener('click', play);
};

container.addEventListener('click', play);