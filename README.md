# FAC-Mentorship-Schedule
FAC Mentorship Schedule


## Porject Idea
Mentors can help students to understand their academic plans, identify specific academic challenges, and locate appropriate academic support services , so our web APP to schedule mentors for every week in each cohort.

## User Stories

As a member of `Founders & Coders` I create  web app  `FAC Mentorship schedule` which schedule the mentors for every week in all FAC cohorts.

Thus ,I should be able to :
- Select cohort name and see a table of the mentors for every week

- add new cohort and see the table including week number and week title and who is the mentor in every week

## Requirements

- [x] Simple web app with a node server and a database
- [x] Your database comes with a schema, which should be documented in your readme (along with any other architectural decisions)
- [x] Database hosted on Heroku, or locally
- [x] Build script for your database
- [ ] Security concerns appropriately considered (you must protect against script injections!)
- [ ] Good test coverage both server- and client-side
- [x] Content dynamic, but DOM manipulation kept to a minimum
- [x] Mobile-first design


## Schema diagrams

Here are the schema diagrams for the database:

#### cohorts
Column | Type | Modifiers
--- | --- | ---
id | SERIAL| not null
location | VARCHAR(10) | not null
num | INTEGER |
start_date|DATE |


#### mentors

Column | Type | Modifiers
--- | --- | ---
githubuser | VARCHAR(20)|


#### weeks
Column | Type | Modifiers
--- | --- | ---
num   | INTEGER| not null
week_title  | VARCHAR(40)|

#### cohort_mentor

Column | Type | Modifiers
--- | --- | ---
cohort_id   | INTEGER| not null
mentor_user  | VARCHAR(20)|
week_num  | INTEGER|



### Day 1

- Discuss app purpose and architecture
- Create initial folder structure and files
- Create database schema diagrams
- Host database on Heroku
- Build script for database
- Add more specific back-end tests

### Day 2

- Enable back-end to pass relevant data to the front-end
- Add styling and DOM manipulation to display data


### Installation instructions
 git clone `https://github.com/FACG2/fac-mentorship-schedule`

  Run `npm install` to install all dependencies`

#### Database

   - Create a `config.env` file in the root of the project

   - Add the `DB_URL` variable ,`TEST_URL` variable


  Navigate to http://localhost:4000/ in your browser


[check the site](https://fac-mentorship.herokuapp.com/)


> Done By : Abdallah,Salwa,Mahmoud,Hana
