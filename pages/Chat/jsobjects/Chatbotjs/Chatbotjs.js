export default {
  initChatbot: () => {
    // Crée la balise <script>
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://cdn.n8nchatui.com/v1/embed.js";
    script.defer = true;

    // Ajoute le script au body
    document.body.appendChild(script);

    // Quand le script est chargé, initialise le chatbot
    script.onload = () => {
      Chatbot.init({
        n8nChatUrl: "http://52.143.159.51:5678/webhook/a889d2ae-2159-402f-b326-5f61e90f602e/chat",
        metadata: {},
        theme: {
          button: {
            backgroundColor: "#ffc8b8",
            right: 20,
            bottom: 20,
            size: 50,
            iconColor: "#373434",
            customIconSrc: "https://www.svgrepo.com/show/339963/chat-bot.svg",
            customIconSize: 60,
            customIconBorderRadius: 15,
            autoWindowOpen: { autoOpen: false, openDelay: 2 },
            borderRadius: "rounded"
          },
          tooltip: {
            showTooltip: true,
            tooltipMessage: "Bonjour, je suis là pour échanger avec vous",
            tooltipBackgroundColor: "#ffffff",
            tooltipTextColor: "#1c1c1c",
            tooltipFontSize: 15
          },
          chatWindow: {
            borderRadiusStyle: "rounded",
            avatarBorderRadius: 35,
            messageBorderRadius: 9,
            showTitle: true,
            title: "Assistant",
            titleAvatarSrc: "https://www.svgrepo.com/show/339963/chat-bot.svg",
            avatarSize: 35,
            welcomeMessage: "Bonjour !",
            errorMessage: "Erreur",
            backgroundColor: "#f4f2f8",
            height: 600,
            width: 400,
            fontSize: 15,
            starterPrompts: ["Bonjour !"],
            starterPromptFontSize: 10,
            renderHTML: false,
            clearChatOnReload: false,
            showScrollbar: true,
            botMessage: {
              backgroundColor: "#3a2f93",
              textColor: "#fafafa",
              showAvatar: true,
              avatarSrc: "https://www.svgrepo.com/show/334455/bot.svg"
            },
            userMessage: {
              backgroundColor: "#ffffff",
              textColor: "#050505",
              showAvatar: true,
              avatarSrc: "https://www.svgrepo.com/show/532363/user-alt-1.svg"
            },
            textInput: {
              placeholder: "Type your query",
              backgroundColor: "#ffffff",
              textColor: "#1e1e1f",
              sendButtonColor: "#f36539",
              maxChars: 500,
              maxCharsWarningMessage: "Message trop long (> 500 caractères)",
              autoFocus: true,
              borderRadius: 7,
              sendButtonBorderRadius: 50
            },
            voiceInputConfig: {
              enabled: true,
              maxRecordingTime: 10,
              recordingNotSupportedMessage: "Utilisez Chrome ou Firefox pour l'audio"
            }
          }
        }
      });
    };
  }
};