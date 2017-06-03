module.exports = (Franz, options) => {

   function getMessages() {
    // Use this code to show current tasks today instead of notifications.
    //var today = document.querySelectorAll(".todayToolbar-count")[0];
    //counter = parseInt(today.innerText);

    var re = /^\((\d+)\)/;
    var notifications = re.exec(document.title);
    if(notifications == null) {
      counter = 0;
    } else {
      counter = parseInt(notifications[1]);
    }

  	Franz.setBadge(counter);
  };

  Franz.loop(getMessages);

}
