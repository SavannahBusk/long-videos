const uploadForm = document.getElementById('uploadForm');
const videoInput = document.getElementById('videoInput');
const videoList = document.getElementById('videoList');

uploadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const file = videoInput.files[0];

    if (file) {
        const videoURL = URL.createObjectURL(file);
        const videoElement = document.createElement('video');
        videoElement.src = videoURL;
        videoElement.controls = true;

        videoList.appendChild(videoElement);

        // Clear the input for next upload
        videoInput.value = '';
    } else {
        alert('Vælg en video først!');
    }
});
