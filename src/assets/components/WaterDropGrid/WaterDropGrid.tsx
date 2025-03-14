import React, { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
}

interface Wave {
  x: number;
  y: number;
  startTime: number;
}

const WaterDropGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  // Birden fazla dalga için dizi
  const wavesRef = useRef<Wave[]>([]);
  const animationFrameRef = useRef<number>(0);

  // Otomatik dalga tetikleme için referans
  const waveTimeoutRef = useRef<number | null>(null);

  // Mouse basılı takip için
  const isMouseDownRef = useRef(false);
  // Sürekli dalga oluşturmayı “zaman” veya “mesafe” bazlı kısıtlamak için
  const lastWaveTimeRef = useRef(0);
  // İki dalga arasında minimum süre (ms) - sürükleme sırasında aşırı dalga spam’ini önler
  const waveInterval = 100;

  // Grid parametreleri
  const gridSpacing = 50; // Noktalar arası mesafe (px)
  const dotRadius = 2;

  // Dalga efekt parametreleri
  const amplitude = 10;     // Maksimum yer değiştirme (px)
  const waveDuration = 1000; // Dalga animasyon süresi (ms)
  const waveSpeed = 0.5;     // Dalga yayılma hızı (px/ms)

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas boyutlarını ayarla ve grid’i oluştur
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateGrid();
    };

    const generateGrid = () => {
      const dots: Dot[] = [];
      for (let y = gridSpacing / 2; y < canvas.height; y += gridSpacing) {
        for (let x = gridSpacing / 2; x < canvas.width; x += gridSpacing) {
          dots.push({ x, y });
        }
      }
      dotsRef.current = dots;
    };

    setCanvasSize();

    // Ekran yeniden boyutlanınca grid'i yeniden oluştur
    const handleResize = () => {
      setCanvasSize();
    };
    window.addEventListener('resize', handleResize);

    // --- Animasyon Döngüsü ---
    const draw = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Maksimum gecikme: canvas'ın köşeler arası mesafe
      const maxDelay = Math.hypot(canvas.width, canvas.height) / waveSpeed;

      // Her bir nokta için aktif dalgaların etkisini topla
      dotsRef.current.forEach(dot => {
        let totalOffsetX = 0;
        let totalOffsetY = 0;

        wavesRef.current.forEach(wave => {
          const elapsed = timestamp - wave.startTime;
          const distance = Math.hypot(dot.x - wave.x, dot.y - wave.y);
          const delay = distance / waveSpeed;
          if (elapsed > delay && elapsed - delay < waveDuration) {
            const progress = (elapsed - delay) / waveDuration;
            // Sinüs dalgası: 0 -> amplitude -> 0
            const waveEffect = amplitude * Math.sin(Math.PI * progress);
            // Dalgayı yönlendiren vektör
            const dx = dot.x - wave.x;
            const dy = dot.y - wave.y;
            const dist = Math.hypot(dx, dy) || 1;
            totalOffsetX += (dx / dist) * waveEffect;
            totalOffsetY += (dy / dist) * waveEffect;
          }
        });

        // Noktayı (toplam ofsetlerle) çiz
        ctx.beginPath();
        // Mavi tema rengi (index.css'teki #2a9fd6)
        ctx.arc(dot.x + totalOffsetX, dot.y + totalOffsetY, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#2a9fd6";
        ctx.fill();
      });

      // Yaşam süresi dolan dalgaları temizle
      wavesRef.current = wavesRef.current.filter(
        wave => timestamp - wave.startTime <= waveDuration + maxDelay
      );

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    animationFrameRef.current = requestAnimationFrame(draw);

    // --- Otomatik Dalga Tetikleme (rastgele zamanlarda) ---
    const scheduleNextWave = () => {
      // 2s - 5s arası rastgele bir süre
      const randomInterval = Math.random() * 3000 + 2000;
      waveTimeoutRef.current = window.setTimeout(() => {
        if (!canvasRef.current) return;
        const randomX = Math.random() * canvas.width;
        const randomY = Math.random() * canvas.height;
        wavesRef.current.push({
          x: randomX,
          y: randomY,
          startTime: performance.now(),
        });
        scheduleNextWave(); // Bir sonrakini planla
      }, randomInterval);
    };

    scheduleNextWave(); // İlk tetikleme

    return () => {
      // Temizlik
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('resize', handleResize);
      if (waveTimeoutRef.current) {
        clearTimeout(waveTimeoutRef.current);
      }
    };
  }, []);

  // --- Mouse Olayları ---
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isMouseDownRef.current = true;
    createWave(e);
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isMouseDownRef.current) return;

    // Çok sık dalga eklenmesini engellemek için ufak bir süre aralığı
    const now = performance.now();
    if (now - lastWaveTimeRef.current > waveInterval) {
      lastWaveTimeRef.current = now;
      createWave(e);
    }
  };

  // Tek seferlik (tıklama veya sürükleme) dalga oluşturma
  const createWave = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    wavesRef.current.push({
      startTime: performance.now(),
      x: clickX,
      y: clickY,
    });
  };

  // (Ek olarak) Tek tıklama olayı - eğer isterseniz handleMouseDown içinde hallediyoruz
  // ama yine de onClick'i de ekleyebiliriz. Artık handleMouseDown bunu karşıladığı için
  // onClick'e ihtiyaç olmayabilir.

  return (
    <canvas
      ref={canvasRef}
      // Mouse olayları
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: "#111", // Koyu gri zemin (isterseniz #000 veya başka bir renk)
      }}
    />
  );
};

export default WaterDropGrid;
