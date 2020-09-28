// ----------------------  pile ou face 2.0  ------------------------------------
// ---------------- déclaratif -------------------
/**
 * @type {number} 
 * @var {pile} pile déclaration de la variable pile = 1
 */
var pile;
/**
 * @type {number} 
 * @var {face} face déclaration de la variable face = 0
 */
var face;

// ---------------- Fonctions -------------------

/**
 * 
 * @author {Remipointcom};
 * @version {2.0};
 * @returns {number} face
 */
function pile_ou_face(){   // déclaration = boite
    
	let pile = Math.random();
	
			//console.log(pile); // on affiche le résultat de random : compris entre 0 & 1 --->> 
		
	let face = Math.round(pile);  // on arrondit (a)---> b : si sup à 0.5 = 1 ----->> si inf. alors = 0 
							// la fonction switchCase interpretera le résultat et affichera la console Pile ou Face ... 
		
			return face; // necessaire !! car la fonction a besoin de -> la sortie <- de return pour
						// effectuer la suite du prog. : console.log ne le permet pas ... 
}

// ---------------- Fonctions Principale (appelante) -------------------

/**
 * @param {number} Entree_boite nommée comme ceci pour signaler qu'elle est la fonction appelante de la fonction pile_ou_face
 * @returns {string} retourne le résultat de la randomisation entre 0 et 1 et arrondis à l'entier supérieur, qui affichera donc "Face" quand ce sera 0 / "pile" pour 1
 */
function switchCase(Entree_boite){
	
	switch (Entree_boite){
		case 0:
			return "Face";
			break;
		case 1:
			return "Pile";
			break;
			
	}
}
/**
 * 
 */
function main() {
    let ass = Boolean(true);
    let sw = switchCase(pile_ou_face());
    //let p_ou_f = pile_ou_face();

    if (sw === 'Pile') {
        return ass;
    }
    else{
        console.log('Erreur !')
    }
    //return ;
}
main();
