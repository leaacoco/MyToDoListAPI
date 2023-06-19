# API Tâche

API pour Tâche utilisé pour lister les rappels.

## Prérequis
Avant d'installer le projet, vous devez vous assurer d'avoir les éléments suivants installés sur votre machine :
***

- git
- Node.js et NPM
- Angular CLI
- Une connexion internet
- le repo fakeAPI installé et lancé en arrière plan ( https://github.com/leaacoco/MyToDoListAPI.git )

## Installation
- ### Étape 1 : Cloner le projet
-
Ouvrez un terminal et exécutez la commande suivante :

```
git clone https://github.com/leaacoco/MyToDoListAPI.git
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
#### Obtenir la liste des tâches
##### http://localhost:3000/tasks

<br>

### POST
#### Créer une tâche
##### http://localhost:3000/tasks
##### avec en paramètres de la requête POST :

``` 
{
    "content": "content"
}
```

### PUT
#### Modifier une tâche avec son id
##### http://localhost:3000/tasks/{id}
<br>

### DELETE
#### Supprimer une tâche avec son id
##### http://localhost:3000/tasks/{id}


### PUT
#### Modifier une tâche
##### Il faut d'abord récupérer l'object tâche avec un GET puis la modifier et la passer en paramètres
##### http://localhost:3000/tasks/{id}

```
Exemple :

Avant

{
  "id": 1,
  "nom": "Cohen",
  "prénom": "Lea",
  "role": "utilisateur",
  "email": "leacoco@gmail.com",
  "task": [
      {
          "id": 1,
          "statut": false,
          "name": "menage",
          "content": "faire le ménage dans le salon"
      },
      {
         "id": 1,
          "statut": false,
          "name": "cuisine",
          "content": "faire à manger"
      }
  ]
}

Après 

{
  "id": 1,
  "nom": "Cohen",
  "prénom": "Margot",
  "role": "utilisateur",
  "email": "margotcohen083@gmail.com",
  "task": [
      {
          "id": 1,
          "statut": false,
          "name": "menage",
          "content": "faire le ménage dans le salon"
      },
      {
         "id": 1,
          "statut": false,
          "name": "cuisine",
          "content": "faire à manger"
      }
  ]
}




```
