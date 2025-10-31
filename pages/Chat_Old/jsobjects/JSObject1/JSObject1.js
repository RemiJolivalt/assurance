export default {
  initChatbot: () => {
    return new Promise((resolve, reject) => {
      // Vérifie si le script est déjà chargé
      if (window.Chatbot) {
        window.Chatbot.init({
          n8nChatUrl: "http://52.143.159.51:5678/webhook/a889d2ae-2159-402f-b326-5f61e90f602e/chat",
          theme: { /* ton thème ici */ }
        });
        resolve("Chatbot initialized");
        return;
      }

      // Crée la balise <script>
      const script = document.createElement("script");
      script.src = "https://cdn.n8nchatui.com/v1/embed.js";
      script.defer = true;

      // Ajoute le script au body
      document.body.appendChild(script);

      // Quand le script est chargé, initialise le chatbot
      script.onload = () => {
        window.Chatbot.init({
          n8nChatUrl: "http://52.143.159.51:5678/webhook/a889d2ae-2159-402f-b326-5f61e90f602e/chat",
          theme: {
            button: {
              backgroundColor: "#ffc8b8",
              right: 20,
              bottom: 20,
              size: 50,
              iconColor: "#373434",
              customIconSrc: "https://www.svgrepo.com/show/339963/chat-bot.svg"
            },
            chatWindow: {
              title: "Assistant",
              welcomeMessage: "Bonjour !"
            }
          }
        });
        resolve("Chatbot initialized");
      };

      script.onerror = () => reject("Erreur de chargement du script");
    });
  }
};