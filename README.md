# Visory Engineering Challenge
This project is a response to the challenge [issued here](https://github.com/VisoryPlatform/engineering-challenge)

## Technical Details
This tech stack is built using
* [Node & npm](https://nodejs.org/en/download) - For running the code and installing dependencies
  * Node version: `20.10.0`
  * npm version: `9.7.2`
* [Vue 3](https://vuejs.org/guide/introduction.html) - For the frontend, leveraging [TypeScript](https://www.typescriptlang.org/) and [Vite](https://vitejs.dev/guide/) as the build tool
* [Bootstrap 5.2](https://getbootstrap.com/docs/5.2/getting-started/introduction/) - Frontend component library used to save a lot of time with layout and styling of the frontend
* [Express](https://expressjs.com/) - For the backend web server / REST API
* [Ticketmaster API](https://developer.ticketmaster.com/products-and-docs/apis/getting-started/) is used for retrieving data. You _WILL_ need your own API key to run this project -- [registration](https://developer-acct.ticketmaster.com/user/register) is free

## How to run
### Cloning and installing dependencies
* Clone this repository to your local machine by entering this command into your favorite terminal
  * `git clone https://github.com/timwaldron/visory-engineering-challenge.git`
  * Note: There are two folders in this repository containing the frontend and the backend
    * `Web.Spa` - Vue single page application
    * `Web.Api` - Express backend API
* Once cloned, you will need to install the dependencies for both frontend and backend
* Change directory into the frontend with the command:
  * `cd ./Web.Spa/`
* Once inside the frontend directory, run this command to install its' dependencies
  * `npm install`
* After installation is finished, we want to go into the backend directory with the command
  * `cd ../Web.Api/`
* Once inside the backend directory, run this command to install its' dependencies
  * `npm install`
* Done!

### Configuring environmental variables
* There are some environmental variables that need to be set before we can run the project
* In your file explorer, navigate to the backend directory (`Web.Api`) and copy and paste the file `.env.sample`. Rename the pasted copy to `.env`, this file will contain your secrets and configuration.
* Open the newly copied `.env` file with your favorite text editor, there will need to be some properties filled out
  * `PORT` - Please set this to `3000` (e.g. `PORT=3000`). I made a discovery after writing these docs that the frontend doesn't respect changes to this number, and will always try and access the backend server on port `3000`. I could change it but I've used my 3 hours allocated to this project up already (oops).
  * `TICKETMASTER_API_URL` - This is the endpoint for the Ticketmaster API
    * `https://app.ticketmaster.com/discovery/v2/events`
  * `TICKETMASTER_API_KEY` - You can find this API key once you log into your Ticketmaster developer account. It will be under `{your-ticketmaster-username}-App` in the field related to `Consumer Key`

### Running the project
* After filling out the environmental variables in the `.env` file we can start the application!
* Open a terminal and navigate to the `Web.Api` directory in this repository (You may still be there from the installing dependencies step)
  * Run the command `npm run dev` and you should get a message saying
    * `Server is running at http://localhost:3000`
* Open a second terminal and this time navigate to the `Web.Spa` directory
    * Run the command `npm run dev` (Yep, the same command)
    * You should get a link to access the website from `➜ Local: http://localhost:5173/`
      * `5173` is the default port, this may be different if it has already been taken
* Once you navigate to that local URL you will have access to the website! 🎉
