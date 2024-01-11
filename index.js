const { ForgeClient } = require("forgescript");
const { token } = require("./config.json");

const client = new ForgeClient({
	intents: ["GuildMessages", "Guilds"],
	events: ["messageCreate", "ready"],
});

client.login(token);

client.applicationCommands.load("./commands");
