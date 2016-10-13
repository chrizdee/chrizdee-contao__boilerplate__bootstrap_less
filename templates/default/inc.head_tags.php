<?php
require "files/layout/php/lessphp/lessc.inc.php";

$less = new lessc;
$less->checkedCompile("files/layout/css/style.less", "files/layout/css/style_compiled.css");
?>

<link rel="stylesheet" href="files/layout/css/forms.css" type="text/css">
<link rel="stylesheet" href="files/layout/css/bootstrap.min.css" type="text/css">
<link rel="stylesheet" href="files/layout/css/style_compiled.css" type="text/css">

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="files/layout/js/app.js"></script>