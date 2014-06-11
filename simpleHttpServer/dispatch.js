url=require('url'),
url_js=require('./path_js.js');

function dispatch(req,res)
{
	var field =  url.parse(req.url);
	var pathname =field["pathname"];

	console.log("path is :" + pathname);
	if(url_js.path_js[pathname] === undefined)
	{
		res.writeHead(404,{"content-type":"text/html"});
		res.end("<html><header></header><body>The request path is not found</body></html>");
	}

	var module=require(url_js.path_js[pathname]);
	module.run(field,res);
}

exports.dispatch = dispatch;
