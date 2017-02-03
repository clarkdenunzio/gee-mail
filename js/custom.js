
var unreadMessages = 0;

function newMessageDiv(message){

    var messageID = Math.floor((Math.random() * 100) + 1);
    var messageMark = "mark"+messageID;
    var messageMarker = "marker"+messageID;

    var data = '<button class="btn btn-primary" onclick="markRead('+messageID+')" data-toggle="modal" data-target="#'+ messageID+'"> Date: ' + message.date
    + '</button><button class="btn btn-info" id="'+messageMark+'" value="0" onclick="markRead('+messageID+')" data-toggle="modal" data-target="#'+ messageID+'">   Sender: ' + message.sender
        + '</button><button class="btn btn-success" id="'+messageMarker+'" onclick="markRead('+messageID+')" data-toggle="modal" data-target="#'+ messageID+'">    Subject:  ' + message.subject + '</button>';

    var view = '<div class="modal fade" id="'+messageID+'" role="dialog">' +
            '<div class="modal-dialog">' +
            '<div class="modal-content">' +
            '<div class="modal-header">' +
            '<button type="button" class="close" data-dismiss="modal">&times;</button>' +
            '<h4 class="modal-title">' + message.subject + '</h4>' +
            '</div>' +
            '<div class="modal-body">'+ message.body + '</div>' +
            ' <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> '+
            '</div> </div>' +
            '  </div>';

    var newMessage = document.createElement("div");
    newMessage.className+="row checkbox";
    newMessage.innerHTML = '<label><input type="checkbox" id="checker" value=""></label>' + data + view;
    return newMessage;

}

function markRead(marker){



    let loc = "mark"+marker;
    var x = document.getElementById(loc);
    x.className = "";
    x.className += "btn btn-warning";

    if(x.value == 0){
        unreadMessages--;
        x.value++;
        showUnread();}

    let loc1 = "marker"+marker;
    var x = document.getElementById(loc1);
    x.className = "";
    x.className += "btn btn-warning";


}

function showUnread(){
    var y = document.getElementById("unreadNo");
    y.innerHTML = "Unread Messages: " + unreadMessages;
}

class Messages {

    constructor(mail) {
        this.mail = mail;
    }

    show() {
        for (let message of this.mail) {

            $(".messageContainer").append(newMessageDiv(message));
            unreadMessages++;
        }
    }

    getNew(){
        var inc =getNewMessage();
        this.mail.push(inc);
        $(".messageContainer").prepend(newMessageDiv(inc));
        unreadMessages++;
        showUnread();
    }

}

function deleteMessage(){

    var myList = document.getElementsByClassName("checkbox");
    console.log(myList);
    console.log(myList[0].checked);
    for(let box of myList){
       if( box.hasOwnProperty('checked') ){ box.delete(); }
    }

}