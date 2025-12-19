const urlParsdams = new URLSearchParams(window.location.search);
const chat_id = urlParsdams.get('chat_id');
const telegram_reg_id = urlParsdams.get('telegram_reg_id');

if (chat_id) 
{
  if (telegram_reg_id) 
  {
    // alert("WinniBotFather.TelegramChatId('" + chat_id + "'); " + "WinniBotFather.TelegramRegId('" + telegram_reg_id + "'); ")
    loadAndInsertContent('https://winnigames2024-original.github.io/mods/WinniFunctions/pc.html', 'content-container');
  }
}





async function loadAndInsertContent(url, targetDivId) {
  try {
    const response = await fetch(url);
    const htmlContent = await response.text(); // Получаем HTML как текст

    const targetDiv = document.getElementById(targetDivId);

    targetDiv.insertAdjacentHTML('beforeend', htmlContent);

    } catch (error) {
      console.error('Ошибка при загрузке или вставке контента:', error);
    }
}


// JavaScript for cookie management
        function setCookie(name, value, days) {
            let expires = "";
            if (days) {
                let date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
        }

        function getCookie(name) {
            let nameEQ = name + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        function acceptUserCookies() {
            setCookie('appCookiesAccepted', 'true', 1); // Set cookie for 30 days
            document.getElementById('cookieConsent').style.display = 'none';
          document.getElementById('content-container').style.display = 'block';
        }

        function rejectUserCookies() {
            alert("You have rejected cookies. App features have been disabled, restarting the app...");
            document.getElementById('cookieConsent').style.display = 'none';
            location.href = location.href
        }

        // Check if cookie consent has been given on page load
        window.onload = function() {
            if (!getCookie('appCookiesAccepted')) {
                document.getElementById('cookieConsent').style.display = 'block';
                document.getElementById('content-container').style.display = 'none';
            }
        };
