# Ip Address Tracker

This project was generated using [Nx](https://nx.dev).
[Nx Documentation](https://nx.dev/angular)

# Aim

Aim of the project is about learning and exploring Nx-dev with Rest Api

## Project

Utilizing IP address from geo loccation Api the user can able to plot map and mark loccation.

- When projects runs it started ploting users loccation.
  Users can search for loccation they want plot the map for.

# Technologies Used

- Angular CLI verson 10.2.3
- Node versin 10.15.3

## Instructions

1. To get started locally, follow these instructions:
2. If you haven't done it already, make a fork of this repo.
   Clone to your local computer using git.
3. Make sure that you have Node installed with npm install
4. Run nx serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.
5. Enter an Ip address to the search box If you dont have an ip address copy from [IP-Address] [https://gist.github.com/pbojinov/9732278].
6. You can now view the map and marker for the loccation you searched

## Features of IP Address Tracker

- Get the map of London when it its loaded.
- Search the loccation using IP address and plot the map
- Mark exact loccation using marker.
- Display data about the related Ip address

## Tools used

Postman to check API response.
Quicktype to generates models and helper code for reading JSON.

# Reference

- To get the IP adress from Reference [IP-GeoLoccation-API](https://geo.ipify.org)
- To generate the map using [LeafletJS](https://leafletjs.com)

# approch

1. I start reading the documentation and Read Me file from [https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0]
2. Register for a free account for the /IP Geoloccation API /by IPfy
3. Read documentation from LeafletJS.
   I used postman to test API calls and, used quick type to impliment and refactor interface.

4. Started creating application using angular CLI and Nx-dev
5. Design the Application as its in the design .styled it using SASS
6. Then,I passed the Ip adress and ploted the map
7. I used responsive design for mobile and desktop.
8. Deployed app using github

## Check how my app look like

[mobile](libs/ui/src/lib/assets/images/mobile.png)

[desktop](libs/ui/src/lib/assets/images/desktop.png)

# Things struggled with this project

To manage the emitted data from the observable using rxjs operator

# work in progress

Trying to get the user's loccation on the initial load of the application.
