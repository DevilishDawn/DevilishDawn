// Get references to the HTML elements
const audioUpload = document.getElementById('audio-upload');
const audioPlayer = document.getElementById('audio-player');

// Add an event listener to the file input
audioUpload.addEventListener('change', function(event) {
    const files = event.target.files;

    // Check if a file was selected
    if (files && files.length > 0) {
        const file = files[0];

        // Ensure the selected file is an audio file (optional, but good practice)
        if (file.type.startsWith('audio/')) {
            // Create a Blob URL for the selected file
            const audioUrl = URL.createObjectURL(file);

            // Set the audio player's source to the Blob URL
            audioPlayer.src = audioUrl;

            // Optional: You can try to automatically play the audio
            // Note: Autoplay might be blocked by some browsers unless the user interacted with the page first
            // audioPlayer.play(); 
        } else {
            alert('Please select a valid audio file.');
        }
    }
});
