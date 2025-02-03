const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});
const apiKey = 'YOUR_API_KEY'; // Replace with your API key from ExchangeRate-API or Fixer.io
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amount = document.getElementById("amount");
const convertBtn = document.getElementById("convert-btn");
const conversionResult = document.getElementById("conversion-result");

// Fetch and populate currency options
async function fetchCurrencies() {
    try {
        const response = await fetch(apiURL + "USD"); // Default base currency: USD
        const data = await response.json();
        const currencies = Object.keys(data.conversion_rates);
        currencies.forEach(currency => {
            const option1 = document.createElement("option");
            option1.value = currency;
            option1.textContent = currency;
            fromCurrency.appendChild(option1);

            const option2 = document.createElement("option");
            option2.value = currency;
            option2.textContent = currency;
            toCurrency.appendChild(option2);
        });
        fromCurrency.value = "USD"; // Set default values
        toCurrency.value = "INR";
    } catch (error) {
        console.error("Error fetching currencies:", error);
    }
}

// Handle conversion
async function convertCurrency() {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amountValue = parseFloat(amount.value);

    if (isNaN(amountValue) || amountValue <= 0) {
        conversionResult.textContent = "Please enter a valid amount.";
        return;
    }

    try {
        const response = await fetch(apiURL + from);
        const data = await response.json();
        const rate = data.conversion_rates[to];
        const convertedAmount = (amountValue * rate).toFixed(2);

        conversionResult.textContent = `${amountValue} ${from} = ${convertedAmount} ${to}`;
    } catch (error) {
        console.error("Error during conversion:", error);
        conversionResult.textContent = "Failed to convert. Please try again.";
    }
}

// Initialize
fetchCurrencies();
convertBtn.addEventListener("click", convertCurrency);
