
(function ($) {

Drupal.Nodejs.callbacks.nodejsContentLockConfirmation = {
  callback: function (message) {
    if (Drupal.settings.nodejsContentLock.isNodeEditPage == 1 && message.callback != undefined && message.callback == 'nodejsContentLockConfirmation') {
      $.get(
        Drupal.settings.nodejsContentLock.url,
        message.data,
        function(data) {
        }
      );
    }
  }
};

}(jQuery));