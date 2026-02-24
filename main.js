        const dayInput = document.getElementById('input-1');
        const monthInput = document.querySelector('.input-2');
        const yearInput = document.getElementById('input-3');
        const iconBtn = document.querySelector('.icon');
        const span = document.querySelectorAll('h1 span');
        const errorP = document.querySelectorAll('.error-p');
        const label = document.querySelectorAll('label');


        let hasError = false;

        // individual empty Input value
        dayInput.addEventListener('input', function () {
            const birthDay = Number(dayInput.value);
            if (dayInput.value === '') {
                dayInput.classList.add('input-error');
                errorP[0].classList.add('t-display');
                label[0].classList.add('label-error');
                hasError = true;
            } 
            else if (isNaN(birthDay) || birthDay < 1 || birthDay > 31) {
                dayInput.classList.add('input-error');
                errorP[0].textContent = 'Must be a valid day';
                errorP[0].classList.add('t-display');
                label[0].classList.add('label-error');
                hasError = true;
            }
            else {
                dayInput.classList.remove('input-error');
                errorP[0].classList.remove('t-display');
                label[0].classList.remove('label-error');
                hasError = false;
            }
        })
        monthInput.addEventListener('input', function () {
            const rawwMonth = Number(monthInput.value);
            if (monthInput.value === '') {
                monthInput.classList.add('input-error');
                errorP[1].classList.add('t-display');
                label[1].classList.add('label-error');
                hasError = true;
            } else if (isNaN(rawwMonth) || rawwMonth < 1 || rawwMonth > 12) {
                monthInput.classList.add('input-error');
                errorP[1].textContent = 'Must be a valid month';
                errorP[1].classList.add('t-display');
                label[1].classList.add('label-error');
                hasError = true;
            } else {
                monthInput.classList.remove('input-error');
                errorP[1].classList.remove('t-display');
                label[1].classList.remove('label-error');
                hasError = false;
            }
        })
        yearInput.addEventListener('input', function () {    
            const birthYear = Number(yearInput.value);
            const currentYear = new Date().getFullYear();
            if (yearInput.value === '') {
                yearInput.classList.add('input-error');
                errorP[2].classList.add('t-display');
                label[2].classList.add('label-error');
                hasError = true;
            }     
            else if (isNaN(birthYear) || birthYear > currentYear) {
                yearInput.classList.add('input-error');
                errorP[2].textContent = 'Must be in the past';
                errorP[2].classList.add('t-display');
                label[2].classList.add('label-error');
                hasError = true;
            }     
            else {
                yearInput.classList.remove('input-error');
                errorP[2].classList.remove('t-display');
                label[2].classList.remove('label-error');
                hasError = false;
            }
        })
        
        iconBtn.addEventListener('click', () => {
            const birthDay = Number(dayInput.value);
            const birthMonth = Number(monthInput.value) -1;
            const birthYear = Number(yearInput.value);

            const today = new Date();

            const currentDay = today.getDate(); 
            const currentMonth = today.getMonth(); 
            const currentYear = today.getFullYear(); 

            function getDaysInMonth(year, month) {
                return new Date(year, month, 0).getDate();
            }

            // empty Input value
            if (dayInput.value === '') {
                dayInput.classList.add('input-error');
                errorP[0].classList.add('t-display');
                label[0].classList.add('label-error');
                hasError = true;
            }
            if (monthInput.value === '') {
                monthInput.classList.add('input-error');
                errorP[1].classList.add('t-display');
                label[1].classList.add('label-error');
                hasError = true;
            }
            if (yearInput.value === '') {
                yearInput.classList.add('input-error');
                errorP[2].classList.add('t-display');
                label[2].classList.add('label-error');
                hasError = true;
            }

            if (
            dayInput.classList.contains('input-error') || monthInput.classList.contains('input-error') || yearInput.classList.contains('input-error')) {return;}

            //error for invalid day
            if (birthDay < 1 || birthDay > 31) {
                dayInput.classList.add('input-error');
                errorP[0].textContent = 'must be a valid day'
                errorP[0].classList.add('t-display');
                label[0].classList.add('label-error');
                return;
            }
            //error for invalid month
            const rawwMonth = Number(monthInput.value);
            if (rawwMonth < 1 || rawwMonth > 12) {
                monthInput.classList.add('input-error');
                errorP[1].textContent = 'must be a valid month';
                errorP[1].classList.add('t-display');
                label[1].classList.add('label-error');
                return;
            }

            //error for days that don't exist i.e feb 30
            const daysInMonth = getDaysInMonth(birthYear, birthMonth + 1);
            if (birthDay > daysInMonth) {
                dayInput.classList.add('input-error');
                errorP[0].textContent = 'must be a valid date';
                errorP[0].classList.add('t-display');
                label[0].classList.add('label-error');
                return;
            }
            //error for future date check
            const birthDate = new Date(birthYear, birthMonth, birthDay);
            if (birthDate > today) {
                yearInput.classList.add('input-error');
                errorP[2].textContent = 'must be in the past';
                errorP[2].classList.add('t-display');
                label[2].classList.add('label-error');
                return;
            }


            let ageYears = currentYear - birthYear;
            let ageMonths = currentMonth - birthMonth;
            let ageDays = currentDay - birthDay;

            if (ageDays < 0) {
                ageMonths --;
                ageDays += getDaysInMonth(currentYear, currentMonth)
            }

            if (ageMonths < 0) {
                ageYears--;
                ageMonths += 12;
            }

            displayAge(ageYears, ageMonths, ageDays);
        });

        function displayAge(years, months, days) {
            span[0].textContent = years;
            span[1].textContent = months;
            span[2].textContent = days;
        }
       