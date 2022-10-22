const generateSTYLES = () => {
  return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
  body {
    background: #00000;
    color: #00000;
    font-family: "Open Sans", sans-serif;
    max-height: 700px;
    overflow: hidden;
  }
  .c {
    text-align: center;
    display: block;
    position: relative;
    width: 80%;
    width: 80%;
    margin: 100px auto;
  }
  ._404 {
    font-size: 220px;
    position: relative;
    display: inline-block;
    z-index: 2;
    height: 250px;
    letter-spacing: 15px;
  }
  ._1 {
    text-align: center;
    display: block;
    position: relative;
    letter-spacing: 12px;
    font-size: 4em;
    line-height: 80%;
  }

  .text {
    font-size: 70px;
    text-align: center;
    position: relative;
    display: inline-block;
    margin: 19px 0px 0px 0px;
    /* top: 256.301px; */
    z-index: 3;
    width: 100%;
    line-height: 1.2em;
    display: inline-block;
  }
  
 


   </style>`;
};

const generateHTML = (pageName) => {
  return `
   

  <div class='c'>
      <div class='_404'>Hacking</div>
      <hr>
      <div class='_1'>****be_careful****</div>
  </div>
   `;
};

switch (window.location.hostname) {
  case "www.youtube.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("YOUTUBE");
    break;
  case "www.facebook.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("FACEBOOK");
    break;
  case "www.netflix.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("NETFLIX");
    break;

}