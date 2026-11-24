const STORAGE_KEY = 'cyberbide_sound';

// Progresión de acordes (Am - F - C - G) y notas pentatónicas para el arpegio.
const CHORDS = [
  [220.0, 261.63, 329.63],
  [174.61, 220.0, 261.63],
  [261.63, 329.63, 392.0],
  [196.0, 246.94, 293.66],
];
const ARPEGGIO = [440.0, 523.25, 587.33, 659.25, 783.99, 880.0];

class AmbientMusic {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.timer = null;
    this.nextTime = 0;
    this.bar = 0;
    this.enabled = false;
  }

  supported() {
    return typeof window !== 'undefined' && !!(window.AudioContext || window.webkitAudioContext);
  }

  ensure() {
    if (this.ctx || !this.supported()) return;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    const ctx = new Ctx();
    const master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    // Eco suave para dar sensación de espacio.
    const delay = ctx.createDelay(1);
    delay.delayTime.value = 0.36;
    const feedback = ctx.createGain();
    feedback.gain.value = 0.3;
    const wet = ctx.createGain();
    wet.gain.value = 0.3;
    master.connect(delay);
    delay.connect(feedback);
    feedback.connect(delay);
    delay.connect(wet);
    wet.connect(ctx.destination);

    this.ctx = ctx;
    this.master = master;
  }

  setEnabled(value) {
    this.enabled = value;
    try {
      window.localStorage.setItem(STORAGE_KEY, value ? '1' : '0');
    } catch (e) {
      // almacenamiento no disponible: la música sigue funcionando en esta sesión
    }
    if (value) this.start();
    else this.stop();
  }

  start() {
    this.ensure();
    if (!this.ctx || this.timer) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();
    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setValueAtTime(this.master.gain.value, now);
    this.master.gain.linearRampToValueAtTime(0.18, now + 2.5);
    this.nextTime = now + 0.2;
    this.bar = 0;
    this.timer = window.setInterval(() => this.schedule(), 240);
    this.schedule();
  }

  stop() {
    if (this.timer) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setValueAtTime(this.master.gain.value, now);
    this.master.gain.linearRampToValueAtTime(0, now + 0.6);
  }

  schedule() {
    if (!this.ctx) return;
    const beat = 0.82;
    const lookahead = 1.2;
    while (this.nextTime < this.ctx.currentTime + lookahead) {
      const chord = CHORDS[this.bar % CHORDS.length];
      this.pad(chord, this.nextTime, beat * 4);
      for (let i = 0; i < 8; i += 1) {
        if (i === 0 || Math.random() < 0.62) {
          const note = ARPEGGIO[Math.floor(Math.random() * ARPEGGIO.length)];
          this.pluck(note, this.nextTime + (i * beat) / 2);
        }
      }
      this.nextTime += beat * 4;
      this.bar += 1;
    }
  }

  pad(freqs, at, duration) {
    const ctx = this.ctx;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(700, at);
    filter.Q.value = 0.6;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, at);
    gain.gain.linearRampToValueAtTime(0.05, at + duration * 0.35);
    gain.gain.linearRampToValueAtTime(0.0001, at + duration);

    filter.connect(gain);
    gain.connect(this.master);

    freqs.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      osc.type = index === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, at);
      osc.detune.setValueAtTime(index * 4 - 4, at);
      osc.connect(filter);
      osc.start(at);
      osc.stop(at + duration + 0.1);
    });
  }

  pluck(freq, at) {
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, at);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, at);
    gain.gain.exponentialRampToValueAtTime(0.07, at + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, at + 1.1);

    osc.connect(gain);
    gain.connect(this.master);
    osc.start(at);
    osc.stop(at + 1.2);
  }
}

export const ambientMusic = new AmbientMusic();
export const SOUND_STORAGE_KEY = STORAGE_KEY;