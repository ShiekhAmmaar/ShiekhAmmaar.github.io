document.getElementById("sub").addEventListener("click", myFunction);

function myFunction() {
  alert ("Form Submitted!");
}

function setColorScheme(colorScheme) {
  if (colorScheme === 'colorScheme1') {
    document.body.style.backgroundColor = '#FF0000';
    document.body.style.color = '#FFFF00';
    document.getElementById("contact").style.color = '#FFFF00';
    document.getElementById("contact").style.backgroundColor = '#964B00';
  } else if (colorScheme === 'colorScheme2') {
    document.body.style.backgroundColor = '#00008B';
    document.body.style.color = '#ccff00';
    document.getElementById("contact").style.color = '#ccff00';
    document.getElementById("contact").style.backgroundColor = '#964B00';
  } else if (colorScheme === 'colorScheme3') {
    document.body.style.backgroundColor = '#00FF00';
    document.body.style.color = '#00FFFF';
    document.getElementById("contact").style.color = '#00FFFF';
    document.getElementById("contact").style.backgroundColor = '#964B00';
  }
}


(async () => {
  // create and show the notification
  const showNotification = () => {
      // create a new notification
      const notification = new Notification('Index Notification', {
          body: 'This is a personal blog',
      });


      // navigate to a URL when clicked
      notification.addEventListener('click', () => {

          window.open('https://www.youtube.com/', '_blank');
      });
  }

  // show an error message


  // check notification permission
  let granted = false;

  if (Notification.permission === 'granted') {
      granted = true;
  } else if (Notification.permission !== 'denied') {
      let permission = await Notification.requestPermission();
      granted = permission === 'granted' ? true : false;
  }

  // show notification or error
  granted ? showNotification() : null;

})();

function checkAge() {
  var age = prompt("Please enter your age:"); // Prompt user for their age
  if (age >= 18) { // Check if age is greater than or equal to 18
      alert("Fun Fact: you are older than me!"); // Show alert if condition is true
  } else {
      alert("Fun Fact: you are younger than me!"); // Show alert if condition is false
  }
}

