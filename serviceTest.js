const app = angular.module('App',['firebase'])

app.service('$firebase', ['firebase',function(firebase) {
  const config = {
    apiKey: "AIzaSyCDYXgsOs-n1dUgsKJ16-E7Hcm6UbNIgkg",
    authDomain: "hallo-42e85.firebaseapp.com",
    databaseURL: "https://hallo-42e85.firebaseio.com",
    storageBucket: "hallo-42e85.appspot.com",
    messagingSenderId: "899590444510"
  };
 firebase.initializeApp(config);
 this.loginWithEmailAndPassword = function() {
     
 }

 this.signup = function( email, password) {
   firebase.auth().createUserWithEmailAndPassword(email,password)
    .then( (authdata) => {
      console.log('SignUp',authdata)
    } )
 }

 this.loginWithGmail = function() {

 }
 
 this.push = function() {

 }

 this.update = function() {

 }

 
}])
 
 
app.controller('submit',['$scope', '$firebase',  function($scope , $firebase ){
 
      
 
    $scope.username=''
    $scope.password=''
    $scope.login = function(){      
       console.log($scope.username);
       console.log($scope.password);
     }

   $scope.signup = function() {
 
       $firebase.signup($scope.username,$scope.password)
   }
}])

