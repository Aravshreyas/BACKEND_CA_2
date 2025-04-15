# BACKEND_CA_2

## Deployment Link : Deployed on Render
https://backend-ca-2-058s.onrender.com/

## Github Repository Link : 
https://github.com/Aravshreyas/BACKEND_CA_2.git

## Predefined Dataset Used : 
const users = [
    {username:"alice",age:25,email:"alice@example.com"},
    {username:"bob",age:30,email:"bob@example.com"},
    {username:"charlie",age:28,email:"charlie@example.com"},
]

## ENDPOINTS
GET / 

# Query Parameter used : ?user=<user_name>
https://backend-ca-2-058s.onrender.com?user=<user_name>

## Endpoints Responses 
1. https://backend-ca-2-058s.onrender.com/ 
Response : {"message":"User parameter cannot be empty"}

2. https://backend-ca-2-058s.onrender.com/?user=alice
Response : {"message":"User Found","data":{"userDetails":[{"username":"alice","age":25,"email":"alice@example.com"}]}}

3. https://backend-ca-2-058s.onrender.com/?user=bob
Response : {"message":"User Found","data":{"userDetails":[{"username":"bob","age":30,"email":"bob@example.com"}]}}

4. https://backend-ca-2-058s.onrender.com/?user=charlie
Response : {"message":"User Found","data":{"userDetails":[{"username":"charlie","age":28,"email":"charlie@example.com"}]}}

 # If i Provide the username which is not there in the dataset 
 5. https://backend-ca-2-058s.onrender.com/?user=arav
 Response : {"message":"User not found"}

