function myFunction() {
  const x = document.getElementById("mySelect").value;

  if (x == "info") {
    document.getElementById("info").style.display = "block";
    document.getElementById("cursos").style.display = "none";
    document.getElementById("exp").style.display = "none";

  }


  else if (x == "cursos") {
    document.getElementById("info").style.display = "none";
    document.getElementById("cursos").style.display = "block";
    document.getElementById("exp").style.display = "none";
    
  }

  else {
    document.getElementById("cursos").style.display = "none";
    document.getElementById("info").style.display = "none";
    document.getElementById("exp").style.display = "block";
    
  }

}