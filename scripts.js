async function generateVideo() {
  const textInput = document.getElementById('textInput').value;
  const response = await fetch('/generate-video', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: textInput })
  });

  const result = await response.json();
  if (result.success) {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = `<video controls src="${result.videoUrl}"></video>`;
  } else {
    alert('Failed to generate video');
  }
}
