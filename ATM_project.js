var name=require("readline-sync");
var card=name.question("enter the ATM card:");
if (card=="debitcard" || card=="creditcard"){
    console.log("Please do not Remove you card during Entire Transaction")
    var f=require("readline-sync");
    var Language=f.question("Please Select language:");
    if (Language=="english"){
        console.log("Proecces")
        var p=require("readline-sync");
        var pin=p.question("Enter 4-Digit ATM pin:");
        if (pin=="9899"){
            console.log("Your account hasbeen proescces")
            var a=require("readline-sync");
            var account=a.question("Select of Transaction:");
            if (account=="cash withdrawal"){
                console.log("Inprocess")
                var t=require("readline-sync");
                var type=t.question("Please Select your Account:");
                if (type=="saving" || type=="current" || type=="depoti"){
                    console.log("Proecces")
                    var m=require("readline-sync");
                    var amount=m.question("Enter the Amount:");
                    if (amount>="10000"){
                        console.log("Collect the Cash")
                        var r=require("readline-sync");
                        var receipt=r.question("Take a printed receipt , if needed:");
                        if (receipt=="yes" || receipt=="no"){
                            console.log("Your Transaction Suesccsfully")
                        }else{
                            console.log("Thnak you")}   
                    }else{
                        console.log("can't withdrawal amount more than the balance in your account.")} 
                }else{
                    console.log("Account is not difind")}  
            }else{
                console.log("Wrong")}   
        }else{
            console.log("Your Pin Number incorrect") 
        }
}else{
        var v=require("readline-sync");                   
        var pin1=v.question("Apna 4 Aank ka ATM pin number Darj kare:");
        if (pin1=="9899"){
            console.log("Apka Khata Pratikiriya kar raha hai")
            var h=require("readline-sync");
            var type1=h.question("Apna Transaction Chuiniye:");
            if (type1=="saving" || type1=="current" || type1=="deposit"){
                var y=require("readline-sync");
                var amount1=y.questionInt("Apni Rashi Daliye:");
                if (amount1<=10000){
                    console.log("Apka Khata Pratikriya kar raha hai")
                    console.log("Apka Cash ekhatha kijiye")
                    var x=require("readline-sync");
                    var receipt1=x.question("Apko kya rasid chahiye:");
                    if (receipt1=="ha" || receipt1=="nhi"){
                        console.log("Apka Transaction safaltapurvak ho gaya hai")
                    }else{
                        console.log("Thank you")} 
                }else{
                    console.log("Apne jada Rashi chuni hai, Ek bar me aap sirf 10 hajar tak hi nikal sakte hai")}     
            }else{
                console.log("Apka khata Paribhashit nhi ho paa raha hai")}             
        }else{
            console.log("Apka pincode number maniye nhi hai")
        }
    }}
