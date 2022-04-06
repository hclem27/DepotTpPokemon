1. Le diagramme respecte-t-il le principe de responsabilité unique ? (1 point) -> Non 
2. Pourquoi ? (1 point) -> Dans la class Pokemon la fonction soigner() ne respecte pas la reponsabilité unique et dans Pokeball affecterPokemon devrait être dans Dresseur car c'est le dresseur qui affecte la pokeball au pokémon 
3. Le diagramme respecte-t-il le principe Open/Closed ? (1 point) -> Oui
4. Pourquoi ? (1 point) -> On retrouve ce principe dans le diagramme car si un nouveau pokémon ou un nouveau type est ajouté, il n’y a pas d'impact sur les autres classes
5. Le diagramme respecte-t-il le principe de substitution de Liskov ? (1 point) -> Oui
6. Pourquoi ? (1 point) -> Car chaque pokémon (Carapuce, Salameche, Bullbizarre) hérite de l'interface Pokemon
7. Le diagramme respecte-t-il le principe de ségrégation des interfaces ? (1 point) -> Non
8. Pourquoi ? (1 point) -> Car il y a que deux Interface (Type, Pokemon) avec une généralité de fonctions
9. Le diagramme respecte-t-il le principe d'inversion des dépendences ? (1 point) -> Oui
10. Pourquoi ? (1 point) -> Les pokémon (Carapuce, Salameche et Bulbizarre) dépendent de leur type
11. Proposez un diagramme alternatif (2 point)
12. Déposez votre projet sur github et précisez le lien (1 point)