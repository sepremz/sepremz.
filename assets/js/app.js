class _app {
    id = 0;
    videoElement = null;
    audioElement = null;
    musicVolume = 0.12;
    musicFadeIn = 4000;
    skippedIntro = false;
    backgroundToggler = false;
    shouldIgnoreVideo = false;
    effects = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello'];

}

const app = new _app();
