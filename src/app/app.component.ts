import { Component } from '@angular/core';
import { PandaComponent } from './Panda.component';
import { RevealDirective } from './Reveal.directive';

// ====== PERSONALIZA AQUÍ ======
const START_DATE = new Date(2026, 7, 30); // año, mes (0=enero), día
const HER_NAME = 'Marisol';               // su nombre o apodo
const FORCE_UNLOCK = false;               // true = probar todo desbloqueado
// Carpeta de fotos: 'photos/' si usas public/photos (Angular 18+), 'assets/photos/' si usas src/assets/photos
const P = 'photos/';

interface Letter { emoji: string; title: string; text: string; photo: string; }
interface Month { n: number; title: string; text: string; photo?: string; }

const LETTERS: Letter[] = [
  {
    emoji: '🌧️',
    title: 'Para cuando estés triste',
    text: `Si estás leyendo esto, es porque hoy no es un buen día, y está bien.
No tienes que fingir que estás bien conmigo, nunca. Quizá hice algo que te puso triste y de verdad lo lamento, mi niña hermosa.

Respira hondo. Toma agua. Y recuerda que lo que sientes ahora es momentáneo.
Un día difícil no significa una vida difícil.

Yo no puedo quitarte la tristeza, pero puedo y quiero quedarme contigo mientras dura.
Escríbeme o llámame, aunque sea sin decir nada, por favor.
Yo siempre estaré para ti porque somos un equipo y tú eres mi prioridad.

Eres más fuerte de lo que crees, Mari. Muy resiliente y capaz; te admiro.

Te quiero mucho. Siempre.`,
    photo: P + 'mes12.png',
  },
  {
    emoji: '💭',
    title: 'Para cuando me extrañes',
    text: `Yo también te extraño, mi princesa. Justo ahora, probablemente. Y hace 5 minutos, y ayer, y anteayer...
En fin, todos los días.

Mientras no estoy, quédate con esto:
· Cada vez que pienso en nuestro primer beso, sonrío solo.
· Muero por volver a dormir abrazados y sentir latir tu corazón.
· Extraño tu sonrisa, tus pómulos que me encantan, tus abrazos que me hacen sentir en paz y tus besos que me derriten.
· Cada día que pasa es un día menos para volver a vernos.

Mira nuestra foto, escucha Sin Aviso de Guero Banks y piensa que en algún lugar, un poco lejos quizá,
hay alguien que está pensando en ti y te extraña con la misma intensidad.

Pronto nos veremos, mi niña hermosa ❤️`,
    photo: P + 'yoo.jpeg',
  },
  {
    emoji: '😂',
    title: 'Para cuando necesites reírte',
    text: `Prioridad: sacarte una sonrisa.

1. Acuérdate de cuando, en todos los tours de Arequipa, me llamaban la atención por llegar tarde.
2. Imagina mi cara cuando empezamos a hablar y me contaste de Cori: pensé que ya tenías una hija 😂.
3. Piensa en Canta y en cómo nos pelamos de frío esa noche.
4. O cuando, en Tambo, me pidieron mi DNI para saber si era mayor de edad; es que soy muy joven.
5. En fin, recuerda cualquier momento juntos y sé que te habré sacado una sonrisa.

Si aún no sonríes, mándame un mensaje y te enviaré los mejores stickers que tengo c:

Tu risa es mi sonido favorito. No lo olvides.`,
    photo: P + 'reirr.jpg',
  },
  {
    emoji: '🫂',
    title: 'Para cuando tengas un mal día',
    text: `Ya sé que todo salió mal hoy. Solo dame una señal de que fue así y me tendrás a tu lado, abrazándote.

O un plan de rescate:
· Come algo rico, quizá una mazamorra con arroz con leche, unos alfajores o un quesito con miel...
· Ponte ropa cómoda o date un baño calientito.
· Pon tu canción o tu serie favorita y deja que el tiempo pase y calme todo un poco.
· Mañana será otro día, y yo voy a estar ahí para intentar hacerlo un poquito más feliz para ti.

Un mal día no cambia quién eres. Sigues siendo esa mujer fuerte, decidida y maravillosa que admiro, incluso cuando todo se complica. ❤️

Estoy orgulloso de ti, siempre.`,
    photo: P + 'reir.jpeg',
  },
  {
    emoji: '🌀',
    title: 'Para cuando sobrepienses',
    text: `Sé que tu cabeza va a mil por hora. Para un segundo. Respira, por favor, linda.

Antes de armar una película, recuerda:
· Lo que sientes no siempre es la realidad; yo puedo equivocarme en mis palabras o acciones sin querer.
· Si algo te preocupa de nosotros, pregúntame. Prefiero mil veces una conversación incómoda que tu silencio, que mata y duele.
· Yo estoy aquí porque quiero estar. Tú eres y serás mi compañera de vida; somos un equipo que lo puede todo.

"Lo nuestro es auténtico y lo elijo a diario. Aunque tengamos días malos, mi sentimiento por ti va más allá de una emoción, es una decisión. Te quiero demasiado, Mari.
Eres la pieza que me hacía falta y la persona por la que valió la pena esperar."

Ahora deja el celular un ratito, respira y ven a decirme qué pasa. Háblame, por favor. Te escuchooo.`,
    photo: P + 'sobre.jpg',
  },
];

const NAMES = ['Primer mes', 'Segundo mes', 'Tercer mes', 'Cuarto mes', 'Quinto mes', 'Sexto mes',
  'Séptimo mes', 'Octavo mes', 'Noveno mes', 'Décimo mes', 'Undécimo mes', 'Nuestro primer año'];

// Un texto por mes, en el mismo orden que NAMES. Completa cada uno ANTES de su fecha de desbloqueo.
const MONTH_TEXTS: string[] = [
  `Buenos días, mi niña hermosa ⛅
Dueña de mi corazón y de mis pensamientos.

Hoy cumplimos un mes desde que tomamos una decisión muy acertada: ser enamorados.
Agradezco haber dado ese paso, porque tenerte a mi lado me motiva a mejorar, a pensar a futuro y a construir una conexión sólida y difícil de romper. Contigo estoy aprendiendo a escuchar, hablar, comprender y crecer día a día. Sé que no seremos una pareja perfecta, pero sí quiero que seamos un equipo inquebrantable, de esos que superan todo juntos, porque mi deseo es estar a tu lado siempre.
Ya no puedo imaginarme mis días sin ti. Feliz primer mes, mi Mari. Te quiero demasiado. Por favor, nunca lo dudes. ❤️`,
  // `Texto del segundo mes...`,
  // `Texto del tercer mes...`,
];

const MONTHS: Month[] = NAMES.map((title, i) => ({
  n: i + 1,
  title,
  text: MONTH_TEXTS[i] ?? 'Escribe aquí el mensaje de este mes...',
  photo: P + `mes${i + 1}.jpg`,
}));
// ===============================

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PandaComponent, RevealDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  herName = HER_NAME;
  letters = LETTERS;
  months = MONTHS;
  openLetter: Letter | null = null;
  openMonth: Month | null = null;

  hearts = Array.from({ length: 16 }, () => ({
    left: Math.random() * 100,
    size: 12 + Math.random() * 20,
    delay: Math.random() * 10,
    dur: 9 + Math.random() * 8,
  }));

  get daysTogether(): number {
    return Math.floor((Date.now() - START_DATE.getTime()) / 86400000);
  }

  get nextLock(): { title: string; days: number } | null {
    const m = this.months.find(x => !this.isUnlocked(x));
    if (!m) return null;
    const days = Math.ceil((this.unlockDate(m).getTime() - Date.now()) / 86400000);
    return { title: m.title, days };
  }

  // Si el mes destino no tiene ese día (ej. 30 de febrero), usa el último día del mes.
  unlockDate(m: Month): Date {
    const d = new Date(START_DATE.getFullYear(), START_DATE.getMonth() + m.n, 1);
    const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    d.setDate(Math.min(START_DATE.getDate(), lastDay));
    return d;
  }

  isUnlocked(m: Month): boolean {
    return FORCE_UNLOCK || new Date() >= this.unlockDate(m);
  }

  formatDate(d: Date): string {
    return d.toLocaleDateString('es-PE', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  selectMonth(m: Month) { if (this.isUnlocked(m)) this.openMonth = m; }
  close() { this.openLetter = null; this.openMonth = null; }
  hideImg(e: Event) { (e.target as HTMLElement).style.display = 'none'; }
}