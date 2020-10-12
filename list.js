

const students = [{rollno:"1",name:"A",emailid:"abc@gmail.com"},{rollno:"2",name:"B",emailid:"c@gmail.com"},{rollno:"3",name:"C",emailid:"ac@gmail.com"},{rollno:"4",name:"D",emailid:"bc@gmail.com"},
{rollno:"5",name:"A1",emailid:"abc@gmail.com"},{rollno:"6",name:"B1",emailid:"a@gmail.com"},{rollno:"7",name:"C1",emailid:"a@gmail.com"},{rollno:"8",name:"D1",emailid:"a@gmail.com"},
{rollno:"9",name:"A2",emailid:"abc@gmail.com"},{rollno:"10",name:"B2",emailid:"abc@gmail.com"},{rollno:"11",name:"C2",emailid:"abc@gmail.com"},{rollno:"12",name:"D2",emailid:"abc@gmail.com"},
{rollno:"13",name:"A2",emailid:"abc@gmail.com"},{rollno:"14",name:"B3",emailid:"ab@gmail.com"},{rollno:"15",name:"C3",emailid:"ab@gmail.com"},{rollno:"16",name:"D3",emailid:"ab@gmail.com"}
];

const totalsize=students.length, pagesize=2,numberofpage=Math.ceil(students.length/pagesize) ;
let  currentindex=0;
function generateTable() {
     let myString ="";
     myString= "<tr>"+ "<td>rollno</td>"+"<td> Name</td>"+"<td>emailID</td>" + "</tr>";
     for (i=currentindex; i<(currentindex+pagesize<=totalsize?currentindex+pagesize:pagesize); i++) 
     {
        myString += "<tr><td>";
       myString += students[i].rollno;
       myString += "</td>";
       myString += "<td>";
       myString += students[i].name;
       myString += "</td>";
       myString += "<td>";
       myString += students[i].emailid;
       myString += "</td></tr>";
     }
     myString+="<br/>"
      myString+= "<input type='button' id='first'     onclick='navigateFirst()' value='<<' />  ";
      myString+= "<input type='button' id='previous'  onclick='navigatePrev()' value='<' />  ";
      myString+= "<input type='button'  id='next'     onclick='navigateNext()' value='>' />  ";
      myString+= "<input type='button'  id='last'     onclick='navigateLast()' value='>>' />  ";
     document.getElementById('elementId').innerHTML = myString;
     return false;
}

 navigateFirst=()=>{
currentindex=0;
generateTable();
};
navigateLast=()=>{
currentindex=(numberofpage-1)*pagesize;
generateTable();
};
navigatePrev=()=>{
currentindex=(currentindex-pagesize>=0?currentindex-pagesize:0);
generateTable();
};
navigateNext=()=>{
currentindex=(currentindex+pagesize<totalsize?currentindex+pagesize:(numberofpage-1)*pagesize);
generateTable();
};


