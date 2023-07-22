var mySite= document.getElementById('mySite')
var link= document.getElementById('URL')

var siteBox=[];
if (localStorage.getItem('userSites')!=null) {
   
    siteBox=JSON.parse(localStorage.getItem('userSites'))
    display(siteBox)
    
}
else{

 siteBox=[];

}

function addSite() {
    if(validateSiteName()==true&&validateUrl()==true){
        var site ={
            name:mySite.value ,
            location:link.value ,
        }
        siteBox.push(site)
        localStorage.setItem('userSites',JSON.stringify(siteBox))
        console.log(siteBox);
        display() 
        clearSites()
    
    }
    else{
        alert(`Site Name or Url is not valid, Please follow the rules below :

       1- Site name must contain at least 3 characters
       2- Site URL must be a valid one`)
   
    }
}

function display() 
{
    var list =``;
    for (var i=0 ;i<siteBox.length ;i++ ){

        list+=`
    <tr>
        <td>${i+1}</td>
        <td>${siteBox[i].name}</td>
        <td><button class="btn btn-outline-success "> <a href="${siteBox[i].location}" target="_blank" class="text-decoration-none text-black"> <i class="fa-regular fa-eye me-1"></i>visit</a></button></td>
        <td> <button class="btn btn-danger" onclick="deleteData(${i})"> <i class="fa-solid fa-trash-can me-1"></i>Delete</button></td>
    </tr>
`

    }
    document.getElementById('tablelist').innerHTML=list
    
}
function deleteData(index) {
    siteBox.splice(index,1)
    localStorage.setItem('userSites',JSON.stringify(siteBox))

    display(siteBox)
}
function clearSites() {
    mySite.value=``;
    link.value=``;
}

function validateSiteName() {
    
    var regex=/^\w{3,15}$/;
    return regex.test(mySite.value);
}

function validateUrl() {
    var regex=/^https:\/\/(www\.)?\w{3,15}\.com\/?$/;
    return regex.test(link.value)
    
}