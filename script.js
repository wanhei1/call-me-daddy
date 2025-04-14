document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('daddyButton');
    const notification = document.getElementById('notification');
    
    button.addEventListener('click', function() {
        // Show notification
        notification.classList.add('show');
        
        // Play sound if supported
        try {
            const audio = new Audio();
            audio.src = 'data:audio/mp3;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAFAAAGSwBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCtra2tra2tra2tra2tra2tra2tra2tra2tra2//////////////////////////////////////////////////////////////////8AAAA8TEFNRTMuMTAwA84AAAAAAAAAABUgJAMGQQAB4AAABksgnJfYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sQxAADwAABpAAAACAAADSAAAAETEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ=='; 
            audio.play();
        } catch (e) {
            console.log('Audio playback not supported');
        }
        
        // Native browser notification if permitted
        if ("Notification" in window) {
            if (Notification.permission === "granted") {
                new Notification("DADDY!!");
            } else if (Notification.permission !== "denied") {
                Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                        new Notification("DADDY!!");
                    }
                });
            }
        }
        
        // Hide notification after delay
        setTimeout(function() {
            notification.classList.remove('show');
        }, 1500);
    });
});