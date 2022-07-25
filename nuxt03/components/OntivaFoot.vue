<template>
  <footer class="footerclass footer">
    <div>
      <NuxtLink to="/btclod">
        <img src="~/assets/images/logo.png">
      </NuxtLink>
    </div>
    <div> We Have Converted 328,566,795 Files</div>
    <div> In 14,941 TB Total Size.</div>

    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Blog</li>
      <li>FAQs</li>
      <li>Contact Us</li>
      <li>Terms of Use</li>
      <li>Privacy policy</li>
      <li>Copyright</li>
    </ul>

    <div>© 2022 Ontiva. All Rights Reserved.</div>
  </footer>
</template>

<style scoped>
    .footerclass{
    width: 100%;
    height: 250px;
    background-color: #c8544a;
    color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

}
ul {
    display: flex;
    justify-content: space-between ;
    align-items: center;
}
li{
    display: block;
    padding-left: 20px;
    border-right: 1px solid black;
    padding-right: 15px;
}
li:last-child{
    border:none;
}
</style>
