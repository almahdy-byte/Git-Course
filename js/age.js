
document.getElementById('ageForm').addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();
//input fields
let yearField = document.querySelector(".year")
let monthField = document.querySelector(".month")
let dayField = document.querySelector(".day")

let erorYear = document.querySelector(".erorYear")
let erorMonth = document.querySelector(".erorMonth")
let erorDay= document.querySelector(".erorDay")


console.log(erorYear)
console.log(erorMonth)
console.log(erorDay)
    let py=document.querySelector(".y")
    let pm=document.querySelector(".m")
    let pd=document.querySelector(".d")
    // Get user input values
    const day = parseInt(document.querySelector('.day').value);
    const month = parseInt(document.querySelector('.month').value);
    const year = parseInt(document.querySelector('.year').value);

    // current date
    const currentDate = new Date();
    const curentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth()+1
    const currentDay = currentDate.getDate()
    
    //check for inputs

//check input year 
function checkYearValidation(){
if(year>curentYear)
{
return true;
}
else if(!parseInt(year))
{
    return true
}
else
{
    return false
}
}
//check input month
function checkMonthValidation(){
if(month>12)
{
return true;
}
else if(!parseInt(month))
{
    return true
}
else
{
    return false
}
}
function checkDayValidation(){
//check input day
if((month!=2||month!=4||month!=6||month!=9||month!=11)&&day>31)
{
    return true
}
else if(month!=2&&day>30)
{
    return true;
}
else if(month==2&&day>28)
{
    return true;
}
else if(!parseInt(day))
{
    return true;
}
else
{
    return false
}
}

    //calculate age 
    if(checkYearValidation()||checkMonthValidation()||checkDayValidation())
    {
        if(checkYearValidation())
        {
        erorYear.innerHTML=""
        yearField.style.cssText="border:none; outline:3px solid red; "
        erorYear.append(document.createTextNode("Must be in the past"));
        }
        else
        {
            erorYear.innerHTML=""
        yearField.style.cssText="outline:none; border:3px solid balck; "
        }
        if(checkMonthValidation())
        {
            erorMonth.innerHTML=""
        monthField.style.cssText="border:none; outline:3px solid red; "
        erorMonth.append(document.createTextNode("Must be a validate month"));
        }
        else
        {
            erorMonth.innerHTML=""
        monthField.style.cssText="outline:none; border:3px solid balck;  "
        }
        if(checkDayValidation())
        {
        erorDay.innerHTML="";
        erorDay.append(document.createTextNode("Must be a validate day"));
        dayField.style.cssText="border:none; outline:3px solid red; "
        }
        else
        {
        erorDay.innerHTML=""
        dayField.style.cssText="outline:none; border:3px solid balck;  "
        }
    }

    else{
    erorDay.innerHTML=""
    erorMonth.innerHTML=""
    erorYear.innerHTML=""
    yearField.style.cssText="outline:none; border:3px solid black; "
    monthField.style.cssText="outline:none; border:3px solid black;  "
    dayField.style.cssText="outline:none; border:3px solid black;  "

    let UserAgeYear = curentYear - year;
    let UserAgeMounth;
    if(currentMonth<month)
    {
        UserAgeYear--;
        UserAgeMounth = month-currentMonth;
    }
    else
    UserAgeMounth = currentMonth-month;
let UserAgeDay;
    if(currentDay<day)
    {
        
        UserAgeMounth--;
        if(UserAgeMounth<=0)
        {
            UserAgeYear=UserAgeYear-UserAgeMounth;
            UserAgeMounth=""
        }
        if(month!=2||month!=4||month!=6||month!=9||month!=11)
        UserAgeDay = 31-day+currentDay-1;
        else if(currentMonth!=2)
        UserAgeDay = 30-day-currentDay-1;
        else
        UserAgeDay = 28-day+currentDay-1;

    }
    else
{
        if(month!=2||month!=4||month!=6||month!=9||month!=11)
        UserAgeDay = currentDay-day;
        else if(currentMonth!=2)
        UserAgeDay = currentDay-day;
        else
        UserAgeDay = day+currentDay-day;
    
}
py.innerHTML=""
pm.innerHTML=""
pd.innerHTML=""
py.prepend(document.createTextNode(UserAgeYear))
pm.prepend(document.createTextNode(UserAgeMounth))
pd.prepend(document.createTextNode(UserAgeDay))

}});