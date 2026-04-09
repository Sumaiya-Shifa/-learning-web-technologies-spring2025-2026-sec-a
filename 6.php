<!DOCTYPE html>
<html>
<head>
</head>
<body>

<h2>Search Element from Array</h2>

<?php
$numbers = array(10, 20, 30, 40, 50);

$search = 30;
$found = false;

for ($i = 0; $i < count($numbers); $i++)
{
    if ($numbers[$i] == $search)
    {
        $found = true;
    }
}

if ($found)
{
    echo "Element Found";
}
else
{
    echo "Element Not Found";
}
?>

</body>
</html>