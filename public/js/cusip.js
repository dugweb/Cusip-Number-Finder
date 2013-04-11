$(document).ready(function() {

	if (window.File && window.FileReader && window.FileList && window.Blob) {
		// The file API is supported

		

		function handleFileSelect(event) {
			var files = event.target.files;
			// files is the file list
			
			var output = [];

			var file = files[0];
			
			var reader = new FileReader();
			// Closure to capture the file information

			reader.onload = (function(event) {
				output.push(event.target.result);
				var result = cusipRegex(output[0]);

				for (var i = 0; i < result.length; i++) {
					$('#outputText').append(result[i] + "\n");	
				}
				
			});
			
			reader.readAsText(file);

			
			
			// document.getElementById('outputText').innterHTML = '<ul>' + output.join('') + "</ul>";
		}

		function handleDragOver(event) {
			event.stopPropagation();
			event.preventDefault();
			event.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy
		}


		function init() {
			document.getElementById('dropzone').addEventListener('change', handleFileSelect, false);
			// var dropZone = document.getElementById('dropzone');
			// dropZone.addEventListener('dragover', handleDragOver, false);
			// dropZone.addEventListener('drop', handleFileSelect, false);
		}

		function cusipRegex(rawText) {
			  var txt=rawText;

		      var re1='(.)';	// Any Single Character 1
		      var re2='(\\d)';	// Any Single Digit 1
		      var re3='(\\d)';	// Any Single Digit 2
		      var re4='(\\d)';	// Any Single Digit 3
		      var re5='(\\d)';	// Any Single Digit 4
		      var re6='(.)';	// Any Single Character 2
		      var re7='(\\s+)';	// White Space 1
		      var re8='(.)';	// Any Single Character 3
		      var re9='(.)';	// Any Single Character 4
		      var re10='(\\s+)';	// White Space 2
		      var re11='(\\d)';	// Any Single Digit 5


		      var p = new RegExp(re1+re2+re3+re4+re5+re6+re7+re8+re9+re10+re11,["gi"]);
		      var m = txt.match(p);
		      if (m != null)
		      {
		      	/*
		          var c1=m[1];
		          var d1=m[2];
		          var d2=m[3];
		          var d3=m[4];
		          var d4=m[5];
		          var c2=m[6];
		          var ws1=m[7];
		          var c3=m[8];
		          var c4=m[9];
		          var ws2=m[10];
		          var d5=m[11];
		          */
		          //return ("("+c1.replace(/</,"&lt;")+")"+"("+d1.replace(/</,"&lt;")+")"+"("+d2.replace(/</,"&lt;")+")"+"("+d3.replace(/</,"&lt;")+")"+"("+d4.replace(/</,"&lt;")+")"+"("+c2.replace(/</,"&lt;")+")"+"("+ws1.replace(/</,"&lt;")+")"+"("+c3.replace(/</,"&lt;")+")"+"("+c4.replace(/</,"&lt;")+")"+"("+ws2.replace(/</,"&lt;")+")"+"("+d5.replace(/</,"&lt;")+")"+"\n");

		          return m;
		      }
		}
		init();

	} else {
		alert('Please use a modern browser (e.g. Chrome, Firefox)');
	}
});


