<template>
  <div>
    <footer class="footerclass">
      <div class="logoimg">
        <img src="~/assets/images/logo.png" alt="imgbottom">
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>FAQs</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Copyright</li>
        </ul>
      </nav>
      <div>
        © 2022 Btclod. All Rights Reserved.
      </div>
    </footer>
  </div>
</template>

<style scoped>
    .footerclass{
    width: 100%;
    height: 228px;
    background-image: linear-gradient(to right,#512455, #812265);
    color:white;
}
.footerclass{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;}
ul{
            display: flex;
            list-style-type: none;
            padding: 20px;}

li{
                padding-left: 15px;
                padding-right: 15px;
                border-left: 1px solid white;
}
li:first-child{
                border: none;
            }

</style>
