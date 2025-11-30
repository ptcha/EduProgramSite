/**
 * Telegram Bot for Google Apps Script
 * Receives form data from Formspree and sends it to a Telegram chat
 */

// Replace YOUR_TELEGRAM_BOT_TOKEN with the token you get from @BotFather
const TELEGRAM_BOT_TOKEN = "YOUR_TELEGRAM_BOT_TOKEN";
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;

/**
 * Main function to handle GET requests (for testing webhook)
 */
function doGet(e) {
  return HtmlService.createHtmlOutput("Telegram Bot is running!");
}

/**
 * Main function to handle POST requests from Formspree
 */
function doPost(e) {
  try {
    // Parse the form data from Formspree
    let postData;
    if (typeof e.postData !== 'undefined' && e.postData.contents) {
      postData = JSON.parse(e.postData.contents);
    } else {
      // If the data is not JSON, try to parse as form data
      postData = e.parameter;
    }
    
    // Extract form fields (name, surname, email)
    const name = postData.name || "Not provided";
    const surname = postData.surname || "Not provided";
    const email = postData.email || "Not provided";
    
    // Create a formatted message
    const message = `Новая форма получена:\n\nИмя: ${name}\nФамилия: ${surname}\nEmail: ${email}`;
    
    // Send the message to Telegram
    const response = sendTelegramMessage(message);
    
    // Return response
    return ContentService
      .createTextOutput(JSON.stringify({result: "success", message: "Form data received and sent to Telegram", telegram_response: response}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Error processing form data:", error);
    return ContentService
      .createTextOutput(JSON.stringify({result: "error", error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Function to send message to Telegram using Bot API
 */
function sendTelegramMessage(text) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    payload: JSON.stringify({
      chat_id: getChatId(), // You'll need to set the chat ID
      text: text,
      parse_mode: "HTML"
    })
  };
  
  const response = UrlFetchApp.fetch(`${TELEGRAM_API_URL}/sendMessage`, options);
  return response.getContentText();
}

/**
 * Function to get chat ID - this should be set to your specific chat
 * You can get your chat ID by sending a message to the bot and checking updates
 */
function getChatId() {
  // You need to replace this with the actual chat ID where you want messages sent
  // You can get your chat ID by calling the getUpdates function after someone messages your bot
  return "YOUR_CHAT_ID"; // Replace with actual chat ID
}

/**
 * Function to get updates from the bot (to find chat IDs)
 * Call this function to see recent messages and get chat IDs
 */
function getUpdates() {
  const response = UrlFetchApp.fetch(`${TELEGRAM_API_URL}/getUpdates`);
  const data = JSON.parse(response.getContentText());
  console.log("Telegram Updates:", JSON.stringify(data, null, 2));
  
  // Print chat IDs to logs
  if (data.ok && data.result) {
    data.result.forEach((update, index) => {
      if (update.message && update.message.chat) {
        console.log(`Chat ID ${index + 1}: ${update.message.chat.id} (${update.message.chat.first_name || ''} ${update.message.chat.last_name || ''})`);
      }
    });
  }
  
  return data;
}

/**
 * Function to send test message to Telegram
 */
function sendTestMessage() {
  const testMessage = "Тестовое сообщение от Google Apps Script!";
  return sendTelegramMessage(testMessage);
}