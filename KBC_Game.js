function question(){
    const question_list = [
        "How many continents are there?",              
        "What is the capital of India?",            
        "NG mei kaun se course padhaya jaata hai?"  
    ]
        return question_list
    }
    question_value= question()
    function options(){
    const options_list = [
        ["Four", "Nine", "Seven", "Eight"],
        ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
        ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
    ]
        return options_list
    }
    options_value=options()
    
    function solution(){
    const solution_list = [3, 4, 1]
        return solution_list
    }
    salution_value=solution()
    
    function answer(){
    const answer_list=[
        ["(1) Four", "(3) Seven"],
        ["(4) Delhi", "(2) Bhopal"],
        ["(4) Agriculture","(1) Sofware Engineering"]
    ]
        return answer_list
    }
    answers_value=answer()
    
    console.log("! 🤟🏻😊 WELCOME    TO    KON    BANEGA    CADODRPATI😊🤟🏻 !")
    var s=0
    var count=0
    for (i=0;i<question_value.length;i++){
        console.log(question_value[i])
        var b=i
        for (var a=0;a<options_value[i].length;a++){
            var k=options_value[b][a]
            console.log(a+1,k)
        }
            if (count<1){
                var user=require("readline-sync");
                var num=user.question("DO You Want 5050 Lifeline:-:😃")  
                if (num=="yes"){
                    for(var k=0;k<answers_value[i].length;k++){
                        console.log(answers_value[b][k])}
                    var num2=user.question("Enter your answers:👉")
                    if (num2==salution_value[i]){
                        s+=25000
                        console.log("Your Answers Correct😃✌️")
                        console.log("You win🥳🤘Rs/",s)
                    
                    }else {
                        console.log("😭😤Incorect answers😭😤:")  
                        console.log("You can't paly again")
                        console.log("You win🥳🤘Rs/",s)
                        break;}
                    count+=1
                
                }else{
                    console.log(s)
                    // console.log("Your already use the lifeline-")
                    var m=user.question("Enter the answer: ")
                    if (m==salution_value[i]){
                        console.log("Congres right answer☺️👇")
                        s+=25000
                        console.log("You win🥳🤘Rs/",s)
    
                    }else{
                        console.log("Sorry you don't have cahnce!")
                        console.log("Your Answers is Wrong😭😤")
                        console.log("You win🥳🤘Rs/",s)
                        break;}
                    }
                    
            }else{
                var k=user.question("Enter you won answer👉")
                if (k==salution_value[i]){
                    console.log("Congres right answer☺️👇")
                    s+=25000
                    console.log("You are win✌️🥳😃Rs/",s)
    
                }else{
                    console.log("NO chance!")
                    console.log("Your Answers is Wrong😭😤")
                    console.log("You win🥳🤘Rs/",s)
                    break;
                }
    
                
            }
    }        
console.log("Congrecutional you are big part of!..KON BANEGA KARODPATI!..")     
console.log("You are Win Rs/",s)   
console.log("Thank you are part of this")