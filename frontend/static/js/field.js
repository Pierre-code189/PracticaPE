// Field.io canvas: animated gradient field lines over dark background.
(function initField() {
  const cv = document.getElementById("field-bg");
  if (!cv) return;
  const ctx = cv.getContext("2d");
  let W, H, t = 0;
  function resize() { W = cv.width = innerWidth; H = cv.height = innerHeight; }
  resize(); addEventListener("resize", resize);
  function frame() {
    t += 0.008;
    ctx.fillStyle = "#0B0B0F"; ctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 46; i++) {
      const y = (i / 46) * H + Math.sin(t + i * 0.35) * 26;
      const grad = ctx.createLinearGradient(0, 0, W, 0);
      grad.addColorStop(0, "rgba(12,224,229,0.20)");
      grad.addColorStop(0.55, "rgba(91,46,255,0.20)");
      grad.addColorStop(1, "rgba(12,224,229,0.04)");
      ctx.strokeStyle = grad; ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= W; x += 18) {
        const yy = y + Math.sin(x * 0.004 + t * 2 + i) * 14;
        x === 0 ? ctx.moveTo(x, yy) : ctx.lineTo(x, yy);
      }
      ctx.stroke();
    }
    requestAnimationFrame(frame);
  }
  frame();
})();
