function escapeHTML(string) {
    var pre = document.createElement('pre');
    var text = document.createTextNode(string);
    pre.appendChild(text);
    return pre.innerHTML;
}

window.fbAsyncInit = function () {
    FB.init({
        appId: '1292281667451957',
        xfbml: true,
        version: 'v2.7'
    });

    FB.api('/201692260175914', {
        fields: 'posts',
        access_token: 'EAASXUsW8ZCDUBALcucPxdxXd0pIUWmwvwuOxJzvUH9qzBK574NEuQTQORAvmMwaEJJuBqHcZAIGwGSxZB0gtj5ZAW1TizuUhMpKpeUfz0Dmfv08uAs6OZBM8dhBh3tT3eKmkGFqV6Ey87MyYokDDjLloHvZBwqTRlMnrcCLqh0QAZDZD'
    }, function (response) {

        //console.log(response["posts"]["data"]);
        var postsArray = response["posts"]["data"]
        var threshold = Math.min(postsArray.length, 5)
        var count = 0;

        while (count < threshold) {
            var msg = response["posts"]["data"][count]["message"];
            //console.log(msg);
            if (msg != undefined) {
                document.getElementById("news").innerHTML += `
                <section class="wrapper style4 container special">
                    <div class="row" style="white-space:pre-line">
                        <div class="4u important" style="padding-right:20px;border-right: 1px solid #ccc; ">
                            <img src="images/SU_Logo.jpg" width=70%>
                            <br>
                            <h1>Stuyvesant Senior Caucus</h1>
                        </div>
                        <div class="7u" style="margin-left:20px; border-left: 1px solid #ccc; text-align:left">` + escapeHTML(msg) + "<br><br></div></div></section>";
                count++;
            }
        }

    });

};

(function (d, s, id) {
    var js;
    var fjs = d.getElementsByTagName(s)[0];
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/all.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));