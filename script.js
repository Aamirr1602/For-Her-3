
const messages = [
  "Day 1 I’d sit in the rain if it meant you'd smile once more 🌧️",
  "Day 2 Your name sounds better in my head than any song ever played 🎶",
  "Day 3 You’re the calm in my chaos like moonlight on a wild sea 🌙",
  "Day 4 If I could, I’d wrap this whole sky around you like a hug ☁️",
  "Day 5 You deserve kisses under storms and love without questions 💗",
  "Day 6 Even when you’re shh, I can hear your heart calling me and it’s beautiful 🫀",
  "Day 7 I hope this made you feel a little lighter, a little loved 💌"
];

function showMessage(index) {
  const box = document.getElementById('messageBox');
  const text = document.getElementById('messageText');
  text.textContent = messages[index];
  box.style.display = 'block';
  setTimeout(() => { box.style.display = 'none'; }, 6000);
}
