async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
¡Enlaces! ¡Enlaces! Una solapa perdedora
No soy un mugido ejemplar,  atascado entre vainillas, atascado para siempre, etérnamente
FOREVER (Argüelles)
¡Plasca! Una calculadora que no funciona ¡Syntax error! Pavino por el caminento del térror. 
¿A quién le gustan los anacardos? A mí, pero solo si saben perdonar.
Organismo unicelular, Darwin. 
Pez, Darwin
Reptil, Darwin
Mono, Darwin
Ser humano, ¿Darwin? ¡Darwin!
Tunéame el alma, morena, tunéamela; porque no hay chopito igual que tú.
Me he comido dos Digimon, y ninguno sortea papeles, papeles, papel, papelera, pera.
No me gustan las peras, bueno, si... pero prefiero el melocotón.
Muestra,  muestra,  muestra, moist, muestra, muestra, muestra, muestra (x5396)
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)