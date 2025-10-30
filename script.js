const tarotDeck = [
  {
    number: 0,
    name: '바보',
    english: 'The Fool',
    file: '0. 바보 카드.jpg',
    meaning: {
      upright: '새로운 시작, 모험, 순수함',
      reversed: '충동, 준비 부족, 불확실'
    }
  },
  {
    number: 1,
    name: '마법사',
    english: 'The Magician',
    file: '1. 마법사 카드.jpg',
    meaning: {
      upright: '의지, 집중, 무한한 가능성',
      reversed: '기만, 자원 남용, 방향 상실'
    }
  },
  {
    number: 2,
    name: '여사제',
    english: 'The High Priestess',
    file: '2. 여사제 카드.jpg',
    meaning: {
      upright: '직관, 잠재력, 비밀',
      reversed: '억압된 감정, 오해, 비밀의 드러남'
    }
  },
  {
    number: 3,
    name: '여황제',
    english: 'The Empress',
    file: '3. 여황제 카드.jpg',
    meaning: {
      upright: '풍요, 양육, 창조성',
      reversed: '정체, 지나친 보호, 의존'
    }
  },
  {
    number: 4,
    name: '황제',
    english: 'The Emperor',
    file: '4. 황제 카드.jpg',
    meaning: {
      upright: '안정, 리더십, 구조',
      reversed: '독단, 경직, 통제 상실'
    }
  },
  {
    number: 5,
    name: '교황',
    english: 'The Hierophant',
    file: '5. 교황 카드.jpg',
    meaning: {
      upright: '전통, 조언, 영적 가르침',
      reversed: '비순응, 억압, 고정 관념'
    }
  },
  {
    number: 6,
    name: '연인',
    english: 'The Lovers',
    file: '6. 연인 카드.jpg',
    meaning: {
      upright: '조화, 선택, 깊은 관계',
      reversed: '불일치, 갈등, 결정 지연'
    }
  },
  {
    number: 7,
    name: '전차',
    english: 'The Chariot',
    file: '7. 전차 카드.jpg',
    meaning: {
      upright: '의지, 승리, 전진',
      reversed: '충돌, 의지 부족, 방향 혼란'
    }
  },
  {
    number: 8,
    name: '힘',
    english: 'Strength',
    file: '8. 힘 카드.jpg',
    meaning: {
      upright: '용기, 자제력, 연민',
      reversed: '불안, 자기 회의, 의지 약화'
    }
  },
  {
    number: 9,
    name: '은둔자',
    english: 'The Hermit',
    file: '9. 은둔자 카드.jpg',
    meaning: {
      upright: '자기 성찰, 지혜, 탐색',
      reversed: '고립, 외로움, 진로 상실'
    }
  },
  {
    number: 10,
    name: '운명의 수레바퀴',
    english: 'Wheel of Fortune',
    file: '10. 운명의 수레바퀴.jpg',
    meaning: {
      upright: '전환점, 운명의 흐름, 기회',
      reversed: '예상 밖 변화, 지연, 저항'
    }
  },
  {
    number: 11,
    name: '정의',
    english: 'Justice',
    file: '11. 정의 카드.jpg',
    meaning: {
      upright: '균형, 책임, 진실',
      reversed: '불공정, 편파, 과거의 영향'
    }
  },
  {
    number: 12,
    name: '행맨',
    english: 'The Hanged Man',
    file: '12. 행맨 카드.jpg',
    meaning: {
      upright: '관점 전환, 인내, 희생',
      reversed: '지체, 자기 연민, 고집'
    }
  },
  {
    number: 13,
    name: '죽음',
    english: 'Death',
    file: '13. 죽음 카드.jpg',
    meaning: {
      upright: '종결, 변화, 재탄생',
      reversed: '변화 저항, 미완, 두려움'
    }
  },
  {
    number: 14,
    name: '절제',
    english: 'Temperance',
    file: '14. 절제 카드.jpg',
    meaning: {
      upright: '조화, 절제, 통합',
      reversed: '불균형, 과유불급, 극단'
    }
  },
  {
    number: 15,
    name: '악마',
    english: 'The Devil',
    file: '15. 악마 카드.jpg',
    meaning: {
      upright: '유혹, 집착, 물질성',
      reversed: '해방, 집착 탈피, 인식'
    }
  },
  {
    number: 16,
    name: '타워',
    english: 'The Tower',
    file: '16. 타워 카드.jpg',
    meaning: {
      upright: '급격한 변화, 붕괴, 각성',
      reversed: '충격 완화, 변화를 피함, 경고'
    }
  },
  {
    number: 17,
    name: '별',
    english: 'The Star',
    file: '17. 별 카드.jpg',
    meaning: {
      upright: '희망, 치유, 영감',
      reversed: '의심, 무기력, 믿음 상실'
    }
  },
  {
    number: 18,
    name: '달',
    english: 'The Moon',
    file: '18. 달 카드.jpg',
    meaning: {
      upright: '내면 탐색, 직감, 꿈',
      reversed: '혼란 해소, 두려움 직면, 비밀 드러남'
    }
  },
  {
    number: 19,
    name: '태양',
    english: 'The Sun',
    file: '19. 태양 카드.jpg',
    meaning: {
      upright: '성취, 활력, 긍정',
      reversed: '에너지 소진, 잠깐의 지연, 자만'
    }
  },
  {
    number: 20,
    name: '심판',
    english: 'Judgement',
    file: '20. 심판 카드.jpg',
    meaning: {
      upright: '각성, 평가, 회복',
      reversed: '자기 비판, 결정을 미룸, 후회'
    }
  },
  {
    number: 21,
    name: '세계',
    english: 'The World',
    file: '21. 세계 카드.jpg',
    meaning: {
      upright: '완성, 성취, 통합',
      reversed: '마무리 지연, 미완, 재시도'
    }
  }
];

const shuffleButton = document.getElementById('shuffle-button');
const resetButton = document.getElementById('reset-button');
const drawCountSelect = document.getElementById('draw-count');
const deckElement = document.getElementById('deck');
const resultsElement = document.getElementById('results');
const confirmModal = document.getElementById('confirm-modal');
const confirmBackdrop = document.getElementById('confirm-backdrop');
const confirmList = document.getElementById('confirm-list');
const confirmOk = document.getElementById('confirm-ok');
const confirmCancel = document.getElementById('confirm-cancel');

const state = {
  deck: [],
  selectedOrder: [],
  targetCount: Number.parseInt(drawCountSelect.value, 10),
  locked: false
};

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function buildDeck() {
  const shuffled = shuffle(tarotDeck).map((card, index) => ({
    ...card,
    id: `${card.number}-${index}-${Math.random().toString(16).slice(2, 8)}`,
    position: index + 1,
    orientation: Math.random() < 0.5 ? '정방향' : '역방향'
  }));

  state.deck = shuffled;
  state.selectedOrder = [];
  state.locked = false;
  closeConfirmModal();
  renderDeck();
  renderResultsPlaceholder();
}

function renderDeck() {
  deckElement.innerHTML = '';

  if (!state.deck.length) {
    deckElement.classList.add('deck--empty');
    const placeholder = document.createElement('p');
    placeholder.className = 'deck__placeholder';
    placeholder.textContent = '카드 펼치기를 누르면 덱이 섞여 펼쳐집니다.';
    deckElement.appendChild(placeholder);
    return;
  }

  deckElement.classList.remove('deck--empty');

  state.deck.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.className = 'deck__card';
    cardElement.dataset.index = index.toString();
    cardElement.setAttribute('role', 'button');
    cardElement.tabIndex = state.locked ? -1 : 0;

    if (state.locked) {
      cardElement.classList.add('deck__card--disabled');
    }

    const selectedIndex = state.selectedOrder.indexOf(index);
    const isSelected = selectedIndex !== -1;

    if (isSelected) {
      cardElement.classList.add('deck__card--selected');
    }

    let ariaLabel = `카드 ${card.position}`;
    if (state.locked) {
      ariaLabel += isSelected ? ', 이번에 선택한 카드입니다.' : ', 이번에 선택하지 않은 카드입니다.';
    } else if (isSelected) {
      ariaLabel += `, ${selectedIndex + 1}번째로 선택됨. 다시 선택하면 취소됩니다.`;
    } else {
      ariaLabel += ', 선택하려면 Enter를 누르세요.';
    }
    cardElement.setAttribute('aria-label', ariaLabel);

    const inner = document.createElement('div');
    inner.className = 'deck__card-inner';

    const label = document.createElement('p');
    label.className = 'deck__label';
    label.textContent = `카드 ${card.position}`;

    const hint = document.createElement('p');
    hint.className = 'deck__hint';

    if (state.locked) {
      hint.textContent = isSelected ? '선택됨' : '선택되지 않음';
    } else if (isSelected) {
      hint.textContent = `${selectedIndex + 1}번째 선택`; 
    } else {
      hint.textContent = '선택하려면 클릭';
    }

    inner.append(label, hint);
    cardElement.append(inner);
    deckElement.append(cardElement);
  });
}

function renderResultsPlaceholder() {
  resultsElement.innerHTML = '';
  const placeholder = document.createElement('p');
  placeholder.className = 'results__placeholder';
  placeholder.textContent = '선택을 완료하고 확인하면 카드가 공개됩니다.';
  resultsElement.appendChild(placeholder);
}

function renderResults(cards) {
  resultsElement.innerHTML = '';

  if (!cards.length) {
    renderResultsPlaceholder();
    return;
  }

  cards.forEach((card, index) => {
    const cardElement = document.createElement('article');
    cardElement.className = 'card';

    const order = document.createElement('p');
    order.className = 'card__meta';
    order.textContent = `선택 ${index + 1}`;

    const image = document.createElement('img');
    image.src = encodeURI(card.file);
    image.alt = `${card.english} – ${card.name} 카드 이미지`;
    if (card.orientation === '역방향') {
      image.style.transform = 'rotate(180deg)';
    }

    const title = document.createElement('h2');
    title.className = 'card__title';
    title.textContent = `${card.number}. ${card.name} (${card.english})`;

    const orientation = document.createElement('p');
    orientation.className = 'card__meta';
    orientation.textContent = card.orientation;

    const meaning = document.createElement('p');
    meaning.className = 'card__meta';
    meaning.textContent =
      card.orientation === '정방향' ? card.meaning.upright : card.meaning.reversed;

    cardElement.append(order, image, title, orientation, meaning);
    resultsElement.append(cardElement);
  });
}

function toggleSelection(index) {
  if (state.locked) {
    return;
  }

  const existingIndex = state.selectedOrder.indexOf(index);
  if (existingIndex !== -1) {
    state.selectedOrder.splice(existingIndex, 1);
    renderDeck();
    return;
  }

  if (state.selectedOrder.length >= state.targetCount) {
    return;
  }

  state.selectedOrder.push(index);
  renderDeck();

  if (state.selectedOrder.length === state.targetCount) {
    openConfirmModal();
  }
}

function openConfirmModal() {
  confirmList.innerHTML = '';
  state.selectedOrder.forEach((deckIndex, orderIndex) => {
    const listItem = document.createElement('li');
    const card = state.deck[deckIndex];
    listItem.textContent = `${orderIndex + 1}번째 선택: 카드 ${card.position}`;
    confirmList.appendChild(listItem);
  });

  confirmBackdrop.classList.remove('hidden');
  confirmModal.classList.remove('hidden');
  confirmOk.focus();
}

function closeConfirmModal() {
  confirmBackdrop.classList.add('hidden');
  confirmModal.classList.add('hidden');
  confirmList.innerHTML = '';
}

function completeSelection() {
  const chosenCards = state.selectedOrder.map((index) => state.deck[index]);
  state.locked = true;
  renderDeck();
  renderResults(chosenCards);
  closeConfirmModal();
}

shuffleButton.addEventListener('click', () => {
  buildDeck();
});

resetButton.addEventListener('click', () => {
  state.deck = [];
  state.selectedOrder = [];
  state.locked = false;
  closeConfirmModal();
  renderDeck();
  renderResultsPlaceholder();
});

drawCountSelect.addEventListener('change', () => {
  state.targetCount = Number.parseInt(drawCountSelect.value, 10);
  if (state.selectedOrder.length > state.targetCount && !state.locked) {
    state.selectedOrder = state.selectedOrder.slice(0, state.targetCount);
    renderDeck();
  }
});

deckElement.addEventListener('click', (event) => {
  const cardElement = event.target.closest('.deck__card');
  if (!cardElement || state.locked) {
    return;
  }
  const index = Number.parseInt(cardElement.dataset.index, 10);
  toggleSelection(index);
});

deckElement.addEventListener('keydown', (event) => {
  if (state.locked) {
    return;
  }
  if (event.key !== 'Enter' && event.key !== ' ') {
    return;
  }
  const cardElement = event.target.closest('.deck__card');
  if (!cardElement) {
    return;
  }
  event.preventDefault();
  const index = Number.parseInt(cardElement.dataset.index, 10);
  toggleSelection(index);
});

confirmOk.addEventListener('click', completeSelection);
confirmCancel.addEventListener('click', () => {
  closeConfirmModal();
  if (state.selectedOrder.length) {
    const lastSelectedIndex = state.selectedOrder[state.selectedOrder.length - 1];
    const lastElement = deckElement.querySelector(`.deck__card[data-index="${lastSelectedIndex}"]`);
    if (lastElement) {
      lastElement.focus();
    }
  }
});

confirmBackdrop.addEventListener('click', closeConfirmModal);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !confirmModal.classList.contains('hidden')) {
    event.preventDefault();
    closeConfirmModal();
  }
});

buildDeck();
