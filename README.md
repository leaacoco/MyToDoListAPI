# API EMPLOYE

API pour Employé utilisé pour un entretien technique.

## Prérequis
Avant d'installer le projet, vous devez vous assurer d'avoir les éléments suivants installés sur votre machine :
***

- git
- Node.js et NPM
- Angular CLI
- Une connexion internet
- le repo fakeAPI installé et lancé en arrière plan ( https://github.com/danou294/fakeapi.git )

## Installation
- ### Étape 1 : Cloner le projet
-
Ouvrez un terminal et exécutez la commande suivante :

```
git clone https://github.com/danou294/fakeapi.git
```
***

- ### Étape 2 : Installer json server
Ouvrez un terminal à la racine du projet et exécutez la commande suivante :

```
npm install -g json-server
```

***

- ### Étape 3 : Lancer le projet
Ouvrez un terminal à la racine du projet et exécutez la commande suivante :

```
json-server --watch db.json
```

L'api sera accessible et consommable à l'adresse http://localhost:3000.
***

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
