// Весь код остается прежним до строки setTimeout
// Заменяем только механизм realtime на broadcast

// Инициализация при загрузке
setTimeout(() => {
  initVoting();
  initClapReactions();
  initNewYearReactions();
  
  // Broadcast realtime
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

// Добавить в каждый onclick после upsert:
// window.realtimeChannel?.send({ type: 'broadcast', event: 'reaction_update', payload: { card_id: reactionId, reaction: emoji, count: newCount }});
