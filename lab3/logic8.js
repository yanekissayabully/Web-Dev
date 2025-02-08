let begin= prompt("Who is there?",'')
if(begin=="Cancel"){
    alert("Canceled");
}
else if(begin=="Other"){
    alert("I do not know you")
}
else if(begin=="Admin"){
    let test=prompt("Password?",'')
    if(test=="TheMaster"){
        alert("Welcome!")
    }
    else if(test=="Other"){
        alert("Wrong password")
    }
}