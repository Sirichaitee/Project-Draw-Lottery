const resultBox = document.getElementById('resultBox');

function appendData(data) {

    let genderCheckFemale = document.getElementById('genderFemale').checked;
    let genderCheckMale = document.getElementById('genderMale').checked;
    let typeCheckFirst = document.getElementById('typeFirstname').checked;
    let typeCheckLast = document.getElementById('typeLastname').checked;
    let typeCheckNick = document.getElementById('typeNickname').checked;
    let languageCheckThai = document.getElementById('nameLangThai').checked;
    let languageCheckEnglish = document.getElementById('nameLangEng').checked;

    const lastnameList = data.lastname;
    const femaleFirstnameList = data.firstnameFemale;
    const maleFirstnameList = data.firstnameMale;
    const femaleNicknameList = data.nicknameFemale;
    const maleNicknameList = data.nicknameMale;

    let firstnameTH = "";
    let firstnameEN = "";
    let nicknameTH = "";
    let nicknameEN = "";

    // Get name count and reset the number in case someone messed with the slider
    let nameCount = document.getElementById('nameCountSlider').value;
    if ( nameCount < 1 ) {
        nameCount = 1;
    }
    if ( nameCount > 6 ) {
        nameCount = 6;
    }

    //Define functions for generating names

    function genFirstnameFemale() {
        firstNameIndex = Math.floor(Math.random() * femaleFirstnameList.length);
        firstnameTH = femaleFirstnameList[firstNameIndex].th;
        firstnameEN = femaleFirstnameList[firstNameIndex].en;
    }
    function genFirstnameMale() {
        firstNameIndex = Math.floor(Math.random() * maleFirstnameList.length);
        firstnameTH = maleFirstnameList[firstNameIndex].th;
        firstnameEN = maleFirstnameList[firstNameIndex].en;
    }
    function genNicknameFemale() {
        nickNameIndex = Math.floor(Math.random() * femaleNicknameList.length);
        nicknameTH = femaleNicknameList[nickNameIndex].th;
        nicknameEN = femaleNicknameList[nickNameIndex].en;
    }
    function genNicknameMale() {
        nickNameIndex = Math.floor(Math.random() * maleNicknameList.length);
        nicknameTH = maleNicknameList[nickNameIndex].th;
        nicknameEN = maleNicknameList[nickNameIndex].en;
    }

    // Clear old results
    resultBox.innerHTML = "";


    function generateResultItem() {
        let lastNameIndex = Math.floor(Math.random() * lastnameList.length);
        let nickNameIndex
        let firstNameIndex

        // Check and generate names
        if ( genderCheckFemale && genderCheckMale ) {

            let chosenGender = Math.random();

            if ( chosenGender > 0.5 ) {
                genFirstnameFemale();
                genNicknameFemale();
            } else {
                genFirstnameMale();
                genNicknameMale()
            }

        } else if ( genderCheckFemale ) {
            genFirstnameFemale();
            genNicknameFemale();

        } else if (genderCheckMale ) {
            genFirstnameMale()
            genNicknameMale();
        }

        // Create results elements
        let resultItem = document.createElement('div')
        resultItem.classList.add('result-item');

        if ( languageCheckThai ) {
            let resultThai = document.createElement('h4')
            resultThai.className = "thai-name title is-4"

            let firstname = document.createElement('span');
            firstname.className = "first-name-th";
            firstname.innerHTML = firstnameTH + " ";

            let lastname = document.createElement('span');
            lastname.className = "last-name-th";
            lastname.innerHTML = lastnameList[lastNameIndex].th + " ";

            let nickname = document.createElement('span');
            nickname.className = "nick-name-th";
            nickname.innerHTML = `${nicknameTH} `;

            resultItem.appendChild(resultThai);

            if ( typeCheckFirst ) {
                resultThai.appendChild(firstname);
            }
            if ( typeCheckLast ) {
                resultThai.appendChild(lastname);
            }
            if ( typeCheckNick ) {
                resultThai.appendChild(nickname);
            }
            
        }

        if ( languageCheckEnglish ) {
            let resultEng = document.createElement('h4')
            resultEng.className = "english-name title is-4"
            
            let firstname = document.createElement('span');
            firstname.className = "first-name-en";
            firstname.innerHTML = firstnameEN + " ";

            let lastname = document.createElement('span');
            lastname.className = "last-name-th";
            lastname.innerHTML = lastnameList[lastNameIndex].en + " ";

            let nickname = document.createElement('span');
            nickname.className = "nick-name-en";
            nickname.innerHTML = `${nicknameEN} `;

            resultItem.appendChild(resultEng);

            if ( typeCheckFirst ) {
                resultEng.appendChild(firstname);
            }
            if ( typeCheckLast ) {
                resultEng.appendChild(lastname);
            }
            if ( typeCheckNick ) {
                resultEng.appendChild(nickname);
            }

        }

        resultBox.appendChild(resultItem);

    }

    for (let i = nameCount; i > 0;  i--) {
        generateResultItem();
    }
}

// var storageRef = firebase.storage().ref("thainames.json");
// storageRef.getDownloadURL().then(function(url) {
// console.log(url);
// });

function generate() {

    fetch('json/thainames.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

//Generated result when the page first loaded
document.ready( generate() );