
import Input from '../UserInput/UserInput'
import React,{ useState }  from 'react';
const pagesize=2 ;

const PaginationAssign = (props)=>{
  let [currentindex, setCurrentindex] = useState(0);
  
   //let currentindex=0;
    const totalsize=props.students.length,numberofpage=Math.ceil(props.students.length/pagesize) ;
    const arr = Array.from(new Set(props.students));
    

    const print =(currentindex)=>{
        return(
        arr.map((student,index) =>
           (index>=currentindex&&index<currentindex+pagesize)?
          <div>
            <table border="1" >

                <tbody >
                <tr > 
                    <td key={student.rollno}> {student.rollno}
                    </td>
                    <td key={student.name}> {student.name}
                    </td>
                    <td key={student.emailid}>{student.emailid}
                    </td>
                </tr>
                </tbody>
                </table>
                </div>
                :null
             )
        )
        }

    return (
    <div>
    <Input />
        <div>{print(currentindex)}</div>
        <div>
            <button onClick={()=>setCurrentindex(0)}>  first   </button>
            <button  onClick={()=>setCurrentindex((currentindex-pagesize>=0?currentindex-pagesize:0))}> prev</button>
            <button onClick={()=>setCurrentindex((currentindex+pagesize<totalsize?currentindex+pagesize:(numberofpage-1)*pagesize))}> next</button>
            <button  onClick={()=>setCurrentindex((numberofpage-1)*pagesize)}>last</button>
        </div>
    </div>
    )
}



export default PaginationAssign;