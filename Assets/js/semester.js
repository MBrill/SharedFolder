var theSemester = { semester : "Wintersemester 2020/21"};

// Ausgabe des aktuellen Semesters in eine geöffnete HTML-Datei
function getSemester() 
{     
    document.write(theSemester.semester);
}

function SemesterJSON()
{
     document.getElementById("Semester").innerHTML = theSemester.semester;	
}
