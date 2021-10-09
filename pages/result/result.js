// pages/result/result.js
var Arrlevel=[];
Page({
    onReady: function () {
        this.picesCode()
    },
    picesCode:function(e)
    {
        var that=this;
        var num1=Math.floor(Math.random() * 6) + 1;
        var num2=Math.floor(Math.random() * 6) + 1;
        var num3=Math.floor(Math.random() * 6) + 1;
        var num4=Math.floor(Math.random() * 6) + 1;
        var num5=Math.floor(Math.random() * 6) + 1;
        var num6=Math.floor(Math.random() * 6) + 1; 
        var level={
            one:'状元插金花',
            two:'六杯红',
            three:'遍地锦',
            four:'五红',
            five:'五子登科',
            six:'四点红',
            seven:'榜眼',
            eight:'探花',
            nine:'进士',
            ten:'举人',
            eleven:'秀才',
            twelve:'无'
        };
        var this_level=level.eight;
        var numArr=[];
        numArr.push(num1,num2,num3,num4,num5,num6);
        numArr.sort();
        var isfour=0;
        for(var i=0;i<numArr.length;i++)
        {
            if(numArr[i]==4)
            {
                isfour=isfour+1;
            }
        }
        if(isfour==1)//一秀 四进 对堂 五子登科
        {
            var flagseven=1;
            for(var i=1;i<=6;i++)
            {
                if(numArr[i-1]!=i)
                {
                    flagseven=0;
                    break;
                }
            }
            if(flagseven==1)
            {
                this_level=level.seven;
            }
            else
            {
                
                if((numArr[0]==numArr[1]&&numArr[0]==numArr[2]&&numArr[0]==numArr[3]&&numArr[0]==numArr[4])
                        ||(numArr[1]==numArr[2]&&numArr[2]==numArr[3]&&numArr[3]==numArr[4]&&numArr[4]==numArr[5]))
                {
                    this_level=level.five;
                }
                else if((numArr[0]==numArr[1]&&numArr[0]==numArr[2]&&numArr[0]==numArr[3])
                ||(numArr[1]==numArr[2]&&numArr[2]==numArr[3]&&numArr[3]==numArr[4])
                ||(numArr[2]==numArr[3]&&numArr[3]==numArr[4]&&numArr[4]==numArr[5]))
                {
                    this_level=level.nine;
                }
                else
                this_level=level.eleven;
            }
        }
        if(isfour==2)
        {
            if((numArr[0]==numArr[1]&&numArr[0]==numArr[2]&&numArr[0]==numArr[3])
                ||(numArr[1]==numArr[2]&&numArr[2]==numArr[3]&&numArr[3]==numArr[4])
                ||(numArr[2]==numArr[3]&&numArr[3]==numArr[4]&&numArr[4]==numArr[5]))
                {
                    this_level=level.nine;
                }
            else
            {
                this_level=level.ten;
            }
        }
        if(isfour==3)
        {
            this_level=level.eight;
        }
        if(isfour==4)
        {
            var one=0;
                for(var i=0;i<numArr.length;i++)
                {
                    if(numArr[i]==1)
                    {
                        one=one+1;
                    }
                }
                if(one==2)
                {
                    this_level=level.one;//状元插金花
                }
                else
                {
                    this_level=level.six;//状元 四点红
                }
        }
        if(isfour==5)
        {
            this_level=level.four;
        }
        if(isfour==6)
        {
            this_level=level.two;
        }
        if(isfour==0)
        {
            if(numArr[0]==numArr[1]&&numArr[0]==numArr[2]&&numArr[0]==numArr[3]&&numArr[0]==numArr[4]&&numArr[0]==numArr[5])
            {
                this_level=level.three;
            }
            else if((numArr[0]==numArr[1]&&numArr[0]==numArr[2]&&numArr[0]==numArr[3]&&numArr[0]==numArr[4])
                        ||(numArr[1]==numArr[2]&&numArr[2]==numArr[3]&&numArr[3]==numArr[4]&&numArr[4]==numArr[5]))
                {
                    this_level=level.five;
                }
            else if((numArr[0]==numArr[1]&&numArr[0]==numArr[2]&&numArr[0]==numArr[3])
                ||(numArr[1]==numArr[2]&&numArr[2]==numArr[3]&&numArr[3]==numArr[4])
                ||(numArr[2]==numArr[3]&&numArr[3]==numArr[4]&&numArr[4]==numArr[5]))
                {
                    this_level=level.nine;
                }
            else
            this_level=level.twelve;
        }
        Arrlevel.push(this_level);
        that.setData({
            num1:num1,
            num2:num2,
            num3:num3,
            num4:num4,
            num5:num5,
            num6:num6,
            this_level:this_level,
            Arrlevel:Arrlevel,
        })
    },
})
