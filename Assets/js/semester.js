var theSemester = { semester : "Wintersemester 2021/22"};

// Ausgabe des aktuellen Semesters in eine ge�ffnete HTML-Datei
function getSemester() 
{     
    document.write(theSemester.semester);
}

function SemesterJSON()
{
     document.getElementById("Semester").innerHTML = theSemester.semester;	
}
