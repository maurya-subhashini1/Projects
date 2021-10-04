console.log("WORLD_web_OLA")
const allUser=require("readline-sync")

function driveSearch(){
    let vehicleName=["Cab","Mini cab","Prime cab","Auto"]
    let vehicleColoer=["White","Black","Blue","Red"]
    let vehicleNumber=["MH0075","MH2065","MH3465","MH0905"]
    let key=["Car Name","Car_coloer","Car_number"]
    for(i=0;i<vehicleName.length;i++){
        console.log(i+1,vehicleName[i])
        console.log("Car coloer ",vehicleColoer[i])
        console.log("Car Number ",vehicleNumber[i])
        console.log()
    }
    const user=require("readline-sync")
    const choseVehicle=user.question("Select your cab: ")
    return choseVehicle
 
    
}

function rederDetails(){
    let rederName=["Vikas singh","Gopal chorshiya","Hari Ram","Ranjeet"]
    let phoneNumber=["0000089881","9302795801","8701324858","6575897268"]
    let Rating=[7,8,4,6]
    for(i=0;i<rederName.length;i++){
        console.log(i+1,"Rider Name",rederName[i])
        console.log("Mobile Number-",phoneNumber[i])
        console.log("Rating-",Rating[i])
        console.log()
    }
    const rider=require("readline-sync")
    const riderDetails=rider.question("Selcet the Rider:")
    return riderDetails
}  


function cab_fare(){
    rate=[7,8,9,12,15]
    cab_fare=10*rate
    console.log("Total fare Rs/",cab_fare)
    
}

function paymentMode(){
    payment=["cash","online"]
    for(k=0;k<payment.length;k++){
        console.log(k+1,payment[k])}
        
        const num=require("readline-sync")
        paymode=num.question("Enter the payment mode: ")
        pay=paymentMode[paymode-1]
        return paymode

}

const user=require("readline-sync")
const pikupLoaction=user.question("Enter your pickup location (You need to mention the complete address.")
const dropLoaction=user.question("Enter your drop loaction: ")
let randomNumber=(Math.random()*100)
console.log("Your location distance",randomNumber)
cab_fare()
driveSearch()
rederDetails()


const confimationBooking=user.question("Are you want confim your booking- yes/no:" )
if (confimationBooking=="yes"||confimationBooking=="y"){
    let rendomNumberOTP= Math.floor(Math.random()*20000,);


    console.log("Your OTP NUmber=",rendomNumberOTP)
    console.log("Please share with your Driver!")
    const cancellation=user.question("Do you want cancel your booking y or n:")
    if (cancellation=="n"){
        pay=paymentMode()
        console.log("Your payment mode",pay)
        

        const tarnstion=user.question("Your tarnstion done-y/n")
        if (tarnstion=="y"){
            console.log("Done and Thank you")
            const feedbackRating=user.question("Please enter your rating 1 to 10: ")
            Rating=[7,8,4,6]
            const newRatingadd=(Rating[driveSearch-1]+feedbackRating)/2
            console.log("Driver new Rating",newRatingadd)
        }

    }

}
