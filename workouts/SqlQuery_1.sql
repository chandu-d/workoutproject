create database workouttrackerprojects
use workouttrackerprojects
create table workout_categorys
(
category_id int primary key identity,
category_name varchar(64),

)
create table workout_collections(
workout_title varchar(128),
workout_note varchar(256),
calories_burn_per_minute float,
category_id int foreign key references workout_categorys(category_id), 
workout_id int  identity primary key
)


create table Workout_Activss(
id int identity primary key,
workout_id int foreign key references workout_collections(workout_id),
start_time time,
starts_date date,
end_date date,
end_time time,
comment varchar(64),
status bit
)
