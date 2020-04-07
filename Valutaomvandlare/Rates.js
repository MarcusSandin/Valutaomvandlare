async function AddRatesToDropdown() {
    let cur = await GetRates();
  
    let curDropdown1 = document.querySelector("#curDropdown1");
    let curDropdown2 = document.querySelector("#curDropdown2");
  
    let euroOption = document.createElement("option");
    euroOption.textContent = "EUR";
    euroOption.value = 1;
    curDropdown2.append(euroOption);
  
    let sekOption = document.createElement("option");
    sekOption.textContent = "SEK";
    sekOption.value = cur.rates["SEK"];
    curDropdown1.append(sekOption);
  
    //klonar för att lägga till igen
    let cloneEur = euroOption.cloneNode(true);
    curDropdown1.append(cloneEur);
  
    for (let iterator in cur.rates) {
      let optionOne = document.createElement("option");
      optionOne.textContent = iterator;
      optionOne.value = cur.rates[iterator];
  
      let optionTwo = document.createElement("option");
      optionTwo.textContent = iterator;
      optionTwo.value = cur.rates[iterator];
  
      if (iterator.toString() != "SEK") {
        curDropdown1.append(optionOne);
      }
      curDropdown2.append(optionTwo);
    }
  }
  
  async function GetRates() {
    //parsar från string, för att validera mot Date.Now (som är i millisekunder)
    let cashedTimeOfRate = Date.parse(sessionStorage.getItem("expireTime"));
    let cashedRates = sessionStorage.getItem("rates");
  
    if (
      isNaN(cashedTimeOfRate) ||
      cashedTimeOfRate < Date.now() ||
      cashedRates === null
    ) {
      return await GetAndCasheUpdatedRates();
    } else {
      return JSON.parse(cashedRates);
    }
  }
  
  async function GetAndCasheUpdatedRates() {
    let url = "https://api.exchangeratesapi.io/latest";
  
    const resp = await fetch(url);
    let currencies = await resp.json();
  
    //sätter datum för hämtning +1h för smidig validering mot Date.Now
    let date = new Date();
    date = new Date(date.setHours(date.getHours() + 1));
  
    sessionStorage.setItem("expireTime", date);
    sessionStorage.setItem("rates", JSON.stringify(currencies));
  
    return currencies;
  }