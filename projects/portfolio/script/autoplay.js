document.addEventListener('DOMContentLoaded', function (e) {

    var promise = document.querySelector('video').play();
  
    if (promise !== undefined) {
        promise.catch(error => {
            console.log ("Auto-play failed")
            vid.innerHTML = "<h1>Autoplay failed<br>Email: akselbyt@gmail.com"
            // Auto-play was failed
        }).then(() => {
            console.log ("Auto-play started")
            // Auto-play started
        });
    }
  });