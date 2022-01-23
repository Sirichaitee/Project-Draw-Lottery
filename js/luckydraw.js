let nameList = [];
let uniqueId = 0;
let listBox = document.getElementById("currentList");
let resultText = document.getElementById("result")
let winningText = document.getElementById("winningWord");
let resultBox = document.getElementById("resultBox");

    function checkEmpty() {
        if ( listBox.children.length > 0 ) {
            listBox.classList.remove('empty');
        } else {
            listBox.classList.add('empty');
        }
    }

    function addName() {

        let newName = document.getElementById("nameInput").value;

        if (newName) {

            // Add name to name list 
            nameList.push(newName);

            // Clear input field
            document.getElementById("nameInput").value = "";

            // Create new name item on the page
            var addedName = document.createElement("h6");
            addedName.innerHTML = newName;
            addedName.className = "name-item";
            addedName.id = uniqueId;
            addedName.setAttribute("name", newName)
            addedName.addEventListener("click", deleteName);
            listBox.appendChild(addedName);

            // Update remaining amount
            document.getElementById("remainingAmount").innerHTML = nameList.length;

            uniqueId++;

            document.getElementById("helper").innerHTML = '';

            checkEmpty();

        } else {
            document.getElementById("helper").innerHTML = 'พิมพ์ชื่อหรือเลขในช่อง';
        }

    }

    // Call addName function when  user press enter
    var inputField = document.getElementById("nameInput");
    inputField.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("submitButton").click();
        }
    });



    function deleteName() {

        // Find clicked name
        let clickedName = this.innerHTML;
        let clickedIndex = nameList.indexOf(clickedName);

        // Remove name from name list
        nameList.splice(clickedIndex,1);

        // Remove name item on page
        this.remove();

        // Update remaining amount
        document.getElementById("remainingAmount").innerHTML = nameList.length;
        
        checkEmpty();

    }

    function luckyDraw() {

       if (nameList.length > 0) {

            document.getElementById('drawButton').disabled = true;

            //Show animation 
            resultBox.classList.add('box-spinning');

            // Random result

            winningText.innerHTML = "ผู้ชนะก็คือ...";

            let numOfNames = nameList.length;

            // Show randomization

            var counter = 0;
                var i = setInterval(function(){
                    let randomIndex = Math.floor(Math.random() * numOfNames);
                    let randomName = nameList[randomIndex];
                    resultText.innerHTML = randomName;
                    counter++;
                    if(counter === 14) { clearInterval(i); }
                }, 200);


            // Show real result after some time
            
            let resultIndex = Math.floor(Math.random() * numOfNames);
            let resultName = nameList[resultIndex]; 

            setTimeout( function() {
            resultText.innerHTML = resultName;

            // Remove result from list 
            nameList.splice(resultIndex,1); 

            // Remove name item on page
            document.getElementsByName(resultName)[0].remove();

            // Update remaining amount
            document.getElementById("remainingAmount").innerHTML = nameList.length;

            } , 3700);
        

            // Reset Animaton
            setTimeout(function(){ 
                resultBox.classList.remove('box-spinning');
                resultBox.classList.add('box-show');
                document.getElementById('drawButton').disabled = false;
            }, 4500);

       } else {
        resultText.innerHTML = '';
        winningText.innerHTML = '';
        resultBox.classList.remove('box-show');
       }
    }

    function clearResult() {
        resultText.innerHTML = ''; 
        winningText.innerHTML = '';
        resultBox.classList.remove('box-show');
    }

    function scrollToDraw() {
        document.getElementById("drawSection").scrollIntoView();
    }