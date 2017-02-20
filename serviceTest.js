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
  
 this.signIn = function(email, password) {
     firebase.auth().signInWithEmailAndPassword(email,password)
      .then((result)=>{
        console.log(result)
      })
 }

 this.signUp = function( email, password) {
   firebase.auth().createUserWithEmailAndPassword(email,password)
    .then( (authdata) => {
      console.log('SignUp',authdata)
    } )
 }


 this.loginWithGmail = function(email,password) {
   // not implement
 }
 
 this.push = function() {

 }

 this.update = function() {

 }
 this.resetPassword= function(email) {
   const auth = firebase.auth()
   auth.sendPasswordResetEmail(email).then(function(){
     console.log("send Success")
   })
 }

 this.getCurrentUser = function() {
   var user = firebase.auth().currentUser;
  if (user) {
    return user
  } else {
    // No user is signed in.
  }
 }
 this.signOut = function() {
  firebase.auth().signOut().then(function() {
  console.log('Signed Out')
  }, function(error) {
    console.error('Sign Out Error', error)
  })

 }

 
}])
 
 
app.controller('submit',['$scope', '$firebase',  function($scope , $firebase ){
 
   setInterval(function(){
     console.log($firebase.getCurrentUser())
   },500)
 
    $scope.email=''
    $scope.password=''
    $scope.signIn = function(){      
       console.log($scope.email);
       console.log($scope.password);
     }

   $scope.signUp= function() {
 
       $firebase.signup($scope.email,$scope.password)
   }

   $scope.sigIn = function() {

   }
   $scope.signInWithEmail= function() {
     $firebase.signIn($scope.email,$scope.password)

   }
  $scope.resetPassword = function() {
   $firebase.resetPassword($scope.email)
  }
    
 
   
}])

