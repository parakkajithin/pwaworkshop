
      $("#calc").click(function(){
        let test1=parseInt($("#test1").val());
        let test2=parseInt($("#test2").val());
        let as=parseInt($("#as").val());
        let total=test1*0.4+test2*0.4+as;
        //console.log(total);
        $("#total").html('<h2>Total Mark:'+total+'</h2>')
      })