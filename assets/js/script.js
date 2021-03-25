$(function(){
    $("#myForm").submit(function(event){
        calculate()
        event.preventDefault();
    })
})

function calculate() {
    var FZ = $("#FileSize").val()
    var CS = $("#ConnectSpeed").val()
    var ConnecteionSpeed1=$('#selectConn')
    var ConnecteionSpeed2=$('#selectConn2')
    var tempdiv = document.createElement('div')
    var strSec='Seconds'
    var strMin='Minutes'
    CS=CS*1024;
    CS=CS/1000;
    console.log(CS)
    console.log(ConnecteionSpeed1.val())
    if(FZ=='' || CS==''){
        alert("INVALID INPUT")
    }
    if(ConnecteionSpeed1.val()=='GB'){
        FZ=FZ*1024
        console.log(FZ  )
        var minutes = Math.floor(FZ / 60);
        var seconds = Math.floor(FZ % 60);
        if(minutes==0){
            tempdiv.append(`Seconds = ${seconds}`)
        }
        if(seconds==0){
            tempdiv.append(`Minutes = ${minutes}`)
        }
        else{
            tempdiv.append(`${minutes} Minutes and ${seconds} Seconds `)
        }
    }
    if(ConnecteionSpeed1.val()=='MB'){

    }
    $('.UI_').append(tempdiv)
}

