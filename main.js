const themeToggleBtn = document.getElementById('theme-toggle');

// 초기 테마 설정 로직
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
}

themeToggleBtn.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  if (theme === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    console.log('테마: 라이트 모드로 변경됨');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    console.log('테마: 다크 모드로 변경됨');
  }
});

console.log('테마 전환 스크립트가 로드되었습니다.');
