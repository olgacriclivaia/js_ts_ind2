import { getRandomActivity } from './activity.js';

/**
 * Обновляет элемент на странице новым текстом активности.
 * @returns {Promise<void>}
 */
async function updateActivity() {
    const activityElement = document.getElementById('activity');
    const activity = await getRandomActivity();
    activityElement.textContent = activity;
}

updateActivity();
setInterval(updateActivity, 60000);