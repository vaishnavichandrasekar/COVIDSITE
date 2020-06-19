  
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    
	$scope.addToCartItems = [];
	$scope.totalPrice = 0;
	$scope.Items = [{
	"id":1,
  "itemName":"Face mask (1 piece)",
  "imgSrc":"https://5.imimg.com/data5/DX/HA/MY-2246628/surgical-face-mask-500x500.jpg",
  "price": 30,
  "quantityRemaining":10
},{
"id":2,
  "itemName":"Body thermometer",
  "imgSrc":"https://image.made-in-china.com/202f0j00eVwGoLFIMMqC/FDA-Approved-Infrared-Forehead-Thermometer-No-Contact-Thermometer-Digital-Fever-Thermometer-for-Children-and-Adults.jpg",
  "price": 1500,
  "quantityRemaining":5
},{
"id":3,
  "itemName":"Sanitizer (200 ml)",
  "imgSrc":"https://img2.exportersindia.com/product_images/bc-full/2019/6/5182926/hand-sanitizer-1560404843-4949244.jpeg",
  "price":100,
  "quantityRemaining":2
},{
"id":4,
  "itemName":"Gloves",
  "imgSrc":"https://images-na.ssl-images-amazon.com/images/I/51puq1Mj1uL._SL1000_.jpg",
  "price":160,
  "quantityRemaining":15
},{
"id":5,
  "itemName":"Tissue paper",
  "imgSrc":"https://t4.ftcdn.net/jpg/02/81/57/63/240_F_281576343_SqYbsM7jTwKjflL7XFMbKJaXptfZCb8V.jpg",
  "price":85,
  "quantityRemaining":1
},{
"id":6,
  "itemName":"Analgesics",
  "imgSrc":"https://cdn11.bigcommerce.com/s-79bvd/images/stencil/2048x2048/products/15729/30677/Caladryl_Clear_Lotion_Topical_Analgesic_Skin_Protectant_6_Ounce_Bottle_2__65034.1551717462.jpg?c=2",
  "price":125,
  "quantityRemaining":3
}];
$scope.addCartIndex = [];
$scope.addToCart = function(item){
	var itemObj = {};specificItemIndex = $scope.addCartIndex.indexOf(item.id);
			itemObj.itemName = item.itemName;
			itemObj.id = item.id;
			itemObj.imgSrc = item.imgSrc;
			itemObj.price = item.price;
			itemObj.quantityRemaining = item.quantityRemaining;
			
	if(specificItemIndex === -1){
			$scope.addCartIndex.push(item.id);
			itemObj.noOfReqItems = 1;
			$scope.addToCartItems.push(itemObj);
			$scope.totalPrice = $scope.totalPrice + item.price;
	}else if($scope.addToCartItems[specificItemIndex].noOfReqItems < $scope.addToCartItems[specificItemIndex].quantityRemaining){
			$scope.addToCartItems[specificItemIndex].noOfReqItems =  $scope.addToCartItems[specificItemIndex].noOfReqItems + 1;
			$scope.totalPrice = $scope.totalPrice + ($scope.addToCartItems[specificItemIndex].price);
	}
	
}

$scope.operatingItems = function(item,operator){
var operatorItemIndex = $scope.addCartIndex.indexOf(item.id);
	switch (operator) {
    case "increment":
        if($scope.addToCartItems[operatorItemIndex].noOfReqItems < $scope.addToCartItems[operatorItemIndex].quantityRemaining){

        	$scope.addToCartItems[operatorItemIndex].noOfReqItems =  $scope.addToCartItems[operatorItemIndex].noOfReqItems + 1;
			$scope.totalPrice =	$scope.totalPrice + ($scope.addToCartItems[operatorItemIndex].price);
		}
        	
        break;
    case "decrement":
        if($scope.addToCartItems[operatorItemIndex].noOfReqItems > 1){

        	$scope.addToCartItems[operatorItemIndex].noOfReqItems =  $scope.addToCartItems[operatorItemIndex].noOfReqItems - 1;
			$scope.totalPrice =	$scope.totalPrice - ($scope.addToCartItems[operatorItemIndex].price);
		}
        		
        break;
	
}

}
$scope.emptyCart=function(item){
	$scope.addCartIndex = [];
	$scope.addToCartItems = [];
	$scope.totalPrice = 0;
}
$scope.deleteItem = function(item){
var deleteItemIndex = $scope.addCartIndex.indexOf(item.id);
	$scope.totalPrice = $scope.totalPrice - ($scope.addToCartItems[deleteItemIndex].noOfReqItems * $scope.addToCartItems[deleteItemIndex].price);
	$scope.addToCartItems.splice(deleteItemIndex, 1);
	$scope.addCartIndex.splice(deleteItemIndex,1);
	
	if($scope.addToCartItems.length === 0){
		$scope.totalPrice = 0;
	}
	
}
    
});