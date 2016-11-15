/**
 * Created by yan on 6/17/16.
 */

var fontCarrier = require('font-carrier');
var fs = require("fs");
var path = require('path');


fontPath = './fonts/5';

fs.readdir(fontPath, function(err, fontfiles){
    if(err)console.log(err);
    for(var i=0;i<fontfiles.length;i++){
        svgsPath = "./svgs" ;
        svgsPath = svgsPath +'/'+ fontfiles[i];
        //console.log(svgsPath);
        //creatSvgDir(svgsPath);
        /* Read ttf files and extreact special char */
        ttfFile = fontPath +'/'+ fontfiles[i];
        //console.log(fontPath);
        var j = i+1;
        console.log("第"+j+"个正在保存到"+svgsPath);
        ttf2svg(ttfFile,svgsPath);
        console.log("第"+j+"个成功保存到"+svgsPath)
    }

});

/* Test Code
fontPath = './fonts/UKIJDi.ttf';
svgsPath = './svgs/UKIJDi.ttf';
ttf2svg(ttfFile,svgsPath);
*/


/*function creatSvgDir(svgsPath) {
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
}*/

function ttf2svg(ttfFile,svgsPath) {
    var font = fontCarrier.transfer(ttfFile);

    /* Adjust full character */
    font.__fontface.options['ascent'] = 1750;
    config = {width:100 , height:150};

    //var arr = Object.keys(font['__glyphs']);
    //%3 GET POSITION INFO
    var arr =
        [
            '&#x0627;',
            '&#xFE8E;',

            '&#x06D5;',
            '&#xFEEA;',

            '&#x0628;',
            '&#xFE91;',
            '&#xFE92;',
            '&#xFE90;',

            '&#x067E;',
            '&#xFB58;',
            '&#xFB59;',
            '&#xFB57;',

            '&#x062A;',
            '&#xFE97;',
            '&#xFE98;',
            '&#xFE96;',

            '&#x062C;',
            '&#xFE9F;',
            '&#xFEA0;',
            '&#xFE9E;',

            '&#x0686;',
            '&#xFB7C;',
            '&#xFB7D;',
            '&#xFB7B;',

            '&#x062E;',
            '&#xFEA7;',
            '&#xFEA8;',
            '&#xFEA6;',

            '&#x062F;',
            '&#xFEAA;',

            '&#x0631;',
            '&#xFEAE;',

            '&#x0632;',
            '&#xFEB0;',

            '&#x0698;',
            '&#xFB8B;',

            '&#x0633;',
            '&#xFEB3;',
            '&#xFEB4;',
            '&#xFEB2;',

            '&#x0634;',
            '&#xFEB7;',
            '&#xFEB8;',
            '&#xFEB6;',

            '&#x063A;',
            '&#xFECF;',
            '&#xFED0;',
            '&#xFECE;',

            '&#x0641;',
            '&#xFED3;',
            '&#xFED4;',
            '&#xFED2;',

            '&#x0642;',
            '&#xFED7;',
            '&#xFED8;',
            '&#xFED6;',

            '&#x0643;',
            '&#xFEDB;',
            '&#xFEDC;',
            '&#xFEDA;',

            '&#x06AF;',
            '&#xFB94;',
            '&#xFB95;',
            '&#xFB93;',

            '&#x06AD;',
            '&#xFBD5;',
            '&#xFBD6;',
            '&#xFBD4;',

            '&#x0644;',
            '&#xFEDF;',
            '&#xFEE0;',
            '&#xFEDE;',

            '&#x0645;',
            '&#xFEE3;',
            '&#xFEE4;',
            '&#xFEE2;',

            '&#x0646;',
            '&#xFEE7;',
            '&#xFEE8;',
            '&#xFEE6;',

            '&#x06BE;',
            '&#xFBAC;',
            '&#xFBAD;',
            '&#xFBAB;',

            '&#x0648;',
            '&#xFEEE;',

            '&#x06C7;',
            '&#xFBD8;',

            '&#x06C6;',
            '&#xFBDA;',

            '&#x06C8;',
            '&#xFBDC;',

            '&#x06CB;',
            '&#xFBDF;',

            '&#x06D0;',
            '&#xFBE6;',
            '&#xFBE7;',
            '&#xFBE5;',

            '&#x0649;',
            '&#xFBE8;',
            '&#xFBE9;',
            '&#xFEF0;',

            '&#x064A;',
            '&#xFEF3;',
            '&#xFEF4;',
            '&#xFEF2;',

            '&#xFE8C;',
            '&#xFE8B;',
            '&#xFEFC;',
            '&#xFEFB;' ];

    //console.log("Chars number:" + arr.length);

    for (var i =0;i<arr.length;i++){
        var tempGlyph = font.getGlyph(arr[i]);
        tempGlyph.options['vertAdvY'] = 2648;
        var fileName = svgsPath +'/' + arr[i] + '.svg';
        fs.writeFile(fileName,tempGlyph.toSvg(config),function(err){

        })
    }
}

