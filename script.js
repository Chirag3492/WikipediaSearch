$(function() {

	$("#search").on("click", function() {
    	var input = $("#input").val(); //execution of search funtion by clicking on search button
    	if (input === '') {
        alert('Please enter some data for search..!!'); //display message if empty search is attempted
        return false;
        }
       
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ input +"&format=json&callback=?"; 
		$.ajax({                                                              // ajax call to get searched data from wikipedia api 
			url: url,
			type: 'GET',
			contentType: "application/json; charset=utf-8",
			async: false,
        	dataType: "json",
         
        	success: function(data, status, jqXHR) {
        		
        		$("#output").html(''); // wipe out the output just before new  search is  executed
        		for(var i=0;i<data[1].length;i++){ //display  of  output in accending  order
        			$("#output").prepend("<div><div class='well'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");// format of output display : link (heading, paragraph summary)
        			$("a").attr("target","_blank"); // open the link into another tab
        			

        		}
        		$("#input").val(""); // wipe out the input data after a search is executed

        	}
		})
		
		
        
    });



  $("#input").keypress(function(e){
    	if(e.keyCode===13){
		$("#search").click(); // use of above function if the search is executed using enter key 
    	}
    	
    });

    $("#input").val(""); // wipe out the input data after a search is executed

});



