browser.contextMenus.create({
  id: "nwgris",
  title: browser.i18n.getMessage("contextMenu"),
  contexts: ["image"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "nwgris") {
    browser.tabs.create({
        url: "https://www.google.com/searchbyimage?&image_url="+info.srcUrl
    });
  }
});
