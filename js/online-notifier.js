
var _addNotifier = ' + Add Notifier to Chrome';
var _failedToAddNotifier = 'Adding Failed :(';
var _addedNotifier = 'Added to Chrome <3';

function _installNotifier() {
	chrome.webstore.install('https://chrome.google.com/webstore/detail/hfgffimlnajpbenfpaofmmffcdmgkllf',
	function() {
		$('#install_notifier').text(_addedNotifier)
		setTimeout(function() {
			$('#install_notifier').fadeOut('slow');
		}, 8000);
	}, function() {
		$('#install_notifier').text(_failedToAddNotifier)
		setTimeout(function() {
			$('#install_notifier').text(_addNotifier)
		}, 3000);
	});
}

$(function(){

	var _isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	var _isNotifierInstalled = chrome.app.isInstalled;

	if (_isChrome && !_isNotifierInstalled) {
		$('body').append('<button style="position:absolute;top:5pt;right:5pt;z-index:100;'+
			'text-align:center;font-size:13px;width:190px;'+
			'font-weight:bold;height:28px;line-height:28px;margin:0;padding:0 6px;'+
			'" id="install_notifier" onclick="_installNotifier();">'+
			_addNotifier + '</button>');
	}
});