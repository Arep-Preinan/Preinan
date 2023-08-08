<p align="center"><a href="https://laravel.com" target="_blank"><img src="http://preinan.xxuz.com/images/preinannotblack.svg" width="400" alt="Preinan Logo"></a></p>

# Preinan

Preinan is a website that offers a vacation destination search platform, particularly focused on the beautiful region of Wonosobo. This website is designed to promote local tourism and support micro, small, and medium-sized enterprises (UMKM) in Wonosobo. Preinan features highly convenient options for users to purchase entrance tickets to the desired tourist spots.

Another outstanding feature of Preinan is the e-ticket, which comes with a barcode. This barcode is used for scanning when entering the tourist area. Once scanned, the e-ticket becomes automatically invalid and cannot be used again. This system helps ensure the safety and comfort of visitors.

Preinan also offers three attractive categories of tourism: lakes, mountains, and waterfalls – all of which can be found in Wonosobo. With Preinan, visitors can access comprehensive information about the tourist places, including their locations, ticket prices, and accommodation details around the area.

With its comprehensive and user-friendly features, Preinan is the best solution for those who want to plan an unforgettable vacation in Wonosobo. Visit the Preinan website and discover your dream holiday destination!

## Figma Link
https://www.figma.com/file/tl3Gns5hOvvhknBkykTfbJ/Goout%2B-%2BTravel%2BLanding%2BPage?type=design&node-id=506%3A338&mode=design&t=DNWf3J0NDQn7DyS5-1

## "Looking for Vacation Destinations? Choose Preinan to Make Your Heart Happy! Stress-Free Online Ticketing to Wonosobo!"

# Essential Pages
- Home Page
- Destinations
- Destination Details
- Login & Register
- Booking
- My Tickets
- E-tickets

# Tech Stack 
- Laravel
- Vite.js
- React.js
- Tailwind CSS
- MySQL

# Project Setup Guide

## 1. Requirements
This project requires the following software at a minimum:
- Node.js version 18.5
- PHP version 8.2
- Composer version 2.5.4
- XAMPP (including PHP 8.2)
- Git

## 2. Download Project
After preparing the requirements, the next step is to download this project using the Git tool:
```
git clone https://github.com/Arep-Preinan/Preinan.git
```
Alternatively, you can directly download it.

## 3. Installation
Once downloaded, the next step is installation:
```
composer install
npm install
```

## 4. Copy .env
After installation, copy the .env.example file to .env.

## 5. Setup database
If done, modify the following configuration in the .env file according to your preferences or database account:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=preinan
DB_USERNAME=root
DB_PASSWORD=
```
After making changes, add a database named "preinan".

## 6. Migrate Database and Data
This project comes with pre-made data, and the process is simple. Just run this command:
```
php artisan migrate:fresh --seed
```

## 7. Run the Server
Because this project requires two servers in developer mode – one for Laravel and one for React – open two terminals and enter these commands:
In Terminal 1:
```
php artisan serve
```
In terminal 2
```
npm run deb
```
###### Remember, do not close these terminals (Ctrl+C).

# Help Desk
If you need assistance, please don't hesitate to contact the developers.
