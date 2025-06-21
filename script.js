document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("main-title");
  const links = document.querySelectorAll(".link-container a");

  // Glitch distortion on hover (title)
  title.addEventListener("mouseenter", () => {
    const spans = title.querySelectorAll("span");
    spans.forEach((span) => {
      const glitchDelay = Math.random() * 200;
      setTimeout(() => {
        const x = (Math.random() * 2 - 1).toFixed(2);
        const y = (Math.random() * 2 - 1).toFixed(2);
        const skew = (Math.random() * 2 - 1).toFixed(2);
        span.style.transform = `translate(${x}px, ${y}px) skew(${skew}deg)`;
        span.style.opacity = 0.9;
        span.style.textShadow = "0 0 10px rgba(255,255,255,0.3)";
      }, glitchDelay);
    });
  });

  title.addEventListener("mouseleave", () => {
    const spans = title.querySelectorAll("span");
    spans.forEach((span) => {
      span.style.transform = "none";
      span.style.opacity = "1";
      span.style.textShadow = "";
    });
  });

  // Mystic pulse (sigil spark) on link click
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent instant nav

      const pulse = document.createElement("div");
      pulse.classList.add("sigil-pulse");
      document.body.appendChild(pulse);

      pulse.style.left = `${e.clientX}px`;
      pulse.style.top = `${e.clientY}px`;

      setTimeout(() => {
        pulse.remove();
        window.open(link.href, "_blank"); // Open in new tab after pulse
      }, 350);
    });
  });

  // === BLACK GLYPH RUNE GENERATOR ===
  const runes = ["𓆩", "ᛇ", "꙰", "𐌖", "Ꙭ", "ᚺ", "ᛉ", "ꖦ", "𐎐", "ʘ"];
  const runeContainer = document.createElement("div");
  runeContainer.className = "rune-container";
  document.body.appendChild(runeContainer);

  function spawnRune() {
    const rune = document.createElement("div");
    rune.className = "rune";
    rune.textContent = runes[Math.floor(Math.random() * runes.length)];

    rune.style.left = `${Math.random() * 100}vw`;
    rune.style.top = `${Math.random() * 100}vh`;

    const size = Math.floor(Math.random() * 24) + 16;
    rune.style.fontSize = `${size}px`;
    rune.style.transform = `rotate(${Math.random() * 360}deg)`;

    runeContainer.appendChild(rune);

    setTimeout(() => {
      rune.remove();
    }, 4000);
  }

  setInterval(spawnRune, 700);
});
