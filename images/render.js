		function renderHtml()
		{
			//alert("Hello");
			var strHtmlSource = htmlsource.value;
			workspace.document.clear();
			workspace.document.write(strHtmlSource);
			workspace.document.close();
		}

		function renderHtmlInNewWindow()
		{
			var strHtmlSource = htmlsource.value;
			OpenWindow=window.open("", "newwin", "");
			OpenWindow.document.write(strHtmlSource)
			OpenWindow.document.close()
		}

		function displayAbout()
		{
			var strHtmlSource = "<center><hr><h3>HTML - TryIt v1.0</h3><hr><br>"+
				"Author : P.M.Abhilash Anand<br>"+
				"Version: 1.0<br>"+
				"<p><b>HTML - TryIt is a testing platform for HTML</b><br></center>"+
				"After writing the HTML code in the HTML source(left frame)"+
				" click on the Render or Render in New Window the html code"+
				" is rendered and displayed in the Output Window</p>"+
				"<form><center><input type=button value='Close' onClick='window.close();'></center></form>";
			OpenWindow=window.open("", "about", "height=350, width=350,toolbar=no,scrollbars="+scroll+",menubar=no");
			OpenWindow.document.write(strHtmlSource)
			OpenWindow.document.close()
		}

		function template()
		{
			htmlsource.value="<html>\n"+
				"\t<head>\n\t\t<title> title for window goes here </title>\n\t</head>\n\n"+
				"\t<body>\n\t</body>"+
				"\n</html>";
		}
		function save()
		{
			//save to file
			try{
			var f=new FileWriter("t.txt");
			}catch(er){alert("some error");}
		}