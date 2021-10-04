const a= [
    [1, 3, 4],
    [1, 5, 9],
    [6, 7, 2]
] 
var i=0;
var sum1=0;
var sum2=0;
var sum3=0;
var sum4=0;
while (i<a.length){
    var row=0;
    var sum=0;
    while (row<a.length){
        sum+=a[i][row];
        row+=1}
    console.log(sum);
    var dignomal=0;
    while (dignomal<a.length){
        if (i==dignomal){
            sum1+=a[i][dignomal];
        }
        dignomal+=1;
    }
    var col1=0
    while (col1<1){
        sum2+=a[i][col1];
        col1+=1;
    }
    var col2=1
    while (col2<2){
        sum3+=a[i][col2];
        col2+=1;
    }
    var col3=2
    while (col3<a.length){
        sum4+=a[i][col3];
        col3+=1;
    }
    i+=1
}
console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);
if (sum==sum1 && sum1==sum2 && sum2==sum3 && sum3==sum4){
    console.log("magic square")
}
else{
    console.log(" not a magic square")
}