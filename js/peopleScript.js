// Bismillahir Rahmanir Rahim
// Rabbi Zidni Ilma

var currentState=0;
var totalStates=3;
var active=1;

function initialize()
{
    $('html,body').animate({scrollTop: 0});

    var x = document.getElementsByClassName('peopleBody')[0];
    x.style.background= "#E8CBC0";
    x.style.background= "-webkit-linear-gradient(left,#E8CBC0, #636FA4)";
    x.style.background= "-o-linear-gradient(left,#E8CBC0, #636FA4)";
    x.style.background= "-moz-linear-gradient(left,#E8CBC0, #636FA4)";
    x.style.background= "linear-gradient(left,#E8CBC0, #636FA4)";

    var height = window.innerHeight;

    /*document.getElementById('member1').style.left="100%";
    document.getElementById('member2').style.left="-75%";
    document.getElementById('member3').style.left="100%";
    document.getElementById('member4').style.left="-75%";
    document.getElementById('member5').style.left="100%";
    document.getElementById('member6').style.left="-75%";*/

    /*for(var i=1;i<=6;i++)
    {
        if(i%2==1)
        {
            document.getElementById('member'+i.toString()).style.left="100%";
        }

        else
        {
            document.getElementById('member'+i.toString()).style.left="-75%";
        }
    }*/


}


function scrolling(event)
{
    if(active==0)
    {
        return;
    }

    active=0;

    setTimeout(function(){active=1;},1000);

    if(event.wheelDelta<0)
    {
        currentState++;

        if(currentState==totalStates)
        {
            currentState--;
            return;
        }

    }

    else
    {
        currentState--;

        if(currentState==-1)
        {
            currentState++;
            return;
        }

    }

        if(currentState==0)
        {
            $('html,body').animate({scrollTop: 0});

            var x = document.getElementsByClassName('peopleBody')[0];
            x.style.background= "#E8CBC0";
            x.style.background= "-webkit-linear-gradient(left,#E8CBC0, #636FA4)";
            x.style.background= "-o-linear-gradient(left,#E8CBC0, #636FA4)";
            x.style.background= "-moz-linear-gradient(left,#E8CBC0, #636FA4)";
            x.style.background= "linear-gradient(left,#E8CBC0, #636FA4)";

        }

        else if(currentState==1)
        {
            $('html,body').animate({scrollTop: 625});

            var x = document.getElementsByClassName('peopleBody')[0];
            x.style.background= "#24C6DC";
            x.style.background= "-webkit-linear-gradient(left,#24C6DC, #514A9D)";
            x.style.background= "-o-linear-gradient(left,#24C6DC, #514A9D)";
            x.style.background= "-moz-linear-gradient(left,#24C6DC, #514A9D)";
            x.style.background= "linear-gradient(left,#24C6DC, #514A9D)";
            document.getElementById('member1').style.left="100%";
            document.getElementById('member2').style.left="-75%";
            document.getElementById('member3').style.left="100%";
            $("#member1").animate({left:'10%'},1200);
            $("#member2").animate({left:'35%'},1200);
            $("#member3").animate({left:'10%'},1200);

            $('html,body').animate({scrollTop: 625});

        }

        else if(currentState==2)
        {
            $('html,body').animate({scrollTop: 1190},500);

            var x = document.getElementsByClassName('peopleBody')[0];
            x.style.background= "#1F1C2C";
            x.style.background= "-webkit-linear-gradient(left,#1F1C2C, #928DAB)";
            x.style.background= "-o-linear-gradient(left,#1F1C2C, #928DAB)";
            x.style.background= "-moz-linear-gradient(left,#1F1C2C, #928DAB)";
            x.style.background= "linear-gradient(left,#1F1C2C, #928DAB)";
            document.getElementById('member4').style.left="-75%";
            document.getElementById('member5').style.left="100%";
            document.getElementById('member6').style.left="-75%";
            $("#member4").animate({left:'35%'},1200);
            $("#member5").animate({left:'10%'},1200);
            $("#member6").animate({left:'35%'},1200);

            $('html,body').animate({scrollTop: 1250},500);
        }

}
