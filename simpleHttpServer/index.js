url=require('url');
path=require('path');
fs=require('fs');
dir_prefix="./public"
extensions = {
    ".html" : "text/html",
    ".css" : "text/css",
    ".js" : "application/javascript",
    ".png" : "image/png",
    ".gif" : "image/gif",
    ".jpg" : "image/jpeg"
};

function run(field,res)
{
	var pathName =field["pathname"];
	if(pathName == "/")
		pathName="/index.html";
	pathName = dir_prefix + pathName;
	console.log(pathName);
    ext = path.extname(pathName),
	fs.exists(pathName, function(exists)
	{
		if(exists)
	    {
	    	fs.readFile(pathName, function(err, contents){
	    		if(!err)
			    {
			    	res.writeHead(200,{"content-type":extensions[ext],
			    		"content-Length" : contents.length});
			    	res.end(contents);
			    }else
			    {
			    	console.dir(err);
			    }
			});
	    }
    }); 

}
exports.run=run;
