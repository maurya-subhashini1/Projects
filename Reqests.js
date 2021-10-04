const axios=require('axios')
const readline=require("readline-sync")
const fs = require('fs')

const meraki_course=axios.get("https://api.merakilearn.org/courses")
    .then( Response=>{
        let data=(Response.data)
        let myfile=JSON.stringify(data,null,4)
        fs.writeFileSync("topic_data.json",myfile)
        let all_data=data
        let array=[]
        let siral_number=0
        for(i of all_data){
            console.log(siral_number+1+"-",i.name," ",i.id)
            siral_number++
            array.push(i.name,i.id)
            }
        const topic=readline.question("which course do you want=")-1
        console.log(all_data[topic].name)
        let da=all_data[topic].id


        const child_Data=("https://api.merakilearn.org/courses/"+da+"/exercises")
        d=axios.get(child_Data)
            .then(Response=>{
                let data1=Response.data
                let file1=JSON.stringify(data1,null,4)
                fs.writeFileSync("Question_data.json",file1)
                courseQ=data1.course.exercises

                
                let serial_no=0
                for (index1=0;index1<courseQ.length;index1++){
                    console.log(serial_no+1+"-",courseQ[index1].name)
                    serial_no++
            }
                console.log()

                const question=readline.question('which question do you want')-1
                console.log("."+courseQ[question].content)
                let question1=courseQ[question].content[0].value
                console.log("."+question1)

        })
        .catch((error)=>{
            console.log(error)
        })

})
.catch((error)=>{
    console.log(error)
})