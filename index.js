const { ForgeClient } = require("forgescript");
const { token } = require("./config.json");

const client = new ForgeClient({
	intents: ["GuildMessages", "Guilds"],
	events: ["messageCreate", "ready"],
});

client.applicationCommands.load("./commands");

client.login(token);
