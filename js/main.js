// Add a "checked" symbol when clicking on a list item
var number = 0;
// le nombre total des tâche au départ de l'application
let number_of_task = 7;

// Fonction pour check et uncheck checkbox
function Checked(elem_id){
  // console.log("ID of element:" + elem_id);
  const CheckBox_Elem = document.getElementById(elem_id);
  // Si la case est cocher alors on incremente number sinon on le decremente
  if(CheckBox_Elem.checked == true){
    // console.log("Cocher");
    number ++;
  }
  else{
    // console.log("Non Cocher");
    number --;
  }
  // console.log(Elem);
  //console.log("Notre total des case cocher:" + number);
  ChangerProgressBar(number);
}

// Fonction pour changer la progression du progress bar
function ChangerProgressBar(p_number){
  // variable pour le pourcentage le toFixed pour arrondir 2 chiffres après la virgule
  let percentage = ((p_number / number_of_task) * 100).toFixed(2);
  // console.log("Le pourcentage actuel est de :" + percentage);
  const ProgessBar_Elem = document.getElementById('myBar');
  // Changer la largeur du ProgressBar
  ProgessBar_Elem.style.width = percentage + '%';
  // Changer son texte HTML
  ProgessBar_Elem.innerHTML = percentage + '%';
  // Afficher sur l'écran si la progression est de 100% un message de félicitation
  if(percentage == 100) {
    alert('Félicitations !');
  }
}

// Fonction pour recommencer le jeu
function ResetGame(){
  // Reset de tout les variables
  number = 0;
  // Reset du valeur de la ProgressBar
  const ProgessBar_Elem = document.getElementById('myBar');
  ProgessBar_Elem.style.width = '0%';
  ProgessBar_Elem.innerHTML = '0%';
  // Boucle pour parcourir chaque case à cocher
  // le + 50 pour que le reset marche jusqu au number_of_task + 50ème tâche ajouté
  for (let task_number = 1; task_number <= number_of_task + 50; task_number++) {
    if(document.getElementById('div' + task_number)){
      document.getElementById('task' + task_number).checked = false;
    }
  }
}
// Fonction pour ajouter une nouvelle tâches
function nouveauTache(){
  //console.log('Ajout d\'une tâche en cours');
  const MyInput_Elem = document.getElementById('add_input');
  //console.log(MyInput_Elem)
  // Si la valeur input est vide on affiche une alerte
  if(!MyInput_Elem.value){
    alert('Veuillez entrer une tâche svp!');
  }
  else{
    //console.log('La valeur de input non vide');
    // le nb total des tâche augmente
    number_of_task ++;
    // Creation d'un nouveau element
    AjoutTacheHTML(number_of_task, MyInput_Elem.value);
    //console.log('Nb total de tache : ' + number_of_task);
    // Reset le progress bar et unckech tous les checkbox
    ResetGame();
  }

}
// Fonction pour supprimer une tâches 
function supprTache(id_elem_number){
  //console.log('Suppression d\'une tâche en cours');
  let id = 'div'+id_elem_number;
  //console.log('ID de l\'element supprimé:' + id);
  // Pour supprimer un element div HTML grâce à son ID
  document.getElementById(id).remove();
  // le nb total des tâche diminue
  number_of_task --;
  //console.log('Nb total de tache : ' + number_of_task);
  ResetGame();
}

// Fonction pour ajouter une tâche
function AjoutTacheHTML(p_number,label_text){
    const MyUL = document.getElementById('myUL');
    // Création du div
    let div = document.createElement('div');
    // Setter les attribut de l'element div
    div.setAttribute('class', 'mycontent'); // class
    div.setAttribute('id', 'div'+p_number+''); // class

    // Création du label
    let label = document.createElement('label');
    // Setter les attribut de l'element label
    label.setAttribute('class', 'my_label'); // class
    // Le texte dans le label
    label.innerHTML = label_text; 

    // Creation d'un element input
    let input = document.createElement('input');
    // Setter les attribut de l'element input
    input.setAttribute('type', 'checkbox'); // type
    input.setAttribute('class', 'mychckbox'); // class
    input.setAttribute('id', 'task'+p_number+''); // id
    input.setAttribute('onclick', 'Checked(this.id)'); // onclick

    // Creation d'un element button
    let button = document.createElement('button');
    // Setter les attribut de l'element buton
    button.setAttribute('id', ''+p_number+''); // type
    button.setAttribute('class', 'sppr_btn'); // class
    button.setAttribute('onclick', 'supprTache(this.id)'); // onclick
    button.innerHTML = 'X'; // Texte dans le button

    // Ordre des éléments parent, enfant
    MyUL.appendChild(div); // Mettre l'elemenet div dans MyUL
    div.appendChild(input); // Mettre l'elemenet input dans div
    div.appendChild(label); // Mettre l'elemenet label dans div
    div.appendChild(button); // Mettre l'elemenet button dans div
}
