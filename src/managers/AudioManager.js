import { Howl } from 'howler';

class AudioManager {
    constructor() {
        this.bgm = null;
        this.sfx = {};
        this.muted = false;
    }

    init() {
        // Background Music
        this.bgm = new Howl({
            
            src: ['/Slugabed - Mountains Come Out of the Sky.mp3'],
            loop: true,
            volume: 0.5,
            html5: true, // Force HTML5 Audio to stream large files
        });

        // SFX (Placeholders until files are added)
        // this.sfx.hover = new Howl({ src: ['/sfx/hover.mp3'], volume: 0.2 });
        // this.sfx.click = new Howl({ src: ['/sfx/click.mp3'], volume: 0.4 });
    }

    playBGM() {
        if (this.bgm && !this.bgm.playing()) {
            this.bgm.play();
            this.bgm.fade(0, 0.5, 2000); // Fade in
        }
    }

    stopBGM() {
        if (this.bgm) {
            this.bgm.fade(0.5, 0, 1000);
            setTimeout(() => this.bgm.stop(), 1000);
        }
    }

    playSFX(name) {
        if (this.sfx[name] && !this.muted) {
            this.sfx[name].play();
        }
    }

    toggleMute() {
        this.muted = !this.muted;
        Howler.mute(this.muted);
        return this.muted;
    }
}

const audioManager = new AudioManager();
export default audioManager;
