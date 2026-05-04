// ============ КВИЗ "УГАДАЙ ГЕРОЯ" - 30 ВОПРОСОВ ============
const allQuizQuestions = [
  { question: "Кто набрал 100 баллов в аттестации?", options: ["Грачёв Егор", "Крутов Владислав", "Писарева Анастасия", "Митерина Валентина"], correct: 1 },
  { question: "Какая сумма была сэкономлена на скидке пивных стаканов Pasabahce?", options: ["506 796 ₽", "725 587 ₽", "838 000 ₽", "370 000 ₽"], correct: 1 },
  { question: "На сколько процентов выросли продажи Drinksome после мастер-класса в Ярославле?", options: ["100%", "120%", "160%", "200%"], correct: 2 },
  { question: "Кто занял 1 место среди менеджеров КБ Москва?", options: ["Митерина Валентина", "Грачёв Егор", "Решетникова Анна", "Прусакова Юлия"], correct: 1 },
  { question: "Сколько баллов набрала Писарева Анастасия?", options: ["95", "96", "98", "99"], correct: 3 },
  { question: "В какой сети появился малиновый раф на основе сиропа P&D?", options: ["DrinkIt", "Surf Coffee", "Перекрёсток Select", "Starbucks"], correct: 1 },
  { question: "Сколько отелей в сети Cosmos Hotel Group?", options: ["35", "41", "47", "50"], correct: 1 },
  { question: "Какую сумму составила отгрузка пюре P&D?", options: ["5 млн ₽", "7 млн ₽", "9 млн ₽", "11 млн ₽"], correct: 2 },
  { question: "Кто организовала мастер-класс Drinksome в Ярославле?", options: ["Тоцкая Алёна", "Решетникова Анна", "Раби Анастасия", "Спиридонова Мария"], correct: 0 },
  { question: "Сколько ДС переоформила Шиманская Елена?", options: ["41", "47", "51", "55"], correct: 2 },
  { question: "Какая экономия была достигнута на доставке для BDK?", options: ["2 000 евро", "4 000 евро", "6 000 евро", "8 000 евро"], correct: 1 },
  { question: "Сколько SKU новинок заведено по бренду Osnova?", options: ["30", "40", "50", "60"], correct: 2 },
  { question: "Какой кредитный лимит согласован с поставщиком?", options: ["200 000 EUR", "250 000 EUR", "300 000 EUR", "350 000 EUR"], correct: 2 },
  { question: "Сколько клиентов привлекла Александра Кузьмина в конкурсе?", options: ["30", "43", "53", "63"], correct: 2 },
  { question: "Какая сумма транзакций у Надежды Кикашовой?", options: ["283 282 ₽", "333 282 ₽", "383 282 ₽", "433 282 ₽"], correct: 2 },
  { question: "Сколько новых пользователей зарегистрировалось на сайте КБ Ярославль?", options: ["20", "30", "40", "50"], correct: 1 },
  { question: "Какую сумму возвратили после проверок без КТС?", options: ["638 000 ₽", "738 000 ₽", "838 000 ₽", "938 000 ₽"], correct: 2 },
  { question: "На сколько дней ускорено получение продукции ODK?", options: ["20", "25", "30", "35"], correct: 2 },
  { question: "Сколько отсрочка платежа согласована с поставщиком?", options: ["60 дней", "75 дней", "90 дней", "105 дней"], correct: 1 },
  { question: "Какой бренд посуды выбрала Анна Решетникова для Cosmos?", options: ["Pasabahce", "Кунстверк", "Luminarc", "Bormioli"], correct: 1 },
  { question: "Сколько км проехала на велосипеде Мария Спиридонова?", options: ["800", "900", "1000", "1100"], correct: 2 },
  { question: "На какую сумму обеспечена поставка в Большой театр?", options: ["6 млн ₽", "7 млн ₽", "8 млн ₽", "9 млн ₽"], correct: 2 },
  { question: "Сколько точек DrinkIt открыто в Екатеринбурге?", options: ["2", "3", "4", "5"], correct: 2 },
  { question: "Какой кредитный лимит с ООО «Дринксом»?", options: ["2 млн ₽", "3 млн ₽", "4 млн ₽", "5 млн ₽"], correct: 1 },
  { question: "Сколько образцов получено от Неман?", options: ["10", "12", "14", "16"], correct: 2 },
  { question: "Какая экономия на одном контейнере по кодам ТН ВЭД?", options: ["70 000 ₽", "80 000 ₽", "90 000 ₽", "100 000 ₽"], correct: 2 },
  { question: "Сколько товара сохранено при закрытии границ?", options: ["150 000 евро", "175 000 евро", "200 000 евро", "225 000 евро"], correct: 2 },
  { question: "Какая общая экономия по скидкам Pasabahce?", options: ["406 796 ₽", "456 796 ₽", "506 796 ₽", "556 796 ₽"], correct: 2 },
  { question: "Сколько заказов оформлено после звонков Колл-центра?", options: ["37", "42", "47", "52"], correct: 2 },
  { question: "Какая экономия на санкционных товарах без санкционного маршрута?", options: ["4 000 евро", "5 000 евро", "6 000 евро", "7 000 евро"], correct: 2 }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function initQuiz() {
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const resultEl = document.getElementById('result');
  const nextBtn = document.getElementById('next-btn');
  
  if (!questionEl || !optionsEl) return;
  
  // Выбираем 5 случайных вопросов
  selectedQuestions = shuffleArray(allQuizQuestions).slice(0, 5);
  currentQuestionIndex = 0;
  score = 0;
  
  function showQuestion() {
    const q = selectedQuestions[currentQuestionIndex];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = '';
    resultEl.style.display = 'none';
    nextBtn.style.display = 'none';
    
    q.options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = option;
      btn.style.cssText = 'background: rgba(190,3,24,0.1); border: 2px solid #be0318; color: #2a0808; padding: 15px 20px; border-radius: 12px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; text-align: left; width: 100%;';
      btn.onclick = () => checkAnswer(index, btn);
      btn.onmouseover = () => { btn.style.background = 'rgba(190,3,24,0.2)'; btn.style.transform = 'translateX(5px)'; };
      btn.onmouseout = () => { if (!btn.classList.contains('correct') && !btn.classList.contains('wrong')) { btn.style.background = 'rgba(190,3,24,0.1)'; btn.style.transform = 'translateX(0)'; } };
      optionsEl.appendChild(btn);
    });
  }
  
  function checkAnswer(selected, btn) {
    const q = selectedQuestions[currentQuestionIndex];
    const allOptions = optionsEl.querySelectorAll('.quiz-option');
    
    allOptions.forEach(opt => opt.style.pointerEvents = 'none');
    
    if (selected === q.correct) {
      btn.classList.add('correct');
      btn.style.background = '#4CAF50';
      btn.style.color = '#fff';
      btn.style.borderColor = '#4CAF50';
      score++;
      resultEl.textContent = '✅ Правильно!';
      resultEl.style.color = '#4CAF50';
    } else {
      btn.classList.add('wrong');
      btn.style.background = '#f44336';
      btn.style.color = '#fff';
      btn.style.borderColor = '#f44336';
      allOptions[q.correct].classList.add('correct');
      allOptions[q.correct].style.background = '#4CAF50';
      allOptions[q.correct].style.color = '#fff';
      allOptions[q.correct].style.borderColor = '#4CAF50';
      resultEl.textContent = '❌ Неправильно. Правильный ответ: ' + q.options[q.correct];
      resultEl.style.color = '#f44336';
    }
    
    resultEl.style.display = 'block';
    
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      nextBtn.textContent = 'Следующий вопрос';
      nextBtn.style.display = 'block';
    } else {
      nextBtn.textContent = 'Показать результат';
      nextBtn.style.display = 'block';
    }
  }
  
  nextBtn.onclick = () => {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < selectedQuestions.length) {
      showQuestion();
    } else {
      showFinalResult();
    }
  };
  
  function showFinalResult() {
    questionEl.textContent = '🎉 Квиз завершён!';
    optionsEl.innerHTML = '';
    nextBtn.style.display = 'none';
    
    const percentage = Math.round((score / selectedQuestions.length) * 100);
    let message = '';
    
    if (percentage === 100) {
      message = '🏆 Отлично! Вы внимательно читали дайджест!';
    } else if (percentage >= 60) {
      message = '👍 Хорошо! Вы знаете основные достижения команды!';
    } else {
      message = '📖 Стоит перечитать дайджест внимательнее!';
    }
    
    resultEl.innerHTML = `
      <div style="font-size: 2rem; margin-bottom: 10px;">${score} из ${selectedQuestions.length}</div>
      <div>${message}</div>
    `;
    resultEl.style.display = 'block';
    resultEl.style.color = '#2a0808';
  }
  
  showQuestion();
}

// Инициализация квиза при загрузке
if (document.getElementById('quiz-content')) {
  initQuiz();
}

// ============ ЛАЙКИ С SUPABASE ============
async function initVoting() {
  const achievementCards = document.querySelectorAll('#sales-moscow .card, #procurement .card, #logistics .card');
  
  achievementCards.forEach((card, index) => {
    const cardId = `card-${index}`;
    
    const voteSection = document.createElement('div');
    voteSection.className = 'vote-section';
    voteSection.style.display = 'flex';
    voteSection.style.gap = '12px';
    
    // Реакции: 👍 ❤️ 🔥 👏
    const reactions = ['👍', '❤️', '🔥', '👏'];
    
    reactions.forEach((emoji, emojiIndex) => {
      const reactionId = `${cardId}-${emoji}`;
      
      const voteBtn = document.createElement('button');
      voteBtn.className = 'vote-btn';
      voteBtn.innerHTML = emoji;
      voteBtn.dataset.reactionId = reactionId;
      voteBtn.dataset.emoji = emoji;
    
      const voteCountEl = document.createElement('span');
      voteCountEl.className = 'vote-count';
      voteCountEl.textContent = '0';
      voteCountEl.dataset.reactionId = reactionId;
      voteCountEl.dataset.emoji = emoji;
      
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = '4px';
      
      (async () => {
        const { data } = await window.supabaseClient.from('reactions').select('count').eq('card_id', reactionId).eq('reaction', emoji).maybeSingle();
        voteCountEl.textContent = data?.count || 0;
        
        const userVotes = JSON.parse(localStorage.getItem('digestUserVotes') || '[]');
        voteBtn.style.opacity = userVotes.includes(reactionId) ? '1' : '0.4';
      })();
      
      let isProcessing = false;
      voteBtn.onclick = async (e) => {
        e.stopPropagation();
        if (isProcessing) return;
        isProcessing = true;
        
        const userVotes = JSON.parse(localStorage.getItem('digestUserVotes') || '[]');
        const { data: current } = await window.supabaseClient.from('reactions').select('count').eq('card_id', reactionId).eq('reaction', emoji).maybeSingle();
        const currentCount = current?.count || 0;
        
        if (userVotes.includes(reactionId)) {
          const newCount = Math.max(0, currentCount - 1);
          await window.supabaseClient.from('reactions').upsert({ card_id: reactionId, reaction: emoji, count: newCount }, { onConflict: 'card_id,reaction' });
          voteCountEl.textContent = newCount;
          userVotes.splice(userVotes.indexOf(reactionId), 1);
          voteBtn.style.opacity = '0.4';
          window.realtimeChannel?.send({ type: 'broadcast', event: 'reaction_update', payload: { card_id: reactionId, reaction: emoji, count: newCount }});
        } else {
          const newCount = currentCount + 1;
          await window.supabaseClient.from('reactions').upsert({ card_id: reactionId, reaction: emoji, count: newCount }, { onConflict: 'card_id,reaction' });
          voteCountEl.textContent = newCount;
          userVotes.push(reactionId);
          voteBtn.style.opacity = '1';
          window.realtimeChannel?.send({ type: 'broadcast', event: 'reaction_update', payload: { card_id: reactionId, reaction: emoji, count: newCount }});
        }
        
        localStorage.setItem('digestUserVotes', JSON.stringify(userVotes));
        voteBtn.style.transform = 'scale(1.3)';
        setTimeout(() => { voteBtn.style.transform = 'scale(1)'; }, 200);
        isProcessing = false;
      }
      
      wrapper.appendChild(voteBtn);
      wrapper.appendChild(voteCountEl);
      voteSection.appendChild(wrapper);
    });
    
    const article = card.querySelector('article');
    if (article) {
      article.appendChild(voteSection);
    }
  });
}

// ============ ПОЗДРАВЛЕНИЯ С SUPABASE ============
async function initClapReactions() {
  const trainingCards = document.querySelectorAll('#training .card');
  
  trainingCards.forEach((card, index) => {
    const cardId = `training-${index}`;
    
    const voteSection = document.createElement('div');
    voteSection.className = 'vote-section';
    voteSection.style.display = 'flex';
    voteSection.style.gap = '12px';
    
    const clapBtn = document.createElement('button');
    clapBtn.className = 'vote-btn';
    clapBtn.innerHTML = '🎉';
    clapBtn.style.fontSize = '1.8rem';
    clapBtn.title = 'Поздравить!';
    clapBtn.dataset.reactionId = cardId;
    clapBtn.dataset.emoji = '🎉';
    
    const clapCountEl = document.createElement('span');
    clapCountEl.className = 'vote-count';
    clapCountEl.textContent = '0';
    clapCountEl.dataset.reactionId = cardId;
    clapCountEl.dataset.emoji = '🎉';
    
    (async () => {
      const { data } = await window.supabaseClient.from('reactions').select('count').eq('card_id', cardId).eq('reaction', '🎉').maybeSingle();
      clapCountEl.textContent = data?.count || 0;
      
      const userClaps = JSON.parse(localStorage.getItem('digestUserClaps') || '[]');
      clapBtn.style.opacity = userClaps.includes(cardId) ? '0.4' : '1';
    })();
    
    let isProcessing = false;
    clapBtn.onclick = async (e) => {
      e.stopPropagation();
      if (isProcessing) return;
      isProcessing = true;
      
      const userClaps = JSON.parse(localStorage.getItem('digestUserClaps') || '[]');
      const { data: current } = await window.supabaseClient.from('reactions').select('count').eq('card_id', cardId).eq('reaction', '🎉').maybeSingle();
      const currentCount = current?.count || 0;
      
      if (userClaps.includes(cardId)) {
        const newCount = Math.max(0, currentCount - 1);
        await window.supabaseClient.from('reactions').upsert({ card_id: cardId, reaction: '🎉', count: newCount }, { onConflict: 'card_id,reaction' });
        clapCountEl.textContent = newCount;
        userClaps.splice(userClaps.indexOf(cardId), 1);
        clapBtn.style.opacity = '1';
        window.realtimeChannel?.send({ type: 'broadcast', event: 'reaction_update', payload: { card_id: cardId, reaction: '🎉', count: newCount }});
      } else {
        const newCount = currentCount + 1;
        await window.supabaseClient.from('reactions').upsert({ card_id: cardId, reaction: '🎉', count: newCount }, { onConflict: 'card_id,reaction' });
        clapCountEl.textContent = newCount;
        userClaps.push(cardId);
        clapBtn.style.opacity = '0.4';
        window.realtimeChannel?.send({ type: 'broadcast', event: 'reaction_update', payload: { card_id: cardId, reaction: '🎉', count: newCount }});
        
        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.textContent = '🎉';
            confetti.style.cssText = `position: absolute; font-size: 2rem; pointer-events: none; animation: clap-fly 1s ease-out forwards; left: ${e.clientX}px; top: ${e.clientY}px; z-index: 9999;`;
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 1000);
          }, i * 100);
        }
      }
      
      localStorage.setItem('digestUserClaps', JSON.stringify(userClaps));
      clapBtn.style.transform = 'scale(1.3)';
      setTimeout(() => { clapBtn.style.transform = 'scale(1)'; }, 200);
      isProcessing = false;
    }
    
    voteSection.appendChild(clapBtn);
    voteSection.appendChild(clapCountEl);
    
    const article = card.querySelector('article');
    if (article) {
      article.appendChild(voteSection);
    }
  });
}

// Добавляем CSS анимацию для хлопушек
const style = document.createElement('style');
style.textContent = `
  @keyframes clap-fly {
    0% {
      transform: translate(0, 0) scale(1) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translate(${Math.random() * 200 - 100}px, -150px) scale(0.5) rotate(${Math.random() * 360}deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ============ НОВЫЙ ГОД РЕАКЦИИ С SUPABASE ============
async function initNewYearReactions() {
  const newyearCards = document.querySelectorAll('#newyear .card');
  
  newyearCards.forEach((card, index) => {
    const cardId = `newyear-${index}`;
    
    const voteSection = document.createElement('div');
    voteSection.className = 'vote-section vertical';
    voteSection.style.marginTop = '16px';
    
    const reactions = ['👍', '😘', '🎄', '🎁'];
    
    reactions.forEach((emoji) => {
      const reactionId = `${cardId}-${emoji}`;
      
      const btn = document.createElement('button');
      btn.className = 'vote-btn';
      btn.innerHTML = emoji;
      btn.style.fontSize = '1.8rem';
      btn.dataset.reactionId = reactionId;
      btn.dataset.emoji = emoji;
      
      const countEl = document.createElement('span');
      countEl.className = 'vote-count';
      countEl.textContent = '0';
      countEl.dataset.reactionId = reactionId;
      countEl.dataset.emoji = emoji;
      
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.alignItems = 'center';
      wrapper.style.gap = '4px';
      
      (async () => {
        const { data } = await window.supabaseClient.from('reactions').select('count').eq('card_id', reactionId).eq('reaction', emoji).maybeSingle();
        countEl.textContent = data?.count || 0;
        
        const userVotes = JSON.parse(localStorage.getItem('digestNYUserVotes') || '[]');
        btn.style.opacity = userVotes.includes(reactionId) ? '1' : '0.4';
      })();
      
      let isProcessing = false;
      btn.onclick = async (e) => {
        e.stopPropagation();
        if (isProcessing) return;
        isProcessing = true;
        
        const userVotes = JSON.parse(localStorage.getItem('digestNYUserVotes') || '[]');
        const { data: current } = await window.supabaseClient.from('reactions').select('count').eq('card_id', reactionId).eq('reaction', emoji).maybeSingle();
        const currentCount = current?.count || 0;
        
        if (userVotes.includes(reactionId)) {
          const newCount = Math.max(0, currentCount - 1);
          await window.supabaseClient.from('reactions').upsert({ card_id: reactionId, reaction: emoji, count: newCount }, { onConflict: 'card_id,reaction' });
          countEl.textContent = newCount;
          userVotes.splice(userVotes.indexOf(reactionId), 1);
          btn.style.opacity = '0.4';
          window.realtimeChannel?.send({ type: 'broadcast', event: 'reaction_update', payload: { card_id: reactionId, reaction: emoji, count: newCount }});
        } else {
          const newCount = currentCount + 1;
          await window.supabaseClient.from('reactions').upsert({ card_id: reactionId, reaction: emoji, count: newCount }, { onConflict: 'card_id,reaction' });
          countEl.textContent = newCount;
          userVotes.push(reactionId);
          btn.style.opacity = '1';
          window.realtimeChannel?.send({ type: 'broadcast', event: 'reaction_update', payload: { card_id: reactionId, reaction: emoji, count: newCount }});
        }
        
        localStorage.setItem('digestNYUserVotes', JSON.stringify(userVotes));
        btn.style.transform = 'scale(1.3)';
        setTimeout(() => { btn.style.transform = 'scale(1)'; }, 200);
        isProcessing = false;
      }
      
      wrapper.appendChild(btn);
      wrapper.appendChild(countEl);
      voteSection.appendChild(wrapper);
    });
    
    const article = card.querySelector('article');
    if (article) {
      article.appendChild(voteSection);
    }
  });
}

// Инициализация при загрузке
setTimeout(() => {
  initVoting();
  initClapReactions();
  initNewYearReactions();
  
  // Подписка на изменения реакций в реальном времени
  if (window.supabaseClient) {
    window.realtimeChannel = window.supabaseClient
      .channel('reactions-room')
      .on('broadcast', { event: 'reaction_update' }, ({ payload }) => {
        document.querySelectorAll('.vote-count').forEach((el) => {
          if (el.dataset.reactionId === payload.card_id && el.dataset.emoji === payload.reaction) {
            el.textContent = payload.count;
          }
        });
      })
      .subscribe();
  }
}, 500);
