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
Intentaron circuncidarme, 
pero mi prepucio solo volvió a fortalecerse. 
Desde entonces,me han circuncidado cada 6 meses. 
Mi prepucio ahora es más fuerte que el acero. 
Siempre que estoy en peligro, 
lo coloco sobre mi cuerpo como una capa exterior.
Es completamente a prueba de balas, ignífugo, impermeable y extremadamente liviano. 
Tengo planes de venderlo como un material muy raro y muy resistente y ganar millones.
Los puentes se harán con vigas de prepucio 
y las unidades de policía usarán chalecos de prepucio.
Viviré en mi casa de prepucio y me bañaré en mi riqueza. 
Soy el hombre prepucio.
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)