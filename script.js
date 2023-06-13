window.onload = function() {
    var makeDecisionButton = document.getElementById("makeDecisionButton");
    var decisionText = document.getElementById("decision");
    var optionsTextArea = document.getElementById("options");
  
    makeDecisionButton.addEventListener("click", function() {
      var options = optionsTextArea.value.split("\n");
      var randomIndex = Math.floor(Math.random() * options.length);
      var decision = options[randomIndex].trim();
      decisionText.textContent = "Gods have decided " +decision;
    });
  };
  