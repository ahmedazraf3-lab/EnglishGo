const STORAGE_KEY = 'englishGoData';

const LEVELS = [
  {id:1, title:'Saludos y despedidas', emoji:'👋', diff:'Principiante'},
  {id:2, title:'Alfabeto y pronunciación', emoji:'🔤', diff:'Principiante'},
  {id:3, title:'El verbo to be', emoji:'🧍', diff:'Principiante'},
  {id:4, title:'Presente simple', emoji:'📖', diff:'Principiante'},
  {id:5, title:'Vocabulario: la familia', emoji:'👨‍👩‍👧', diff:'Principiante'},
  {id:6, title:'Artículos a / an / the', emoji:'📰', diff:'Principiante'},
  {id:7, title:'Preguntas básicas', emoji:'❓', diff:'Principiante'},
  {id:8, title:'Números y precios', emoji:'🔢', diff:'Principiante'},
  {id:9, title:'Presente continuo', emoji:'⏳', diff:'Intermedio'},
  {id:10, title:'Preposiciones de lugar', emoji:'📍', diff:'Intermedio'},
  {id:11, title:'Pasado simple', emoji:'⏮', diff:'Intermedio'},
  {id:12, title:'Vocabulario: comida', emoji:'🍕', diff:'Intermedio'}
];

const RAW_LESSONS = {
  1: [
    {type:'teach', emoji:'👋', title:'Saludos comunes',
      body:'Usamos saludos distintos según el momento del día y la formalidad.',
      pairs:[['Hello','Hola (formal/neutro)'],['Hi','Hola (informal)'],['Good morning','Buenos días'],['Good afternoon','Buenas tardes'],['Good evening','Buenas noches (al llegar)']],
      examples:[
        ['Good morning! Did you sleep well last night?','¡Buenos días! ¿Dormiste bien anoche?'],
        ['Hi! It is so nice to see you again after all this time.','¡Hola! Qué bien verte otra vez después de tanto tiempo.']
      ]},
    {type:'mcq', question:'You meet your boss at 9 AM in the office corridor. What do you say?',
      translation:'Te encuentras con tu jefe a las 9 de la mañana en el pasillo de la oficina. ¿Qué dices?',
      options:['Good morning','Good night','Goodbye'], correct:'Good morning',
      explanation:"A las 9 de la mañana usamos 'Good morning', no 'Good night' (que es para despedirse antes de dormir)."},
    {type:'teach', emoji:'👋', title:'Despedidas comunes',
      body:'Para despedirnos, también hay varias opciones según el contexto.',
      pairs:[['Goodbye','Adiós'],['Bye','Chao (informal)'],['See you later','Nos vemos luego'],['Take care','Cuídate'],['Have a nice day','Que tengas buen día']],
      examples:[
        ['See you later! I have to go now because my train is leaving soon.','¡Nos vemos luego! Tengo que irme porque mi tren sale pronto.'],
        ['Take care and have a nice day at work!','¡Cuídate y que tengas un buen día en el trabajo!']
      ]},
    {type:'fill', question:'___ you later! I have to go now because my bus is arriving.',
      translation:'¡Nos vemos luego! Tengo que irme porque mi autobús está llegando.',
      correct:'See', explanation:"'See you later' es una despedida informal muy común entre compañeros o amigos."},
    {type:'teach', emoji:'📘', title:'Repaso rápido', isReview:true,
      body:'Ya conoces los saludos y despedidas más comunes en inglés:',
      pairs:[['Mañana','Good morning'],['Tarde','Good afternoon'],['Al despedirte','Goodbye / See you later']],
      examples:[['Elige el saludo según la hora y la formalidad de la situación.','Elige la despedida según lo cercana que sea la persona.']]},
    {type:'quizgroup', questions:[
      {question:'It is 8 PM and you are leaving your friend\'s house. What do you say?', translation:'Son las 8 de la tarde y sales de casa de tu amigo. ¿Qué dices?', options:['Good morning','Good evening','See you later'], correct:'See you later', explanation:"Al despedirte de forma informal usamos 'See you later', no un saludo de llegada."},
      {question:'A colleague you barely know says hello formally in the elevator. You reply:', translation:'Un compañero que apenas conoces te saluda formalmente en el ascensor. Respondes:', options:['Hi','Hello','Bye'], correct:'Hello', explanation:"'Hello' es más formal y neutro que 'Hi', apropiado con alguien que no conoces bien."},
      {question:'Your grandmother is going to sleep. You say:', translation:'Tu abuela se va a dormir. Le dices:', options:['Good night','Good evening','Good morning'], correct:'Good night', explanation:"'Good night' se usa específicamente antes de irse a dormir."}
    ]}
  ],
  2: [
    {type:'teach', emoji:'🔤', title:'Las vocales', 
      body:'El inglés tiene 5 vocales, pero muchos más sonidos vocálicos que el español. Su pronunciación cambia según la palabra.',
      pairs:[['A','como en cat, name'],['E','como en bed, tree'],['I','como en sit, time'],['O','como en dog, home'],['U','como en cup, blue']],
      examples:[
        ['The cat is sitting under the table near the window.','El gato está sentado bajo la mesa cerca de la ventana.'],
        ['I would like a blue umbrella for the rainy season.','Me gustaría un paraguas azul para la temporada de lluvias.']
      ]},
    {type:'mcq', question:'Which of these letters is a vowel in English?',
      translation:'¿Cuál de estas letras es una vocal en inglés?',
      options:['B','E','T'], correct:'E', explanation:"Las vocales en inglés son A, E, I, O, U — igual que en español."},
    {type:'teach', emoji:'🤫', title:'Letras mudas', 
      body:'Algunas palabras en inglés tienen letras que no se pronuncian, lo cual confunde a muchos estudiantes.',
      pairs:[['Knife','la K es muda'],['Hour','la H es muda'],['Write','la W es muda'],['Comb','la B es muda']],
      examples:[
        ['She used a sharp knife to cut the fresh vegetables.','Ella usó un cuchillo afilado para cortar las verduras frescas.'],
        ['It took almost an hour to finish writing the report.','Tardó casi una hora en terminar de escribir el informe.']
      ]},
    {type:'teach', emoji:'📘', title:'Repaso rápido', isReview:true,
      body:'Recuerda estos puntos clave sobre pronunciación:',
      pairs:[['Vocales','A E I O U, con distintos sonidos'],['Letras mudas','knife, hour, write, comb']],
      examples:[['Practica en voz alta: la pronunciación se aprende repitiendo, no solo leyendo.','']]},
    {type:'quizgroup', questions:[
      {question:'In the word "hour", which letter is silent?', translation:'En la palabra "hour", ¿qué letra es muda?', options:['H','O','R'], correct:'H', explanation:"En 'hour' la H no se pronuncia: suena como 'auer'."},
      {question:'Which word contains a silent letter?', translation:'¿Qué palabra contiene una letra muda?', options:['Cat','Knife','Sun'], correct:'Knife', explanation:"En 'knife' la K es muda."},
      {question:'How many vowels are there in the English alphabet?', translation:'¿Cuántas vocales hay en el alfabeto inglés?', options:['4','5','6'], correct:'5', explanation:"Las vocales son A, E, I, O, U: un total de 5."}
    ]}
  ],
  3: [
    {type:'teach', emoji:'🧠', title:'to be — forma afirmativa',
      body:'El verbo <b>to be</b> (ser/estar) cambia según la persona. Es el verbo más usado en inglés.',
      pairs:[['I','am'],['You','are'],['He / She / It','is'],['We','are'],['They','are']],
      examples:[
        ['My best friend is extremely funny and generous.','Mi mejor amigo es extremadamente divertido y generoso.'],
        ['We are very excited about the upcoming trip to Italy.','Estamos muy emocionados por el próximo viaje a Italia.'],
        ['They are talented musicians who perform every weekend.','Son músicos talentosos que actúan cada fin de semana.']
      ]},
    {type:'mcq', question:'My neighbor ___ an incredibly talented painter who sells his artwork online.',
      translation:'Mi vecino es un pintor increíblemente talentoso que vende su arte en línea.',
      options:['is','are','am'], correct:'is', explanation:"'My neighbor' equivale a he/she, tercera persona del singular: is."},
    {type:'teach', emoji:'🚫', title:'to be — forma negativa',
      body:"Para negar, añadimos <b>not</b> después del verbo. En forma contraída: isn't, aren't, am not.",
      pairs:[['I','am not'],['You',"aren't"],['He / She / It',"isn't"],['We',"aren't"],['They',"aren't"]],
      examples:[
        ["He isn't interested in playing video games anymore.","Él ya no está interesado en jugar videojuegos."],
        ["We aren't ready to leave the house yet.","Todavía no estamos listos para salir de casa."]
      ]},
    {type:'fill', question:'We ___ planning to travel this summer because of work.',
      translation:'No estamos planeando viajar este verano por el trabajo.',
      correct:'are', explanation:"'We are not' se contrae en 'aren't'; la palabra que falta es are."},
    {type:'teach', emoji:'❓', title:'to be — preguntas',
      body:'Para preguntar, invertimos el orden: el verbo to be va antes del sujeto.',
      pairs:[['Am I...?','¿Soy/Estoy...?'],['Are you...?','¿Eres/Estás...?'],['Is he/she/it...?','¿Es/Está...?'],['Are we/they...?','¿Somos/Están...?']],
      examples:[
        ['Is she coming to the party tonight?','¿Ella viene a la fiesta esta noche?'],
        ['Are you interested in learning a new language?','¿Estás interesado en aprender un nuevo idioma?']
      ]},
    {type:'mcq', question:'___ you excited about your new job opportunity at the company?',
      translation:'¿Estás emocionado por tu nueva oportunidad de trabajo en la empresa?',
      options:['Are','Is','Am'], correct:'Are', explanation:"Con 'you' siempre usamos are, también al empezar la pregunta."},
    {type:'teach', emoji:'📘', title:'Repaso rápido', isReview:true,
      body:'Ya conoces las tres formas del verbo to be:',
      pairs:[['Afirmativa','I am, you are, he/she/it is...'],['Negativa',"I am not, you aren't..."],['Pregunta','Am I...? Are you...?']],
      examples:[['Recuerda: am con I · is con he/she/it · are con you/we/they y plurales.','']]},
    {type:'quizgroup', questions:[
      {question:'My cousins ___ extremely hardworking and always help each other with their homework.', translation:'Mis primos son extremadamente trabajadores y siempre se ayudan con los deberes.', options:['is','am','are'], correct:'are', explanation:"'My cousins' es plural: are."},
      {question:'___ he going to join us for dinner at the new restaurant tonight?', translation:'¿Va a unirse a nosotros para cenar en el nuevo restaurante esta noche?', options:['Is','Are','Am'], correct:'Is', explanation:"'He' es tercera persona del singular: is."},
      {question:'I ___ not familiar with this particular topic, so please explain it slowly.', translation:'No estoy familiarizado con este tema en particular, así que explícalo despacio, por favor.', options:['am','is','are'], correct:'am', explanation:"Con 'I' siempre usamos am."},
      {question:'She ___ interested in changing her career right now, even though the offer is good.', translation:'Ella no está interesada en cambiar de carrera ahora mismo, aunque la oferta es buena.', options:["isn't","aren't","am not"], correct:"isn't", explanation:"'She' es tercera persona del singular: isn't."}
    ]}
  ]
};

function buildSteps(levelId){
  const raw = RAW_LESSONS[levelId];
  if(!raw) return null;
  let flat=[];
  raw.forEach(s=>{
    if(s.type==='quizgroup'){
      s.questions.forEach(q=>flat.push({type:'mcq', quiz:true, question:q.question, translation:q.translation, options:q.options, correct:q.correct, explanation:q.explanation}));
      flat.push({type:'result'});
    } else flat.push(s);
  });
  return flat;
}

function todayStr(){ return new Date().toISOString().slice(0,10); }

function loadData(){
  const raw = localStorage.getItem(STORAGE_KEY);
  let data = raw ? JSON.parse(raw) : null;
  if(!data){
    data = {
      xp:0, streak:0, lastActiveDate:null, totalSeconds:0,
      levelStatus:{1:'current'}
    };
  }
  const today = todayStr();
  if(data.lastActiveDate !== today){
    const y = new Date(); y.setDate(y.getDate()-1);
    const yesterday = y.toISOString().slice(0,10);
    data.streak = (data.lastActiveDate === yesterday) ? data.streak + 1 : 1;
    data.lastActiveDate = today;
    data.sessionStartSeconds = data.totalSeconds;
  }
  if(data.sessionStartSeconds === undefined) data.sessionStartSeconds = data.totalSeconds;
  return data;
}
function saveData(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(D)); }

let D = loadData();
let currentLevelId = null;
let steps = [];
let stepIndex = 0;
let hearts = 3;
let quizScore = 0;
let levelCompleted = false;
let xpEarned = 0;
let ex = {attempted:false, locked:false, selected:null, wrong:null, heartLost:false};

function resetEx(){ ex = {attempted:false, locked:false, selected:null, wrong:null, heartLost:false}; }

function levelStatus(id){
  return D.levelStatus[id] || 'locked';
}

function goHome(){ location.hash = '#home'; }
function goLevels(){ location.hash = '#levels'; }
function startLesson(id){
  if(levelStatus(id) === 'locked') return;
  const built = buildSteps(id);
  if(!built){ alert('Este nivel se añadirá próximamente 🚧'); return; }
  currentLevelId = id; steps = built; stepIndex = 0; hearts = 3; quizScore = 0; levelCompleted = false;
  resetEx();
  location.hash = '#lesson/' + id;
}

function nextStep(){
  stepIndex++;
  resetEx();
  if(steps[stepIndex] && steps[stepIndex].type === 'result') completeLevel();
  render();
}

function completeLevel(){
  if(levelCompleted) return;
  levelCompleted = true;
  D.levelStatus[currentLevelId] = 'completed';
  const nextId = currentLevelId + 1;
  if(!D.levelStatus[nextId] || D.levelStatus[nextId] === 'locked'){
    D.levelStatus[nextId] = 'current';
  }
  xpEarned = 50 + quizScore * 10;
  D.xp += xpEarned;
  saveData();
}

function selectMcq(value){
  const step = steps[stepIndex];
  if(ex.locked) return;
  if(value === step.correct){
    ex.locked = true; ex.selected = value;
    if(step.quiz) quizScore++;
  } else {
    ex.attempted = true; ex.wrong = value;
    if(step.quiz && !ex.heartLost){ hearts = Math.max(0, hearts - 1); ex.heartLost = true; }
  }
  render();
}

function checkFill(){
  const step = steps[stepIndex];
  const val = (document.getElementById('fillInput').value || '').trim().toLowerCase();
  if(!val) return;
  if(val === step.correct.toLowerCase()){ ex.locked = true; ex.selected = val; }
  else { ex.attempted = true; ex.wrong = val; }
  render();
}

function fmtTime(sec){
  const h = Math.floor(sec/3600), m = Math.floor((sec%3600)/60), s = sec%60;
  const mm = String(m).padStart(2,'0'), ss = String(s).padStart(2,'0');
  return h > 0 ? h + ':' + mm + ':' + ss : mm + ':' + ss;
}

function diffBadgeClass(d){ return 'badge badge-' + d; }

function escapeAttr(s){ return String(s).replace(/'/g, "\\'"); }

function header(showBack){
  return `<div class="header">
    ${showBack ? `<button class="back-btn" onclick="goHome()">←</button>` : `<div class="logo">🐝 EnglishGo</div>`}
    <div class="timer-chip">⏱ <span id="timerDisplay">${fmtTime(D.totalSeconds)}</span></div>
  </div>`;
}

function renderHome(){
  const currentId = Object.keys(D.levelStatus).find(id => D.levelStatus[id] === 'current');
  const lvl = LEVELS.find(l => l.id === Number(currentId));
  const sessionSeconds = D.totalSeconds - D.sessionStartSeconds;
  const dailyMin = Math.min(20, Math.floor(sessionSeconds/60));
  let h = header(false);
  h += `<div class="metrics">
    <div class="metric-card"><div class="label">🔥 Racha</div><div class="value">${D.streak} días</div></div>
    <div class="metric-card"><div class="label">⭐ XP total</div><div class="value">${D.xp}</div></div>
  </div>`;
  h += `<div class="goal-bar-wrap">
    <div class="goal-label"><span>Meta diaria</span><span>${dailyMin}/20 min</span></div>
    <div class="progress-track"><div class="progress-fill" style="width:${Math.round(dailyMin/20*100)}%"></div></div>
  </div>`;
  if(lvl){
    h += `<div class="continue-card">
      <div class="tag">Continúa donde lo dejaste</div>
      <div class="title">${lvl.emoji} Nivel ${lvl.id}: ${lvl.title}</div>
      <button class="btn" onclick="startLesson(${lvl.id})">▶ Continuar lección (~15 min)</button>
    </div>`;
  }
  h += `<button class="btn btn-outline" onclick="goLevels()">📋 Ver todos los niveles</button>`;
  return h;
}

function renderLevels(){
  let h = header(true);
  h += `<p style="color:var(--text-soft);font-size:13px;margin-bottom:12px;">Bloque 1 · Fundamentos</p>`;
  LEVELS.forEach(l => {
    const status = levelStatus(l.id);
    const locked = status === 'locked';
    const icon = status === 'completed' ? '✅' : status === 'current' ? '▶️' : '🔒';
    h += `<button class="level-row" ${locked ? 'disabled' : ''} onclick="startLesson(${l.id})">
      <span class="emoji">${l.emoji}</span>
      <span class="info">
        <span class="title">Nivel ${l.id}: ${l.title}</span><br>
        <span class="${diffBadgeClass(l.diff)}">${l.diff}</span>
      </span>
      <span>${icon}</span>
    </button>`;
  });
  h += `<p style="text-align:center;color:var(--text-soft);font-size:12px;margin-top:10px;">+ 88 niveles más próximamente 🚀</p>`;
  return h;
}

function optionButton(step, opt){
  let cls = 'option-btn';
  let disabled = '';
  if(ex.locked){
    if(opt === ex.selected) cls += ' correct';
    else { cls += ' dim'; disabled = 'disabled'; }
  } else if(ex.wrong === opt){
    cls += ' wrong';
  }
  return `<button class="${cls}" ${disabled} onclick="selectMcq('${escapeAttr(opt)}')">${opt}</button>`;
}

function feedbackBox(step){
  let h = '';
  if(ex.locked){
    h += `<div class="feedback ok">✅ ¡Correcto! ${step.explanation}</div>`;
    h += `<button class="btn" onclick="nextStep()">Continuar</button>`;
  } else if(ex.attempted){
    h += `<div class="feedback bad">❌ Incorrecto. ${step.explanation} Inténtalo de nuevo.</div>`;
  }
  return h;
}

function skipLink(){ return `<button class="skip-link" onclick="nextStep()">Saltar →</button>`; }

function renderLessonStep(){
  const step = steps[stepIndex];
  let h = '';
  if(step.type === 'teach'){
    h += `<div style="font-size:17px;font-weight:700;margin-bottom:8px;">${step.emoji} ${step.title}</div>`;
    h += `<p style="line-height:1.6;">${step.body}</p>`;
    h += `<div class="pair-grid">`;
    step.pairs.forEach(p => h += `<div class="pair-chip"><b>${p[0]}</b> → ${p[1]}</div>`);
    h += `</div>`;
    step.examples.forEach(e => {
      h += `<p class="example">"${e[0]}"</p>`;
      if(e[1]) h += `<p class="example-es">🇪🇸 ${e[1]}</p>`;
    });
    h += `<button class="btn" style="margin-top:8px;" onclick="nextStep()">Continuar</button>`;
  } else if(step.type === 'mcq'){
    h += `<div style="overflow:auto;margin-bottom:4px;">${step.quiz ? '<span style="font-size:12px;color:var(--text-soft);">🧪 Mini prueba</span>' : ''}${skipLink()}</div>`;
    h += `<p style="font-size:16px;font-weight:700;margin:6px 0 4px;">${step.question}</p>`;
    h += `<p style="font-size:12px;color:var(--text-soft);margin:0 0 14px;">🇪🇸 ${step.translation}</p>`;
    step.options.forEach(o => h += optionButton(step, o));
    h += feedbackBox(step);
  } else if(step.type === 'fill'){
    h += `<div style="overflow:auto;margin-bottom:4px;">${skipLink()}</div>`;
    h += `<p style="font-size:16px;font-weight:700;margin:6px 0 4px;">${step.question}</p>`;
    h += `<p style="font-size:12px;color:var(--text-soft);margin:0 0 14px;">🇪🇸 ${step.translation}</p>`;
    h += `<input id="fillInput" class="fill-input" type="text" placeholder="Escribe la palabra" ${ex.locked ? 'readonly' : ''} value="${ex.selected || ''}" />`;
    if(!ex.locked) h += `<button class="btn" onclick="checkFill()">Comprobar</button>`;
    h += feedbackBox(step);
  } else if(step.type === 'result'){
    const total = steps.filter(s => s.quiz).length;
    h += `<div style="text-align:center;">
      <div style="font-size:44px;">🎉</div>
      <div style="font-size:19px;font-weight:800;margin:6px 0 4px;">Nivel completado</div>
      <p style="color:var(--text-soft);margin:0 0 16px;">Acertaste ${quizScore} de ${total} preguntas</p>
      <div style="display:flex;justify-content:center;gap:24px;margin-bottom:18px;">
        <div><div style="font-size:12px;color:var(--text-soft);">XP ganado</div><div style="font-size:18px;font-weight:800;">+${xpEarned}</div></div>
        <div><div style="font-size:12px;color:var(--text-soft);">Vidas</div><div style="font-size:18px;">${'❤️'.repeat(hearts)}${'🖤'.repeat(3-hearts)}</div></div>
      </div>
      <button class="btn" onclick="goLevels()">Volver a los niveles</button>
      <div style="height:8px;"></div>
      <button class="btn btn-outline" onclick="goHome()">Ir al inicio</button>
    </div>`;
  }
  return h;
}

function renderLesson(){
  const lvl = LEVELS.find(l => l.id === currentLevelId);
  const pct = Math.round(((stepIndex+1) / steps.length) * 100);
  let h = header(true);
  h += `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
    <span style="font-size:13px;color:var(--text-soft);">${lvl.emoji} Nivel ${lvl.id}: ${lvl.title}</span>
    <span class="hearts">${'❤️'.repeat(hearts)}${'🖤'.repeat(3-hearts)}</span>
  </div>`;
  h += `<div class="progress-track" style="margin-bottom:16px;"><div class="progress-fill" style="width:${pct}%"></div></div>`;
  h += `<div class="lesson-card">${renderLessonStep()}</div>`;
  return h;
}

function render(){
  const hash = location.hash || '#home';
  const root = document.getElementById('app');
  if(hash === '#home'){ root.innerHTML = renderHome(); }
  else if(hash === '#levels'){ root.innerHTML = renderLevels(); }
  else if(hash.startsWith('#lesson/')){
    const id = Number(hash.split('/')[1]);
    if(currentLevelId !== id && !steps.length){ startLesson(id); return; }
    root.innerHTML = renderLesson();
  } else { root.innerHTML = renderHome(); }
}

window.addEventListener('hashchange', render);
window.addEventListener('load', () => {
  render();
  setInterval(() => {
    D.totalSeconds++;
    const el = document.getElementById('timerDisplay');
    if(el) el.textContent = fmtTime(D.totalSeconds);
  }, 1000);
  setInterval(saveData, 5000);
  window.addEventListener('beforeunload', saveData);
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js').catch(()=>{});
  }
});
