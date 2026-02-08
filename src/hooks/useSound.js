import { useRef, useEffect, useCallback } from 'react';

/**
 * useSound Hook - Generates 8-bit retro sound effects using Web Audio API
 * No external files required.
 */
const useSound = () => {
    const audioContextRef = useRef(null);
    const volumeRef = useRef(0.1); // Low volume by default to not be annoying

    useEffect(() => {
        // Initialize AudioContext on first user interaction to comply with browser autoplay policies
        const initAudio = () => {
            if (!audioContextRef.current) {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                audioContextRef.current = new AudioContext();
            } else if (audioContextRef.current.state === 'suspended') {
                audioContextRef.current.resume();
            }
        };

        const handleInteraction = () => {
            initAudio();
            // Remove listeners after first interaction
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
        };

        window.addEventListener('click', handleInteraction);
        window.addEventListener('keydown', handleInteraction);

        return () => {
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
            if (audioContextRef.current) {
                audioContextRef.current.close().catch(console.error);
            }
        };
    }, []);

    const playTone = useCallback((freq, type = 'square', duration = 0.1, fadeOut = true) => {
        if (!audioContextRef.current) return;

        // Resume if suspended
        if (audioContextRef.current.state === 'suspended') {
            audioContextRef.current.resume().catch(console.error);
        }

        const ctx = audioContextRef.current;
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.type = type; // square, sawtooth, triangle, sine
        oscillator.frequency.setValueAtTime(freq, ctx.currentTime);

        gainNode.gain.setValueAtTime(volumeRef.current, ctx.currentTime);

        if (fadeOut) {
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
        } else {
            gainNode.gain.setValueAtTime(0, ctx.currentTime + duration);
        }

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.start();
        oscillator.stop(ctx.currentTime + duration);
    }, []);

    // 1. Hover Sound: Very short, high tick
    const playHover = useCallback(() => {
        // Play two very short ticks
        playTone(800, 'square', 0.03);
    }, [playTone]);

    // 2. Click Sound: Standard selection blip
    const playClick = useCallback(() => {
        playTone(440, 'square', 0.1); // A4
        setTimeout(() => playTone(880, 'square', 0.1), 50); // A5 slightly after
    }, [playTone]);

    // 3. Success Sound: Rising Arpeggio (Major Triad)
    const playSuccess = useCallback(() => {
        const now = audioContextRef.current?.currentTime || 0;
        playTone(523.25, 'square', 0.1); // C5
        setTimeout(() => playTone(659.25, 'square', 0.1), 100); // E5
        setTimeout(() => playTone(783.99, 'square', 0.2), 200); // G5
    }, [playTone]);

    // 4. Error Sound: Low, dissonant buzzer
    const playError = useCallback(() => {
        playTone(150, 'sawtooth', 0.3);
        setTimeout(() => playTone(140, 'sawtooth', 0.3), 50);
    }, [playTone]);

    // 5. Back/Cancel Sound: Falling tone
    const playBack = useCallback(() => {
        playTone(400, 'triangle', 0.15);
        setTimeout(() => playTone(200, 'triangle', 0.15), 100);
    }, [playTone]);

    return {
        playHover,
        playClick,
        playSuccess,
        playError,
        playBack
    };
};

export default useSound;
