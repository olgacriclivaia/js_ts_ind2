/**
 * Получает случайную активность от Bored API.
 * @returns {Promise<string>} Обещание, содержащее текст случайной активности.
 */
export async function getRandomActivity() {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity/');
        const data = await response.json();
        return data.activity;
    } catch (error) {
        console.error('Error fetching activity:', error);
        return "К сожалению, произошла ошибка";
    }
}