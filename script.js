document.addEventListener('DOMContentLoaded', () => {
  // Typewriter effect
  const text = "Welcome to PLAYER ONE's Portfolio... Loading...";
  const typewriter = document.getElementById('typewriter');
  let i = 0;
  function type() {
    if (i < text.length) {
      typewriter.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();

  // Achievements system
  const achievements = [
    "👾 First Visit",
    "🎯 Click Master",
    "💡 Secret Discovered"
  ];
  const list = document.getElementById('achievement-list');
  achievements.forEach(a => {
    const li = document.createElement('li');
    li.textContent = a;
    list.appendChild(li);
  });
});