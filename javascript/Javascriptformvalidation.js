<script>
    
$(document).ready(function(){

     var usn=["nandan","laskshmi","sai","diana"]
     
     var mf =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
$("#sub").click(function(){
   var fn = $("#fn").val();
   var ls = $("#ls").val();
   var un = $("#un").val();
 sessionStorage.setItem("usn",un);
   var ps = $("#ps").val();
 sessionStorage.setItem("psw",ps);
   var cps= $("#cps").val();
   var em = $("#em").val();
   var nm = $("#nm").val();
   var cn = $("#cn").val();
   var dt = new Date($("#dt").val());
   var cdt= new Date();
   
   sessionStorage.setItem("usn",un);
    
   
  if(fn =="null" || fn==""){
      alert(" please  enter first name "); 
      return false;
  }
  
  if(ls=="null" || ls==""){
       alert("please enter second name")
       return false; 
  }
  
 
  if(fn !=ls){
     for(i=0;i<usn.length;i++){
         if(un==usn[i]){
             alert("this username is already taken please choose another one")
         }
        
     }
    
     if(ps == cps){
        
        if(em.match(mf)){
            
          if(nm.length==10 && nm>=0 ){
              
              if($("#ml").prop("checked") || $("#fm").prop("checked") || $("#ot").prop("checked")){
                  
                  if(cn !="null" || cn !=""){
                      
                       if(dt < cdt){
                           
                          if($("#cb").prop("checked")){
                              return true;
                                  }
                           else{
                               alert("please agree terms and conditions ")
                               return false;
                           }
                          }
                       
                       else{
                        alert("please enter valid date")
                           return false;
                        }
                  }
                  
                  else{
                      alert("please select country")
                      return false;
                  }
              }
              
             else{
                alert("please select gender")
                 return false;
            }
           } 
           else{
              alert("enter valid number it should contain 10 numbers") 
               return false;
              }
            
        }
        else{
        alert("you entered invalid email id")
            return false;
          }
    }
    else{
      alert("password and confirm password should be same")
        return false;
    }
   
  }
    
  else{
     alert("first name and last name should not be same ")
      return false;
  }
   

});
    
    

    
    
    
});
</script>