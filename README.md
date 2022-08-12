<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


## About The Project

![](/Users/bogirencsenyi/projects/el-proyecte-grande-sprint-1-java-trbogi/demo-images/reservation.png)
This application is basically a court reservation system. The idea came from a real life problem as my hobby is beach volleyball and although there are some beach volleyball courts in Hungary, only one has an online booking system (as far as I know).
In this application a club member can book a court  for a fixed time interval (or more) and then pay for it. The application is under development thus it might have some bugs and missing features.


### Built With

* Java Spring Boot
* PostgreSQL
* React
* Stripe

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

This is project is deployed to Heroku, it can be found on this link: [Court Reservation System](https://sse-court-reservation.herokuapp.com/)


<!-- USAGE EXAMPLES -->
## Usage

The core of the application is a booking calendar. The calendar shows you time slots which you can choose from. They are marked with different colors: grey means it is in the past, red is for reserved slots and purple means that the time slot is in your cart.
On the top of the calendar you can see the available courts. You can select a court by clicking on its button.
The calendar can be seen by anyone. To book a court you have to log in. But first you need to register yourself. (Coaches can not log in yet.)

![](/Users/bogirencsenyi/projects/el-proyecte-grande-sprint-1-java-trbogi/demo-images/registration.png)

![](/Users/bogirencsenyi/projects/el-proyecte-grande-sprint-1-java-trbogi/demo-images/login.png)

After you logged in, you can add a reservation to your cart by clicking on one of the free time slots. You are able to add more, if you would like to.

![](/Users/bogirencsenyi/projects/el-proyecte-grande-sprint-1-java-trbogi/demo-images/addtocart.png)

Cart page summarizes your pending reservations. You can delete a pending reservation from your cart either on cart page or from the calendar.

![](/Users/bogirencsenyi/projects/el-proyecte-grande-sprint-1-java-trbogi/demo-images/cart.png)

If you click on 'Go To Checkout' button, a payment form appears. The application uses [Stipe](https://stripe.com/en-hu) for payment. It is in test mode, we can simulate transactions by using test card data. Some examples for card number:
* successful payment : 4242424242424242
* failed payment: 4000000000009995
For expiration date use any future date and for CVC use any 3-digit number.

![](/Users/bogirencsenyi/projects/el-proyecte-grande-sprint-1-java-trbogi/demo-images/checkout.png)

After a successful payment you are redirected to the calendar and your cart is empty now.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Contact

Project Link: [https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-trbogi](https://github.com/CodecoolGlobal/el-proyecte-grande-sprint-1-java-trbogi)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
