function refreshMenu() {
  chrome.contextMenus.removeAll();

  var imageMenu = chrome.contextMenus.create({
    "title": "Get this Picture!", 
    "contexts": ["image"], "onclick": function (info, tab) {
      var pinUrl = "http://localhost:3000/image/create/bookmarklet/";
      pinUrl += "?media=" + escape(info.srcUrl) + "&url=" + escape(tab.url) + "&title=" + escape(tab.title); //+ escape(tab.title);
      pinUrl += "&is_video=false&";
      window.open(pinUrl,"get"+(new Date).getTime(),"status=no,resizable=no,scrollbars=yes,personalbar=no,directories=no,location=no,toolbar=no,menubar=no,width=635,height=290,left=0,top=0");
    }
  });
}

refreshMenu();
