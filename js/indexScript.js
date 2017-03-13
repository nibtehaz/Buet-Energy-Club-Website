// Bismillahir Rahmanir Rahim
// Rabbi Zidni Ilma

var offsets;
var currentState;

function initialization()
{
    $('html,body').animate({scrollTop: 0});

    var arr = document.getElementsByClassName("article");

    var topHeight = $('nav').height()  ;



    //alert(topHeight);

    offsets = [];

    for(var i=0;i<arr.length;i++)
    {
        offsets.push(arr[i].offsetTop-topHeight);
    }

    //console.log(offsets);

    currentState = -1 ;
}

function scroll(event)
{
    //console.log(event.wheelDelta);

    //alert("hi");

    if(event.wheelDelta<0)
    {
        currentState++;

        if(currentState>=offsets.length)
        {
            currentState=offsets.length-1;
            return;
        }

        $('html,body').animate({scrollTop: offsets[currentState]});
    }

    else
    {
        currentState--;

        if(currentState<0)
        {
            currentState=-1;
            return;
        }

        $('html,body').animate({scrollTop: offsets[currentState]});
    }

    console.log(offsets[currentState]);
}
