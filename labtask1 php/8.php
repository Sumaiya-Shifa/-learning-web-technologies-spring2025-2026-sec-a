<!DOCTYPE html>
<html>
<head>
    

    <style>
        table {
            border-collapse: collapse;
            margin-bottom: 15px;
        }

        td {
            width: 35px;
            height: 35px;
            text-align: center;
            border: 1px solid black;
            font-size: 18px;
        }
    </style>
</head>

<body>

<?php

 
$array = array(
    array("1","2","3","A"),
    array("1","2","B","C"),
    array("1","D","E","F")
);

echo "<table>";

for ($i = 0; $i < 3; $i++)
{
    echo "<tr>";

    for ($j = 0; $j < 4; $j++)
    {
        echo "<td>" . $array[$i][$j] . "</td>";
    }

    echo "</tr>";
}

echo "</table>";



echo "<table>";

for ($i = 3; $i >= 1; $i--)
{
    echo "<tr>";

    for ($j = 1; $j <= $i; $j++)
    {
        echo "<td>$j</td>";
    }

    echo "</tr>";
}

echo "</table>";


$letter = 'A';

echo "<table>";

for ($i = 1; $i <= 3; $i++)
{
    echo "<tr>";

    for ($j = 1; $j <= $i; $j++)
    {
        echo "<td>$letter</td>";
        $letter++;
    }

    echo "</tr>";
}

echo "</table>";

?>

</body>
</html>