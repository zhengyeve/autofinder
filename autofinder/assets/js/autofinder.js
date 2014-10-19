var AutoFinder = {
    cookies: {},
    
};

AutoFinder.cookies = {
    cookieZipcode: "zipcode",
    
    write: function (name, value, expireDays) {
        var d = new Date();
        d.setTime(d.getTime() + expireDays * 86400000);
        document.cookie = name + "=" + value + ";expires=" + d.toUTCString();
    },
    
    read: function (name) {
        var cname = name + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(cname) > -1) {
                return c.substring(cname.length, c.length);
            }
        }
    },
    
    setZipCode: function (zipcode) {
        this.write(this.cookieZipcode, zipcode, 14);
    },
    
    getZipCode: function () {
        return this.read(this.cookieZipcode);
    }
};
