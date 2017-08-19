
var foodieApp = angular.module('foodieApp',['ngRoute']);

//this part of the code contains the config part with the url that will direct to their specified page and their controller
foodieApp.config(function ($routeProvider) {
  $routeProvider
  //this part is for login
  .when('/',{
    templateUrl: 'pages/login.html',
    controller: 'loginController'
  })
  //this part is for main
  .when('/home',{
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })
  //this part is for about
  // .when('/about',{
  //   templateUrl: 'pages/about.html',
  //   controller: 'aboutController'
  // })
  // //this part is for order
  // .when('/order',{
  //   templateUrl: 'pages/order.html',
  //   controller: 'orderController'
  // })
  //this part is for restaurant
  .when('/restaurant/:id', {
    templateUrl: 'pages/restaurant.html',
    controller: 'restaurantController'
  })
})

//this part of our code act as login controller
foodieApp.controller('loginController',function($scope,$location) {
	$scope.goToHome = function() {
		//console.log('Do Something')
		$location.url('home');
	}
})

//this part of our code act as main controller
foodieApp.controller('mainController',function($scope) {
  //the following is the array of objects that contain various information about different restaurants
  $scope.restaurants = [{
  name: 'Farzi Cafe',
  id: '1',
  address: '38/39, Level 1, Inner Circle, Connaught Place',
  location: 'Connaught Place',
  category: 'Casual Dining, Bar',
  vote: '4.2',
  cuisines: 'Modern Indian',
  cost: '2200',
  hours: '12 Noon to 1 AM (Mon-Sun)',
  image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
  name: 'Moti Mahal',
  id: '2',
  address: '30, 3rd Floor, Hauz Khas Village, New Delh',
  location: 'Hauz Khas Village',
  category: 'Casual Dining, Bar',
  vote: '3.9',
  cuisines: 'Continental, North Indian, Italian',
  cost: '1500',
  hours: '12 Noon to 12:30 AM (Mon-Sun)',
  image: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/360X200/restaurant/644499/restaurant020170622052226.jpg'
},
{
  name: 'Kopper Kadai',
  id: '3',
  address: 'J2/6B, B.K. Dutta Market,New Delhi',
  location: 'Rajouri Garden',
  category: 'Casual Dining',
  vote: '4.5',
  cuisines: 'North Indian',
  cost: '1400',
  hours: '12 Noon to 12 a.m. (Mon-Sun)',
  image: 'https://www.franchiseindia.com/uploads/content/kk4-f41b7ae313.jpg'
},
{
  name: 'Headphones',
  id: '4',
  address: '1, Club Road, Punjabi Bagh, New Delhi',
  location: 'Punjabi Bagh',
  category: 'Lounge',
  vote: '2.9',
  cuisines: 'Continental, North Indian, Italian',
  cost: '1200',
  hours: '12 Noon to 1 AM (Mon-Sun)',
  image: 'https://b.zmtcdn.com/data/pictures/7/18535837/4e12e8ec7b512ee59da512fbd5252e57_featured_v2.jpg?fit=around%7C400%3A400&crop=400%3A400%3B%2A%2C%2A'
},
{
  name: 'Summer House Cafe',
  id: '5',
  address: '1st Floor, DDA Shopping Complex,Hauz Khas, New Delhi',
  location: 'Hauz Khas',
  category: 'Bar, Casual Dining',
  vote: '4.3',
  cuisines: 'Italian, Continental',
  cost: '1800',
  hours: '12 Noon to 12:30 AM (Mon-Sun)',
  image: 'https://content4.jdmagicbox.com/comp/delhi/p7/011pxx11.xx11.140426133412.x7p7/catalogue/summer-house-cafe-hauz-khas-delhi-cvm1.jpg'
},
{
  name: 'Salad Chef',
  id: '6',
  address: 'C-1, Main Market, Paschimi Marg, Block C, Vasant Vihar, New Delh',
  location: 'Vasant Vihar',
  category: 'Quick Bites',
  vote: '3.5',
  cuisines: 'Healthy Food, Fast Food, Salad',
  cost: '500',
  hours: ' 8:30 AM to 11 PM (Mon-Sun)',
  image: 'https://images-grouptable.netdna-ssl.com/system/photos/photos/000/015/866/original/salad-chef.2.jpg?1470277278'
},
{
  name: 'The Culinary Pitaara',
  id: '7',
  address: 'E-9, Ground Floor, E Block Market, Poorvi Marg, Vasant Vihar, New Delhi',
  location: 'Vasant Vihar',
  category: 'Casual Dining',
  vote: '4.0',
  cuisines: 'European, North Indian',
  cost: '900',
  hours: '  1 PM to 11 PM (Mon-Sun)',
  image: 'https://ak.jogurucdn.com/media/image/p15/media_gallery-2016-10-12-14-the_culinary_pitaara_09a07b69ea4118c4b7aa8f87daaec6c8.jpg'
},
{
  name: 'Mezbaan Restaurant',
  id: '8',
  address: '383/1B, Ch.Mir Singh Complex, Near Bata Showroom, Bank Street, Munirka, New Delhi',
  location: 'Munirka',
  category: 'Casual Dining',
  vote: '3.4',
  cuisines: 'North Indian, Mughlai, Chinese',
  cost: '650',
  hours: '   10:30 AM to 10 PM (Mon-Sun)',
  image: 'https://s-media-cache-ak0.pinimg.com/736x/81/91/b7/8191b7e3f65660475d5099c5f897d2db.jpg'
},
{
  name: 'The Pint Room',
  id: '9',
  address: '2nd Floor, Opposite HDFC Bank, Street D7, Vasant Vihar, New Delhi',
  location: 'Vasant Vihar',
  category: 'Casual Dining',
  vote: '3.7',
  cuisines: 'Finger Food, Continental, Italian',
  cost: '1700',
  hours: '12 Noon to 1 AM (Mon-Sun)',
  image: 'http://www.sodelhi.com/media/reviews/photos/original/ee/0e/87/Fat-lulus3-13-1423476953.jpg'
},
{
  name: 'Crips restaurant',
  id: '10',
  address: '59, Community Centre, Basant Lok Market, Vasant Vihar, New Delhi',
  location: 'Vasant Vihar',
  category: 'Casual Dining',
  vote: '3.4',
  cuisines: 'North Indian, Chinese',
  cost: '1000',
  hours: ' 11 AM to 12 Midnight (Mon-Sun)',
  image: 'http://assets.limetray.com/assets/user_images/gallery_images/cropped/Gg15_1460705171.jpg'
}


]
})
//this part of our code act as order controller
// foodieApp.controller('orderController',function($scope,$location) {
//   $scope.goToOrder = function() {
//     // console.log('Do Something')
//     $location.url('order')
//   }
// })
//
// //this part of our code act as about controller
// foodieApp.controller('aboutController',function($scope,$location) {
//   $scope.goToAbout = function() {
//     // console.log('Do Something')
//     $location.url('about')
//   }
// })
//this part of our code act as restaurant controller
/foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
  $scope.restaurantId = $routeParams.id;
  //here is the array of objects containing restaurant's information with the best dish of the restaurant and the image of the dish
  var restaurants = [{
  name: 'Farzi Cafe',
  address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  location: 'Connaught Place',
  category: 'Casual Dining, Bar',
  vote: '4.2',
  cuisines: 'Modern Indian',
  cost: '2200',
  hours: '12 Noon to 1 AM (Mon-Sun)',
  bestDish: {
              name: 'Corn Pizza',
              image: 'https://foodiearuna.files.wordpress.com/2017/04/img_7661_fotor.jpg?w=1000'
             },
  image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
  name: 'Moti Mahal',
  address: '30, 3rd Floor, Hauz Khas Village, New Delh',
  location: 'Hauz Khas Village',
  category: 'Casual Dining, Bar',
  vote: '3.9',
  cuisines: 'Continental, North Indian, Italian',
  cost: '1500',
  hours: '12 Noon to 12:30 AM (Mon-Sun)',
  bestDish: {
              name: 'Paneer Tikka with chicken',
              image: 'https://s-media-cache-ak0.pinimg.com/736x/ec/37/46/ec3746963f3708d057f08b670b695494--kebab-recipes-paneer-recipes.jpg'
             },
  image: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/360X200/restaurant/644499/restaurant020170622052226.jpg'
},
{
  name: 'Kopper Kadai',
  address: 'J2/6B, 1st & 2nd Floor, B.K. Dutta Market, Rajouri Garden, New Delhi',
  location: 'Rajouri Garden',
  category: 'Casual Dining',
  vote: '4.5',
  cuisines: 'North Indian',
  cost: '1400',
  hours: '12 Noon to 12 a.m. (Mon-Sun)',
  bestDish: {
              name: 'Mojito',
              image: 'https://b.zmtcdn.com/data/reviews_photos/142/bf24e6176ea8e8f4768db5f9205d3142_1493225174.jpg?fit=around%7C160%3A160&crop=160%3A160%3B%2A%2C%2A'
             },
  image: 'https://www.franchiseindia.com/uploads/content/kk4-f41b7ae313.jpg'
},
{
  name: 'Headphones',
  address: '1, Club Road, Punjabi Bagh, New Delhi',
  location: 'Punjabi Bagh',
  category: 'Lounge',
  vote: '2.9',
  cuisines: 'Continental, North Indian, Italian',
  cost: '1200',
  hours: '12 Noon to 1 AM (Mon-Sun)',
  bestDish: {
              name: 'Burger',
              image: 'http://canviar.in/wp-content/uploads/2015/07/images-1.jpg'
             },
  image: 'https://b.zmtcdn.com/data/pictures/7/18535837/4e12e8ec7b512ee59da512fbd5252e57_featured_v2.jpg?fit=around%7C400%3A400&crop=400%3A400%3B%2A%2C%2A'
},
{
  name: 'Summer House Cafe',
  address: '1st Floor, DDA Shopping Complex,Hauz Khas, New Delhi',
  location: 'Hauz Khas',
  category: 'Bar, Casual Dining',
  vote: '4.3',
  cuisines: 'Italian, Continental',
  cost: '1800',
  hours: '12 Noon to 12:30 AM (Mon-Sun)',
  bestDish: {
              name: 'Tiramisu',
              image: 'https://mytastetest.files.wordpress.com/2017/03/img_5452.jpg?w=980&h=800&crop=1'
             },
  image: 'https://content4.jdmagicbox.com/comp/delhi/p7/011pxx11.xx11.140426133412.x7p7/catalogue/summer-house-cafe-hauz-khas-delhi-cvm1.jpg'
},
{
  name: 'Salad Chef',
  address: 'C-1, Main Market, Paschimi Marg, Block C, Vasant Vihar, New Delh',
  location: 'Vasant Vihar',
  category: 'Quick Bites',
  vote: '3.5',
  cuisines: 'Healthy Food, Fast Food, Salad',
  cost: '500',
  hours: ' 8:30 AM to 11 PM (Mon-Sun)',
  bestDish: {
              name: 'Chicken Sandwiches',
              image: 'http://www.cbc.ca/inthekitchen/assets_c/2012/01/ChickenSalad3106-thumb-596x350-156972.jpg'
             },
  image: 'https://images-grouptable.netdna-ssl.com/system/photos/photos/000/015/866/original/salad-chef.2.jpg?1470277278'
},
{
  name: 'The Culinary Pitaara',
  address: 'E-9, Ground Floor, E Block Market, Poorvi Marg, Vasant Vihar, New Delhi',
  location: 'Vasant Vihar',
  category: 'Casual Dining',
  vote: '4.0',
  cuisines: 'European, North Indian',
  cost: '900',
  hours: '  1 PM to 11 PM (Mon-Sun)',
  bestDish: {
              name: 'Tandoori chicken',
              image: 'https://lbb.in/delhi/wp-content/uploads/sites/1/2017/01/090117_TandooriChicken@TheCulineryPitaara_NK.jpg'
             },
  image: 'https://ak.jogurucdn.com/media/image/p15/media_gallery-2016-10-12-14-the_culinary_pitaara_09a07b69ea4118c4b7aa8f87daaec6c8.jpg'
},
{
  name: 'Mezbaan Restaurant',
  address: '383/1-B, Mir Singh Complex, Munirka, New Delhi',
  location: 'Munirka',
  category: 'Casual Dining',
  vote: '3.4',
  cuisines: 'North Indian, Mughlai, Chinese',
  cost: '650',
  hours: '   10:30 AM to 10 PM (Mon-Sun)',
  bestDish: {
              name: 'Pineapple Raita',
              image: 'https://b.zmtcdn.com/data/pictures/1/18425751/c701bb54622a293a52945a82dfb617d7_featured_v2.jpg'
             },
  image: 'https://s-media-cache-ak0.pinimg.com/736x/81/91/b7/8191b7e3f65660475d5099c5f897d2db.jpg'
},
{
  name: 'The Pint Room',
  address: '2nd Floor, Opposite HDFC Bank, Street D7, Vasant Vihar, New Delhi',
  location: 'Vasant Vihar',
  category: 'Casual Dining',
  vote: '3.7',
  cuisines: 'Finger Food, Continental, Italian',
  cost: '1700',
  hours: '12 Noon to 1 AM (Mon-Sun)',
  bestDish: {
              name: 'Thin Crust Pizza',
              image: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/360X200/group/538/7631_Template%20New172.jpg'
             },
  image: 'http://www.sodelhi.com/media/reviews/photos/original/ee/0e/87/Fat-lulus3-13-1423476953.jpg'
},
{
  name: 'Krips restaurant',
  address: '59, Community Centre, Basant Lok Market, Vasant Vihar, New Delhi',
  location: 'Vasant Vihar',
  category: 'Casual Dining',
  vote: '3.4',
  cuisines: 'North Indian, Chinese',
  cost: '1000',
  hours: ' 11 AM to 12 Midnight (Mon-Sun)',
  bestDish: {
              name: 'Brownie Sundae',
              image: 'http://atreatsaffair.com/wp-content/uploads/2015/06/coconut-brownies-sundae-recipe-1.jpg'
             },
  image: 'http://assets.limetray.com/assets/user_images/gallery_images/cropped/Gg15_1460705171.jpg'
}]

	$scope.restaurant = restaurants[$routeParams.id - 1];

// this code is used to get the ingredients

	$scope.getIngredients = function(url) {
		var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
    //here the $http object in the restaurantController definition is added and a POST request to Clarifai is made
    //and get the ingredients of the best dish of the restaurants
		$http({
			'method': 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key be598f1ed3ab499f99fb1172ff399a13',
				'Content-Type': 'application/json'
			},
			'data': data
		}).then(function (response) {
				console.log(response);
				var ingredients = response.data.outputs[0].data.concepts;
	  			for (var i =0;i<ingredients.length;i++) {
	  				$scope.ingredients.push(ingredients[i].name);
	  				$scope.probabilityvalue.push(ingredients[i].value);
	  			}
          var symbol =0;
    			ingredients_list = $scope.ingredients;
    			probability_value= $scope.probabilityvalue;
    			var elements = probability_value.filter(function(a)
          {
            return a > 0.85;
          }
        );
    			ingredients_list.splice(elements.length,20);
           //this is the array containing the non-vegetarian items
    			var nonveglist = ["egg","meat","bacon","chicken","fish","beef","crab","sushi","pork","steak"];
    			var nonvegs = "<div><img src='http://dwarakacurrypoint.com/img/category4.png' class='vegnonveg' ></div>"
    			var veg = "<div><img src='http://www.kamdarsweets.com/pub/media/wysiwyg/homebanner/100_VEG.png' class='vegnonveg' ></div>"
          //if the ingredients of best dish having probability value above 0.75 is present in the non-vegetarian list then the dish is non-vegetarian otherwise
          //the dish is vegetarian. If the dish is vegetarian then the background color will be changed to green with the vegetarian food logo
          //otherwise it will be changed to red for the non-vegetarian dish with the logo of non-vegetarian food
    			for(j=0;j<ingredients_list.length;j++){
    				for(i=0;i<nonveglist.length;i++){
    					if(ingredients_list[j] == nonveglist[i]){
    						symbol=1;
    						break;
    					}
    				}
    			if(symbol==1){
    				$(".rest-extra").append(nonvegs);
            $(".colored").css("background-color", "red");
    				break;
    			}

    		}
    		if(symbol==0){
          $(".rest-extra").append(veg);
          $(".colored").css("background-color", "green");
      }


	        }, function (xhr) {
	        	console.log(xhr);
	        })
		}

		$scope.ingredients = [];
		$scope.probabilityvalue=[];
})
