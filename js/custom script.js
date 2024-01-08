
// Function to check the age and show the card
function checkAge() {
    // Get the input value
    var age = document.getElementById("ageInput").value;
    // Get the card elements
    var ageCard = document.getElementById("ageCard");
    var ageImage = document.getElementById("ageImage");
    var ageTitle = document.getElementById("ageTitle");
    var ageText = document.getElementById("ageText");
    var ageReset = document.getElementById("ageReset");
    // Check the age and show the card
    if (age >= 18) {
      // Show the card for adult
      ageCard.style.display = "block";
      ageImage.src = "./Images/adult-person.jpg";
      ageTitle.innerHTML = "You are an adult";
      ageText.innerHTML = "You are eligible join our community.";
      ageReset.style.display = "block";
    } else {
      // Show the card for child
      ageCard.style.display = "block";
      ageImage.src = "./Images/child-person.jpg";
      ageTitle.innerHTML = "You are a child";
      ageText.innerHTML = "You are not eligible join our community.";
      ageReset.style.display = "block";
    }
  }

  // Function to reset the age and hide the card
  function resetAge() {
    // Get the input and card elements
    var ageInput = document.getElementById("ageInput");
    var ageCard = document.getElementById("ageCard");
    // Reset the input value and hide the card
    ageInput.value = "";
    ageCard.style.display = "none";
  }