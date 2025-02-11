document.addEventListener("DOMContentLoaded", () => {
   

    document.getElementById("form").addEventListener("submit", (e) => {
        e.preventDefault();
        let age = parseInt(document.getElementById("age").value.trim());

        let message = "";

        if (isNaN(age) || age <= 0) {
            message = "Please enter a valid age.";
        } else if (age < 18) {
            message = "This lady is underage. Dating is not appropriate.";
        } else if (age === 18) {
            message = "This lady qualifies for a date, but ask for an ID card.";
        } else if (age >= 19 && age <= 25) {
            message = "This lady is at a good age for dating.";
        } else if (age >= 26 && age <= 34) {
            message = "This lady is mature and responsible be cauteous.";
        } else {
            message = "Age is just a number, but compatibility matters more.";
        }
         
        document.getElementById("display").innerHTML = message;
        document.getElementById("display").style.display="block";
        setTimeout(()=>{
            document.getElementById("display").style.display="none";
        },10000)
        document.getElementById("form").reset();
    });
});
