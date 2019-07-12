import "./styles.css";

document.getElementById("app").innerHTML = `
<ul class="NavBar">
  <li><a href="index.html">schoolChain</a></li>
  <li><a href="#home">Home</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul><br>

<div class="loginDetails"> 
  <p1>Login with your school credentials <br>
  (Use your school username and password to enter)</p1> 
</div>

<div class="loginBox"><br>
<form>
  <label for="username">Username</label>
  <input type="text" id="username" name="username"> <br>
  <label for="password">Password</label>
  <input type="text" id="password" name="password"><br>
  <input class="button" type="submit" value="Log In">
</form>

 <!--  <form action="/action_page.php">
 Username: <input type="text" name="Username" placeholder="type your username..."><br>
 Password: <input type="text" name="Password" placeholder="type your password..."><br>
-->
 
</div>
`;
