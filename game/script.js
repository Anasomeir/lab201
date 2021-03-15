let age =prompt('guess my age ?');

    if (age < 32 )
    { 
    alert('Nope I am older');
}

else if (age = 32)

{
    alert('Great you got the awnser');
}

else

{
    alert('wrong answer iam younger');
}

let camp =prompt('in which camp I am studing amman Or irbid?');

if (camp.toLowerCase() =='amman')
{
    alert('correct');
}
else { alert('sorry its wrong');}

let Hobbies =prompt('What is my favouret hobbies Travilling or Fishing ?');

if (Hobbies == Traviling)
{
    alert('Great thats true'); 
}
else
{alert('Nope');}




switch(Number(age))
{
case 32:
  console.log('32!');
  break;
case 31:
  console.log('31!');
  break;
default:
  console.log(age);
  break;
}