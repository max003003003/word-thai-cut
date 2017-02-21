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
        console.log(this.getCurrentUser())
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
   
  }
 }
 this.signOut = function() {
  firebase.auth().signOut().then(function() {
  console.log('Signed Out')
  }, function(error) {
    console.error('Sign Out Error', error)
  })

 }

 this.set = function(obj) {   
   obj.t=firebase.database.ServerValue.TIMESTAMP    
   firebase.database().ref('note/'+this.getCurrentUser().uid).push(obj)
    .then((res)=>{
      console.log('success write')
    })
 }

 this.readonce = function() {    
   return  firebase.database().ref('note/'+this.getCurrentUser().uid).once('value')  
 }

  
 
}])
 
 
app.controller('submit',['$scope', '$firebase',  function($scope , $firebase ){
 
    $scope.notes=[]
    $scope.note=''
    $scope.email=''
    $scope.password=''
    $scope.login = function(){      
       $firebase.signIn($scope.email,$scope.password)
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
    
  $scope.getUID = function() {
   
   console.log($firebase.getCurrentUser().uid)
 }

 $scope.pullNote = function() {
   
  
 
   $firebase.readonce().then((res)=>{
        console.log(res.val())
        $scope.$apply( function(){
          $scope.notes=res.val()
        })
   })
    //$scope.$apply()
   
     
 }

 $scope.setData = function(){
   const obj = {
      n: $scope.note,
      d: moment.now(),
      t: ''
      
   }
   
  console.log(obj)
   $firebase.set(obj)
 }
   
}])

