
var unreadMessages = 0;

function newMessageDiv(message){

    var messageID = Math.floor((Math.random() * 100) + 1);
    var messageMark = "mark"+messageID;

    var data = '<button class="btn btn-primary" onclick="markRead('+messageID+')" data-toggle="modal" data-target="#'+ messageID+'"> Date: ' + message.date
    + '</button><button class="btn btn-info" id="'+messageMark+'" onclick="markRead('+messageID+')" data-toggle="modal" data-target="#'+ messageID+'">   Sender: ' + message.sender
        + '</button><button class="btn btn-success" onclick="markRead('+messageID+')" data-toggle="modal" data-target="#'+ messageID+'">    Subject:  ' + message.subject + '</button>';

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
    newMessage.innerHTML = '<label><input type="checkbox" value=""></label>' + data + view;
    return newMessage;

}

function markRead(marker){

    let loc = "mark"+marker;
    var x = document.getElementById(loc);
    x.className = "";
    x.className += "btn btn-warning";
    unreadMessages--;
    showUnread();

}

function showUnread(){
    var y = document.getElementById("unreadNo");
    y.innerHTML = unreadMessages;
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

}

