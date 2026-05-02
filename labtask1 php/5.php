<!DOCTYPE html>
<html>
<head>
</head>
<body>

<h2>Odd Numbers from 10 to 100</h2>

<?php
for ($i = 10; $i <= 100; $i++)
{
    if ($i % 2 != 0)
    {
        echo $i . "<br>";
    }
}
?>

</body>
</html>