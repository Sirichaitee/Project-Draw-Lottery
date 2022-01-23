
      import { countriesData , currencyData } from '/js/city-data.js';

      let countryInput = document.getElementById('countryInput');
      let cityInput = document.getElementById('cityInput');
      let cityList
      let cityObject
      let currency
      let conversionRate
      let resultAmount

      let resultCityNameText = document.getElementById('resultCityName');
      let resultAmountText = document.getElementById('resultAmount');
      let resultCurrencyText = document.getElementById('resultCurrency');
      let resultConvertedText = document.getElementById('resultConverted');
      let resultSalaryTimesText = document.getElementById('resultSalaryTimes');

      // Update options of city input
      countryInput.onchange = function() {

        cityList = countriesData[this.value];

        //Clear old options
        cityInput.length = 1;

        //Create new options
         for ( var i = 0; i < cityList.length ; i++) {
            let cityDisplayName = cityList[i].cityName;
            cityInput.options[i+1] = new Option( cityDisplayName , i );
         }

         //Get the country's currency and conversion rate
         currency = currencyData[this.value][0];
         conversionRate = currencyData[this.value][1];

         //Set result curreny & clear old results
         resultCurrencyText.innerHTML = currency;
         resultAmountText.innerHTML = "-";
         resultConvertedText.innerHTML = "-";
         resultSalaryTimesText.innerHTML = "-";
         resultCityNameText.innerHTML = " ";
      }

      // Update selected city variable
      cityInput.onchange = function() {
        let j = cityInput.value;
        cityObject = cityList[j];

        //Clear old results
        resultAmountText.innerHTML = "-";
        resultConvertedText.innerHTML = "-";
        resultSalaryTimesText.innerHTML = "-";
        resultCityNameText.innerHTML = cityObject.cityName;
      }

      //Calculation function
      document.getElementById("calculateButton").onclick = function() {

        if ( countryInput.value && cityInput.value ) {

          let roommateOption = document.querySelector('input[name="roommate"]:checked').value;
          let localeOption = document.querySelector('input[name="locale"]:checked').value;
          let rentOption = document.querySelector('input[name="rent"]:checked').value;
          let foodOption = document.querySelector('input[name="food"]:checked').value;
          let travelOption = document.querySelector('input[name="travel"]:checked').value;
          let utilityOption = document.querySelector('input[name="utility"]:checked').value;

          let rentMultiplier
          let utilityMultiplier
          let rentCost
          let foodCost
          let travelCost
          let utilityCost

          switch ( roommateOption ) {
            case 'NA':
              rentMultiplier = 0;
              utilityMultiplier = 0.25;
              break;
            case 'no':
              rentMultiplier = 1;
              utilityMultiplier = 1;
              break;
            case 'yes':
              rentMultiplier = 0.5;
              utilityMultiplier = 0.5;

              break;
          }

          // Rent cost
          if ( localeOption === 'sub') {
              switch ( rentOption ) {
              case 'low':
                rentCost = cityObject.subLow;
                break;
              case 'mid':
                rentCost = cityObject.subMid;
                break;
              case 'high':
                rentCost = cityObject.subHigh;
                break;
            } 
          } else if ( localeOption === 'city') {
              switch ( rentOption ) {
                case 'low':
                  rentCost = cityObject.cityLow;
                  break;
                case 'mid':
                  rentCost = cityObject.cityMid;
                  break;
                case 'high':
                  rentCost = cityObject.cityHigh;
                  break;
              } 
          }

          //Food cost
          switch ( foodOption ) {
            case 'low':
              foodCost = (cityObject.mealCheap * 18 * 3) + (cityObject.mealCheap * 12 * 2);
              break;
            case 'mid':
              foodCost = (cityObject.mealCheap * 25 * 3) + (cityObject.mealExp * 5 * 3);
              break;
            case 'high':
              foodCost = (cityObject.mealCheap * 15 * 3) + (cityObject.mealExp * 15 * 3);
              break;
          }

          //Travel cost
          switch ( travelOption ) {
            case 'low':
              travelCost = cityObject.travelLow;
              break;
            case 'high':
              travelCost = cityObject.travelHigh;
              break;
          }

          //Utility cost
          switch ( utilityOption ) {
            case 'low':
              utilityCost = cityObject.utilityLow;
              break;
            case 'high':
              utilityCost = cityObject.utilityHigh;
              break;
          }

          //Final calculation
          resultAmount = rentCost*rentMultiplier + utilityCost*utilityMultiplier + foodCost + travelCost;

          resultAmountText.innerHTML = Math.round(resultAmount).toLocaleString();
          resultConvertedText.innerHTML = Math.round(resultAmount * conversionRate).toLocaleString();
          resultSalaryTimesText.innerHTML = Math.round( resultAmount / cityObject.averageSalary * 100 ) ;

        } else {
          alert("กรุณาเลือกประเทศและเมือง")
        }
      }
