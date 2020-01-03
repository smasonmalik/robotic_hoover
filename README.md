### Robotic-hoover
Robotic-hoover is a Javascript programme that allows a user to provide input instructions for a robotic hoover which include room size, hoover start-point, locations of dirt patches and movement instructions. The library returns information about the cleanup including: how many dirt patches have been cleaned up as well as the final location of the hoover.


### Requirements
Output should return:

The final hoover position (X,Y).
The number of patches of dirt the robot cleaned up.
Additional requirements:

The programme shall output the data to output.txt file or console.log the report.
The programme should retrieve a file that is remotely hosted (currently only local).

#### Acceptance Criteria
Example input (input.txt):

    5 5
    1 2
    1 0
    2 2
    2 3
    NNESEESWNWW
Would give then following output:

    1 3
    1


### Structure
The code is split into 3 main classes plus 2 modules.

#### Job Class

This is the main class and is the 'manager class' for each 'job' carried out by the vacuum cleaner.
It stores the job information and creates new room and hoover classes for each job. upon the class running runJob() it returns the final hoover location and number of patches cleaned

#### Room Class

Has information about the size of the room and the numberlocation of dirt patches in the room.

#### Hoover class

Knows the start, current and historical locations of the hoover

#### Output Module

This moudle returns the final location and number of patches cleaned in the required output formatt

#### Formatter Module

This converts the input.txt file to a data array and also manipilates data  string coordinates to seperated integers for further mainpulation by other classes.

#### Index file

compiles the input file and runs the job through the jobclass


### Testing and Code Quality
Test Coverage is Above >95%

Framework - Jasmine

Linter - ESLint

Test Coverage Analyser - Istanbul

### Installation
Clone the directory and run the following command in the project directory:

```
$ npm install
```

With index.txt within the root of the directory, run the following command in the project directory:

```
$ npm start
```

This will log the final hoover position (X, Y) and the number of patches of dirt the robot cleaned up.

Run the following command in the project directory to run the tests:

```
$ npm test
```