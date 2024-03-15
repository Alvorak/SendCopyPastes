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
Ahora son todo risas 
pero cuando tengas que ir a los juzgados 
a responder por el delito de calumnias que acabas de cometer 
con el agravante de la publicidad en tu hilo con miles de personas no te hará tanta gracia.
Lo que has hecho es muy grave 
y un delito tipificado.
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)