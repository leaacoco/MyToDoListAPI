# fakeapi

## Installation et lancement

#### 1. npm install -g json-server
#### 2. json-server --watch db.json
<br>

#### Le serveur est disponible sur http://localhost:3000
<br>

## Requêtes HTTP
<br>

### POST
#### Connexion avec le compte suivant : 

##### http://localhost:3000/users
```
username: admin
password: admin
``` 
### GET
#### Obtenir la liste des employés
##### http://localhost:3000/employees

<br>

### POST
#### Créer un employé
##### http://localhost:3000/employees
##### avec en paramètres de la requête POST :

``` 
{
    "first_name": "xxx",
    "last_name": "xxx",
    "email": "xxx",
}
```

### PUT
#### Modifier un employé avec son id
##### http://localhost:3000/employees/{id}
<br>

### DELETE
#### Supprimer un employé avec son id
##### http://localhost:3000/employees/{id}


### PUT
#### Modifier un employé
##### Il faut d'abord récupérer l'object employé avec un GET puis la modifier et la passer en paramètres
##### http://localhost:3000/eployees/{id}

```
Exemple :

Avant

{
    "id": 1,
    "num": "XXX",
    "firstname": "First name",
    "lastname": "Last name",
    "email": "employe1@codingthesmartway.com",
    "age": "age",
    "validated": false,
    "profilImage": "./images/man.png",
    "materialAssigned": [
        {
            "id": 1,
            "ref": "XX1",
            "state": "Neuf",
            "name": "Macbook",
            "image": "./images/macbook.jpg"
        },
        {
            "id": 2,
            "ref": "XX2",
            "state": "Neuf",
            "name": "SamsungS10",
            "image": "./images/samsungs10.jpg"
        }
    ]
}

Après 

{
    "id": 1,
    "num": "XXX",
    "firstname": "First name",
    "lastname": "Last name",
    "email": "employe1@codingthesmartway.com",
    "age": "age",
    "validated": false,
    "profilImage": "./images/man.png",
    "materialAssigned": [
        {
            "id": 1,
            "ref": "XX1",
            "state": "Neuf",
            "name": "Macbook",
            "image": "./images/macbook.jpg"
        }
    ]
}



```


