// your code goes here

var inc=document.getElementById("increment");
var dec=document.getElementById("decrement");
var res=document.getElementById("reset");
var save=document.getElementById("save");
var loads=document.getElementById("load");
var solution=document.getElementById("sol");

let number=0;
inc.addEventListener("click",function ()
{
    number++;
    update();
})

dec.addEventListener("click",function()
{
    number--;
    update();
})

result.addEventListener("click",update);

function update ()
{
    if(number>0)
    {
    solution.innerHTML= "The Result is:"+number;
    }
    else{
        solution.innerHTML="The Result is Negative Number So it is invalid to show!!";
    }
}

res.addEventListener("click",function()
{
    number=0;
    update();
});

save.addEventListener("click",function()
{
    localStorage.setItem("Number",number);
})

loads.addEventListener("click",function()
{
    let saved = localStorage.getItem("Number");
  if (saved !== null) {
    number = Number(saved);
  }
  update();
})
