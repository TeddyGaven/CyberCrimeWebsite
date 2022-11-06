
const generateHTML = (pagename) => {
    return`
    <center><h1 class="error">404</h1></center>
    <hr>
    <div class="main"><h1>Stop wasting your Precious TIME</h1></div>
    <br><br>
    <div class="main"><h1>Do the hard work especially when you dont feel like it</h1></div>
    <br><br>
    <div class="main"><h1>Now go and get back on the Grind</h1></div>`
};

const generateSTYLING = () => {
    return`
    <style>
    body{
        background: black;
        color:black;
        font-family: "Open Sans",sans-serif;
        max-height:700px;
        overflow: hidden;
    }
    .main{
        font-size: 20px;
        font-color: white;
        padding-left: 300px;
    }
    h1{
      color: white;
    }

    .error{
        font-size: 70px;
        
    }
    </style>
    `
}
                                                                            
switch(window.location.hostname){
    case "www.snapchat.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("SHAPCHAT")
        break;

    case "www.facebook.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("FACEBOOK")
        break;

    case "www.instagram.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("INSTAGRAM")
        break;

    case "www.netflix.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("NETFLIX")
        break;

    case "www.twitter.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("TWITTER")
        break;

    case "www.reddit.com":
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML("REDDIT")
        break;
    }
    

