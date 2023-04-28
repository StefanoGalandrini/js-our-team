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
const teamArray = [
	{
		name: "Paul Hewson",
		role: "Frontman of U2",
		photo: "1_bono.jpg",
	},
	{
		name: "Taylor Swift",
		role: "Singer and songwriter",
		photo: "2_taylor.jpg",
	},
	{
		name: "Bruce Springsteen",
		role: "Born in the U.S.A.",
		photo: "3_bruce.jpg",
	},
	{
		name: "Billie Eilish",
		role: "Strange but great",
		photo: "4_billie.jpg",
	},
	{
		name: "Bon Dylan",
		role: "Poet and Nobel Price winner",
		photo: "5_bob.jpg",
	},
	{
		name: "Mariah Carey",
		role: "Amazing angelic voice",
		photo: "6_mariah",
	},
];

console.log(teamArray);
