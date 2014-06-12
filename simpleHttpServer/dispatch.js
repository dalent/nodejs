url=require('url'),
url_js=require('./path_js.js');

function dispatch(req,res)
{
	var field =  url.parse(req.url);
	var pathname =field["pathname"];

	console.log("path is :" + pathname);
	var nodePath =url_js.path_js[pathname];
	if(nodePath === undefined)
	{
		res.writeHead(404,{"content-type":"text/html"});
		res.end("<html><header></header><body>The request path is not found</body></html>");
		return;
	}

	console.log(nodePath);
	var module=require(nodePath);
	module.run(field,res);
}

exports.dispatch = dispatch;
