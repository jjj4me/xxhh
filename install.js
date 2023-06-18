（function(){

    var install_plist_url = "https://jjj4me.github.io/xxhh/installapp.plist";
    //命名空间
    var IOSAppInstaller = {}
    if(!window.IOSAppInstaller){
        window['IOSAppInstaller'] = IOSAppInstaller
    }

    function install(callback){
        var u = navigator.userAgent;
        if (u.indexOf('iPhone') == -1) {
            //不是iPhone
            return;
        }
        //排除微信浏览器
        if (u.indexOf('MicroMessenger') > -1) { 
            return;
        }
        window.location.href = 'itms-services://?action=download-manifest&url=' + install_plist_url;
    }
    IOSAppInstaller['install'] = install; 

})()