# Setup Up Guide of Running The Project

- First take a clone of this repository 
```
    REPOSITORY LINK:https://github.com/dm0927/medicall-bill.git
```

- Go to the folder where repository was clone, then open terminal either in VS Code or Provided by the operating system
```
```

- Type "npm install" to install the necessary node modules
```
npm install
```

- Create a new file with name ".env".
```
.env
```

- Add the below link in the .env file and save
```
PORT = 3000
```

- Run the project by typing
```
npm start
```

# API Routing of Truffle Health

- POST - localhost:3000/items - This will insert items into memory

```

### BODY ###

{
    "name" : "Name of Patient", 
    "address" : "Address of the Patient",
    "hospitalname" : "Hospital Name",
    "dateofservice" : "Date of Service(MM-DD-YYY)",
    "billamount" : "The Amount"
}

```

```

**Validation**

{
    "name" : "Name of Patient",  // Patient Name can't be empty
    "address" : "Address of the Patient", // Address of patient can't be empty
    "hospitalname" : "Hospital Name", // Hospital Name can't be empty
    "dateofservice" : "Date of Service", // Date format should be only in (MM-DD-YYYY) 
    "billamount" : "The Amount" // It should be greater then 0.00
}

```

```

### Input ###

{
    "name" : "John Sims",
    "address" : "325 Liberty Ave, Jersey City, NJ, USA, 07306",
    "hospitalname" : "Saint Hospital",
    "dateofservice" : "02-29-2024",
    "billamount" : "5.00"
}

NOTE - An auto generate column "id" would be available to identify the uniquess of each inserted entry

### OUTPUT ###

{
    "success": true,
    "data": [
        {
            "id": 4242064574008,
            "name": "Divya Mehta",
            "address": "325 Liberty Ave, Jersey City, NJ, USA, 07306",
            "hospitalname": "Saint Hospital",
            "dateofservice": "02-29-2024",
            "billamount": 5
        }
    ]
}

### Input ###

{
    "name" : "Divya Mehta",
    "address" : "325 Liberty Ave, Jersey City, NJ, USA, 07306",
    "hospitalname" : "Saint Hospital",
    "dateofservice" : "02-29-2023",
    "billamount" : "5.00"
}

### OUTPUT ###

{
    "success": false,
    "data": [
        {
            "error": "Invalid Date",
            "errorMessage": "Please provide a valid date and make sure it's entered in MM-DD-YYYY format"
        }
    ]
}

```

- GET - localhost:3000/items - This will display all the medical bills available

```
{
    "success": true,
    "data": [
        {
            "id": 4242064574008,
            "name": "Divya Mehta",
            "address": "325 Liberty Ave, Jersey City, NJ, USA, 07306",
            "hospitalname": "Saint Hospital",
            "dateofservice": "02-29-2024",
            "billamount": 5
        }
    ]
}
```