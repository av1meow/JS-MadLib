(function() {
  const textContainer = document.querySelector("#textContainer");
  const goButton = document.querySelector("#goButton"); 
  const voiceList = responsiveVoice.getVoices();
  const voiceDropdown = document.querySelectorAll('#dropDown');
  const dropDownList = document.querySelector('#dropdown1');
  const selectVoice = document.querySelector('#selectVoice') 
  const inputList = document.querySelectorAll('input');
  
  let soundPlaying = false;
  let allInputsFilled = false;
  let content = "";
  let voice;
  
  for(let i = 0; i < voiceList.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = voiceList[i].name;
    dropDownList.appendChild(listItem);
  }

  goButton.addEventListener('click', function(event) {
    allInputsFilled = checkInputFields(inputList);
    if(voice && allInputsFilled){
      textContainer.childNodes.forEach(node => {
        switch (node.nodeName.toLowerCase()) {
          case('span'):
            content += node.textContent;
            break;
          case('div'):
            content += node.childNodes[1].value;  
              break;
          default:
            console.log('Don\'t need this valuse');
            break;
          }
        });
        responsiveVoice.speak(content, voice);
        content = '';
      } else if (!allInputsFilled){
        alert("All inputs fields not filled out, please finish filling them out!")
        } else {
        alert("Hey select a voice nigguh!");
      }
    });
    
    dropDownList.addEventListener('click', (e) => {
      voice = e.target.textContent;
      selectedVoice.textContent = voice;
    });
    
    function checkInputFields(inputs) {
      let validator = true;
      inputs.forEach(input => {
        if(!input.value.trim()){
          validator = false;
        }
      });
      return validator;
    }
  
    function disableButton() {
      goButton.disable = true;
    }
    
    function enableButton() {
      goButton.enable = false;
    }
}());