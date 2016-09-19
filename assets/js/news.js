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

    FB.api('/731255060334426', {
        fields: 'posts',
        access_token: 'EAACzXMF1AMgBAEfQwVZCIBDw7VojRQm7p3Q5DdsV9Hd01pKbvHuR8sXxkYFffijEStJU0crTzVbAU8W2MdAZCtv5wzXL5jAwkCSy4kNjkEw4BZArUWXp80NZA4VyYCFwewnU7lxBElj0q2QcxcDkVV1ix3UZB4oo4aPDfojoWivyFZADpryLZA4'
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
                    <div class="row" style="white-space:pre-wrap;overflow-wrap: break-word;">
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