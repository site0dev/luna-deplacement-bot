const TOKEN=process.env.TELEGRAM_BOT_TOKEN, ADMIN=process.env.ADMIN_CHAT_ID, SECRET=process.env.WEBHOOK_SECRET;
const T={
fr:{
 welcome:`Bienvenue chez Luna Deplacement 🌙
Profil indépendant. Disponibilité annoncée 24h/24, déplacements sur demande. Toute demande doit être confirmée directement avec Luna.`,
 profile:`Élégante et raffinée, cette charmante Française d’origine asiatique séduit par son charme naturel, sa douceur et son sourire envoûtant. Sensuelle, attentionnée et pleine de délicatesse, elle vous promet un moment de complicité et d’évasion dans une atmosphère chaleureuse et discrète.`,
 services:`Prestations
​Massages
​Relaxant
​Californien
​Prostate
​Tantrique
​Jeux sensuels
​Strip-tease
​Caresses
​French kiss
​Facesitting
​Footjob
​Préliminaires & rapports
​Cunnilingus
​Branlette espagnole
​Fellation nature
​Fellation protégée
​Gorge profonde
​Rapport protégé
​Toutes positions Kamasutra
​Domination
​Domination douce (sur demande)
​Safe word systématique
​Sexcam
​Show en direct
​Cam à cam
​Jouets interactifs
​Scénarios sur mesure
​Nudes
​Photos intimes
​Vidéos personnalisées
​Pack sur demande
​Spécial
​Urophilie (donneuse) — uniquement sur demande et consentement éclairé
​Confort
​Douche avant / après
​Serviettes propres et peignoir
​Boisson offerte`,
 prices:`Tarifs  :
• 15 minutes : 50 €
• 30 minutes : 100 €
• 1 heure : 150 €
• 2 heures : 250 €
• 3 heures : 400 €
• Nuit (22 h–8 h) : 500 €
Disponibilité et conditions à confirmer directement.`,
 availability:`Disponible  24h/24. Chaque rendez-vous doit être confirmé directement. Indiquez date, heure et ville.`,
 booking:`📅 DEMANDE DE RENDEZ-VOUS – LUNA DEPLACEMENT

Veuillez préciser les informations suivantes :

• Date : JJ/MM/AAAA
• Heure : HH:MM
• Ville et pays :
• Durée souhaitée :
• Message complémentaire :

🌍 Les horaires doivent correspondre à l'heure locale du lieu du rendez-vous.

Votre demande sera soumise à confirmation directe par Luna.`,
 contact:`Pour contacter Luna, utilisez /booking avec votre demande.`,
 language:`Choisissez votre langue :`,
 help:`Commandes : /start /profile /gallery /services /prices /availability /booking /language /contact /myid`
},
en:{
 welcome:`Welcome to Luna Deplacement 🌙
Independent profile. Advertised availability 24/7; travel by request. Every appointment must be confirmed directly with Luna.`,
 profile:`Elegant and refined, this charming French woman of Asian origin captivates with her natural charm, gentle manner and enchanting smile. Attentive and delicate, she promises a warm, discreet atmosphere.`,
 services:`Services
Massages
Relaxing
Californian
Prostate
Tantric
Sensual games
Striptease
Caresses
French kiss
Facesitting
Footjob
Foreplay & intercourse
Cunnilingus
Spanish massage
Natural fellatio
Protected fellatio
Deep throat
Protected intercourse
Kama Sutra positions
Domination
Gentle domination (on request)
Safe word always
Sexcam
Live show
Cam to cam
Interactive toys
Custom scenarios
Nudes
Intimate photos
Personalized videos
Packages on request
Special
Urophilia (giver) — only on request and with informed consent
Comfort
Shower before / after
Clean towels and bathrobe
Complimentary drink`,
 prices:`Rates:
• 15 minutes: €50
• 30 minutes: €100
• 1 hour: €150
• 2 hours: €250
• 3 hours: €400
• Overnight (10 pm–8 am): €500
Availability and conditions to be confirmed directly.`,
 availability:`Available 24/7. Every appointment must be confirmed directly. Please indicate the date, time and city.`,
 booking:`📅 APPOINTMENT REQUEST – LUNA DEPLACEMENT

Please provide the following information:

• Date: DD/MM/YYYY
• Time: HH:MM
• City and country:
• Desired duration:
• Additional message:

🌍 Times must correspond to the local time at the appointment location.

Your request is subject to direct confirmation by Luna.`,
 contact:`To contact Luna, use /booking with your request.`, language:`Choose your language:`, help:`Commands: /start /profile /gallery /services /prices /availability /booking /language /contact /myid`
},
de:{
 welcome:`Willkommen bei Luna Deplacement 🌙
Unabhängiges Profil. Angegebene Verfügbarkeit rund um die Uhr; Anfahrt auf Anfrage. Jeder Termin muss direkt mit Luna bestätigt werden.`,
 profile:`Elegant und stilvoll: Diese charmante Französin asiatischer Herkunft bezaubert mit natürlichem Charme, Sanftheit und einem bezaubernden Lächeln. Aufmerksam und feinfühlig verspricht sie eine warme und diskrete Atmosphäre.`,
 services:`Leistungen
Massagen
Entspannungsmassage
Kalifornische Massage
Prostata
Tantrisch
Sinnliche Spiele
Striptease
Zärtlichkeiten
French Kiss
Facesitting
Footjob
Vorspiel & Geschlechtsverkehr
Cunnilingus
Spanische Massage
Fellatio ohne Kondom
Fellatio mit Schutz
Deep Throat
Geschützter Geschlechtsverkehr
Kamasutra-Positionen
Dominanz
Sanfte Dominanz (auf Anfrage)
Safeword immer
Sexcam
Live-Show
Cam zu Cam
Interaktive Spielzeuge
Individuelle Szenarien
Nacktfotos
Intime Fotos
Personalisierte Videos
Pakete auf Anfrage
Spezial
Urophilie (gebend) — nur auf Anfrage und mit informierter Einwilligung
Komfort
Dusche vorher / nachher
Saubere Handtücher und Bademantel
Getränk inklusive`,
 prices:`Preise:
• 15 Minuten: 50 €
• 30 Minuten: 100 €
• 1 Stunde: 150 €
• 2 Stunden: 250 €
• 3 Stunden: 400 €
• Übernachtung (22–8 Uhr): 500 €
Verfügbarkeit und Bedingungen müssen direkt bestätigt werden.`,
 availability:`Rund um die Uhr verfügbar. Jeder Termin muss direkt bestätigt werden. Bitte Datum, Uhrzeit und Stadt angeben.`,
 booking:`📅 TERMINANFRAGE – LUNA DEPLACEMENT

Bitte geben Sie folgende Informationen an:

• Datum: TT/MM/JJJJ
• Uhrzeit: HH:MM
• Stadt und Land:
• Gewünschte Dauer:
• Zusätzliche Nachricht:

🌍 Die Uhrzeit muss der Ortszeit am Terminort entsprechen.

Ihre Anfrage muss direkt von Luna bestätigt werden.`,
 contact:`Um Luna zu kontaktieren, verwenden Sie /booking.`, language:`Sprache auswählen:`, help:`Befehle: /start /profile /gallery /services /prices /availability /booking /language /contact /myid`
}
};
const labels={fr:[["Présentation","profile"],["Galerie","gallery"],["Prestations","services"],["Tarifs","prices"],["Disponibilités","availability"],["Réserver","booking"],["Langue","language"],["Aide","help"]],en:[["Profile","profile"],["Gallery","gallery"],["Services","services"],["Rates","prices"],["Availability","availability"],["Request appointment","booking"],["Language","language"],["Help","help"]],de:[["Profil","profile"],["Galerie","gallery"],["Leistungen","services"],["Preise","prices"],["Verfügbarkeit","availability"],["Termin anfragen","booking"],["Sprache","language"],["Hilfe","help"]]};
const keyboard=l=>({inline_keyboard:labels[l].map(([text,action])=>[{text,callback_data:action+":"+l}])});
async function tg(method,payload){const r=await fetch(`https://api.telegram.org/bot${TOKEN}/${method}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(payload)});const j=await r.json();if(!j.ok)throw Error(j.description);return j.result;}
const send=(chat_id,text,reply_markup)=>tg("sendMessage",{chat_id,text, ...(reply_markup?{reply_markup}:{})});
async function gallery(chat,l){const urls=(process.env.GALLERY_PHOTO_URLS||"").split(",").map(s=>s.trim()).filter(Boolean).slice(0,10);if(!urls.length)return send(chat,l==="en"?"The gallery is being prepared.":l==="de"?"Die Galerie wird vorbereitet.":"La galerie est en préparation.");return tg("sendMediaGroup",{chat_id:chat,media:urls.map((media,i)=>({type:"photo",media,...(i===0?{caption:"Luna Deplacement"}:{})}))});}
async function message(m){const chat=m.chat.id,txt=m.text||"",match=txt.match(/^\/([a-z_]+)(?:@\w+)?(?:\s+([\s\S]*))?$/i);if(!match){if(!txt.trim())return;const who=m.from.username?"@"+m.from.username:(m.from.first_name||"Utilisateur")+" (ID "+m.from.id+")";if(ADMIN){await send(ADMIN,"Nouvelle demande Luna Deplacement\nDe : "+who+"\nChat : "+chat+"\n\n"+txt.trim());return send(chat,"Demande transmise à Luna. Le rendez-vous reste à confirmer.");}return send(chat,"Votre message est reçu. La notification à Luna n'est pas encore configurée.");}const cmd=match[1].toLowerCase(),args=(match[2]||"").trim(),l="fr";
if(cmd==="myid")return send(chat,"Votre identifiant Telegram : "+chat);
if(cmd==="start")return send(chat,T[l].welcome,keyboard(l));
if(["profile","services","prices","availability","contact","help"].includes(cmd))return send(chat,T[l][cmd],keyboard(l));
if(cmd==="gallery")return gallery(chat,l);
if(cmd==="language")return send(chat,T[l].language,{inline_keyboard:[[{text:"Français",callback_data:"setlang:fr"},{text:"English",callback_data:"setlang:en"},{text:"Deutsch",callback_data:"setlang:de"}]]});
if(cmd==="booking"){if(!args)return send(chat,T[l].booking,keyboard(l));const who=m.from.username?"@"+m.from.username:(m.from.first_name||"Utilisateur")+" (ID "+m.from.id+")";if(ADMIN)await send(ADMIN,"Nouvelle demande Luna Deplacement\nDe : "+who+"\nChat : "+chat+"\n\n"+args);return send(chat,ADMIN?"Demande transmise à Luna. Le rendez-vous reste à confirmer.":"Demande reçue, mais la notification à Luna n'est pas encore configurée. L'administrateur doit ajouter votre identifiant dans ADMIN_CHAT_ID.");}
return send(chat,"Commande inconnue. Utilisez /help.");}
async function callback(c){await tg("answerCallbackQuery",{callback_query_id:c.id});const chat=c.message.chat.id,d=c.data||"";if(d.startsWith("setlang:")){const l=T[d.split(":")[1]]?d.split(":")[1]:"fr";return send(chat,T[l].welcome,keyboard(l));}const [a,raw]=d.split(":"),l=T[raw]?raw:"fr";if(a==="gallery")return gallery(chat,l);if(a==="language")return send(chat,T[l].language,{inline_keyboard:[[{text:"Français",callback_data:"setlang:fr"},{text:"English",callback_data:"setlang:en"},{text:"Deutsch",callback_data:"setlang:de"}]]});if(a==="booking")return send(chat,T[l].booking,keyboard(l));if(T[l][a])return send(chat,T[l][a],keyboard(l));}
module.exports=async(req,res)=>{if(req.method!=="POST")return res.status(405).send("Method Not Allowed");if(!TOKEN||!SECRET)return res.status(500).send("Missing configuration");if(req.headers["x-telegram-bot-api-secret-token"]!==SECRET)return res.status(401).send("Unauthorized");try{const u=req.body||{};if(u.message)await message(u.message);if(u.callback_query)await callback(u.callback_query);}catch(e){console.error(e.message);}return res.status(200).send("OK");};
