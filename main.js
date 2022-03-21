var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","Papu.JPG", "Mumma.JPG" , "Anvi.JPG", "Bua.JPG", "Me.JPG"];
var names = ["Fmaily Book","Papa", "Mumma", "Anvi(Sister)", "Bua", "Amol(ME!!)"];
var i=0;
function update()
{
    i++;
    var numbers_of_family_member_in_array=5
    if(i>numbers_of_family_member_in_array)
      {
          i=0;
      }
    
    var updatedImage = images[i];
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
