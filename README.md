This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## La calculatrice polonaise inversée

Principe de la [notation polonaise inversée](https://fr.wikipedia.org/wiki/Notation_polonaise_inverse)

### `Les opérations de calcul`

* L'addition => on additionne les deux derniers éléments de la pile
	+ Par exemple: si on a la pile [7, 54, 3, 18] alors on va faire 3 + 18 et on obtiendra [7, 54, 21]

* La soustraction => on soustrait les deux derniers éléments de la pile
	+ Par exemple: si on a la pile [7, 54, 18, 3] alors on va faire 18 - 3 et on obtiendra [7, 54, 15]

* La multiplication => on multiplie les deux derniers éléments de la pile
	+ Par exemple: si on a la pile [7, 54, 5, 3] alors on va faire 5 * 3 et on obtiendra [7, 54, 15]

* La division => on divise les deux derniers éléments de la pile
	+ Par exemple: si on a la pile [7, 54, 15, 3] alors on va faire 15 / 3 et on obtiendra [7, 54, 5]

* Le changement de signe => on multiplie le dernier élément de la pile par -1
	+ Par exemple: si on a la pile [7, 54, 15, 3] alors on va obtenir [7, 54, 15, -3]

### `Les opérations`

* ENTER => insère la saisie en cours dans la pile

* SWAP => échange les deux derniers éléments de la pile

* DROP => éjecte le dernier élément de la pile

* CLEAR => éjecte tous les éléments de la pile