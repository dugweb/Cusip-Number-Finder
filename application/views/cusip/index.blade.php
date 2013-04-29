<html>
<head>
	{{ HTML::style('/css/style.css') }}
	
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	{{ HTML::script('/js/cusip.js') }}

</head>

<body>

<h2>The Cusip number finder</h2>


<div id="dropzone">Drop Files Here</div>


<div class="output">

	<h2>Output</h2>
	<textarea id="outputText" wrap="off"></textarea>

</div>


</body>

</html>