<script>    
$(document).ready(function(){
    
 var rpsw = sessionStorage.getItem("psw");
 var usn = sessionStorage.getItem("usn");
    
 
 var uspw={nandan:"nandan212",lak:"lak123@",sai:"sai124",daina:"dia123"}
 
 uspw[usn]=rpsw;
 console.log(uspw);
 
 $("#sub").click(function(){
    var usn = $("#usn").val();
    var ps  = $("#psw").val();
     
    if (usn.length>=3 && ps.length>=3 ){
         
        for(var key in uspw){
               if(usn == key){
                 var pw = uspw[usn];
				 if(ps == pw){
                  alert("validation success");
                  return true;
               }
                 if(ps!= pw){
                  alert("you entered invalid username or password");
                  return false;
              }
          }}

	}
    else{
      alert("please enter username and password and it should be minimum 3 characters")
        return false;
    }
	
    
    })
    
 
    
});
</script>