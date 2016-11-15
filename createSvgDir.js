/**
 * Created by Shang on 2016/8/22.
 */

var fs = require("fs");
var path = require('path');


fontPath = './fonts/5';

fs.readdir(fontPath, function(err, fontfiles){
    if(err)console.log(err);
    for(var i=0;i<fontfiles.length;i++){
        svgsPath = "./svgs" ;
        svgsPath = svgsPath +'/'+ fontfiles[i];
        //console.log(svgsPath);
        creatSvgDir(svgsPath);
    }

});


function creatSvgDir(svgsPath) {
    fs.exists(svgsPath, function(exists){
        if (!exists) {
            fs.mkdir(path.join(__dirname, svgsPath), function (err) {
                if (err) console.log(err);
                console.log("文件夹不存在,文件夹创建成功!");
            });
        } else {
            console.log("文件夹存在");
        }
    });
}
