module.exports = function main(number) {
    var lcdFirstLine =  ['._.','...','._.','._.','...','._.','._.','._.','._.','._.'];
    var lcdSecondLine = ['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'];
    var lcdThirdLine =  ['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|'];
    //number = 10;
    var stringOfNumber = number.toString();
    var lineFirst="";
    var lineSecond="";
    var lineThird="";

    for(var i=0;i<stringOfNumber.length;i++)
    {
        lineFirst += lcdFirstLine[Number(stringOfNumber[i])]+" ";//从第一位开始，每一行插入当前位数字对应行字符和一个空格
        lineSecond+= lcdSecondLine[Number(stringOfNumber[i])]+" ";
        lineThird += lcdThirdLine[Number(stringOfNumber[i])]+" ";
    }
    console.log();
    return lineFirst.substr(0,lineFirst.length-1)+"\n"+
        lineSecond.substr(0,lineSecond.length-1)+'\n'+lineThird.substr(0,lineThird.length-1)+"\n";
};