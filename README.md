markdown
Copy code
# API Tâche

API pour Tâche utilisée pour lister les rappels.

## Prérequis

Avant d'installer le projet, vous devez vous assurer d'avoir les éléments suivants installés sur votre machine :
- git
- Node.js et NPM
- Angular CLI
- Une connexion internet
- le repo fakeAPI installé et lancé en arrière-plan (https://github.com/leaacoco/MyToDoListAPI.git)

## Installation

**Étape 1 : Cloner le projet**

Ouvrez un terminal et exécutez la commande suivante :
git clone https://github.com/leaacoco/MyToDoListAPI.git

yaml
Copy code

**Étape 2 : Installer json server**

Ouvrez un terminal à la racine du projet et exécutez la commande suivante :
npm install -g json-server

yaml
Copy code

**Étape 3 : Lancer le projet**

Ouvrez un terminal à la racine du projet et exécutez la commande suivante :
json-server --watch db.json

bash
Copy code

L'API sera accessible et consommable à l'adresse http://localhost:3000.

## Requêtes HTTP

**POST : Connexion avec le compte suivant**
http://localhost:3000/users
{
"username": "admin",
"password": "admin"
}

markdown
Copy code

**GET : Obtenir la liste des tâches**
http://localhost:3000/tasks

markdown
Copy code

**POST : Créer une tâche**
http://localhost:3000/tasks
{
"content": "Contenu de la tâche"
}

markdown
Copy code

**PUT : Modifier une tâche avec son ID**
http://localhost:3000/tasks/{id}

markdown
Copy code

**DELETE : Supprimer une tâche avec son ID**
http://localhost:3000/tasks/{id}

rust
Copy code

**PUT : Modifier une tâche**
Il faut d'abord récupérer l'objet tâche avec un GET, puis le modifier et l'envoyer en paramètres.
http://localhost:3000/tasks/{id}

yaml
Copy code

Exemple :
Avant :
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

Copy code

Après :
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

vbnet
Copy code

N'oubliez pas de remplacer les données factices dans les exemples avec vos propres données.
