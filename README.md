# Algo L1 - Machines
Pour vous accompagner dans votre travail personnel, voici un guide pour exécuter, observer et implémenter les machines faites théoriquement en TD ; cela avec des formulations très proches du pseudo-code utilisé.<br/>
Bon dev' !

# Où sommes-nous ?
Sur un dépôt de fichiers (repository en anglais).

## Pourquoi ?
Découvrir l'algorithmie fonctionnelle par l'implémentation progressive d'instructions de machines déterministes.

## Comment ?
### 1) Téléchargez les fichiers (donc les codes) présents sur le dépôt

#### Solution 1 : Passer par un logiciel Git (conseillé)
Des fichiers vont être ajoutés, d'autres modifiés... cette solution vous permettra de :
- savoir, via le logiciel, si vos fichiers sont à jour
- fusionner les modifications faites sur le dépôt avec celles que vous avez faites sur votre ordinateur. Les premières fois où vous le tenter, créez une copie de votre dossier actuel sur l'ordinateur pour être sûr de ne pas perdre vos ajouts : clic droit -> <cite>Créer un fichier compressé (archive)</cite>

1. Télécharger [GitHub Desktop](https://desktop.github.com/)
2. L'installer et l'ouvrir une première fois
3. Cliquer sur <u>Code</u> (bouton vert) -> <u>Open with GitHub Desktop</u>
4. Indiquer où vous souhaitez stocker les fichiers sur votre ordinateur ("Local path") et clonez ("Clone")
5. Les fichiers sont sur votre ordinateur !
![Bouton 'Code' vert à cliquer pour déployer le menu de téléchargement ](machines/imgs/github/Git_Repo_Code-Button.jpg)
![Menu du bouton 'Code'](machines/imgs/github/Git_Repo_Code-Button_deployed.jpg)

#### Mettre à jour les fichiers locaux avec les nouveautés faites sur le dépôt
1. Ouvrir le dépôt dans GitHub Desktop
2. Sélectionner les fichiers que vous avez modifié en local
3. Faire 'commit' en résumant en titre et description les changements que vous avez fait en local -> cela confirme que vous ne voulez pas perdre vos changements locaux
4. Faire 'pull' (tirer) -> cela récupère les fichiers du dépôt en vous proposant de 'merger' (fusionner) les changements avec les vôtres

#### Solution 2 : Télécharger directement les fichiers (déconseillé)
Cliquer sur <u>Code</u> (bouton vert) -> <u>Download zip</u>

### 2) Ouvrir index.html
Du dossier téléchargé, ouvrez le fichier <cite title="Page principale de notre micro-site local ">machines/<a href="https://github.com/MarquonsDesCompetences-ThiB/Algo-L1---Machines/blob/main/machines/index.html ">index.html</a></cite> dans un navigateur internet (<cite>Mozilla Firefox</cite>, <cite>Google Chrome</cite>, <cite>Internet Explorer</cite>....) : Double-cliquer sur le fichier ou faire <cite title="Bouton de la souris ">clic droit</cite>-><cite>Ouvrir avec...</cite>
