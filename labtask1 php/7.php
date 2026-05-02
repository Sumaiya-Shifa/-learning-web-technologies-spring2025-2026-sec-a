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

        .noborder {
            border: none;
        }
    </style>
</head>

<body>

<?php

echo "<table>";

for ($i = 1; $i <= 3; $i++)
{
    echo "<tr>";

    for ($j = 1; $j <= $i; $j++)
    {
        echo "<td>*</td>";
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



$ch = 'A';

echo "<table>";

for ($i = 1; $i <= 3; $i++)
{
    echo "<tr>";

    for ($j = 1; $j <= $i; $j++)
    {
        echo "<td>$ch</td>";
        $ch++;
    }

    echo "</tr>";
}

echo "</table>";

?>

</body>
</html>