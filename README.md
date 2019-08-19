An api that allows Users to be created and logged in, and then can give those users forecast information from a location.


Endpoint Documentation:

User Creation:
Example request:
 POST '/api/v1/users'
 
 Headers: {
 Content-Type: application/json
 Accept: application/json}
 
 Body: {
  "email": "my_email@example.com",
  "password": "password",
  "password_confirmation": "password"}
  
Example response:
  {
    "api_key": "SEtLZdFHfKxXeBoGwXdqftumv316ui1w"
  }
  
User Login:
Example request:
  POST '/api/v1/sessions'
  
 Headers: {
 Content-Type: application/json
 Accept: application/json}
 
 Body:{
  "email": "my_email2@example.com",
  "password": "password"
 }
 
 Example response:
  {
    "api_key": "SEtLZdFHfKxXeBoGwXdqftumv316ui1w"
  }
 
