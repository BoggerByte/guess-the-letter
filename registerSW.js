if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/guess-the-letter/sw.js', { scope: '/guess-the-letter/' })})}