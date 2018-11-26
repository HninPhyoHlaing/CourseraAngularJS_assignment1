(function()
{
  angular.module("LunchCheck",[])
  .controller("LunchCheckController",function($scope)
  {
      $scope.menuList = "";
      $scope.message = "";
      $scope.notification = "";

      $scope.verifyOrder = function()
      {
        var datalist = $scope.menuList;
        if(!datalist)
        {
          $scope.message = "Please enter data first"
          $scope.color ="red"
        }
        else
        {
          var data= datalist.split(',');          

          if(checkEmpty(data))
            $scope.notification = "Contain Empty input!!!"
          else
            $scope.notification = ""

          
          if(data.length > 3)
            $scope.message = "Too Much!"   
          else          
            $scope.message = "Enjoy!"            
          $scope.color ="green";
        }
      }

  });  

  function checkEmpty(my_arr){
    for(var i=0;i<my_arr.length;i++){
        if(my_arr[i].trim() === "")   
           return true;
    }
    return false;
 }

})();