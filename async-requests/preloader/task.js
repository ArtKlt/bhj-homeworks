document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');
  

    function showLoader() {
      loader.classList.add('loader_active');
    }
  

    function hideLoader() {
      loader.classList.remove('loader_active');
    }
  
   
    function addCurrencyItem(code, value, currency) {
      const item = document.createElement('div');
      item.classList.add('item');
  
      const codeElement = document.createElement('div');
      codeElement.classList.add('item__code');
      codeElement.textContent = code;
      item.appendChild(codeElement);
  
      const valueElement = document.createElement('div');
      valueElement.classList.add('item__value');
      valueElement.textContent = value;
      item.appendChild(valueElement);
  
      const currencyElement = document.createElement('div');
      currencyElement.classList.add('item__currency');
      currencyElement.textContent = currency;
      item.appendChild(currencyElement);
  
      itemsContainer.appendChild(item);
    }
  

    async function loadCurrency() {
        showLoader();
  
        const response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
        const data = await response.json();
  

        const valute = data.response.Valute;
        for (const currencyCode in valute) {
          const currencyData = valute[currencyCode];
          addCurrencyItem(currencyData.CharCode, currencyData.Value, 'руб.');
        }
  
        hideLoader();
      
    }
  

    loadCurrency();
  });