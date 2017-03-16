// Bismillahir Rahmanir Rahim
// Rabbi Zidni Ilma

var offsetTops;
var offsetBottoms;
var currentState;
var active = 1 ;
var lowerLimit;
var upperLimit;

function initialization()
{
    $('html,body').animate({scrollTop: 0});

    var arr = document.getElementsByClassName("article");

    var topHeight = $('nav').height()  ;



    //alert(topHeight);

    offsetTops = [];
    offsetBottoms = [];

    for(var i=0;i<arr.length;i++)
    {
        offsetTops.push(arr[i].offsetTop-topHeight);
        offsetBottoms.push(arr[i].offsetHeight+arr[i].offsetTop-topHeight);
    }

    console.log(offsetTops);
    console.log(offsetBottoms);

    currentState = -1;

}

function scroll(event)
{

    return;


    /*if(active==1)
    {
        active = 0;
    }

    else
    {
        return;
    }*/

        //console.log("hi");
        //console.log($(window).scrollTop());
        //console.log(event.wheelDelta);


    if(event.wheelDelta<0)
    {
        /*currentState++;

        if(currentState>=offsetTops.length)
        {
            currentState=offsetTops.length-1;
            return;
        }*/

        var currentScrollTop = $(window).scrollTop() ;

        console.log(currentScrollTop);

        if(currentState==-1)
        {
            $('html,body').animate({scrollTop: offsetTops[0]},500);
            currentState = 0;
        }

        else
        {
            for(var i=1;i<offsetTops.length;i++)
            {
                if(((offsetBottoms[i-1]-100)<=currentScrollTop) && (currentScrollTop<=offsetTops[i]))
                {
                    if(currentState!=i)
                    {
                        $('html,body').animate({scrollTop: offsetTops[i]},500);
                        currentState=i;
                    }
                }
            }
        }
    }

    else
    {
        /*currentState--;

        if(currentState<0)
        {
            currentState=-1;
            return;
        }

        $('html,body').animate({scrollTop: offsetTops[currentState]},500);*/

        var currentScrollTop = $(window).scrollTop() ;

        //console.log(currentScrollTop);

        if(currentState==0)
        {
            $('html,body').animate({scrollTop: 0},500);
            currentState = -1;
        }

        else
        {
            for(var i=1;i<offsetTops.length;i++)
            {
                if((offsetBottoms[i-1]<=currentScrollTop) && (currentScrollTop<=offsetTops[i]))
                {
                    console.log(currentState);
                    if(currentState!=(i-1))
                    {
                        $('html,body').animate({scrollTop: offsetTops[i-1]},500);
                        currentState=i-1;
                    }
                    console.log(currentState);
                }
            }
        }

    }

    //console.log(offsetTops[currentState]);


}
