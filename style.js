
// Function for validationg first name

function firstname(){
    var first=document.getElementById("fn").value;
    var regix=/^[A-Za-z\s\']{3,10}$/;
    if(regix.test(first))
    {
        document.getElementById("firstprompt").style.color="Green";
        document.getElementById("firstprompt").innerHTML="Valid";
    }
    else
    {
        document.getElementById("firstprompt").style.color="Red";
        document.getElementById("firstprompt").innerHTML="Not Accepted";
        alert("Enter 3-10 characters of first name.");
    }
}


// Function for validationg last name

function lastname(){

    var middle=document.getElementById("ln").value;
	var regix=/^[A-Za-z\s\']{4,10}$/;
		if(regix.test(middle))
		{
				document.getElementById("middleprompt").style.color="Green";
				document.getElementById("middleprompt").innerHTML="Valid";
		}
		else
		{
				document.getElementById("middleprompt").style.color="Red";
				document.getElementById("middleprompt").innerHTML="Not Accepted";
				alert("Enter 4-10 characters of last name.");
		}
}

// Function for validationg mobile number

function mobnum(){

    var num = document.getElementById("num").value;
    var test1 = /^[0-9]{10}$/;
    if(test1.test(num))
    {
        document.getElementById("numprompt").style.color="Green";
		document.getElementById("numprompt").innerHTML="Valid";
    }
    else
    {
        document.getElementById("numprompt").style.color="Red";
		document.getElementById("numprompt").innerHTML="Not Accepted";
		alert("Enter a 10 digit phone no in format xxxxxxxxxx");
    }
}

// Function for printing the receipt

function receipt(){
    var first = document.getElementById("fn").value;
    var last = document.getElementById("ln").value;
    var num1 = document.getElementById("num").value;
    var amount = document.getElementById("amount").value;
    var add = document.getElementById("add").value;

    
        var username = "Mr/Ms " + first + " " + last;

    if(first !='' && last!='' && num1!= '' ){
    document.getElementById("r1").innerHTML = "<h1>PM Cares Fund</h1>" + "<br>";
    document.getElementById("r1").innerHTML += "<h2>Donation Receipt</h>" + "<br>";
    document.getElementById("r1").innerHTML += "<h3>NAME: " + username + "</h3>" + "<br>";
    document.getElementById("r1").innerHTML += "<h3>Phone Number: " + num1 + "</h3>" + "<br>";
    document.getElementById("r1").innerHTML += "<h3>Address: " + add + "</h3>" + "<br>";
    document.getElementById("r1").innerHTML += "<h3>The amount donated to PM Cares Fund: Rs. " + amount + "</h3>" + "<br><br><br><br><br>";
    document.getElementById("r1").innerHTML += "<h4>*Please screenshot this receipt for future references.</h4>";
    }
    else{
        alert('enter your details')
    }
}