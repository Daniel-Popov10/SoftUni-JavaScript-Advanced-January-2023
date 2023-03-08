function notify(message) {
  const getDiv = document.getElementById('notification');
  getDiv.textContent = message;
  getDiv.style.display = 'block';

  getDiv.addEventListener('click', (e) => {
    e.currentTarget.style.display = 'none';
  });
};