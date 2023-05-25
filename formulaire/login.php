<?php

$is_invalid = false;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    $mysqli = require __DIR__ . "/database.php";
    
    $sql = sprintf("SELECT * FROM user
                    WHERE email = '%s'",
                   $mysqli->real_escape_string($_POST["email"]));
    
    $result = $mysqli->query($sql);
    
    $user = $result->fetch_assoc();
    
    if ($user) {
        
        if (password_verify($_POST["password"], $user["password_hash"])) {
            
            session_start();
            
            session_regenerate_id();
            
            $_SESSION["user_id"] = $user["id"];
            
            header("Location: index.php");
            exit;
        }
    }
    
    $is_invalid = true;
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="form.css">
	<title>Document</title>
</head>

<body>
	
<div class="cont">
  <div class="form sign-in">
    <h2>Welcome back</h2>
    
    <?php if ($is_invalid): ?>
      <em>Invalid login</em>
  <?php endif; ?>

    <form action="./login.php" method="post" novalidate>
      <label>
      <span>Email</span>
      <input type="email" name="email" 
      value="<?= htmlspecialchars($_POST["email"] ?? "") ?>">

      
    </label>
    <label>
      <span>Password</span>
      <input type="password" name="password"  />
    </label>
    <button type="submit" class="submit">Sign In</button>
  </form>
  </div>
  <div class="sub-cont">
    <div class="img">
      <div class="img__text m--up">
        <h2>New here?</h2>
        <p>Sign up and have some fun!</p>
      </div>
      <div class="img__text m--in">
        <h2>One of us?</h2>
        <p>If you already have an account, just sign in.</p>
      </div>
      <div class="img__btn">
        <span class="m--up">Sign Up</span>
        <span class="m--in">Sign In</span>
      </div>
    </div>
    <div class="form sign-up">
      <h2>Join us now!</h2>
      <form action="./signup.php" method="post" novalidate>      <label>
        <span>Userame</span>
        <input type="text" name="name" >
      </label>
      <label>
        <span>Email</span>
        <input type="email" name="email" >
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password"  />
      </label>
      <button type="submit" class="submit" value="Sign Up">Sign Up</button>
    </form>
    </div>
  </div>
</div>


</body>
<script src="./form.js"> </script>
</html>








