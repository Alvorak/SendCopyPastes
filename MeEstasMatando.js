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
Me estás matando vida mía, me está matando tu desprecio
no te das cuenta que no aguantaré el dolor;
me esta rompiendo poco a poco el corazon en mil pedazos
me esta matando no lo hagas por favor.
Aun no entiendo el porque fue que tomaste esta decision
si tu tan siquiera has intentado otra solucion
dime porque quieres que acabe nuestra relacion
pues por mas que intento no le encuentro una explicacion,
dame tan solo un motivo para tu desprecio
pienso que realmente no merezco pagar este precio
es necesario que analices lo que estas haciendo
pues ni siquiera te imaginas lo que estoy sufriendo.
Hoy solo ruego por mi vida que tengas piedad
que mi deseo es llenarte de felicidad
yo se que mi amor puede durarte por la eternidad
dame tan solo una oportunidad
de demostrarte que no soy lo que tu piensas
yo no soy como los otros
sera muy diferente el amor entre nosotros
como puedes decir que lo nuestro ha terminado
si aun no lo hemos intentado.
Me estás matando vida mía, me está matando tu desprecio
no te das cuenta que no aguantaré el dolor;
me esta rompiendo poco a poco el corazon en mil pedazos
me esta matando no lo hagas por favor.
Tu corazon yo se que no te miente
yo estoy seguro que tambien lo siente
quizas la vida ahora sea diferente
no quieras detener lo que el Señor ha hecho
pues no has pensado que yo tambien tengo derecho
quizas no pueda prometerte que sere perfecto
pues como todo ser humano yo tendre defectos
quizas no pueda prometerte que nunca te voy a hacer llorar
pero por siempre yo te voy a amar
te lo aseguro dame un chance porque estoy seguro
que mi amor es puro y no importa lo que pase en el futuro
yo estare contigo y eso si que puedo asegurarte
yo jamas podria abandonarte
detente un momento piensa en lo que haces
tu no lo puedes permitir no dejes que esto pase
no te das cuenta que con esta decision acabas con mi vida
tiene que haber otra alternativa.
Me estás matando vida mía, me está matando tu desprecio
no te das cuenta que no aguantaré el dolor;
me esta rompiendo poco a poco el corazon en mil pedazos
me esta matando no lo hagas por favor.
En mil pedazos se que voy a terminar
despojado de mi vida solo puedo suplicar
no me abandones no me vayas a matar
aun podemos intentarlo
dame una oportunidad.
Estas nerviosa y es que esta decision es algo dura
porque quieres hacerlo si no estas segura
aun estas a tiempo porque no lo intentamos
porque no abrimos esa puerta y nos regresamos
porque no volvemos a casa y olvidamos esto
no te preocupes tranquila yo no estoy molesto
entiendo que como persona puedes confundirte
eso no importa aun puedes arrepentirte.
Se que no es facil entiendo que han jugado con tus emociones
han sido muchas las desilusiones
pero yo se que existen mas razones
para que no separemos nuestros corazones.
Estoy seguro que con el pasar del tiempo tu lo vas a ver
pues ni imaginas lo feliz que yo te voy a hacer
no te adelantes en decir que no se va a poder
me estas matando madre mia dejame nacer
[En Estados Unidos se practica mas de un millon
y medio de abortos cada año desde que se legalizo
el aborto en el 1973 se han matado mas de 30 millones
de niños, este numero es 20 veces mayor que el numero
de americanos que han muerto en todas las guerras combinadas,
pensamos que la guerra es la asesina numero 1,
pero realmente lo que mas personas mata, es el aborto.]
Me estás matando vida mía, me está matando tu desprecio
no te das cuenta que no aguantaré el dolor;
me esta rompiendo poco a poco el corazon en mil pedazos
me esta matando no lo hagas por favor.
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)