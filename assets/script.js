/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.;
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede (se non avete idee prendete spunto dallo screenshot)

Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!
Questi sono i dati:

Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

*/

// MILESTONE 0
// create array of objects
const teamArray = [
	{
		name: "Wayne Barnett",
		role: "Founder & CEO",
		photo: "wayne-barnett-founder-ceo.jpg",
	},
	{
		name: "Angela Caroll",
		role: "Chief Editor",
		photo: "angela-caroll-chief-editor.jpg",
	},
	{
		name: "Walter Gordon",
		role: "Office Manager",
		photo: "walter-gordon-office-manager.jpg",
	},
	{
		name: "Angela Lopez",
		role: "Social Media Manager",
		photo: "angela-lopez-social-media-manager.jpg",
	},
	{
		name: "Scott Estrada",
		role: "Developer",
		photo: "scott-estrada-developer.jpg",
	},
	{
		name: "Barbara Ramos",
		role: "Graphic Designer",
		photo: "barbara-ramos-graphic-designer.jpg",
	},
];

// MILESTONE 1:
// for each member of the team, console.log name, role and string with photo file name

for (let i = 0; i < teamArray.length; i++) {
	let member = teamArray[i];
	console.log(`${member.name}, ${member.role} - ${member.photo}`);
}

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// declare DOM variables
const container = document.querySelector(".container");
let card = document.createElement("div");
let cardContent = `

`;
