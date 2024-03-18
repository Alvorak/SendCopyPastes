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
There was only one bar.
*A mile long!*
They didn't serve pints.
*Only buckets!*
There was only one barmaid.
*For every man!*
The guards came.
*A ban gardai!*
She was wearing glasses.
*And nuthin' else!*
She took you to jail.
*It was full of hookers!*
They cost a fiver.
*I had a tenner!*
There was a plant.
*A hash plant!*
It had no leaves.
*I smoked them all!*
That's the end.
*Till next week!*
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)