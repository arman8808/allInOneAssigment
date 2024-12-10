const tabs = document.querySelectorAll('.tab-button');
const tabContent = document.querySelectorAll('.tab-content');

// Activate the first tab by default
const firstTab = tabs[0];
firstTab.classList.add('active');
const firstContent = tabContent[0];
firstContent.classList.add('active');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetId = tab.dataset.tab;
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');
    tabContent.forEach(content => {
      if (content.id === targetId) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });
});