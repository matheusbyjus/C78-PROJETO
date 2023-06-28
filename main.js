var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg",
    "https://png.pngtree.com/png-vector/20190121/ourlarge/pngtree-cute-style-cartoon-shape-little-boy-cartoon-little-boy-png-image_509076.jpg",
    "https://img.myloview.com.br/posters/desenho-animado-crianca-com-cabelos-cacheados-jaqueta-marrom-camiseta-listrada-e-calca-laranja-vestuario-na-moda-na-adolescencia-carater-de-crianca-de-pe-com-bracos-akimbo-projeto-de-vetor-plano-400-109678922.jpg"];
var names = ["Album de Família", "Matheus", "simone", "Leonardo"];
var i= 0;
function update()
{
    i++;
    var numbersOfFamilyMembersInArray= 3
    if(i> numbersOfFamilyMembersInArray)
    {
        i=0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("familyMembersImage").src= updatedImage;
    document.getElementById("familyMembersName").innerHTML= updatedName;
}