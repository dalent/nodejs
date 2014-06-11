//simple http server 
//this file is simple  listen on certain ip port
//user can chose dispatch rule
var http=require('http');
function start(ip,port,dispatch)
{
	function onRequest(request,response)
	{
		console.log("request received");
		dispatch(request,response);
	}

	http.createServer(onRequest).listen(port, ip);
}

exports.onStart=start;
