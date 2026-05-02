<?php
session_start();

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $_SESSION['name'] = $_POST['name'];
    $_SESSION['email'] = $_POST['email'];
    $_SESSION['password'] = $_POST['password'];

    echo "Registration Successful";
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Registration</title>
    </head>
<body>
    <h2>Registration</h2>

    <form method="post">
        Name: <input type="text" name="name" required><br><br>
        Email: <input type="email" name="email" required><br><br>
        Password: <input type="password" name="password" required><br><br>

        <input type="submit" value="Register">
    </form>

    <br>
    <a href="home.php">Back to Home</a>
</body>
</html>