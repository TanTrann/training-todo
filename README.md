## Install the Angular CLI
npm install -g @angular/cli

On Windows client computers, the execution of PowerShell scripts is disabled by default. To allow the execution of PowerShell scripts, which is needed for npm global binaries, you must set the following

Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

## Create a workspace and initial application

ng new my-app

In the project, you can using install package

### `npm install name_package`

In the project directory, you can run:

### `ng serve`
Run the app in the development mode.\
Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

# Structure folder angular
- src
    - app
        - shares
        - services
        - interfaces
        - layout
        - pages
        - stores
        - helpers

# Install package
- @angular/material
- rxjs
- ngRx
# using style scss