export const noOfMonth=12;
export const noOfDayInWeek=7;


export function addition(a,b)
{
    return a+b;
}

export function userAgeDescription(age)
{ 
    if(age<=17)
       return "you are children";
     else if(age>=18 && age <=45)
        return "you are adult";
       return "you are senior citizen";    

}