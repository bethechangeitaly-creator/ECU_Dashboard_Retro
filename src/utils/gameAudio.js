/**
 * GameAudio.js
 * A lightweight, synthesizer-based audio engine for 8-bit retro sounds.
 * Uses Web Audio API to generate sounds without external assets.
 */
class GameAudio {
    constructor() {
        this.ctx = null;
        this.muted = false;
        this.hapticsEnabled = true;
        this.volume = 0.3; // Base tone volume
        this.masterVolume = 1.0; // Global scale factor (0.0 to 1.0)

        try {
            if (typeof localStorage !== 'undefined') {
                this.muted = localStorage.getItem('audio_muted') === 'true';
                this.hapticsEnabled = localStorage.getItem('haptics_enabled') !== 'false';
                const savedVol = localStorage.getItem('audio_volume');
                if (savedVol !== null) this.masterVolume = parseFloat(savedVol);
            }
        } catch (e) {
            console.warn('LocalStorage not available:', e);
        }
    }

    // Initialize Audio Context on first user interaction
    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    }

    // Toggle mute state
    toggleMute() {
        this.muted = !this.muted;
        try {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('audio_muted', this.muted);
            }
        } catch (e) { }
        return this.muted;
    }

    // Toggle haptics state
    toggleHaptics() {
        this.hapticsEnabled = !this.hapticsEnabled;
        try {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('haptics_enabled', this.hapticsEnabled);
            }
        } catch (e) { }
        return this.hapticsEnabled;
    }

    // Set master volume (0.0 - 1.0)
    setVolume(level) {
        this.masterVolume = Math.max(0, Math.min(1, level));
        this.muted = (this.masterVolume === 0); // Explicitly mute if volume is 0
        try {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('audio_volume', this.masterVolume);
                localStorage.setItem('audio_muted', this.muted);
            }
        } catch (e) { }
        return this.masterVolume;
    }

    // Determine if sound should play
    canPlay() {
        if (this.muted || this.masterVolume <= 0) return false;
        if (!this.ctx) this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();
        return true;
    }

    /**
     * Trigger haptic feedback (vibration) on supported devices
     */
    triggerHaptic(pattern = 10) {
        if (this.hapticsEnabled && !this.muted && window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(pattern);
        }
    }

    /**
     * Play a smooth, deep "creamy" click
     */
    playClick() {
        if (!this.canPlay()) return;

        this.triggerHaptic(5); // Reduced from 12 for lighter feedback

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, this.ctx.currentTime); // Lower pitch (A3)
        osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.15); // Drop to A2

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, this.ctx.currentTime);

        gain.gain.setValueAtTime(this.volume * 0.8 * this.masterVolume, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.15);
    }

    /**
     * Play a very short, low-volume tick for hover
     */
    playHover() {
        if (!this.canPlay()) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(120, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.1);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(300, this.ctx.currentTime);

        gain.gain.setValueAtTime(this.volume * 0.3 * this.masterVolume, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.1);
    }

    /**
     * Play a warm success "coin" sound
     */
    playSuccess() {
        if (!this.canPlay()) return;

        this.triggerHaptic([20, 40, 20]); // Substantial success pulse

        const now = this.ctx.currentTime;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1200, now);
        filter.connect(this.ctx.destination);

        // First note (Warm B4)
        const osc1 = this.ctx.createOscillator();
        const gain1 = this.ctx.createGain();
        osc1.type = 'triangle';
        osc1.frequency.setValueAtTime(493.88, now);
        gain1.gain.setValueAtTime(this.volume * 0.7 * this.masterVolume, now);
        gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        osc1.connect(gain1);
        gain1.connect(filter);
        osc1.start();
        osc1.stop(now + 0.15);

        // Second note (Harmonious E5)
        const osc2 = this.ctx.createOscillator();
        const gain2 = this.ctx.createGain();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(659.25, now + 0.12);
        gain2.gain.setValueAtTime(this.volume * 0.7 * this.masterVolume, now + 0.12);
        gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
        osc2.connect(gain2);
        gain2.connect(filter);
        osc2.start(now + 0.12);
        osc2.stop(now + 0.6);
    }
}

// Export a singleton instance
export const gameAudio = new GameAudio();
