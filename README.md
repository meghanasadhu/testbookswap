**BookSwap: An Online Marketplace for College Students**

**Introduction**

What is BookSwap?
BookSwap is an online marketplace where any college student can list their books so that juniors can buy those books at a much cheaper price.
BookSwap ensures fair prices, promotes sustainability, and fosters a collaborative learning environment.
BookSwap aims at removing the middlemen involved in selling second-hand books

<img width="610" alt="Screenshot 2024-04-17 at 6 10 41 PM" src="https://github.com/meghanasadhu/bookswap/assets/158526030/1449db3a-181e-4fa5-87e0-a7507962b69b">
 


**Architecture**
BookSwap is built using the MERN stack, which comprises MongoDB, Express.js, React, and Node.js. Additionally, it leverages real-time Firebase for storing images, providing a seamless and responsive user experience.


<img width="452" alt="image" src="https://github.com/meghanasadhu/bookswap/assets/158526030/02ec1e1f-fce6-4c23-b6a2-01230068e6cb">


 

**BookSwap Installation:**
**Prerequisites**
1. ADDING Code to Visual Studio Code
Configure all the code files in Visual Studio Code by clicking on open folder.
2. MONGO DB Server creation 

Go to this link 
https://account.mongodb.com/account/login?n=https%3A%2F%2Fcloud.mongodb.com%2Fv2%2F65ee312fcb938647babc052c&nextHash=%23metrics%2FreplicaSet%2F65ee315c2b40605562d9b0f4%2Fexplorer%2Ftest%2Fmessages%2Ffind&signedOut=true
 
And Login or sign up

<img width="305" alt="image" src="https://github.com/meghanasadhu/bookswap/assets/158526030/a5338bb3-df87-4d71-8e97-2d0892dcbddb">
  
Now Click on New Project

Then Click on Create

<img width="357" alt="image" src="https://github.com/meghanasadhu/bookswap/assets/158526030/fc4eee9c-86f4-4eff-950f-37a3d8c5ba81">
 

Select the Database to deploy in our case we have used Free one and then click on create Deployment.

<img width="359" alt="image" src="https://github.com/meghanasadhu/bookswap/assets/158526030/fd36f7f9-3065-435c-85eb-5320a5a0f27d">

Now create Username and Password

<img width="296" alt="image" src="https://github.com/meghanasadhu/bookswap/assets/158526030/a8c88c25-bd20-4647-bca8-3f1140bedcf8">

Click on create a Database user.

Now click on Connection Method.

Now click on first option that is Drivers.

And copy the URL.

Now go to your code navigate to Backend folder and edit .env file if not present create one and add the below MONGODB_URI

 

3. ADDING Resend API:

Navigate to this URL: https://resend.com/docs/send-with-nextjs#4-try-it-yourself

Click on API Keys and create an API key.
 

Paste the API key in .env like below mentioned image.

 

4. Adding Firebase Storage

Navigate to https://console.firebase.google.com/u/0/

Click on Add Project

Give it any name and click next until you see your main console.

Now click on Add App.

 

Click on 3rd option named Web.
Then navigate to Frontend folder of your code then go to src -> components -> config -> FirebaseConfig.js change the configuration.

5. Deployment guide to push the code in Github
●	Clone the git repository
             git clone https://github.com/meghanasadhu/bookswap.git
●	Navigate to the BookSwap directory 
	cd /BookSwap
●	Navigate to FrontEnd and Backend directory and install dependencies	
cd /FrontEnd  
npm install
cd ..
cd /BackEnd
npm install
●	Navigate back to FrontEnd and run in both 
                                                         npm run dev


6. Running application in local host:
Navigate to Fronend in VS code
                npm run dev
                o + click enter 
This will open our website page.

BookSwap Usage
BookSwap provides users with an easy connection for buyers and sellers:

●	Sellers: College students can easily list books for sale by providing details such as title, author, condition, and price.
●	Buyers: Young people looking for educational materials can review the list, view the content of the book and purchase it directly from the platform.

BookSwap simplifies the book exchange process by creating a community where students can save money by purchasing used books and earn extra money by selling books.

**Conclusion**

BookSwap is changing the way college students acquire and exchange textbooks by providing users with an online marketplace. Focusing on affordability and convenience, BookSwap is designed to give students control over the cost of their education while fostering a sense of community in the learning environment.










      


