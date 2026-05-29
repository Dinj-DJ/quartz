---
title: Straight Sauce
---

<style>
article > h1, article > .content-meta, h1.article-title, .meta, .page-header { display: none !important; }

.homepage-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 85vh;
  padding: 2rem 0;
  position: relative;
  transform: translateY(-40px);
  background: transparent;
}

.hw-row {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2.5rem;
  position: relative;
}

.hw-waveform {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 760px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  z-index: 1;
  pointer-events: none;
  opacity: 0.22;
  filter: blur(1px);
  mix-blend-mode: screen;
}

.hw-waveform span {
  display: block;
  width: 3px;
  border-radius: 3px;
  background: rgba(139,124,255,0.42);
  box-shadow: 0 0 40px rgba(139,124,255,0.14);
}

.hw-waveform span:nth-child(1){height:8px}.hw-waveform span:nth-child(2){height:14px}.hw-waveform span:nth-child(3){height:22px}.hw-waveform span:nth-child(4){height:36px}.hw-waveform span:nth-child(5){height:52px}.hw-waveform span:nth-child(6){height:44px}.hw-waveform span:nth-child(7){height:68px}.hw-waveform span:nth-child(8){height:55px}.hw-waveform span:nth-child(9){height:80px}.hw-waveform span:nth-child(10){height:62px}.hw-waveform span:nth-child(11){height:90px}.hw-waveform span:nth-child(12){height:72px}.hw-waveform span:nth-child(13){height:100px}.hw-waveform span:nth-child(14){height:82px}.hw-waveform span:nth-child(15){height:120px}.hw-waveform span:nth-child(16){height:95px}.hw-waveform span:nth-child(17){height:140px}.hw-waveform span:nth-child(18){height:95px}.hw-waveform span:nth-child(19){height:120px}.hw-waveform span:nth-child(20){height:82px}.hw-waveform span:nth-child(21){height:100px}.hw-waveform span:nth-child(22){height:72px}.hw-waveform span:nth-child(23){height:90px}.hw-waveform span:nth-child(24){height:62px}.hw-waveform span:nth-child(25){height:80px}.hw-waveform span:nth-child(26){height:55px}.hw-waveform span:nth-child(27){height:68px}.hw-waveform span:nth-child(28){height:44px}.hw-waveform span:nth-child(29){height:52px}.hw-waveform span:nth-child(30){height:36px}.hw-waveform span:nth-child(31){height:22px}.hw-waveform span:nth-child(32){height:14px}.hw-waveform span:nth-child(33){height:8px}

.hw-logo {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 1.5px solid rgba(139,124,255,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 40px rgba(139,124,255,0.25), 0 0 80px rgba(139,124,255,0.1), inset 0 0 40px rgba(139,124,255,0.05);
  background: rgba(13,16,32,0.5);
  backdrop-filter: blur(10px);
  flex-shrink: 0;
  position: relative;
  z-index: 2;
}

.hw-dj {
  font-family: Inter, sans-serif;
  font-size: 4.5rem;
  font-weight: 800;
  color: #8b7cff;
  letter-spacing: 0.05em;
}

.hw-waves {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 100px;
  position: relative;
  z-index: 2;
}

.hw-waves span {
  display: block;
  width: 3px;
  background: linear-gradient(to top, rgba(139,124,255,0.05), rgba(139,124,255,0.4), rgba(139,124,255,0.05));
  border-radius: 3px;
}

.hw-waves.l span:nth-child(1){height:6px}.hw-waves.l span:nth-child(2){height:10px}.hw-waves.l span:nth-child(3){height:18px}.hw-waves.l span:nth-child(4){height:30px}.hw-waves.l span:nth-child(5){height:50px}.hw-waves.l span:nth-child(6){height:38px}.hw-waves.l span:nth-child(7){height:65px}.hw-waves.l span:nth-child(8){height:48px}.hw-waves.l span:nth-child(9){height:70px}.hw-waves.l span:nth-child(10){height:55px}.hw-waves.l span:nth-child(11){height:78px}.hw-waves.l span:nth-child(12){height:60px}.hw-waves.l span:nth-child(13){height:42px}.hw-waves.l span:nth-child(14){height:28px}.hw-waves.l span:nth-child(15){height:16px}.hw-waves.l span:nth-child(16){height:8px}.hw-waves.l span:nth-child(17){height:4px}
.hw-waves.r span:nth-child(1){height:4px}.hw-waves.r span:nth-child(2){height:8px}.hw-waves.r span:nth-child(3){height:16px}.hw-waves.r span:nth-child(4){height:28px}.hw-waves.r span:nth-child(5){height:42px}.hw-waves.r span:nth-child(6){height:60px}.hw-waves.r span:nth-child(7){height:78px}.hw-waves.r span:nth-child(8){height:55px}.hw-waves.r span:nth-child(9){height:70px}.hw-waves.r span:nth-child(10){height:48px}.hw-waves.r span:nth-child(11){height:65px}.hw-waves.r span:nth-child(12){height:38px}.hw-waves.r span:nth-child(13){height:50px}.hw-waves.r span:nth-child(14){height:30px}.hw-waves.r span:nth-child(15){height:18px}.hw-waves.r span:nth-child(16){height:10px}.hw-waves.r span:nth-child(17){height:6px}

.hw-title {
  font-family: Inter, sans-serif;
  font-size: clamp(48px, 5vw, 72px);
  font-weight: 800;
  letter-spacing: 0.25em;
  margin: 0 0 18px;
  line-height: 1;
  text-align: center;
}

.hw-title .w { color: #f4f4f4; }
.hw-title .p { color: #8b7cff; }

.hw-byline {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #9b9b9b;
  font-size: 0.7rem;
  letter-spacing: 0.4em;
  margin-bottom: 1rem;
  font-weight: 300;
}

.hw-byline i {
  display: block;
  width: 40px;
  height: 1px;
  background: rgba(139,124,255,0.35);
  font-style: normal;
  box-shadow: 0 0 6px rgba(139,124,255,0.2);
}

.hw-desc {
  color: #9b9b9b;
  font-size: 0.95rem;
  margin: 0 0 38px;
  text-align: center;
  font-weight: 300;
  letter-spacing: 0.05em;
  max-width: 600px;
}

.hw-btn {
  padding: 18px 42px;
  border: 1px solid rgba(139,124,255,0.4);
  border-radius: 999px;
  color: #f4f4f4;
  font-size: 0.72rem;
  letter-spacing: 0.25em;
  text-decoration: none;
  background: linear-gradient(135deg, rgba(139,124,255,0.15), rgba(111,92,255,0.08));
  display: inline-block;
  box-shadow: 0 0 20px rgba(139,124,255,0.1);
  transition: all 0.3s ease;
  font-weight: 500;
}

.hw-btn:hover {
  background: linear-gradient(135deg, rgba(139,124,255,0.3), rgba(111,92,255,0.2));
  box-shadow: 0 10px 30px rgba(139,124,255,0.25);
  transform: translateY(-2px);
  text-decoration: none;
}
</style>

<div class="homepage-hero">
  <div class="hw-waveform"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
  <div class="hw-row">
    <div class="hw-waves l"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
    <div class="hw-logo"><span class="hw-dj">DJ</span></div>
    <div class="hw-waves r"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
  </div>
  <h2 class="hw-title"><span class="w">STRAIGHT </span><span class="p">SAUCE</span></h2>
  <div class="hw-byline"><i></i>BY DJ<i></i></div>
  <p class="hw-desc">Trading insights. Orderflow education. Market clarity.</p>
  <a href="/" class="hw-btn">EXPLORE THE SAUCE →</a>
</div>