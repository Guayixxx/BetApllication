# Requirements:
Have node.js and the angular cli 16 installed  
## Instructions:
If you downloaded the project from GitHub, run the following command in the project path:

    npm install

Then check if the node_modules folder was created in the project,
In case you have downloaded the compressed project, this folder should already be there.  
To run the project you must execute the following command in the terminal (you must be in the project path)  

    ng serve  

This command will set up a server on port localhost:4200,
open the browser at http://localhost:4200/  
**Note:** if you have that port occupied, the terminal will let you know and will raise the server on another port, be aware of which http route you should access.  

## Already in the web application:  
The default route is /home (first view), in this you will find the events with their respective markets (click on the name of the event to display the markets with their respective selectors)  

The selections change color to green if they are selected, otherwise they will remain with the same format  

At the bottom left of the first view you will find a button with a shopping cart. Clicking on this will redirect you to the /slip component where you will find the second view with the list of bets you have made.  

At the bottom right of the second view you will find the home button, this will redirect you to the /home component.  

## Project development  
- Development: Use Angular to create a betting application.
- Components: Create components like Home and BetSlip to manage bets.
- Routing: Configure routes to navigate between Home and BetSlip.
- Data consumption: Use HttpClient in Angular to consume data from a JSON file and display bets.
- Bet Management: Implement logic to select/approve bets, change button color when selecting and delete bets from the BetSlip.
- Style and Design: Implement styles and design the interface with CSS classes and Angular Material components.
- BetSlip Implementation: Develop logic for the BetSlip that displays selected bets.
- Services:  
     - DataService:  
     Function: This service is responsible for obtaining betting data from a JSON file simulating an external data source.  
      - Methods:  
          - getBets(): Used to get the bets from the JSON file.  
    
     - BetslipService:  
     Function: Manage selected bets and their status (selected/unselected) throughout the application.  
      - Methods:  
          - addBet(bet): Adds or removes a selected bet to the list, based on its existence.  
          - getBets(): Returns an observable that provides the list of selected bets.
    
     - SelectionService:
     Function: It would be responsible for maintaining a record of selected elements in the interface.  
      - Methods:  
         - addSelectedButton(id): Would add a selected button to the list.    
         - removeSelectedButton(id): Would remove a selected button from the list.

## Technologies and tools:  

- Angular: Framework used for development.  
- TypeScript: Programming language used in Angular.  
- HTML and CSS: To structure and stylize the user interface.  
- Angular Material: For the implementation of some visual components.  
- JSON: Data source for bets.  

### Key decisions:

- State Management: Use services and observables to manage the state of selected bets.  
- DOM Manipulation: Manipulate the DOM using ElementRef and Renderer2 in Angular to update interface elements.  
- Interaction logic: Develop logic for selecting, deselecting, and deleting bets.