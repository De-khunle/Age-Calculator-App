const dayInput = document.getElementById('input-1');
const monthInput = document.querySelector('.input-2');
const yearInput = document.getElementById('input-3');
const iconBtn = document.querySelector('.icon');
const spans = document.querySelectorAll('h1 span');
const errorP = document.querySelectorAll('.error-p');
const label = document.querySelectorAll('label');

//for loop for individual input border-color-red
[dayInput, monthInput, yearInput].forEach(input => {
    input.addEventListener('input', () => {
        input.classList.remove('input-error');
    })
});

iconBtn.addEventListener('click', function () {
    const birthDay = Number(dayInput.value);
    const birthMonth = Number(monthInput.value) - 1;
    const birthYear = Number(yearInput.value);
    const today = new Date();

    let hasError = false;
    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }


    //remove error as user type
    if (dayInput.value === '') {
        dayInput.classList.add('input-error');
        errorP[0].classList.add('t-display');
        label[0].style.color = '#ff5757';
        hasError = true;
    } 
    if (monthInput.value=== '') {
        monthInput.classList.add('input-error');
        errorP[1].classList.add('t-display');
        label[1].style.color = '#ff5757';
        hasError = true;
    } 
    if (yearInput.value === '') {
        yearInput.classList.add('input-error');
        errorP[2].classList.add('t-display');
        label[2].style.color = '#ff5757';
        hasError = true;
    } 
    if(hasError) return;

//invalid day input error
if (birthDay < 1 || birthDay > 31) {
        dayInput.classList.add('input-error');
        errorP[0].textContent = 'Must be a valid day';
        errorP[0].classList.add('t-display');
        label[0].style.color = '#ff5757';
        // alert('Day must be between 1 and 31');
        return;
    }
    //invalid month input error
    const rawMonth = Number(monthInput.value)
    if (rawMonth < 1 || rawMonth > 12) {
    monthInput.classList.add('input-error');
    errorP[1].textContent = 'Must be a valid month';
    errorP[1].classList.add('t-display');
    label[1].style.color = '#ff5757';
    // alert('Month must be between 1 and 12');
    return;
}
//for dates that do not exist i.e feb 30
const daysInMonth = getDaysInMonth(birthYear, birthMonth + 1);
if (birthDay > daysInMonth) {
        dayInput.classList.add('input-error');
        monthInput.classList.add('input-error');
        yearInput.classList.add('input-error');
        errorP[0].textContent = 'Must be a valid day';
        errorP[0].classList.add('t-display');
        label[0].style.color = '#ff5757';
        label[1].style.color = '#ff5757';
        label[2].style.color = '#ff5757';
    // alert('Invalid date for the selected month');
    return;
}
//error for future date check
const birthDate = new Date(birthYear, birthMonth, birthDay);
if(birthDate > today) {
    yearInput.classList.add('input-error');
    errorP[2].textContent = 'Must be in the past';
    errorP[2].classList.add('t-display');
    label[2].style.color = '#ff5757';
    // alert('Date cannot be in the future');
    return;
}
    
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    let ageYears = currentYear - birthYear;
    let ageMonths = currentMonth - birthMonth;
    let ageDays = currentDay - birthDay;
      
    if (ageDays < 0) {
        ageMonths--;
        ageDays += getDaysInMonth(currentYear, currentMonth -1);
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }
    displayAge(ageYears, ageMonths, ageDays);
});

function displayAge(years, months, days) {
    spans[0].textContent = years;
    spans[1].textContent = months;
    spans[2].textContent = days;
}