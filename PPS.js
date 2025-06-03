/*document.addEventListener('DOMContentLoaded', function() {
  const open = document.getElementById('open');
  const about = document.getElementById('about');
  const tactic = document.getElementById('tactic');

  open.addEventListener('click', function() {
    about.classList.toggle('expanded');
    if (tactic) {
        tactic.classList.toggle('shifted');
    }
  });
});*/
document.addEventListener('DOMContentLoaded', function() {
  const opens = document.querySelectorAll('.open');

  opens.forEach(button => {
    button.addEventListener('click', function() {

      const tacticContainer = button.closest('.tactic');

      const about = tacticContainer.querySelector('.about');

      about.classList.toggle('expanded');

      const allTactics = document.querySelectorAll('.tactic');

      const isExpanded = about.classList.contains('expanded');

      let shift = false;
      allTactics.forEach(currentTactic => {
        if (shift) {

          if (isExpanded) {
            currentTactic.classList.add('shifted');
          } else {
            currentTactic.classList.remove('shifted');
          }
        }

        if (currentTactic === tacticContainer) {
          shift = true;
        }
      });
    });
  });
});