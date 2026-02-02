const dayInput = document.getElementById('input-1');
const monthInput = document.querySelector('.input-2');
const yearInput = document.getElementById('input-3');
const iconBtn = document.querySelector('.icon');
const spans = document.querySelectorAll('h1 span');



iconBtn.addEventListener('click', function () {
    const birthDay = Number(dayInput.value);
    const birthMonth = Number(monthInput.value);
    const birthYear = Number(yearInput.value);
    

if (!birthDay || !birthMonth || !birthYear) {
    alert('Please fill all fields');
    return;
}
if (birthDay < 1 || birthDay > 31) {
    alert('Day must be between 1 and 31');
    return;
}
if (birthMonth < 1 || birthMonth > 12) {
    alert('Month must be between 1 and 12');
    return;
}
const daysInMonth = getDaysInMonth(birthYear, birthMonth);
if (birthDay > daysInMonth) {
    alert('Invalid date for the selected month');
    return;
}

    const today = new Date();
    
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    let ageYears = currentYear - birthYear;
    let ageMonths = currentMonth - birthMonth;
    let ageDays = currentDay - birthDay;
    
    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }
    
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