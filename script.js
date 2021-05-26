
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}




function compute()
{
    p = document.getElementById("principal").value;
    if (p < 1) {
        alert("Please enter a principal greater than Zero");
    }
    else{
    var principal = p;
    
    var rate = document.getElementById("rate").value
    var years = document.getElementById("years").value;
    var percent = rate/100
    

    var interest = p * percent * years;
    
    var year = new Date().getFullYear()+parseInt(years);
    
    var amount = parseFloat(interest)
    
    document.getElementById("result").innerHTML="If you deposit "+  "\<b\>" +principal+ "\</b\>"+",\<br\>at an interest rate of "+ "\<b\>" +rate+"%\</b\>\<br\>You will receive an amount of "+ "\<b\>" +parseFloat(amount)+"\</b\>,\<br\>in the year "+"\<b\>"+ year +"\</b\>\<br\>"}





    
}

        