export function PhoneNumber () 
{
    const icon = "<i class=\"fas fa-mobile-alt icon phone\"></i>"
    const num = "<p id=\"phoneNum\">(330) 635-9965</p>"
    
    const phone = document.getElementById("phone");
    phone.innerHTML = icon
    
    phone.addEventListener('click', e => 
    {
        if (phone.innerHTML == icon)
            phone.innerHTML = num
        else
            phone.innerHTML = icon
    })
}  