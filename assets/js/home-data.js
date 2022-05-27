let home_serial_number
let home_address_number
let home_address_street
let home_address_street_type
let city_name
let province
let country
let street_speed_limit
let nearest_fire_hydrant
let roof_age
let furance_age
let driveway_age
let number_of_bedrooms
let number_of_bathrooms
let number_of_parking_spaces
let walking_minutes_to_elementary_school_one
let walking_minutes_to_elementary_school_two
let bus_to_elementary_school
let walking_minutes_to_middle_school
let bus_to_middle_school
let walking_minutes_to_high_school
let bus_to_high_school
let minutes_to_post_secondary
let mode_to_post_secondary
let post_secondary_school_name
let post_secondary_school_nearby
let walking_minutes_to_groceries
let walking_minutes_to_pharmacy
let walking_minutes_to_park
let walking_minutes_to_playground
let driving_time_to_highway
let driving_time_to_hospital
let driving_time_to_downtown
let driving_time_to_nearest_mall
let fireplace
let dishwasher
let air_conditioner
let furnace
let baseboard_heating
let electric_car_charger

const House = 
{
    home_serial_number : 9999001,
    home_address_number: 251, 
    home_address_street: 'Heritage',
    home_address_street_type: 'Drive',
    city_name: 'Kitchener',
    province: 'Ontario',
    country: 'Canada',
    street_speed_limit: 40,
    nearest_fire_hydrant: 88,
    roof_age: 10,
    furance_age: 9,
    driveway_age: 4,
    fireplace: true,
    dishwasher: true,
    air_conditioner: true,
    furnace: true,
    baseboard_heating: false,
    electric_car_charger: false,
    number_of_bedrooms: 3,
    number_of_bathrooms: 2,
    number_of_parking_spaces: 2,
    walking_minutes_to_elementary_school_one: 6,
    walking_minutes_to_elementary_school_two: 8,
    bus_to_elementary_school: false,
    walking_minutes_to_middle_school: null,
    bus_to_middle_school: true,
    walking_minutes_to_high_school: 15,
    bus_to_high_school: false,
    minutes_to_post_secondary: 20,
    mode_to_post_secondary: 'Walk',
    post_secondary_school_name: 'Conestoga College',
    post_secondary_school_nearby: true,
    walking_minutes_to_groceries: 12,
    walking_minutes_to_pharmacy: 12,
    walking_minutes_to_park: 4,
    walking_minutes_to_playground: 5,
    minutes_to_bus_stop: 1,
    driving_time_to_commuter_rail: 14,
    driving_time_to_highway: 5,
    driving_time_to_hospital: 10,
    driving_time_to_firehall: 3,
    driving_time_to_downtown: 15,
    driving_time_to_nearest_mall: 12
}


document.getElementById('home-address-number').innerText = House.home_address_number;
document.getElementById('home-address-street').innerText = House.home_address_street;
document.getElementById('home-address-street-type').innerText = House.home_address_street_type;

document.getElementById('number-of-bedrooms').innerText = House.number_of_bedrooms;
document.getElementById('number-of-bathrooms').innerText = House.number_of_bathrooms;
document.getElementById('number-of-parking-spots').innerText = House.number_of_parking_spaces;

// document.getElementById('').innerText = 
// document.getElementById('').innerText = 
// document.getElementById('').innerText = 
// document.getElementById('').innerText = 
// document.getElementById('').innerText = 


document.getElementById('minutes-to-hospital').innerText = House.driving_time_to_hospital;
document.getElementById('minutes-to-firehall').innerText = House.driving_time_to_firehall;
document.getElementById('closest-fire-hydrant').innerText = House.nearest_fire_hydrant;

document.getElementById('minutes-to-bus-stop').innerText = House.minutes_to_bus_stop;
document.getElementById('minutes-to-commuter-rail').innerText = House.driving_time_to_commuter_rail;
document.getElementById('minutes-to-highway').innerText = House.driving_time_to_highway;