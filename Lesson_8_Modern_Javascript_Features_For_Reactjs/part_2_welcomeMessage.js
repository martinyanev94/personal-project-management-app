const userName = 'Alice';
const greeting = `Hello, ${userName}! Welcome to our website.`;
const userMessage = `Here are some updates for you:

1. Your profile is 80% complete.
2. You have 5 new messages.`;

function WelcomeMessage() {
    return <div>{greeting}<pre>{userMessage}</pre></div>;
}
